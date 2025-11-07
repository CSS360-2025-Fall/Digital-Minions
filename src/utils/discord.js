// src/utils/discord.js
import 'dotenv/config';

export async function discordRequest(endpoint, options = {}) {
  const url = 'https://discord.com/api/v10/' + endpoint;

  // FIX: Only stringify body if it exists
  if (options.body) {
    options.body = JSON.stringify(options.body);
  }

  const headers = {
    'Authorization': `Bot ${process.env.DISCORD_TOKEN}`,
    'Content-Type': 'application/json',
    ...options.headers,
  };

  const res = await fetch(url, {
    headers,
    ...options,
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    console.error('Discord API error:', res.status, data);
    throw new Error(JSON.stringify(data));
  }

  if (res.status === 204) return {};

  return res.json();
}
