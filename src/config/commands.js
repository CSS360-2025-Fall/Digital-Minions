import { getChoices } from '../services/game.js';
import { capitalize } from '../utils/helpers.js';

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

export const TRIVIA_COMMAND = {
  name: 'trivia',
  description: 'start a trivia challenge by category',
  options: [
    {
      type: 3, // STRING
      name: 'category',
      description: 'Pick your trivia category',
      required: true,
      choices: [
        { name: 'Math', value: 'math' },
        { name: 'History', value: 'history' },
        { name: 'Science', value: 'science' },
        { name: 'Sports', value: 'sports' },
        { name: 'Language', value: 'language' },
        { name: 'Art', value: 'art' },
        { name: 'Pop Culture', value: 'pop_culture' },
      ],
    },
  ],
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 2],
};

export const RULES_COMMAND = {
  name: 'rules',
  description: 'Explains the rules of the game',
  type: 1,
  integration_types: [0, 1],
  contexts: [0, 1, 2],
};

export const RECORD_COMMAND = {
  name: 'record',
  description: 'View win/loss record',
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
