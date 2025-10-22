import { InteractionResponseType } from 'discord-interactions';
import { extractUserId } from '../../utils/helpers.js';
import { createChallengeMessage } from '../../utils/messageBuilders.js';
import { createGame } from '../../services/gameState.js';

/**
 * Handles the /challenge command
 * Creates a new game and posts an accept button
 */
export async function handleChallengeCommand(req, res) {
  const { id, data } = req.body;
  const userId = extractUserId(req);
  const objectName = data.options[0].value;

  // Create active game using interaction ID as game ID
  createGame(id, userId, objectName);

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: createChallengeMessage(userId, id),
  });
}