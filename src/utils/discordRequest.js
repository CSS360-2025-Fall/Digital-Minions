import fetch from "node-fetch";

export async function discordRequest(endpoint, options) {
  const baseUrl = "https://discord.com/api/v10/";
  const url = baseUrl + endpoint;

  if (!options.headers) options.headers = {};
  options.headers["Authorization"] = `Bot ${process.env.DISCORD_TOKEN}`;
  options.headers["Content-Type"] = "application/json";

  try {
    const res = await fetch(url, {
      ...options,
      body: options.body ? JSON.stringify(options.body) : undefined,
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("Discord API error:", res.status, text);
    }
    return res;
  } catch (err) {
    console.error("discordRequest failed:", err);
    throw err;
  }
}
