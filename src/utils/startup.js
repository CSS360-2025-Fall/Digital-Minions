import { exec } from 'child_process';
import { promisify } from 'util';
import { discordRequest } from './discord.js';

const execAsync = promisify(exec);

/**
 * Gets the current git commit hash and description
 */
async function getGitCommitInfo() {
  try {
    const { stdout: hash } = await execAsync('git rev-parse HEAD');
    const { stdout: message } = await execAsync('git log -1 --pretty=%B');

    return {
      hash: hash.trim().substring(0, 7), // Short hash
      fullHash: hash.trim(),
      message: message.trim()
    };
  } catch (error) {
    console.error('Error getting git commit info:', error);
    return {
      hash: 'unknown',
      fullHash: 'unknown',
      message: 'Unable to retrieve commit information'
    };
  }
}

/**
 * Gets all guilds the bot is a member of
 */
async function getBotGuilds() {
  try {
    const response = await discordRequest('users/@me/guilds');
    const guilds = await response.json();
    return guilds;
  } catch (error) {
    console.error('Error fetching guilds:', error);
    return [];
  }
}

/**
 * Finds the best channel to post announcements in a guild
 * Priority: system channel > first text channel bot has permission to send in
 */
async function findAnnouncementChannel(guildId) {
  try {
    // Get guild information
    const guildResponse = await discordRequest(`guilds/${guildId}`);
    const guild = await guildResponse.json();

    // Try system channel first (usually the default channel for announcements)
    if (guild.system_channel_id) {
      try {
        // Check if we can send messages there
        const channelResponse = await discordRequest(`channels/${guild.system_channel_id}`);
        await channelResponse.json();
        return guild.system_channel_id;
      } catch (error) {
        console.log(`Cannot access system channel for guild ${guild.name}`);
      }
    }

    // Get all channels in the guild
    const channelsResponse = await discordRequest(`guilds/${guildId}/channels`);
    const channels = await channelsResponse.json();

    // Find first text channel (type 0) that we can send messages to
    // Sort by position to get the top-most channel
    const textChannels = channels
      .filter(ch => ch.type === 0) // GUILD_TEXT
      .sort((a, b) => a.position - b.position);

    if (textChannels.length > 0) {
      return textChannels[0].id;
    }

    return null;
  } catch (error) {
    console.error(`Error finding announcement channel for guild ${guildId}:`, error);
    return null;
  }
}

/**
 * Posts a startup announcement message to a channel
 */
async function postAnnouncementToChannel(channelId, commitInfo) {
  try {
    const message = {
      content: `🤖 **Bot Started**\n` +
               `Commit: \`${commitInfo.hash}\`\n` +
               `Message: ${commitInfo.message}`
    };

    await discordRequest(`channels/${channelId}/messages`, {
      method: 'POST',
      body: message
    });

    return true;
  } catch (error) {
    console.error(`Error posting announcement to channel ${channelId}:`, error);
    return false;
  }
}

/**
 * Announces bot startup to all guilds the bot is in
 */
export async function announceStartup() {
  console.log('Sending startup announcements...');

  const commitInfo = await getGitCommitInfo();
  console.log(`Git commit: ${commitInfo.hash} - ${commitInfo.message}`);

  const guilds = await getBotGuilds();
  console.log(`Found ${guilds.length} guild(s)`);

  if (guilds.length === 0) {
    console.log('No guilds found. Bot may not be added to any servers yet.');
    return;
  }

  let successCount = 0;

  for (const guild of guilds) {
    console.log(`Processing guild: ${guild.name} (${guild.id})`);

    const channelId = await findAnnouncementChannel(guild.id);

    if (!channelId) {
      console.log(`  ⚠️  Could not find suitable channel for ${guild.name}`);
      continue;
    }

    const success = await postAnnouncementToChannel(channelId, commitInfo);

    if (success) {
      console.log(`  ✓ Announcement sent to ${guild.name}`);
      successCount++;
    } else {
      console.log(`  ✗ Failed to send announcement to ${guild.name}`);
    }
  }

  console.log(`Startup announcements complete: ${successCount}/${guilds.length} successful`);
}
