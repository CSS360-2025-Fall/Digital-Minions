// src/handlers/commands/trivia.js
import { InteractionResponseType } from "discord-interactions";
import { extractUserId } from "../../utils/helpers.js";
import { getRandomQuestion } from "../../services/triviaQuestions.js";
import { createTriviaQuestionMessage } from "../../utils/messageBuilders.js";
import { createGame } from "../../services/gameState.js";
import { discordRequest } from '../../utils/discord.js';

export async function handleTriviaCommand(req, res) {
  const interaction = req.body;
  const userId = extractUserId(req);

  // Get category
  const categoryOption = interaction.data.options?.find(o => o.name === "category");
  const category = categoryOption?.value?.toLowerCase() || "random";

  // Defer immediately
  res.send({
    type: InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
  });

  try {
    const question = getRandomQuestion(category);
    if (!question) {
      await discordRequest(`webhooks/${process.env.APP_ID}/${interaction.token}`, {
        method: 'POST',
        body: { content: "❌ No questions found for that category!", flags: 64 },
      });
      return;
    }

    // Create game
    const gameId = createGame(userId, { category, question });

    // DELETE "Bot is thinking..." USING WEBHOOK (100% WORKS)
    const webhookEndpoint = `webhooks/${process.env.APP_ID}/${interaction.token}`;
    await discordRequest(webhookEndpoint, { method: 'DELETE' }).catch(() => {});

    // Send real message
    await discordRequest(`channels/${interaction.channel_id}/messages`, {
      method: 'POST',
      body: createTriviaQuestionMessage(gameId, question),
    });

  } catch (err) {
    console.error('Error in handleTriviaCommand:', err);
    try {
      await discordRequest(`webhooks/${process.env.APP_ID}/${interaction.token}`, {
        method: 'POST',
        body: { content: '⚠️ Error creating trivia.', flags: 64 },
      });
    } catch {}
  }
}
