import { COMMANDS } from '../../constants/index.js';
import { handleTestCommand } from './test.js';
import { handleChallengeCommand } from './challenge.js';
import { handleRulesCommand } from './rules.js';
import { handleRecordCommand } from './record.js';

/**
 * Command handler registry
 * Maps command names to their handler functions
 */
const commandHandlers = {
  [COMMANDS.TEST]: handleTestCommand,
  [COMMANDS.CHALLENGE]: handleChallengeCommand,
  [COMMANDS.RULES]: handleRulesCommand,
  [COMMANDS.RECORD]: handleRecordCommand,
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
