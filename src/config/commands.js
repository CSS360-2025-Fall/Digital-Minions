import { getChoices } from '../services/gameState.js';
import { capitalize } from '../utils/helpers.js';

//altered getChoiice location to be in gameState.js since that on is taking care of a lot of what game.js does.

/**
 * Creates command choice options from game choices
 */
function createCommandChoices() {
  const choices = getChoices();
  return choices.map((choice) => ({
    name: capitalize(choice),
    value: choice.toLowerCase(),
  }));
}

/**
 * Command definitions for Discord
 */
export const TEST_COMMAND = {
  name: 'test',
  description: 'Basic command',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};
//ONLY RENAMED FUNCTION LOGIC SHOULD BE SAME OR SIMILAR only POSSIBLE CHANGE IS CREATECOMMANDCHOICES() BELLOW.
export const TRIVIA_COMMAND = {
  name: 'trivia',
  description: 'Get a trivia question',
  options: [
    {
      type: 3,
      name: 'object',
      description: 'Pick your object',
      required: true,
      choices: createCommandChoices(),
    },
  ],
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

export const RULES_COMMAND = {
  name: 'rules',
  description: 'Explains the rules of the game',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};
//updated description to be more general.
export const RECORD_COMMAND = {
  name: 'record',
  description: 'View correct/incorrect record',
  options: [
    {
      type: 6, // USER type
      name: 'user',
      description: 'User to view record for (defaults to yourself)',
      required: false,
    },
  ],
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

export const ALL_COMMANDS = [
  TEST_COMMAND,
  TRIVIA_COMMAND,
  RULES_COMMAND,
  RECORD_COMMAND,
];
