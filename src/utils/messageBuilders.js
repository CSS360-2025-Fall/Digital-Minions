import {
  ButtonStyleTypes,
  InteractionResponseFlags,
  MessageComponentTypes,
} from 'discord-interactions';
import { COMPONENT_IDS } from '../constants/index.js';

/**
 * Creates a text display component
 */
export function createTextDisplay(content, ephemeral = false) {
  const component = {
    type: MessageComponentTypes.TEXT_DISPLAY,
    content,
  };

  if (ephemeral) {
    component.ephemeral = true;
  }

  return component;
}

/**
 * Creates an action row component
 */
export function createActionRow(components) {
  return {
    type: MessageComponentTypes.ACTION_ROW,
    components,
  };
}

/**
 * Creates a button component
 */
export function createButton(customId, label, style = ButtonStyleTypes.PRIMARY) {
  return {
    type: MessageComponentTypes.BUTTON,
    custom_id: customId,
    label,
    style,
  };
}

/**
 * Creates a string select menu component
 */
export function createStringSelect(customId, options) {
  return {
    type: MessageComponentTypes.STRING_SELECT,
    custom_id: customId,
    options,
  };
}

/**
 * Creates the challenge button message
 */
export function createChallengeMessage(userId, gameId) {
  return {
    flags: InteractionResponseFlags.IS_COMPONENTS_V2,
    components: [
      createTextDisplay(`Trivia challenge from <@${userId}>`),
      createActionRow([
        createButton(
          `${COMPONENT_IDS.ACCEPT_BUTTON}${gameId}`,
          'Accept'
        ),
      ]),
    ],
  };
}

/**
 * Creates the choice selection menu (ephemeral)
 */
export function createChoiceSelectionMessage(gameId, options) {
  return {
    flags: InteractionResponseFlags.EPHEMERAL | InteractionResponseFlags.IS_COMPONENTS_V2,
    components: [
      createTextDisplay('What is your object of choice?'),
      createActionRow([
        createStringSelect(
          `${COMPONENT_IDS.SELECT_CHOICE}${gameId}`,
          options
        ),
      ]),
    ],
  };
}

/**
 * Creates a simple text message
 */
// ============================================================
// Message Builder Utilities
// Converted to ES Module syntax (import/export)
// ============================================================

// ✅ Simple text message
export function createSimpleMessage(content) {
  return { content };
}

// ✅ Challenge invitation message
export function createChallengeMessage(userId, id) {
  return {
    content: `<@${userId}> has issued a challenge!`,
    components: [
      {
        type: 1, // action row
        components: [
          {
            type: 2, // button
            style: 1,
            label: 'Accept',
            custom_id: `accept_${id}`,
          },
          {
            type: 2,
            style: 4,
            label: 'Decline',
            custom_id: `decline_${id}`,
          },
        ],
      },
    ],
  };
}

// ✅ Game-result message
export function createGameResultMessage(resultText) {
  return { content: resultText };
}

// ✅ Error message
export function createErrorMessage(errorText) {
  return {
    content: `⚠️ Error: ${errorText}`,
    flags: 64, // ephemeral (visible only to user)
  };
}

// ✅ Trivia question message (new addition)
export function createTriviaQuestionMessage(gameId, question) {
  return {
    content: `🎯 **Trivia Time!**\nGame ID: ${gameId}\n\n**Question:** ${question}`,
  };
}
