import { COMMANDS } from '../../constants/index.js';
import { handleTestCommand } from './test.js';
import { handleChallengeCommand } from './trivia.js';
import { handleRulesCommand } from './rules.js';
import { handleRecordCommand } from './record.js';
import { handleLanguageCommand } from './language.js';
import { handleLeaderboardCommand } from './leaderboard.js';
import { handleQuoteCommand } from './quote.js';
import { handleJokeCommand } from './joke.js';

/**
 * Command handler registry
 * Maps command names to their handler functions
 */
//required update due to trivia command rename.
const commandHandlers = {
  [COMMANDS.TEST]: handleTestCommand,
  [COMMANDS.TRIVIA]: handleChallengeCommand,
  [COMMANDS.RULES]: handleRulesCommand,
  [COMMANDS.RECORD]: handleRecordCommand,
  [COMMANDS.LANGUAGE]: handleLanguageCommand,
  [COMMANDS.LEADERBOARD]: handleLeaderboardCommand,
  [COMMANDS.QUOTE]: handleQuoteCommand,
  [COMMANDS.JOKE]: handleJokeCommand,
};

/**
 * Routes application commands to their appropriate handlers
 */
export async function handleApplicationCommand(req, res) {
  const { name } = req.body.data;
  const handler = commandHandlers[name];

  if (!handler) {
    console.error(`Unknown command: ${name}`);
    return res.status(400).json({ error: 'unknown command' });
  }

  return handler(req, res);
}
