// src/handlers/commands/trivia.js
import { InteractionResponseType } from "discord-interactions";
import { extractUserId } from "../../utils/helpers.js";
import { getRandomQuestion } from "../../services/triviaQuestions.js";
import { createTriviaQuestionMessage } from "../../utils/messageBuilders.js";
import { createGame } from "../../services/gameState.js";
import { discordRequest } from '../../utils/discord.js';


/**
 * Handles the /trivia command
 */
export async function handleTriviaCommand(req, res) {
  const { id, data } = req.body;
  const userId = extractUserId(req);
  const category = data.options[0].value;

  // ✅ Step 1: immediately acknowledge to avoid Discord timeout
  res.send({
    type: InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
  });

  // ✅ Step 2: build the question after acknowledgment
  const question = getRandomQuestion(category);

  if (!question) {
    // Post an error message via webhook if no questions found
    const endpoint = `webhooks/${process.env.APP_ID}/${req.body.token}`;
    await discordRequest(endpoint, {
      method: "POST",
      body: {
        content: `No questions found for category **${category}**.`,
      },
    });
    return;
  }

  // ✅ Step 3: save active question
  createGame(id, userId, { category, question });

  // ✅ Step 4: send the question to the channel via webhook
  const endpoint = `webhooks/${process.env.APP_ID}/${req.body.token}`;
  await discordRequest(endpoint, {
    method: "POST",
    body: createTriviaQuestionMessage(id, question),
  });
}

