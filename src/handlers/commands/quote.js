import { InteractionResponseType } from 'discord-interactions';
import { extractUserId } from '../../utils/helpers.js';
import { createSimpleMessage } from '../../utils/messageBuilders.js';
import { getUserLocale } from '../../services/gameState.js';
import { getRandomQuote } from '../../services/quotesAndJokes.js';
import { t } from '../../localization/strings.js';

/**
 * Handles the /quote command
 */
export async function handleQuoteCommand(req, res) {
    const userId = extractUserId(req);
    const locale = getUserLocale(userId);

    const quote = getRandomQuote(locale);
    const message = `${t(locale, 'quote.title')}\n\n${quote}`;

    return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: createSimpleMessage(message),
    });
}
