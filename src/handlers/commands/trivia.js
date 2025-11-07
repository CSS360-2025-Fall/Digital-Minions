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

  // 1) Immediately acknowledge to Discord to avoid timeout
  console.log("Sending deferred response to Discord...");
  res.send({
    type: InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
  });
  console.log("Deferred response sent successfully");


  try {
    // 2) Build the question
    const question = getRandomQuestion(category);

    if (!question) {
      // Post an error message via webhook if no questions found
      const endpoint = `webhooks/${process.env.APP_ID}/${req.body.token}`;
      console.log("Posting question to webhook:", endpoint, question);
    await discordRequest(endpoint, {
      method: 'POST',
      body: createTriviaQuestionMessage(id, question),
    });
    console.log("Question sent successfully");

      return;
    }

    // 3) Save active question
    createGame(id, userId, { category, question });

    // 4) Send the question to the channel via webhook
    const endpoint = `webhooks/${process.env.APP_ID}/${req.body.token}`;
    await discordRequest(endpoint, {
      method: 'POST',
      body: createTriviaQuestionMessage(id, question),
    });
  } catch (err) {
    console.error('Error in handleTriviaCommand:', err);
    // Try to notify the user of failure (ephemeral)
    try {
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: '⚠️ An error occurred while creating the trivia question.',
          flags: 64, // ephemeral
        },
      });
    } catch (e) {
      // If we can't send (already sent deferred), just log
      console.error('Also failed to send error response:', e);
    }
  }
}
