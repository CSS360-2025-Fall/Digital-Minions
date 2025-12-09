import { InteractionResponseType } from 'discord-interactions';
import { extractUserId } from '../../utils/helpers.js';
import { createSimpleMessage } from '../../utils/messageBuilders.js';
import { getUserLocale } from '../../services/gameState.js';
import { getRandomJoke } from '../../services/quotesAndJokes.js';
import { t } from '../../localization/strings.js';

/**
 * Handles the /joke command
 */
export async function handleJokeCommand(req, res) {
    const userId = extractUserId(req);
    const locale = getUserLocale(userId);

    const joke = getRandomJoke(locale);
    const message = `${t(locale, 'joke.title')}\n\n${joke}`;

    return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: createSimpleMessage(message),
    });
}
