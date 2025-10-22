import { InteractionResponseType } from 'discord-interactions';
import { getRandomEmoji } from '../../utils/helpers.js';
import { createSimpleMessage } from '../../utils/messageBuilders.js';

/**
 * Handles the /test command
 */
export async function handleTestCommand(req, res) {
  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: createSimpleMessage(`hello world ${getRandomEmoji()}`),
  });
}