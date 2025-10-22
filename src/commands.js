import 'dotenv/config';
import { installGlobalCommands } from './utils/discord.js';
import { ALL_COMMANDS } from './config/commands.js';

/**
 * Script to register all slash commands with Discord
 * Run this whenever command definitions change
 */
installGlobalCommands(process.env.APP_ID, ALL_COMMANDS);