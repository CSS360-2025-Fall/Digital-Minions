// src/handlers/components/selectMenus.js
import { InteractionResponseType } from "discord-interactions";
import { COMPONENT_IDS } from "../../constants/index.js";
import { extractUserId } from "../../utils/helpers.js";
import { getGame, deleteGame } from "../../services/gameState.js";
import { createSimpleMessage } from "../../utils/messageBuilders.js";

/**
 * Handles answer selection from the trivia question
 */
export async function handleSelectChoice(req, res) {
  const { data } = req.body;
  const componentId = data.custom_id;
  const gameId = componentId.replace(COMPONENT_IDS.SELECT_CHOICE, "");

  const game = getGame(gameId);
  if (!game) {
    return res.status(404).json({ error: "Game not found" });
  }

  const userId = extractUserId(req);
  const selectedAnswer = data.values[0];
  const { question } = game.objectName;

  const correct = question.correct === selectedAnswer;

  recordTriviaResult(userId, correct);

  deleteGame(gameId);

  const resultText = correct
    ? `✅ Correct, <@${userId}>! The answer was **${question.correct}**.`
    : `❌ Sorry, <@${userId}>. The correct answer was **${question.correct}**.`;

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: createSimpleMessage(resultText),
  });
}
