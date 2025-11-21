import { InteractionResponseType } from 'discord-interactions';
import { createSimpleMessage } from '../../utils/messageBuilders.js';
import { extractUserId } from '../../utils/helpers.js';
import { getUserLocale } from '../../services/gameState.js';
import { t } from '../../localization/strings.js';

/**
 * Handles the /rules command
 */
export async function handleRulesCommand(req, res) {
    const userId = extractUserId(req);
    const locale = getUserLocale(userId);

    const rulesText = [
        t(locale, 'rules.title'),
        t(locale, 'rules.rule1'),
        t(locale, 'rules.rule2'),
        t(locale, 'rules.rule3'),
        t(locale, 'rules.rule4'),
    ].join('\n');

    return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: createSimpleMessage(rulesText, true),
    });
}
