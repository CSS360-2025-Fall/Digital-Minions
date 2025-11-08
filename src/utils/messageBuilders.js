import {
  ButtonStyleTypes,
  InteractionResponseFlags,
  MessageComponentTypes,
} from 'discord-interactions';
import { COMPONENT_IDS } from '../constants/index.js';


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

// ============================================================
// Message Builder Utilities
// Converted to ES Module syntax (import/export)
// ============================================================

// ✅ Simple text message
export function createSimpleMessage(content) {
  return { content };
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
export function createTriviaQuestionMessage(gameId, question, category = "random") {
  const categoryEmoji = {
    math: "🧮",
    history: "📜",
    science: "🧪",
    sports: "⚽",
    language: "🗣️",
    art: "🎨",
    "pop culture": "🎬",
    random: "❓"
  }[category] || "❓";

  return {
    embeds: [{
      title: `${categoryEmoji} **Trivia: ${category.charAt(0).toUpperCase() + category.slice(1)}**`,
      description: `**${question.question}**`,
      color: 0x5865F2, // Discord blurple
      footer: { text: "You have 30 seconds • Correct answers earn points!" },
      timestamp: new Date().toISOString(),
    }],
    components: [{
      type: 1,
      components: [{
        type: 3, // SELECT_MENU
        custom_id: `select_choice_${gameId}`,
        options: question.options.map((opt, i) => ({
          label: opt.length > 100 ? opt.substring(0, 97) + "..." : opt,
          value: opt,
          description: `Option ${i + 1}`,
        })),
        placeholder: "Choose the correct answer...",
        min_values: 1,
        max_values: 1,
      }],
    }],
  };
}
