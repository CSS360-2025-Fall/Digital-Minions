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

  // ACKNOWLEDGE WITH **NO RESPONSE AT ALL** (type 1 = pong)
  res.send({ type: 1 });

  try {
    const question = getRandomQuestion(category);
    if (!question) {
      await discordRequest(`channels/${channelId}/messages`, {
        method: 'POST',
        body: { content: "No questions in that category!", flags: 64 },
      });
      return;
    }

    const gameId = createGame(userId, { category, question });

    // Send question — clean, real message
    await discordRequest(`channels/${channelId}/messages`, {
      method: 'POST',
      body: createTriviaQuestionMessage(gameId, question),
    });

  } catch (err) {
    console.error('Trivia error:', err);
    await discordRequest(`channels/${channelId}/messages`, {
      method: 'POST',
      body: { content: "Error starting trivia!", flags: 64 },
    });
  }
}
