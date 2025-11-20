import { InteractionResponseType } from 'discord-interactions';
import { extractUserId } from '../../utils/helpers.js';
import { createTriviaQuestionMessage } from '../../utils/messageBuilders.js';
import { createGame, getUserLocale } from '../../services/gameState.js';
import { getRandomQuestion } from "../../services/triviaQuestions.js";

export async function handleChallengeCommand(req, res) {
    const { id, data } = req.body;
    const userId = extractUserId(req);
    const objectName = data.options[0].value;
    const locale = getUserLocale(userId);

    // Pass locale to get localized questions
    const question = getRandomQuestion(objectName, locale);

    createGame(id, userId, objectName, question);

    return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: createTriviaQuestionMessage(id, question, objectName, locale),
    });
}
