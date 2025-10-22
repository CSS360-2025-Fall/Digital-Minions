import { InteractionResponseType } from 'discord-interactions';
import { createSimpleMessage } from '../../utils/messageBuilders.js';

/**
 * Handles the /rules command
 */
export async function handleRulesCommand(req, res) {
  const rulesText = [
    '**Trivia Rules**',
    '1. Questions are multiple choice.',
    '2. Correct answers earn you 1 point.',
    '3. No cheating! Google is off-limits!',
    '4. The player with the highest score wins.',
  ].join('\n');

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: createSimpleMessage(rulesText, true),
  });
}