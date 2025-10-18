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

### Core Application Flow

**commands.js** → **app.js** → **game.js** → **utils.js**

1. `commands.js` - Run once to register slash commands with Discord
   - Defines command structures (TEST_COMMAND, CHALLENGE_COMMAND)
   - Calls `InstallGlobalCommands()` to push to Discord API
   - Must be re-run whenever command definitions change

2. `app.js` - Main Express server listening on `/interactions`
   - Handles 3 interaction types: PING, APPLICATION_COMMAND, MESSAGE_COMPONENT
   - Manages in-memory game state via `activeGames` object (keyed by interaction ID)
   - Uses `verifyKeyMiddleware` to cryptographically verify Discord requests

3. `game.js` - Game logic and category relationships
   - `RPSChoices` object maps all 7 categories and their win conditions
   - Each category has 3 wins, 3 losses, and 1 description field
   - `getResult(p1, p2)` determines winner and returns formatted string
   - `getShuffledOptions()` formats choices for Discord select menus

4. `utils.js` - Shared Discord API utilities
   - `DiscordRequest()` - Authenticated fetch wrapper for Discord API v10
   - `InstallGlobalCommands()` - Bulk command registration
   - Helper functions (`getRandomEmoji`, `capitalize`)

### Complete Game Interaction Flow

1. User runs `/challenge <choice>` → creates entry in `activeGames[interactionId]`
2. Bot posts message with "Accept" button (custom_id: `accept_button_{gameId}`)
3. Another user clicks Accept → bot sends ephemeral select menu
4. User selects choice from menu (custom_id: `select_choice_{gameId}`)
5. Bot calculates result via `getResult()`, posts outcome, deletes game from `activeGames`

### Discord API Implementation Details

**Components V2 Usage:**
- All responses use `IS_COMPONENTS_V2` flag
- Component types: `TEXT_DISPLAY`, `ACTION_ROW`, `BUTTON`, `STRING_SELECT`
- Custom IDs track game state by appending game ID to component identifiers

**User ID Extraction Pattern:**
```javascript
// Context 0 = guild/server, 1/2 = DM/group DM
const userId = context === 0 ? req.body.member.user.id : req.body.user.id;
```

**Message Update Pattern:**
- Uses webhook endpoints: `webhooks/{APP_ID}/{token}/messages/{messageId}`
- PATCH method updates existing messages
- DELETE method removes messages
- Ephemeral messages use `InteractionResponseFlags.EPHEMERAL`

### State Management

Games stored in-memory:
```javascript
activeGames[interactionId] = {
  id: userId,          // First player's Discord user ID
  objectName: choice   // First player's category choice
}
```

**Important:** State is ephemeral and cleared on bot restart. For production, replace with database.

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
