import 'dotenv/config';
import { DISCORD_API_BASE_URL } from '../constants/index.js';

/**
 * Makes an authenticated request to the Discord API
 */
export async function discordRequest(endpoint, options = {}) {
  const url = DISCORD_API_BASE_URL + endpoint;

  // Stringify payloads
  if (options.body) {
    options.body = JSON.stringify(options.body);
  }

  // Make request with authentication headers
  const res = await fetch(url, {
    headers: {
      Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
      'Content-Type': 'application/json; charset=UTF-8',
      'User-Agent': 'DiscordBot (https://github.com/discord/discord-example-app, 1.0.0)',
    },
    ...options,
  });

  // Throw on API errors
  if (!res.ok) {
    const data = await res.json();
    console.log(res.status);
    throw new Error(JSON.stringify(data));
  }

  return res;
}

/**
 * Installs global Discord commands for the application
 */
export async function installGlobalCommands(appId, commands) {
  const endpoint = `applications/${appId}/commands`;

  try {
    // Bulk overwrite endpoint: https://discord.com/developers/docs/interactions/application-commands#bulk-overwrite-global-application-commands
    await discordRequest(endpoint, { method: 'PUT', body: commands });
  } catch (err) {
    console.error(err);
  }
}
