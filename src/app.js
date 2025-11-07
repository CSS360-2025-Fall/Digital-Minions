// src/app.js
import 'dotenv/config';
import express from 'express';
import { InteractionType, InteractionResponseType, verifyKeyMiddleware } from 'discord-interactions';
//import { announceStartup } from './utils/startup.js';
import { handleMessageComponent } from './handlers/components/index.js';
import { handleApplicationCommand } from './handlers/commands/index.js';

const app = express();

// VERIFY DISCORD REQUESTS
app.post('/interactions', verifyKeyMiddleware(process.env.PUBLIC_KEY), async (req, res) => {
  const interaction = req.body;

  if (interaction.type === InteractionType.PING) {
    return res.send({ type: InteractionResponseType.PONG });
  }

  if (interaction.type === InteractionType.APPLICATION_COMMAND) {
    return handleApplicationCommand(req, res);
  }

  if (interaction.type === InteractionType.MESSAGE_COMPONENT) {
    return handleMessageComponent(req, res);
  }

  res.status(400).send({ error: 'Unknown interaction type' });
});

// HEALTH CHECK (open http://localhost:3000 in browser)
app.get('/', (req, res) => {
  res.send('Dawgs of war trivia bot is ALIVE locally! 🐶🔥🚀');
});

// ←←← LOCAL ONLY: HARD-CODED PORT 3000
app.listen(3000, () => {
  console.log('Listening on port 3000');
  //announceStartup();
});
