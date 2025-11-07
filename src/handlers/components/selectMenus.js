import { InteractionResponseType } from "discord-interactions";
import { COMPONENT_IDS } from "../../constants/index.js";
import { extractUserId } from "../../utils/helpers.js";
import { getGame, deleteGame } from "../../services/gameState.js";
import { createSimpleMessage } from "../../utils/messageBuilders.js";
import { recordTriviaResult } from "../../services/gameState.js";

export async function handleSelectChoice(req, res) {
  try {
    const { data } = req.body;
    const componentId = data.custom_id;
    const gameId = componentId.replace(COMPONENT_IDS.SELECT_CHOICE, "");
    const game = getGame(gameId);

    if (!game) {
      return res.status(404).json({ error: "game not found" });
    }

    const userId = extractUserId(req);
    const selectedAnswer = data.values[0];
    const { question } = game.objectName || game; // Fallback for different object structures

    const correct = question.correct === selectedAnswer;

    // ✅ Record the result
    recordTriviaResult(userId, correct);

    // ✅ Delete game state so it doesn’t repeat
    deleteGame(gameId);

    const resultText = correct
      ? `✅ Correct, <@${userId}>! The answer was **${question.correct}**.`
      : `❌ Sorry, <@${userId}>. The correct answer was **${question.correct}**.`;

    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: createSimpleMessage(resultText),
    });
  } catch (err) {
    console.error("Trivia answer error:", err);
    return res.status(500).json({ error: "Internal server error" });
  }
}
