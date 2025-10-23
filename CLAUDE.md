# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Discord bot that implements a trivia-themed rock-paper-scissors variant with 7 subject categories: Math, History, Science, Sports, Language, Art, and Pop Culture. Each category beats 3 others with creative "verb" descriptions (e.g., "math out calculates sports"). The bot uses Discord's slash commands and interactive components (buttons and select menus) for gameplay.

## Development Commands

```bash
npm install        # Install dependencies
npm run register   # Register slash commands with Discord API (run after command changes)
npm start          # Start the bot server (production)
npm run dev        # Start with nodemon (auto-restart on file changes)
```

### First-time Setup
1. Create `.env` file with Discord credentials:
   - `APP_ID` - Discord application ID
   - `PUBLIC_KEY` - Public key for request verification
   - `DISCORD_TOKEN` - Bot token for API authentication
2. Run `npm install`
3. Run `npm run register` to register commands
4. Start bot with `npm start` or `npm run dev`

## Architecture

The codebase follows a modular architecture with clear separation of concerns:

```
src/
├── app.js                      # Main Express server (entry point)
├── commands.js                 # Command registration script
├── constants/
│   └── index.js               # Shared constants and enums
├── config/
│   └── commands.js            # Discord command definitions
├── handlers/
│   ├── commands/
│   │   ├── index.js          # Command router
│   │   ├── test.js           # /test command handler
│   │   ├── challenge.js      # /challenge command handler
│   │   ├── rules.js          # /rules command handler
│   │   └── record.js         # /record command handler
│   └── components/
│       ├── index.js          # Component router
│       ├── buttons.js        # Accept button handler
│       └── selectMenus.js    # Choice selection handler
├── services/
│   ├── game.js               # Game logic and rules
│   ├── gameState.js          # Active game state management
│   └── userRecords.js        # Win/loss record tracking
└── utils/
    ├── discord.js            # Discord API wrapper
    ├── helpers.js            # Common utility functions
    └── messageBuilders.js    # Discord message component builders
```

### Core Components

1. **app.js** - Main Express server listening on `/interactions`
   - Routes interactions to appropriate handlers
   - Handles 3 interaction types: PING, APPLICATION_COMMAND, MESSAGE_COMPONENT
   - Uses `verifyKeyMiddleware` to cryptographically verify Discord requests
   - Clean orchestrator with minimal business logic

2. **commands.js** - Run once to register slash commands with Discord
   - Loads command definitions from `config/commands.js`
   - Calls `installGlobalCommands()` to push to Discord API
   - Must be re-run whenever command definitions change

3. **handlers/** - Request handlers organized by type
   - **commands/**: Individual handlers for each slash command
   - **components/**: Handlers for interactive components (buttons, menus)
   - Each handler is a focused, single-purpose function

4. **services/** - Business logic and state management
   - **game.js**: Game rules, win conditions, result calculation
   - **gameState.js**: In-memory active game storage
   - **userRecords.js**: Win/loss record tracking and statistics

5. **utils/** - Reusable utilities
   - **discord.js**: Authenticated Discord API requests
   - **helpers.js**: Common functions (user ID extraction, emoji, capitalize)
   - **messageBuilders.js**: Discord component factory functions

6. **config/** - Configuration and definitions
   - **commands.js**: Discord command structures and options

7. **constants/** - Shared constants
   - Component ID prefixes, command names, result types, context types

### Complete Game Interaction Flow

1. User runs `/challenge <choice>` → handled by `handlers/commands/challenge.js`
   - Extracts user ID and choice
   - Creates game entry via `services/gameState.js`
   - Returns challenge message with Accept button

2. Bot posts message with "Accept" button (custom_id: `accept_button_{gameId}`)

3. Another user clicks Accept → handled by `handlers/components/buttons.js`
   - Sends ephemeral select menu with shuffled choices
   - Deletes original challenge message

4. User selects choice from menu (custom_id: `select_choice_{gameId}`) → handled by `handlers/components/selectMenus.js`
   - Retrieves game from state
   - Calculates result via `services/game.js`
   - Updates user records via `services/userRecords.js`
   - Posts game outcome and deletes game from state

### Discord API Implementation Details

**Components V2 Usage:**
- All responses use `IS_COMPONENTS_V2` flag
- Component types: `TEXT_DISPLAY`, `ACTION_ROW`, `BUTTON`, `STRING_SELECT`
- Custom IDs track game state by appending game ID to component identifiers

**User ID Extraction:**
```javascript
// Centralized in utils/helpers.js
import { extractUserId } from '../utils/helpers.js';
const userId = extractUserId(req);
// Context 0 = guild/server, others = DM contexts
```

**Message Updates:**
```javascript
// Centralized endpoint creation in utils/helpers.js
import { createWebhookEndpoint } from '../utils/helpers.js';
const endpoint = createWebhookEndpoint(appId, token, messageId);
// Pattern: webhooks/{APP_ID}/{token}/messages/{messageId}
```
- PATCH method updates existing messages
- DELETE method removes messages
- Message builders in `utils/messageBuilders.js` handle component structure

### State Management

**Active Games** (`services/gameState.js`):
```javascript
// In-memory storage with clean API
createGame(gameId, userId, objectName)
getGame(gameId)
deleteGame(gameId)
```

**User Records** (`services/userRecords.js`):
```javascript
// Win/loss tracking with statistics
updateUserRecord(userId, result)  // result: 'win', 'loss', or 'tie'
getUserRecord(userId)
calculateWinRate(userId)
```

**Important:** Both use in-memory storage and are cleared on bot restart. For production, replace with persistent database (SQLite, PostgreSQL, etc.).

### Examples Directory

The `examples/` folder contains reference implementations:
- `button.js` - Button component examples
- `selectMenu.js` - Select menu examples
- `modal.js` - Modal dialog examples
- `command.js` - Command structure examples
- `app.js` - Alternative server implementation patterns

These are reference files, not executed code.

## Technical Requirements

- Node.js >= 18.x
- ES modules enabled (`"type": "module"` in package.json)
- All imports must include `.js` extension
- Environment variables required (see First-time Setup)
