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

  // INSTANT RESPONSE — NO DEFER, NO WEBHOOK, NO 403
  res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: { content: "🧠 Generating trivia..." },
  });

  try {
    const question = getRandomQuestion(category);
    if (!question) {
      await discordRequest(`channels/${channelId}/messages`, {
        method: 'POST',
        body: { content: "❌ No questions in that category!" },
      });
      return;
    }

    const gameId = createGame(userId, { category, question });

    // SEND REAL QUESTION DIRECTLY TO CHANNEL — BYPASSES WEBHOOK 403
    await discordRequest(`channels/${channelId}/messages`, {
      method: 'POST',
      body: createTriviaQuestionMessage(gameId, question),
    });

  } catch (err) {
    console.error('Trivia error:', err);
    await discordRequest(`channels/${channelId}/messages`, {
      method: 'POST',
      body: { content: "⚠️ Trivia failed — try again!" },
    });
  }
}
