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

  const categoryOption = interaction.data.options?.find(o => o.name === "category");
  const category = categoryOption?.value?.toLowerCase() || "random";

  // DEFER — NO FLAGS, NO TEXT
  res.send({
    type: InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
    data: {},
  });

  try {
    const question = getRandomQuestion(category);
    if (!question) {
    await discordRequest(`webhooks/${process.env.APP_ID}/${interaction.token}`, {
        method: 'PATCH',
        body: { content: "No questions in that category!" },
      });
      return;
    }

    const gameId = createGame(userId, { category, question });

    // PATCH WITH REAL MESSAGE — NOW WORKS (auth fixed)
    await discordRequest(`webhooks/${process.env.APP_ID}/${interaction.token}`, {
      method: 'PATCH',
      body: createTriviaQuestionMessage(gameId, question),
    });

  } catch (err) {
    console.error('Trivia error:', err);
    try {
      await discordRequest(`webhooks/${process.env.APP_ID}/${interaction.token}`, {
        method: 'PATCH',
        body: { content: "Error!" },
      });
    } catch {}
  }
}
