import { InteractionResponseType } from "discord-interactions";
import { updateUserRecord } from "../../services/userRecords.js";
import { deleteGame, getGame } from "../../services/gameState.js";
import { recordTriviaResult } from "../../services/gameState.js";
import { extractUserId } from "../../utils/helpers.js";

export async function handleSelectChoice(req, res) {
  try {
    console.log('Step 1: Received component interaction:', req.body.data.custom_id);

    const { data, member, user } = req.body;
    const userId = member?.user?.id || user?.id || extractUserId(req);
    if (!userId) throw new Error("User ID not found");

    const gameId = data.custom_id.replace("select_choice_", "");
    console.log('Step 4: Parsed gameId:', gameId);

    const selectedAnswer = data.values[0];
    console.log('Step 5: Got selectedAnswer:', selectedAnswer);

    // ←←← FIX 1: DON'T DECLARE `game` TWICE
    const game = getGame(gameId);
    console.log('Step 6: Fetched game:', game ? 'FOUND' : 'NOT FOUND');

    // ←←← FIX 2: EXPIRED CHECK — EPHEMERAL + CLEAN
    if (!game) {
      console.log('Trivia expired or invalid game ID:', gameId);
      return res.send({
        type: InteractionResponseType.UPDATE_MESSAGE,
        data: {
          content: "⏰ This trivia has expired!",
          embeds: [],
          components: [],
          flags: 64, // only you see it
        },
      });
    }

    // ←←← FIX 3: CORRECT PATH TO QUESTION (you store in game.data)
    const { question } = game.data;  // ← this is correct based on your createGame()

    const isCorrect = question.correct === selectedAnswer;
    console.log('Step 8: Calculated isCorrect:', isCorrect);

    updateUserRecord(userId, isCorrect ? "win" : "loss");
    console.log('Step 9: Updated user record');

    const resultText = isCorrect
      ? `✅ **Correct!** The answer is **${question.correct}**`
      : `❌ **Incorrect.** The correct answer was **${question.correct}**`;

    deleteGame(gameId);
    console.log('Step 10: Deleted game');

    // ←←← FINAL RESULT: CLEAN EDIT, NO EMBEDS, NO COMPONENTS
    return res.send({
      type: InteractionResponseType.UPDATE_MESSAGE,
      data: {
        content: resultText,
        embeds: [],       // clear embeds
        components: [],   // remove dropdown
      },
    });

  } catch (err) {
    console.error("Select menu error:", err);
    return res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: {
        content: "⚠️ An error occurred processing your selection.",
        flags: 64,
      },
    });
  }
}
