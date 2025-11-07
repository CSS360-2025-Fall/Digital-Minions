import { InteractionResponseType } from "discord-interactions";
import { createSimpleMessage } from "../../utils/messageBuilders.js";
import { updateUserRecord } from "../../services/userRecords.js";  // ← NEW IMPORT
import { deleteGame, getGame } from "../../services/gameState.js";
import { extractUserId } from "../../utils/helpers.js";

export async function handleSelectChoice(req, res) {
  try {
    const { data, member } = req.body;
    const userId = member?.user?.id || extractUserId(req); // fallback safety
    const gameId = data.custom_id.replace("select_choice_", "");
    const selectedChoice = data.values[0];

    const game = getGame(gameId);
    if (!game) {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: "⚠️ This trivia game has expired or no longer exists.",
          flags: 64, // ephemeral
        },
      });
    }

    // Check answer
    const isCorrect = game.question.correct === selectedChoice;
    const resultText = isCorrect
      ? `✅ Correct! The answer is **${game.question.correct}**!`
      : `❌ Wrong. The correct answer was **${game.question.correct}**.`;

    // ← RECORD THE RESULT FOR THE PERSON WHO ANSWERED
    updateUserRecord(userId, isCorrect ? "win" : "loss");

    // Clean up
    deleteGame(gameId);

    // Update the message (removes dropdown, shows result)
    return res.send({
      type: InteractionResponseType.UPDATE_MESSAGE,
      data: {
        content: resultText,
        components: [], // removes the select menu
      },
    });
  } catch (err) {
    console.error("Error handling select choice:", err);
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "⚠️ An error occurred processing your selection.",
        flags: 64,
      },
    });
  }
}
