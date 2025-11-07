// src/handlers/commands/trivia.js
import { InteractionResponseType } from "discord-interactions";
import { extractUserId } from "../../utils/helpers.js";
import { getRandomQuestion } from "../../services/triviaQuestions.js";
import { createTriviaQuestionMessage } from "../../utils/messageBuilders.js";
import { createGame, generateGameId } from "../../services/gameState.js"; // ← FIXED: use generateGameId

/**
 * Handles the /trivia command
 */
export async function handleTriviaCommand(req, res) {
  const interaction = req.body;
  const userId = extractUserId(req);

  // Get category (lowercase for consistency)
  const categoryOption = interaction.data.options?.find(opt => opt.name === "category");
  const category = categoryOption?.value?.toLowerCase() || "random";

  // 1) Defer immediately
  res.send({
    type: InteractionResponseType.DEFERRED_CHANNEL_MESSAGE_WITH_SOURCE,
  });

  try {
    // 2) Get a random question
    const question = getRandomQuestion(category);
    if (!question) {
      await interaction.followUp({
        content: "❌ No questions found for that category!",
        ephemeral: true,
      });
      return;
    }

    // 3) Generate unique game ID and save game
    const gameId = generateGameId();
    createGame(userId, { category, question }, gameId); // ← Fixed structure

    // 4) Delete the "thinking..." message (optional but clean)
    await interaction.deleteReply().catch(() => {});

    // 5) Send the trivia message as a REAL bot message (NOT webhook/followup)
    // This allows UPDATE_MESSAGE to work perfectly
    const channel = await global.client.channels.fetch(interaction.channel_id);
    await channel.send(createTriviaQuestionMessage(gameId, question));

  } catch (err) {
    console.error('Error in handleTriviaCommand:', err);
    try {
      await interaction.followUp({
        content: '⚠️ An error occurred while creating the trivia question.',
        ephemeral: true,
      });
    } catch (e) {
      console.error('Failed to send error followup:', e);
    }
  }
}
