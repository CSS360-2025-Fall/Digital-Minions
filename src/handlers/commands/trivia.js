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

  // 1) DEFER WITH EMPTY UPDATE — NO TEXT, NO FLAGS, NO BUBBLE
  res.send({
    type: InteractionResponseType.DEFERRED_MESSAGE_UPDATE,
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

    // 2) PATCH THE DEFERRED MESSAGE INTO THE REAL TRIVIA QUESTION
    await discordRequest(`webhooks/${process.env.APP_ID}/${interaction.token}`, {
      method: 'PATCH',
      body: createTriviaQuestionMessage(gameId, question),
    });

  } catch (err) {
    console.error('Trivia error:', err);
    await discordRequest(`webhooks/${process.env.APP_ID}/${interaction.token}`, {
      method: 'PATCH',
      body: { content: "⚠️ Something went wrong!" },
    });
  }
}
