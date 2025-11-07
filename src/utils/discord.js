// src/utils/discord.js
import 'dotenv/config';

export async function discordRequest(endpoint, options) {
  // Full URL
  const url = 'https://discord.com/api/v10/' + endpoint;

  // Stringify body if present
  if (options.body) options.body = JSON.stringify(options.body);

  // DEFAULT HEADERS — INCLUDING AUTH ON EVERY REQUEST
  const headers = {
    'Authorization': `Bot ${process.env.DISCORD_TOKEN}`,
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const res = await fetch(url, {
    headers,
    ...options,
  });

  // Throw API errors
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    console.error('Discord API error:', res.status, data);
    throw new Error(JSON.stringify(data));
  }

  // Return if no content
  if (res.status === 204) return {};

  return res.json();
}
