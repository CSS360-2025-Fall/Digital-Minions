import { InteractionResponseType } from 'discord-interactions';
import { extractUserId } from '../../utils/helpers.js';
import { createSimpleMessage } from '../../utils/messageBuilders.js';
import { getTriviaRecord } from '../../services/gameState.js';

/**
 * Handles the /record command
 * Shows win/loss record for specified user or command issuer
 */
//conducted required updates to reflect trivia record instead of rps record.
export async function handleRecordCommand(req, res) {
  const { data } = req.body;
  const commandUserId = extractUserId(req);
  const targetUserId = data.options?.[0]?.value || commandUserId;

  const record = getTriviaRecord(targetUserId);
  const total = (record.correct || 0) + (record.incorrect || 0);
  const accuracy = total === 0 ? 0 : ((record.correct / total) * 100).toFixed(1);

  const message = `📊 Trivia Record for <@${targetUserId}>:
✅ **Correct:** ${record.correct || 0}
❌ **Incorrect:** ${record.incorrect || 0}
🏅 **Accuracy:** ${accuracy}%`;

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: createSimpleMessage(message),
  });
}
