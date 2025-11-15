import { InteractionResponseType } from 'discord-interactions';
import { extractUserId } from '../../utils/helpers.js';
import { createTriviaQuestionMessage } from '../../utils/messageBuilders.js';
import { createGame } from '../../services/gameState.js';
import { getRandomQuestion } from "../../services/triviaQuestions.js";


//renamed file to trivia due to the removal of commands.

/**
 * Handles the /challenge command
 * Creates a new game and posts an accept button (outdated comment))
 */
//leaving function name as is even though command is renamed to trivia for clarity and to privent potential issues.
export async function handleChallengeCommand(req, res) {
  const { id, data } = req.body;
  const userId = extractUserId(req);
  const objectName = data.options[0].value;

    const question = getRandomQuestion(objectName)
  // Create active game using interaction ID as game ID
  createGame(id, userId, objectName, question);
    //require question from triviaQuestions.js in order to send it to discord.
  

  return res.send({
    type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
    data: createTriviaQuestionMessage(id, question, objectName),
  });
}
