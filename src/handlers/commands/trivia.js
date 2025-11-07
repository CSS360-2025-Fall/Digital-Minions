// src/handlers/commands/trivia.js
import { InteractionResponseType } from "discord-interactions";
import { extractUserId } from "../../utils/helpers.js";
import { getRandomQuestion } from "../../services/triviaQuestions.js";
import { createTriviaQuestionMessage } from "../../utils/messageBuilders.js";
import { createGame } from "../../services/gameState.js";
import { discordRequest } from '../../utils/discord.js';

// Add at top
const cooldowns = new Map();

export async function handleTriviaCommand(req, res) {
  const interaction = req.body;
  const userId = extractUserId(req);

  // ←←← COOLDOWN MAP (add this at the top of the file if not already there)
  // Put this outside the function (global for the file)
  // const cooldowns = new Map();

  // ←←← 10-SECOND COOLDOWN PER USER
  const now = Date.now();
  const cooldownAmount = 10 * 1000; // 10 seconds
  if (cooldowns.has(userId)) {
    const expirationTime = cooldowns.get(userId) + cooldownAmount;
    if (now < expirationTime) {
      const timeLeft = (expirationTime - now) / 1000;
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `⏱️ Please wait **${timeLeft.toFixed(1)}** seconds before starting another trivia!`,
          flags: 64, // ephemeral
        },
      });
    }
  }
  cooldowns.set(userId, now); // set new cooldown
  setTimeout(() => cooldowns.delete(userId), cooldownAmount);

  // Get category
  const categoryOption = interaction.data.options?.find(o => o.name === "category");
  const category = categoryOption?.value?.toLowerCase() || "RANDOM".toLowerCase();

  // DEFER — invisible, no bubble
  res.send({
    type: InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
    data: {},
  });

  try {
    const question = getRandomQuestion(category);
    if (!question) {
      await discordRequest(`webhooks/${process.env.APP_ID}/${interaction.token}`, {
        method: 'PATCH',
        body: { content: "❌ No questions found for that category!" },
      });
      return;
    }

    const gameId = createGame(userId, { category, question });

    // SEND REAL TRIVIA MESSAGE (with embed + better select menu)
    await discordRequest(`webhooks/${process.env.APP_ID}/${interaction.token}`, {
      method: 'PATCH',
      body: createTriviaQuestionMessage(gameId, question, category),
    });

  } catch (err) {
    console.error('Trivia error:', err);
    try {
      await discordRequest(`webhooks/${process.env.APP_ID}/${interaction.token}`, {
        method: 'PATCH',
        body: { 
          content: "⚠️ Something went wrong starting trivia!",
          flags: 64 
        },
      });
    } catch (innerErr) {
      console.error('Failed to send error message:', innerErr);
    }
  }
}
