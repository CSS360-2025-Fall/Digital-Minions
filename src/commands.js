// src/commands.js
import 'dotenv/config';
import { discordRequest } from './utils/discord.js';
import { ALL_COMMANDS } from './config/commands.js';  // ← FIXED: import the array directly

// Register all slash commands globally
async function installGlobalCommands() {
  const endpoint = `applications/${process.env.APP_ID}/commands`;

  try {
    console.log('Started refreshing global application (/) commands...');
    // ALL_COMMANDS is already an array — send it directly
    await discordRequest(endpoint, { 
      method: 'PUT', 
      body: ALL_COMMANDS 
    });
    console.log('Successfully reloaded global application (/) commands.');
  } catch (err) {
    console.error('Error installing commands:', err);
  }
}

// Run it
installGlobalCommands();
