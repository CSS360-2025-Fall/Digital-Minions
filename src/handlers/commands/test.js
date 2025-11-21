import { InteractionResponseType } from 'discord-interactions';
import { getRandomEmoji, extractUserId } from '../../utils/helpers.js';
import { createSimpleMessage } from '../../utils/messageBuilders.js';
import { getUserLocale } from '../../services/gameState.js';
import { t } from '../../localization/strings.js';

/**
 * Handles the /test command
 */
export async function handleTestCommand(req, res) {
    const userId = extractUserId(req);
    const locale = getUserLocale(userId);

    return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: createSimpleMessage(t(locale, 'test.greeting', getRandomEmoji())),
    });
}
