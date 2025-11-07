// src/utils/startup.js
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
      hash: hash.trim().substring(0, 7),
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
    const data = await discordRequest('users/@me/guilds', { method: 'GET' });
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error('Error fetching guilds:', err);
    return [];
  }
}

/**
 * Sends a startup announcement to a channel
 */
async function sendAnnouncement(channelId, commitInfo) {
  try {
    await discordRequest(`channels/${channelId}/messages`, {
      method: 'POST',
      body: {
        content: `**Bot Started!**\nCommit: \`${commitInfo.hash}\`\n${commitInfo.message}`,
      },
    });
    console.log(`  ✓ Announcement sent to channel ${channelId}`);
    return true;
  } catch (err) {
    console.error(`  ✗ Failed to send announcement to ${channelId}:`, err);
    return false;
  }
}

/**
 * Main startup announcement function — NO CHANNEL ID NEEDED
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
    
    try {
      // AUTOMATICALLY FIND FIRST TEXT CHANNEL THE BOT CAN SEND TO
      const channels = await discordRequest(`guilds/${guild.id}/channels`, { method: 'GET' });
      const textChannel = channels
        .filter(c => c.type === 0) // Text channels only
        .find(c => {
          const perms = BigInt(c.permissions || 0);
          return (perms & 0x800n) && (perms & 0x400n); // VIEW_CHANNEL and SEND_MESSAGES
        });

      if (textChannel) {
        const success = await sendAnnouncement(textChannel.id, commitInfo);
        if (success) successCount++;
      } else {
        console.log(`  No writable text channel found in ${guild.name}`);
      }
    } catch (e) {
      console.error(`Failed to get channels for guild ${guild.name}:`, e);
    }
  }

  console.log(`Startup announcements complete: ${successCount}/${guilds.length} successful`);
}
