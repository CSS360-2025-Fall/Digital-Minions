import { InteractionResponseType } from "discord-interactions";
import { updateUserRecord } from "../../services/userRecords.js";
import { deleteGame, getGame } from "../../services/gameState.js";
import { extractUserId } from "../../utils/helpers.js";

export async function handleSelectChoice(req, res) {
  try {
    console.log('Step 1: Received component interaction:', req.body.data.custom_id);

    const { data, member, user } = req.body;
    console.log('Step 2: Extracted data, member, user from req.body');

    const userId = member?.user?.id || user?.id || extractUserId(req);
    console.log('Step 3: Calculated userId:', userId);

    if (!userId) throw new Error("User ID not found");

    const gameId = data.custom_id.replace("select_choice_", "");
    console.log('Step 4: Parsed gameId:', gameId);

    const selectedAnswer = data.values[0];
    console.log('Step 5: Got selectedAnswer:', selectedAnswer);

    const game = getGame(gameId);
    console.log('Step 6: Fetched game:', game ? JSON.stringify(game) : 'NOT FOUND');

    if (!game || !game.question) {
      console.log('Step 7: Game or question invalid — sending expired message');
      return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: { content: "⚠️ This trivia game has expired.", flags: 64 },
      });
    }

    const isCorrect = game.question.correct === selectedAnswer;
    console.log('Step 8: Calculated isCorrect:', isCorrect);

    updateUserRecord(userId, isCorrect ? "win" : "loss");
    console.log('Step 9: Updated user record');

    const resultText = isCorrect
      ? `✅ **Correct!** The answer is **${game.question.correct}**`
      : `❌ **Incorrect.** The correct answer was **${game.question.correct}**`;

    deleteGame(gameId);
    console.log('Step 10: Deleted game');

    console.log('Step 11: Sending update response');
    return res.send({
      type: InteractionResponseType.UPDATE_MESSAGE,
      data: {
        content: resultText,
        components: [],
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
