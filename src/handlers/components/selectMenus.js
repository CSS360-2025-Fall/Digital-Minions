import { InteractionResponseType } from "discord-interactions";
import { updateUserRecord } from "../../services/userRecords.js"; // ← CORRECT EXISTING FILE
import { deleteGame, getGame } from "../../services/gameState.js";
import { extractUserId } from "../../utils/helpers.js";

export async function handleSelectChoice(req, res) {
  try {
    const { data, member, user } = req.body;
    
    // Works in servers AND DMs
    const userId = member?.user?.id || user?.id || extractUserId(req);
    if (!userId) throw new Error("User ID not found");

    // custom_id is exactly "select_choice_<gameId>" — NOT using COMPONENT_IDS
    const gameId = data.custom_id.replace("select_choice_", "");
    const selectedAnswer = data.values[0];

    const game = getGame(gameId);
    if (!game || !game.question) {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { content: "⚠️ This trivia game has expired.", flags: 64 },
      });
    }

    const isCorrect = game.question.correct === selectedAnswer;

    // This uses your existing userRecords.js — records correct/incorrect
    updateUserRecord(userId, isCorrect ? "win" : "loss");

    const resultText = isCorrect
      ? `✅ **Correct!** The answer is **${game.question.correct}**`
      : `❌ **Incorrect.** The correct answer was **${game.question.correct}**`;

    deleteGame(gameId);

    return res.send({
      type: InteractionResponseType.UPDATE_MESSAGE,
      data: {
        content: resultText,
        components: [], // removes dropdown
      },
    });

  } catch (err) {
    console.error("Select menu error:", err);
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "⚠️ An error occurred processing your selection.",
        flags: 64,
      },
    });
  }
}
