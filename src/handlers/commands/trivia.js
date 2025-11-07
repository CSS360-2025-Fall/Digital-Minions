// src/handlers/commands/trivia.js
import { InteractionResponseType } from "discord-interactions";
import { extractUserId } from "../../utils/helpers.js";
import { getRandomQuestion } from "../../services/triviaQuestions.js";
import { createTriviaQuestionMessage } from "../../utils/messageBuilders.js";
import { createGame } from "../../services/gameState.js";

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
      await interaction.followUp({
        content: "❌ No questions found for that category!",
        ephemeral: true,
      });
      return;
    }

    // Create game and get ID
    const gameId = createGame(userId, { category, question });

    // Delete "thinking..." message
    try { await interaction.deleteReply(); } catch (e) {}

    // Send as REAL message so dropdown can be updated
    const channelId = interaction.channel_id || interaction.channel.id;
    const endpoint = `channels/${channelId}/messages`;
    
    await discordRequest(endpoint, {
      method: 'POST',
      body: createTriviaQuestionMessage(gameId, question),
    });

  } catch (err) {
    console.error('Error in handleTriviaCommand:', err);
    try {
      await interaction.followUp({
        content: '⚠️ An error occurred while creating the trivia question.',
        ephemeral: true,
      });
    } catch (e) {
      console.error('Failed to send error:', e);
    }
  }
}
