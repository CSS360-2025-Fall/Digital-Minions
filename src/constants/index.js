// Discord API Configuration
export const DISCORD_API_VERSION = 'v10';
export const DISCORD_API_BASE_URL = `https://discord.com/api/${DISCORD_API_VERSION}/`;

// Component ID Prefixes
export const COMPONENT_IDS = {
  ACCEPT_BUTTON: 'accept_button_',
  SELECT_CHOICE: 'select_choice_',
};

// Command Names
export const COMMANDS = {
  TEST: 'test',
  CHALLENGE: 'challenge',
  RULES: 'rules',
  RECORD: 'record',
};

// Game Result Types
export const GAME_RESULTS = {
  WIN: 'win',
  LOSS: 'loss',
  TIE: 'tie',
};

// Context Types (Discord Interaction Contexts)
export const CONTEXT_TYPES = {
  GUILD: 0,        // Server context
  BOT_DM: 1,       // Bot DM context
  PRIVATE_DM: 2,   // Private/Group DM context
};
