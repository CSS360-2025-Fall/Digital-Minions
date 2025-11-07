// src/handlers/commands/trivia.js
import { InteractionResponseType } from "discord-interactions";
import { extractUserId } from "../../utils/helpers.js";
import { getRandomQuestion } from "../../services/triviaQuestions.js";
import { createTriviaQuestionMessage } from "../../utils/messageBuilders.js";
import { createGame } from "../../services/gameState.js";
import { discordRequest } from "../../utils/discordRequest.js";


export async function handleTriviaCommand(req, res) {
  const interaction = req.body;
  const userId = extractUserId(req);

  // Get category
  const categoryOption = interaction.data.options?.find(o => o.name === "category");
  const category = categoryOption?.value?.toLowerCase() || "random";

  // DEFER — INVISIBLE, NO MESSAGE, NO POPUP
  res.send({
    type: InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
    data: { flags: 64 }, // ephemeral defer (invisible)
  });

  try {
    const question = getRandomQuestion(category);
    if (!question) {
      return await discordRequest(`webhooks/${process.env.APP_ID}/${interaction.token}`, {
        method: 'PATCH',
        body: { content: "❌ No questions in that category!", flags: 64 },
      });
    }

    const gameId = createGame(userId, { category, question });

    // SEND REAL QUESTION — ONE MESSAGE ONLY
    console.log("DEBUG webhook endpoint:", `webhooks/${process.env.APP_ID}/${interaction.token}`);
    await discordRequest(`webhooks/${interaction.application_id}/${interaction.token}`, {
      method: 'PATCH',
      body: createTriviaQuestionMessage(gameId, question),
    });

  } catch (err) {
    console.error('Trivia error:', err);
    await discordRequest(`webhooks/${interaction.application_id}/${interaction.token}`, {
      method: 'PATCH',
      body: { content: "⚠️ Trivia failed — try again!", flags: 64 },
    });
  }
}
