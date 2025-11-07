// src/handlers/commands/trivia.js
import { InteractionResponseType } from "discord-interactions";
import { extractUserId } from "../../utils/helpers.js";
import { getRandomQuestion } from "../../services/triviaQuestions.js";
import { createTriviaQuestionMessage } from "../../utils/messageBuilders.js";
import { createGame } from "../../services/gameState.js";

export async function handleTriviaCommand(req, res) {
  const interaction = req.body;
  const userId = extractUserId(req);

  // Get the category from the slash command
  const categoryOption = interaction.data.options?.find(o => o.name === "category");
  const category = categoryOption?.value?.toLowerCase() || "random";

  try {
    // Pick a random question for that category
    const question = getRandomQuestion(category);

    if (!question) {
      // ❌ No questions available for that category
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
          content: `❌ No questions available for **${category}**.`,
        },
      });
    }

    // ✅ Create a game entry for tracking user’s progress
    const gameId = createGame(userId, { category, question });

    // ✅ Send the trivia question immediately
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: createTriviaQuestionMessage(gameId, question),
    });

  } catch (err) {
    console.error("Trivia error:", err);

    // ⚠️ Show an error if something goes wrong
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "⚠️ An error occurred while starting trivia. Please try again!",
      },
    });
  }
}
