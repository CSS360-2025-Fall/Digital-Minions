import {
  ButtonStyleTypes,
  InteractionResponseFlags,
  MessageComponentTypes,
} from 'discord-interactions';
import { COMPONENT_IDS } from '../constants/index.js';
import { t } from '../localization/strings.js';

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

//Below function is not used currently but may be useful in the future. pending peer review. before removing.

/**
 * Creates an action row component
 */
/*export function createActionRow(components) {
  return {
    type: MessageComponentTypes.ACTION_ROW,
    components,
  };
}*/

// Below function is not used currently but may be useful in the future. pending peer review before removing. has been tested without same as above and no issues found.

/**
 * Creates a button component
 */
/*export function createButton(customId, label, style = ButtonStyleTypes.PRIMARY) {
  return {
    type: MessageComponentTypes.BUTTON,
    custom_id: customId,
    label,
    style,
  };
}*/

// Below function is not used currently but may be useful in the future. pending peer review before removing. has been tested without same as above and no issues found.

/**
 * Creates a string select menu component
 */
/*export function createStringSelect(customId, options) {
  return {
    type: MessageComponentTypes.STRING_SELECT,
    custom_id: customId,
    options,
  };
}*/

// Below function is not used currently but may be useful in the future. pending peer review before removing. has been tested without same as above and no issues found.

/**
 * Creates the challenge button message
 */
/*export function createChallengeMessage(userId, gameId) {
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
}*/

// Below function is not used currently but may be useful in the future. pending peer review before removing. has been tested without same as above and no issues found.

/**
 * Creates the choice selection menu (ephemeral)
 */
/*export function createChoiceSelectionMessage(gameId, options) {
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
}*/

/**
 * Creates a simple text message
 */
//remeber using the fuction below so do not remove.
export function createSimpleMessage(content, ephemeral = false) {
  const flags = ephemeral
    ? InteractionResponseFlags.EPHEMERAL | InteractionResponseFlags.IS_COMPONENTS_V2
    : InteractionResponseFlags.IS_COMPONENTS_V2;

  return {
    flags,
    components: [createTextDisplay(content, ephemeral)],
  };
}

// Below function is not used currently but may be useful in the future. pending peer review before removing. has been tested without same as above and no issues found.

/**
 * Creates the game result message
 */
/*export function createResultMessage(resultStr) {
  return {
    flags: InteractionResponseFlags.IS_COMPONENTS_V2,
    components: [createTextDisplay(resultStr)],
  };
}*/
/**
 * This creates the embedded trivia question and the drop down menu for the multiple choice answers to the questions
 */

export function createTriviaQuestionMessage(gameId, question, category = "random", locale = "en") {
    const categoryEmoji = {
        math: "🧮",
        history: "📜",
        science: "🧪",
        sports: "⚽",
        language: "🗣️",
        art: "🎨",
        pop_culture: "🎬",
        random: "❓",
    }[category] || "❓";

    // Normalize category name (replace spaces with underscores, lowercase)
    const categoryKey = category.toLowerCase().replace(/\s+/g, '_');

    // Get localized category name with fallback
    const localizedCategory = t(locale, `categories.${categoryKey}`, category);

    return {
        embeds: [
            {
                title: `${categoryEmoji} **Trivia: ${localizedCategory}**`,
                description: `**${question.question}**`,
                color: 5793266,
                footer: { text: t(locale, 'trivia.embedFooter') },
                timestamp: new Date().toISOString(),
            },
        ],
        components: [
            {
                type: 1, // Action Row
                components: [
                    {
                        type: 3, // String select
                        custom_id: `select_choice_${gameId}`,
                        options: question.options.map((opt, i) => ({
                            label: opt.length > 100 ? opt.substring(0, 97) + "..." : opt,
                            value: opt,
                            description: t(locale, 'trivia.optionLabel', i + 1),
                        })),
                        placeholder: t(locale, 'trivia.placeholder'),
                        min_values: 1,
                        max_values: 1,
                    },
                ],
            },
        ],
    };
}
