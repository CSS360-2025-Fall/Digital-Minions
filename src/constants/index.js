// Discord API Configuration
export const DISCORD_API_VERSION = 'v10';
export const DISCORD_API_BASE_URL = `https://discord.com/api/${DISCORD_API_VERSION}/`;

// Component ID Prefixes
export const COMPONENT_IDS = {
    //ACCEPT_BUTTON: 'accept_button_', //outdated due to removal of accept button
  SELECT_CHOICE: 'select_choice_', //select choice prefix for trivia answers
};

// Command Names
export const COMMANDS = {
  TEST: 'test',
  TRIVIA: 'trivia', //modifing to trivia
  RULES: 'rules',
  RECORD: 'record',
};

// Game Result Types
//had no effect on any code and used rps logic.

// Context Types (Discord Interaction Contexts)
export const CONTEXT_TYPES = {
  GUILD: 0,        // Server context
  BOT_DM: 1,       // Bot DM context
  PRIVATE_DM: 2,   // Private/Group DM context
};
