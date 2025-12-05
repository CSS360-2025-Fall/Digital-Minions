import { InteractionResponseType } from 'discord-interactions';
import { extractUserId, extractGuildId } from '../../utils/helpers.js';
import { createSimpleMessage } from '../../utils/messageBuilders.js';
import { getTriviaRecord } from '../../services/gameState.js';
import { t } from '../../localization/strings.js';
import { getUserLocale } from '../../services/gameState.js';

/**
 * Handles the /record command
 * Shows win/loss record for specified user or command issuer
 */
//conducted required updates to reflect trivia record instead of rps record.
export async function handleRecordCommand(req, res) {
  const { data } = req.body;
  const commandUserId = extractUserId(req);
  const targetUserId = data.options?.[0]?.value || commandUserId;
  const locale = getUserLocale(commandUserId);
  const guildId = extractGuildId(req);

  const record = getTriviaRecord(targetUserId, guildId);
  const total = (record.correct || 0) + (record.incorrect || 0);
  const accuracy = total === 0 ? 0 : ((record.correct / total) * 100).toFixed(1);

  const message = `${t(locale, 'record.title', targetUserId)}
${t(locale, 'record.correct', record.correct || 0)}
${t(locale, 'record.incorrect', record.incorrect || 0)}
${t(locale, 'record.accuracy', accuracy)}`;

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: createSimpleMessage(message),
  });
}
