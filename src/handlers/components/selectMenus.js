import { InteractionResponseType } from "discord-interactions";
import { deleteGame, getGame } from "../../services/gameState.js";
import { recordTriviaResult } from "../../services/gameState.js";

/**
 * Handles the choice selection from the select menu
 * Calculates game result, updates records, and displays outcome
 */
export async function handleSelectChoice(req, res) {
    try {
        const { data, member, user } = req.body;
        const userId = member.user.id;
        if (!userId) throw new Error("User ID not found");

        const gameId = data.custom_id.replace("select_choice_", "");
        const selectedAnswer = data.values[0];
        const game = getGame(gameId);
        if (!game) {
            return res.send({
                type: InteractionResponseType.UPDATE_MESSAGE, data: {
                    content: "⏰ This trivia has expired!",
                    embeds: [],
                    components: [],
                    flags: 64, // only you see it 
                },
            });
        }
        const { question } = game.data;
        const isCorrect = question.correct === selectedAnswer;
        recordTriviaResult(userId, isCorrect);
        const resultText = isCorrect
            ? `✅ **Correct!** The answer is **${question.correct}**`
            : `❌ **Incorrect.** The correct answer was **${question.correct}**`;
        deleteGame(gameId);
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
