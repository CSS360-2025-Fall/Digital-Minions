import { InteractionResponseType } from "discord-interactions";
import { createSimpleMessage } from "../../utils/messageBuilders.js";
import { recordTriviaResult } from "../../services/gameState.js";
import { deleteGame, getGame } from "../../services/gameState.js";
import { extractUserId } from "../../utils/helpers.js";

export async function handleSelectChoice(req, res) {
  const { data } = req.body;
  const componentId = data.custom_id;
  const gameId = componentId.replace("select_choice_", "");
  const game = getGame(gameId);

  if (!game) {
  // Remove dropdown and notify user that the game has expired
  return res.send({
    type: InteractionResponseType.UPDATE_MESSAGE,
    data: {
      content: "⚠️ This trivia round has already ended or expired.",
      components: [], // 🔥 removes dropdown menu
    },
  });
}



  const userId = extractUserId(req);
  const selectedAnswer = data.values[0];
  const question = game.question || game.objectName?.question;
  const correct = question.correct === selectedAnswer;

  // ✅ Record trivia result
  recordTriviaResult(userId, correct);

  // ✅ Remove the dropdown
  deleteGame(gameId);

  const resultText = correct
    ? `✅ Correct, <@${userId}>! The answer was **${question.correct}**.`
    : `❌ Sorry, <@${userId}>. The correct answer was **${question.correct}**.`;

  // ✅ Edit the original message (removes dropdown & shows answer)
  return res.send({
    type: InteractionResponseType.UPDATE_MESSAGE,
    data: {
      content: resultText,
      components: [], // removes dropdown
    },
  });
}
