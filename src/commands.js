// src/commands.js
import 'dotenv/config';
import { discordRequest } from './utils/discord.js';
import { COMMANDS } from './config/commands.js';

// Register all slash commands globally
async function installGlobalCommands() {
  const endpoint = `applications/${process.env.APP_ID}/commands`;

  try {
    console.log('Started refreshing global application (/) commands...');
    await discordRequest(endpoint, { method: 'PUT', body: Object.values(COMMANDS) });
    console.log('Successfully reloaded global application (/) commands.');
  } catch (err) {
    console.error('Error installing commands:', err);
  }
}

// Run it
installGlobalCommands();
