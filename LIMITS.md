# Limitations

## ESLint Suggestions
### Methodology:

For an initial search into possible syntax errors and other problems in our codebase we used the static analysis tool ESLint to audit our javascript files in their current states. We first went through each javascript file in our source folder, using ESLint individually on all them. We then audited the entire repository with ESLint to ensure we hadn't missed anything.

 In both tests ESLint found the same 3 errors:

    in button.js
       'InteractionResponseFlags' is undefined
    in selectMenu.js
       'InteractionResponseFlags' is undefined
    in  startup.js
        'error' is defined but never used
 
### Error Interpretation:
- _'InteractionResponseFlags'_ is undefined in both __buttons.js__ and __selectMenus.js__

This means that somewhere in __buttons.js__ and __selectMenus.js__, our code is referencing _'InteractionResponseFlags'_, but that variable or import doesn’t exist in our current scope. Since these files are imported from the discord example bot and we haven't altered them in any significant way, we believe these errors may be the result of a false positive. This is because _'InteractionResponseFlags'_ isn't referenced in either __buttons.js__ or __selectMenus.js__, _'InteractionResponseFlags'_ also aids in ephemerality which we have yet to use in any meaningful way. However, we can't be 100% certain that it won't be an issue going forward. Thus, we'll continue investigating just to be sure.

- _'error'_ is defined but never used in __startup.js__

This mean that in __startup.js__ _'error'_ is an unused variable which gets flagged by ESLint to reduce clutter and show unfinished logic. When combing through __startup.js__ we found that all catches had some sort of error handling and weren't intentionally or unintentionally left blank. This is likely a false positive, but we will continue investigating just to be certain. However, in the current scope of our bot's capabilities we have yet to focus on error handling; this might be an issue that leads to tech debt later depending on how we go about error handling for Trivia Bot. 

### Next Steps:

- For the _'InteracionResponseFlags'_ error, we plan on just using the built in __Discord.js__ property "ephemeral: True" instead of using response flags like "InteractionResponseFlags.Ephemeral". If the error persists we could also just explicitly import in __buttons.js__ and __selectMenus.js__.

- For the _'error'_ defined but never used problem, we plan on finding it and handling it if it turns out to be a blank catch from the example bot template, but worst case scenario we can just remove it if necessary to reduce clutter. 

### Conclusion
Overall, the linting audit went over well. It was helpful for highlighting some issues that need to be worked on in the coming sprint. Linting the codebase was an essential part of our post-refactoring limitation assessment as files post-refactor have been trimmed/scaled down for efficiency and easy scalability. We wanted to check this automated refactor to make certain that any new or older syntax errors and bugs didn't persist in the code going forward.

## Memory leak in gameState.js
### Description:
Games that are added to the map exist indefinitely if a game is abandoned.

### Implications:
Memory leak.

### Scope:
Critical bug.

### Status:
Queued for immediate fix.

### Possible steps forward:
Add timer thread that removes games after a certain timeout.

## Concurrency not handled in gameState.js
### Description:
The game storage object does not use any form of locking. It could be written to by multiple users at once.

### Implications:
Potential memory corruption leading to crashes.

### Scope:
Critical bug.

### Status:
Queued for immediate change, alongside the switch to persistent record storage.

### Possible steps forward:
Implement proper locking when we switch to persistent record storage.

## CD Implementation
### Description:
For CD purposes, the bot announces its current commit and commit description every time it starts. It does this in the main channel of every server.

### Implications:
- Spam in servers
- Uses `exec` on the CD server. Currently, commands are hard-coded and do not use environmental variables. If this were to change, there could be risk of command injection.

### Scope:
If the `exec` statements are changed by future devs security issues could arise. Server spam is not acceptable for production.

### Status:
- Left as-is for testing purposes. Node config change is in the queue.

### Possible steps forward:
- Specific node configuration for testing that conditionally includes the announcement function.
- Only announce in the development server.

## Lack of Rate Limit
### Description:
Currently, the bot does not enforce any rate limits on user-triggered actions. This includes:
- Discord API requests
- Button or select menu interactions
- Game creation or acceptance

### Implications:
- Spam risk: Users could repeatedly trigger interactions, creating excessive load on the bot or the Discord API.
- Game state conflicts: Multiple rapid interactions can cause race conditions or an inconsistent in-memory game state.
- API throttling: Excessive requests could exceed Discord’s rate limits, leading to temporary API bans or downtime.

### Scope:
This is an operational problem affecting user interaction at runtime. It does not directly involve sensitive secrets or
environment variables.

### Status:
Currently left as-is during the testing phase. Will be patched before deployment.

### Possible steps forward:
- Add middleware or throttling mechanisms before launch to enforce limits on:
  - Interaction frequency per user
  - Game creation/acceptance rate
  - API request bursts
- Add server-side queuing or cooldowns to prevent spam and ensure fair gameplay.

## Non-persistent User Records
### Description:
The bot currently stores user records (win/loss/tie data) in temporary memory. As a result, once the bot restarts or a user logs out, 
all stored data is lost.

### Implications:
- Loss of progress: Users cannot maintain long-term records or compete on persistent leaderboards.
- Inconsistent analytics: Gameplay statistics and user metrics are unreliable after each session.
- Limited engagement: Players lack motivation to return since progress is erased.
  
### Scope:
This is a functional limitation and has no security risk. This primarily affects user experience and continuity.

### Status:
Intended for early testing to simplify debugging.

### Possible steps forward:
- Connect the bot to a persistent data store (e.g., SQLite, PostgreSQL, or MongoDB).
- Implement CRUD operations for user stats retrieval and updates.
- Optionally sync stats with Discord IDs to ensure persistence across sessions.

## Game in Rock Paper Scissors Mode
### Description:
The bot’s game logic is still based on Rock, Paper, Scissors (RPS) instead of Trivia.
While the user interface references trivia categories, the underlying decision-making still follows the RPS model.

### Implications:
- Functional mismatch: The bot’s behavior does not match the project’s intended trivia gameplay or documentation.
- Unclear outcomes: Players have no way to understand which category “beats” another, reducing clarity and strategy.
- Incomplete testing: Trivia-specific features (question banks, scoring, validation) cannot yet be tested or implemented.
- Requirement gap: The bot does not yet meet the user requirement for a trivia challenge game.
  
### Scope:
This is a functional/design limitation, affecting the core purpose of the bot.

### Status:
Trivia logic has not yet been added. The RPS framework remains for testing the interaction flow.

### Possible steps forward:
- Add a trivia command module and supporting question database.
- Replace the RPS outcome system with trivia question logic (category, question, answer, score).
- Update /rules or help commands to explain trivia gameplay.
- the game logic to support future expansion (e.g., different trivia categories or difficulties).
