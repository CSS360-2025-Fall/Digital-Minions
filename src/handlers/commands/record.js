import { InteractionResponseType } from "discord-interactions";
import { extractUserId } from "../../utils/helpers.js";
import { getTriviaRecord } from "../../services/gameState.js";
import { createSimpleMessage } from "../../utils/messageBuilders.js";

export async function handleRecordCommand(req, res) {
  const userId = extractUserId(req);
  const record = getTriviaRecord(userId);

  // ✅ Compute totals and accuracy
  const total = record.correct + record.incorrect;
  const accuracy = total > 0 ? ((record.correct / total) * 100).toFixed(1) : 0;

  const message = `📊 Trivia Record for <@${userId}>:
✅ **Correct:** ${record.correct}
❌ **Incorrect:** ${record.incorrect}
🏅 **Accuracy:** ${accuracy}%`;

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: createSimpleMessage(message),
  });
}
