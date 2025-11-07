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

  // ACKNOWLEDGE WITH **INVISIBLE** RESPONSE (NO THINKING MESSAGE AT ALL)
  res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: { content: "‎", flags: 64 }, // invisible ephemeral space
  });

  try {
    const question = getRandomQuestion(category);
    if (!question) {
      await discordRequest(`channels/${interaction.channel_id}/messages`, {
        method: 'POST',
        body: { content: "❌ No questions found!", flags: 64 },
      });
      return;
    }

    const gameId = createGame(userId, { category, question });

    // Send question as REAL message
    await discordRequest(`channels/${interaction.channel_id}/messages`, {
      method: 'POST',
      body: createTriviaQuestionMessage(gameId, question),
    });

  } catch (err) {
    console.error('Trivia error:', err);
    await discordRequest(`channels/${interaction.channel_id}/messages`, {
      method: 'POST',
      body: { content: "⚠️ Error!", flags: 64 },
    });
  }
}
