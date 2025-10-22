import { InteractionResponseType } from 'discord-interactions';
import { extractUserId } from '../../utils/helpers.js';
import { createSimpleMessage } from '../../utils/messageBuilders.js';
import { getUserRecord, calculateWinRate } from '../../services/userRecords.js';

/**
 * Handles the /record command
 * Shows win/loss record for specified user or command issuer
 */
export async function handleRecordCommand(req, res) {
  const { data } = req.body;
  const commandUserId = extractUserId(req);

  // Check if a specific user was mentioned, otherwise use command user
  const targetUserId = data.options?.[0]?.value || commandUserId;

  // Get user's record
  const record = getUserRecord(targetUserId);
  const totalGames = record.wins + record.losses + record.ties;
  const winRate = calculateWinRate(targetUserId);

  const recordText = [
    `**<@${targetUserId}>'s Record**`,
    `Wins: **${record.wins}**`,
    `Losses: **${record.losses}**`,
    `Ties: **${record.ties}**`,
    `Total Games: **${totalGames}**`,
    `Win Rate: **${winRate}%**`,
  ].join('\n');

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: createSimpleMessage(recordText),
  });
}