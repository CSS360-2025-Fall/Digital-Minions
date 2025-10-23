import { CONTEXT_TYPES } from '../constants/index.js';

/**
 * Extracts user ID from Discord request based on context
 * User ID is in different locations for guild vs DM contexts
 */
export function extractUserId(req) {
  const context = req.body.context;
  return context === CONTEXT_TYPES.GUILD
    ? req.body.member.user.id
    : req.body.user.id;
}

/**
 * Creates a webhook endpoint URL for message operations
 */
export function createWebhookEndpoint(appId, token, messageId) {
  return `webhooks/${appId}/${token}/messages/${messageId}`;
}

/**
 * Returns a random emoji from predefined list
 */
export function getRandomEmoji() {
  const emojiList = ['😭','😄','😌','🤓','😎','😤','🤖','😶‍🌫️','🌏','📸','💿','👋','🌊','✨'];
  return emojiList[Math.floor(Math.random() * emojiList.length)];
}

/**
 * Capitalizes the first letter of a string
 */
export function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
