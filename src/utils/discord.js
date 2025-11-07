// src/utils/discord.js
import 'dotenv/config';

export async function discordRequest(endpoint, options = {}) {
  const url = 'https://discord.com/api/v10/' + endpoint;

  if (options.body) {
    options.body = JSON.stringify(options.body);
  }

  const headers = {
    Authorization: `Bot ${process.env.DISCORD_TOKEN}`,
    'Content-Type': 'application/json',
    'User-Agent': 'TriviaBot (https://github.com/cyndi/Digital-Minions-JR, v1.1)',  // ←←← FIX
    ...options.headers,
  };

  const controller = new AbortController();  // ←←← FIX: timeout
  const timeout = setTimeout(() => controller.abort(), 10000);

  try {
    const res = await fetch(url, {
      headers,
      signal: controller.signal,
      ...options,
    });

    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      console.error('Discord API error:', res.status, data);
      if (res.status === 429) console.log('Rate limited! Retry later.');
      throw new Error(JSON.stringify(data));
    }

    if (res.status === 204) return {};
    return res.json();
  } finally {
    clearTimeout(timeout);
  }
}
