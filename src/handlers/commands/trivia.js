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
  const channelId = interaction.channel_id;

  // Get category
  const categoryOption = interaction.data.options?.find(o => o.name === "category");
  const category = categoryOption?.value?.toLowerCase() || "random";

  // DEFER WITH **INVISIBLE LOADING** (no text, no bubble)
  res.send({
    type: InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
    data: { flags: 64 }, // ephemeral = invisible to everyone
  });

  try {
    const question = getRandomQuestion(category);
    if (!question) {
      await discordRequest(`webhooks/${process.env.APP_ID}/${interaction.token}`, {
        method: 'POST',
        body: { content: "No questions!", flags: 64 },
      });
      return;
    }

    const gameId = createGame(userId, { category, question });

    // EDIT THE DEFERRED MESSAGE INTO THE REAL QUESTION
    await discordRequest(`webhooks/${process.env.APP_ID}/${interaction.token}`, {
      method: 'PATCH',
      body: createTriviaQuestionMessage(gameId, question),
    });

  } catch (err) {
    console.error('Trivia error:', err);
    await discordRequest(`webhooks/${process.env.APP_ID}/${interaction.token}`, {
      method: 'PATCH',
      body: { content: "Error!" },
    });
  }
}
