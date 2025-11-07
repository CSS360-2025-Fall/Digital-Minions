import { InteractionResponseType } from "discord-interactions";
import { createSimpleMessage } from "../../utils/messageBuilders.js";
import { recordTriviaResult } from "../../services/gameState.js";
import { deleteGame, getGame } from "../../services/gameState.js";
import { extractUserId } from "../../utils/helpers.js";

export async function handleSelectChoice(req, res) {
  try {
    const { data, member } = req.body;
    const userId = member?.user?.id;
    const gameId = data.custom_id.split("_")[1];
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

    // Check answer and build result text
    const isCorrect = game.question.correct === selectedChoice;
    const resultText = isCorrect
      ? `✅ Correct, ${game.question.correct}!`
      : `❌ Incorrect. The correct answer was **${game.question.correct}**.`;

    clearGame(gameId);

    // Safely clear dropdown and display result
    return res.send({
      type: InteractionResponseType.UPDATE_MESSAGE,
      data: {
        content: resultText,
        components: [], // safely removes dropdown
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
