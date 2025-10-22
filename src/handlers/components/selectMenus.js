import { InteractionResponseType } from 'discord-interactions';
import { COMPONENT_IDS, GAME_RESULTS } from '../../constants/index.js';
import { discordRequest } from '../../utils/discord.js';
import { extractUserId, createWebhookEndpoint, getRandomEmoji } from '../../utils/helpers.js';
import { createResultMessage, createSimpleMessage } from '../../utils/messageBuilders.js';
import { getGame, deleteGame } from '../../services/gameState.js';
import { calculateGameResult, getResult } from '../../services/game.js';
import { updateUserRecord } from '../../services/userRecords.js';

/**
 * Handles the choice selection from the select menu
 * Calculates game result, updates records, and displays outcome
 */
export async function handleSelectChoice(req, res) {
  const { data, message } = req.body;
  const componentId = data.custom_id;
  const gameId = componentId.replace(COMPONENT_IDS.SELECT_CHOICE, '');

  const game = getGame(gameId);

  if (!game) {
    console.error(`Game not found: ${gameId}`);
    return res.status(404).json({ error: 'game not found' });
  }

  const userId = extractUserId(req);
  const objectName = data.values[0];

  // Build player objects
  const p1 = game;
  const p2 = { id: userId, objectName };

  // Calculate result
  const gameOutcome = calculateGameResult(p1, p2);
  const resultStr = getResult(p1, p2);

  // Update win/loss records
  if (gameOutcome.verb === 'tie') {
    updateUserRecord(p1.id, GAME_RESULTS.TIE);
    updateUserRecord(p2.id, GAME_RESULTS.TIE);
  } else {
    updateUserRecord(gameOutcome.win.id, GAME_RESULTS.WIN);
    updateUserRecord(gameOutcome.lose.id, GAME_RESULTS.LOSS);
  }

  // Remove game from active games
  deleteGame(gameId);

  try {
    // Send result message to channel
    await res.send({
      type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
      data: createResultMessage(resultStr),
    });

    // Update the ephemeral message
    const endpoint = createWebhookEndpoint(
      process.env.APP_ID,
      req.body.token,
      message.id
    );
    await discordRequest(endpoint, {
      method: 'PATCH',
      body: {
        components: createSimpleMessage(`Nice choice ${getRandomEmoji()}`).components,
      },
    });
  } catch (err) {
    console.error('Error handling select choice:', err);
  }
}