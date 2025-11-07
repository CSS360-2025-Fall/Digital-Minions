import { InteractionResponseType } from "discord-interactions";
import { getTriviaRecord } from "../../services/gameState.js";

export async function handleRecordCommand(req, res) {
  const userId = req.body.member?.user?.id;
  const record = getTriviaRecord(userId);

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: {
      content: `📊 **Your Trivia Record**\n✅ Correct: ${record.correct}\n❌ Incorrect: ${record.incorrect}`,
    },
  });
}
