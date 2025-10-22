import { InteractionResponseType } from 'discord-interactions';
import { COMPONENT_IDS } from '../../constants/index.js';
import { discordRequest } from '../../utils/discord.js';
import { createWebhookEndpoint } from '../../utils/helpers.js';
import { createChoiceSelectionMessage } from '../../utils/messageBuilders.js';
import { getShuffledOptions } from '../../services/game.js';

/**
 * Handles the accept button click
 * Deletes the challenge message and sends an ephemeral choice menu
 */
export async function handleAcceptButton(req, res) {
  const { data, message } = req.body;
  const componentId = data.custom_id;
  const gameId = componentId.replace(COMPONENT_IDS.ACCEPT_BUTTON, '');

  try {
    // Send ephemeral choice selection menu
    await res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: createChoiceSelectionMessage(gameId, getShuffledOptions()),
    });

    // Delete the original challenge message
    const endpoint = createWebhookEndpoint(
      process.env.APP_ID,
      req.body.token,
      message.id
    );
    await discordRequest(endpoint, { method: 'DELETE' });
  } catch (err) {
    console.error('Error handling accept button:', err);
  }
}