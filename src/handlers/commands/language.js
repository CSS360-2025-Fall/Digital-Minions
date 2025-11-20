import { InteractionResponseType } from 'discord-interactions';
import { extractUserId } from '../../utils/helpers.js';
import { createSimpleMessage } from '../../utils/messageBuilders.js';
import { setUserLocale } from '../../services/gameState.js';

export async function handleLanguageCommand(req, res) {
    const userId = extractUserId(req);
    const locale = req.body.data.options[0].value;

    setUserLocale(userId, locale);

    const confirmationMessages = {
        en: '✅ Language set to English',
        es: '✅ Idioma configurado a Español',
        fr: '✅ Langue définie en Français',
    };

    return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: createSimpleMessage(confirmationMessages[locale] || confirmationMessages.en, true),
    });
}