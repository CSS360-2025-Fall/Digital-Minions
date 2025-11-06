// src/handlers/commands/trivia.js
import { InteractionResponseType } from "discord-interactions";
import { extractUserId } from "../../utils/helpers.js";
import { getRandomQuestion } from "../../services/triviaQuestions.js";
import { createTriviaQuestionMessage } from "../../utils/messageBuilders.js";
import { createGame } from "../../services/gameState.js";

/**
 * Handles the /trivia command
 */
export async function handleTriviaCommand(req, res) {
  const { id, data } = req.body;
  const userId = extractUserId(req);
  const category = data.options[0].value;

  const question = getRandomQuestion(category);

  if (!question) {
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: `No questions found for category **${category}**.`,
      },
    });
  }

  // Save active question
  createGame(id, userId, { category, question });

  // Send the question to the channel
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: createTriviaQuestionMessage(id, question),
  });
}
