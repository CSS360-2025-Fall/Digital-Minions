import { InteractionResponseType } from "discord-interactions";
import { deleteGame, getGame, getUserLocale } from "../../services/gameState.js";
import { recordTriviaResult } from "../../services/gameState.js";
import { extractUserId, extractGuildId } from "../../utils/helpers.js";
import { t } from "../../localization/strings.js";

/**
 * Handles the choice selection from the select menu
 * Calculates game result, updates records, and displays outcome
 */
export async function handleSelectChoice(req, res) {
    try {
        const { data } = req.body;
        const userId = extractUserId(req);
        const locale = getUserLocale(userId);

        if (!userId) throw new Error("User ID not found");

        const gameId = data.custom_id.replace("select_choice_", "");
        const selectedAnswer = data.values[0];
        const game = getGame(gameId);

        if (!game) {
            return res.send({
                type: InteractionResponseType.UPDATE_MESSAGE,
                data: {
                    content: t(locale, 'trivia.expired'),
                    embeds: [],     // clear embeds
                    components: [], // remove dropdown
                    flags: 64,
                },
            });
        }

        const { question } = game.data;
        const isCorrect = question.correct === selectedAnswer;
        const guildId = extractGuildId(req);
        recordTriviaResult(userId, isCorrect, guildId);

        const resultText = isCorrect
            ? t(locale, 'trivia.correct', question.correct)
            : t(locale, 'trivia.incorrect', question.correct);

        deleteGame(gameId);

        return res.send({
            type: InteractionResponseType.UPDATE_MESSAGE,
            data: {
                content: resultText,
                embeds: [],
                components: [],
            },
        });
    } catch (err) {
        console.error("Select menu error:", err);
        const userId = extractUserId(req);
        const locale = getUserLocale(userId);

        return res.send({
            type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
            data: {
                content: t(locale, 'errors.processing'),
                flags: 64,
            },
        });
    }
}