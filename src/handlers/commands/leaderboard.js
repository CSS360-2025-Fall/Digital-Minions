import { InteractionResponseType } from 'discord-interactions';
import { extractUserId, extractGuildId } from '../../utils/helpers.js';
import { createSimpleMessage } from '../../utils/messageBuilders.js';
import { getGuildLeaderboard } from '../../services/gameState.js';
import { t } from '../../localization/strings.js';
import { getUserLocale } from '../../services/gameState.js';

/**
 * Handles the /leaderboard command
 * Shows top 20 players by accuracy in the current guild
 */
export async function handleLeaderboardCommand(req, res) {
  const commandUserId = extractUserId(req);
  const locale = getUserLocale(commandUserId);
  const guildId = extractGuildId(req);

  const leaderboard = getGuildLeaderboard(guildId, 20);

  if (leaderboard.length === 0) {
    const message = t(locale, 'leaderboard.empty');
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: createSimpleMessage(message),
    });
  }

  // Build leaderboard message
  let message = t(locale, 'leaderboard.title') + '\n\n';

  leaderboard.forEach((player, index) => {
    const rank = index + 1;
    const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : `${rank}.`;
    const accuracyFormatted = player.accuracy.toFixed(1);

    message += t(locale, 'leaderboard.entry', medal, player.userId, accuracyFormatted, player.correct, player.incorrect);
    message += '\n';
  });

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: createSimpleMessage(message),
  });
}
