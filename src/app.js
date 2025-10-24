import 'dotenv/config';
import express from 'express';
import {
  InteractionResponseType,
  InteractionType,
  verifyKeyMiddleware,
} from 'discord-interactions';
import { handleApplicationCommand } from './handlers/commands/index.js';
import { handleMessageComponent } from './handlers/components/index.js';
import { announceStartup } from './utils/startup.js';

// Create Express app
const app = express();
const PORT = process.env.PORT || 3000;

/**
 * Main interactions endpoint
 * Discord sends all interaction events here
 */
app.post(
  '/interactions',
  verifyKeyMiddleware(process.env.PUBLIC_KEY),
  async (req, res) => {
    const { type } = req.body;

    // Handle verification requests from Discord
    if (type === InteractionType.PING) {
      return res.send({ type: InteractionResponseType.PONG });
    }

    // Handle slash commands
    if (type === InteractionType.APPLICATION_COMMAND) {
      return handleApplicationCommand(req, res);
    }

    // Handle button clicks and select menu interactions
    if (type === InteractionType.MESSAGE_COMPONENT) {
      return handleMessageComponent(req, res);
    }

    // Unknown interaction type
    console.error('Unknown interaction type', type);
    return res.status(400).json({ error: 'unknown interaction type' });
  }
);

// Start server
app.listen(PORT, () => {
  console.log('Listening on port', PORT);

  // Announce startup to all guilds
  announceStartup().catch(err => {
    console.error('Error during startup announcement:', err);
  });
});
