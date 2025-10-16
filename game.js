// commands.js - Add this to your existing commands array
export const CHALLENGE_BOT_COMMAND = {
  name: 'challenge-bot',
  description: 'Challenge the bot to a trivia game!',
  options: [
    {
      type: 3, // STRING type
      name: 'difficulty',
      description: 'Choose bot difficulty',
      required: true,
      choices: [
        { name: 'Easy', value: 'easy' },
        { name: 'Medium', value: 'medium' },
        { name: 'Hard', value: 'hard' }
      ]
    },
    {
      type: 4, // INTEGER type
      name: 'rounds',
      description: 'Number of rounds (1-10)',
      required: false,
      min_value: 1,
      max_value: 10
    }
  ]
};

// triviaQuestions.js - Sample trivia questions database
export const triviaQuestions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    correct: 1
  },
  {
    question: "What is 2 + 2?",
    options: ["3", "4", "5", "6"],
    correct: 1
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Venus", "Mars", "Jupiter", "Saturn"],
    correct: 1
  },
  {
    question: "Who painted the Mona Lisa?",
    options: ["Van Gogh", "Picasso", "Leonardo da Vinci", "Michelangelo"],
    correct: 2
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: 3
  },
  {
    question: "In what year did World War II end?",
    options: ["1943", "1944", "1945", "1946"],
    correct: 2
  },
  {
    question: "What is the smallest prime number?",
    options: ["0", "1", "2", "3"],
    correct: 2
  },
  {
    question: "Which programming language is known for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    correct: 1
  },
  {
    question: "What does CPU stand for?",
    options: ["Central Process Unit", "Central Processing Unit", "Computer Personal Unit", "Central Processor Unity"],
    correct: 1
  },
  {
    question: "Which company created the iPhone?",
    options: ["Samsung", "Google", "Apple", "Microsoft"],
    correct: 2
  }
];

// botChallenge.js - Main bot challenge logic
import { triviaQuestions } from './triviaQuestions.js';

// Active games storage (in-memory for now)
const activeGames = new Map();

// Bot AI logic - determines if bot gets answer correct based on difficulty
function botSelectsAnswer(correctIndex, difficulty) {
  const random = Math.random();
  let correctProbability;

  switch(difficulty) {
    case 'easy':
      correctProbability = 0.33;
      break;
    case 'medium':
      correctProbability = 0.6;
      break;
    case 'hard':
      correctProbability = 0.8;
      break;
    default:
      correctProbability = 0.5;
  }

  // Bot gets it right based on probability
  if (random < correctProbability) {
    return correctIndex;
  }
  
  // Bot gets it wrong - select random wrong answer
  const wrongOptions = [0, 1, 2, 3].filter(i => i !== correctIndex);
  return wrongOptions[Math.floor(Math.random() * wrongOptions.length)];
}

// Get random questions for the game
function getRandomQuestions(count) {
  const shuffled = [...triviaQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

// Create button components for answers
function createAnswerButtons(questionIndex, options) {
  return {
    type: 1,
    components: options.map((option, index) => ({
      type: 2,
      style: 1, // Primary style
      label: option,
      custom_id: `answer_${questionIndex}_${index}`
    }))
  };
}

// Start a new bot challenge game
export async function startBotChallenge(interaction, difficulty, rounds = 5) {
  const userId = interaction.member.user.id;
  
  // Check if user already has an active game
  if (activeGames.has(userId)) {
    return interaction.reply({
      content: '❌ You already have an active game! Finish it first.',
      ephemeral: true
    });
  }

  // Initialize game state
  const questions = getRandomQuestions(rounds);
  const gameState = {
    userId,
    difficulty,
    questions,
    currentRound: 0,
    userScore: 0,
    botScore: 0,
    totalRounds: questions.length,
    startTime: Date.now()
  };

  activeGames.set(userId, gameState);

  // Send first question
  await sendQuestion(interaction, gameState);
}

// Send a question to the user
async function sendQuestion(interaction, gameState) {
  const question = gameState.questions[gameState.currentRound];
  const roundNum = gameState.currentRound + 1;

  const embed = {
    type: 'rich',
    title: `🎮 Bot Challenge - Round ${roundNum}/${gameState.totalRounds}`,
    description: question.question,
    color: 0x5865F2,
    fields: [
      {
        name: '📊 Current Score',
        value: `You: ${gameState.userScore} | Bot: ${gameState.botScore}`,
        inline: false
      },
      {
        name: '🤖 Bot Difficulty',
        value: gameState.difficulty.charAt(0).toUpperCase() + gameState.difficulty.slice(1),
        inline: true
      }
    ],
    footer: {
      text: 'Select your answer below!'
    }
  };

  const buttons = createAnswerButtons(gameState.currentRound, question.options);

  if (gameState.currentRound === 0) {
    await interaction.reply({
      embeds: [embed],
      components: [buttons]
    });
  } else {
    await interaction.editReply({
      embeds: [embed],
      components: [buttons]
    });
  }
}

// Handle user's answer selection
export async function handleAnswer(interaction) {
  const userId = interaction.member.user.id;
  const gameState = activeGames.get(userId);

  if (!gameState) {
    return interaction.reply({
      content: '❌ No active game found. Start one with `/challenge-bot`',
      ephemeral: true
    });
  }

  // Parse the custom_id to get question and answer indices
  const [, questionIndex, answerIndex] = interaction.data.custom_id.split('_').map(Number);

  // Verify this is the current question
  if (questionIndex !== gameState.currentRound) {
    return interaction.reply({
      content: '❌ This question is no longer active.',
      ephemeral: true
    });
  }

  const question = gameState.questions[gameState.currentRound];
  const userAnswer = answerIndex;
  const correctAnswer = question.correct;
  const botAnswer = botSelectsAnswer(correctAnswer, gameState.difficulty);

  // Update scores
  const userCorrect = userAnswer === correctAnswer;
  const botCorrect = botAnswer === correctAnswer;

  if (userCorrect) gameState.userScore++;
  if (botCorrect) gameState.botScore++;

  // Create result message
  const resultEmbed = {
    type: 'rich',
    title: `📝 Round ${gameState.currentRound + 1} Results`,
    color: userCorrect ? 0x57F287 : 0xED4245,
    fields: [
      {
        name: '❓ Question',
        value: question.question,
        inline: false
      },
      {
        name: '✅ Correct Answer',
        value: question.options[correctAnswer],
        inline: false
      },
      {
        name: '👤 Your Answer',
        value: `${question.options[userAnswer]} ${userCorrect ? '✅' : '❌'}`,
        inline: true
      },
      {
        name: '🤖 Bot\'s Answer',
        value: `${question.options[botAnswer]} ${botCorrect ? '✅' : '❌'}`,
        inline: true
      },
      {
        name: '📊 Score',
        value: `You: ${gameState.userScore} | Bot: ${gameState.botScore}`,
        inline: false
      }
    ]
  };

  // Update to next round or end game
  gameState.currentRound++;

  if (gameState.currentRound < gameState.totalRounds) {
    // More rounds to go
    await interaction.update({
      embeds: [resultEmbed],
      components: []
    });

    // Wait 3 seconds before next question
    setTimeout(async () => {
      await sendQuestion(interaction, gameState);
    }, 3000);
  } else {
    // Game over
    await endGame(interaction, gameState, resultEmbed);
  }
}

// End the game and show final results
async function endGame(interaction, gameState, lastResultEmbed) {
  const userId = gameState.userId;
  const userWon = gameState.userScore > gameState.botScore;
  const tie = gameState.userScore === gameState.botScore;
  
  const duration = Math.round((Date.now() - gameState.startTime) / 1000);

  const finalEmbed = {
    type: 'rich',
    title: tie ? '🤝 It\'s a Tie!' : (userWon ? '🎉 You Won!' : '🤖 Bot Wins!'),
    color: tie ? 0xFEE75C : (userWon ? 0x57F287 : 0xED4245),
    description: tie 
      ? 'What an evenly matched game!' 
      : (userWon 
        ? 'Congratulations! You beat the bot!' 
        : 'The bot was victorious this time. Try again!'),
    fields: [
      {
        name: '📊 Final Score',
        value: `**You:** ${gameState.userScore}/${gameState.totalRounds}\n**Bot:** ${gameState.botScore}/${gameState.totalRounds}`,
        inline: true
      },
      {
        name: '🎯 Your Accuracy',
        value: `${Math.round((gameState.userScore / gameState.totalRounds) * 100)}%`,
        inline: true
      },
      {
        name: '⏱️ Duration',
        value: `${duration} seconds`,
        inline: true
      },
      {
        name: '🤖 Bot Difficulty',
        value: gameState.difficulty.charAt(0).toUpperCase() + gameState.difficulty.slice(1),
        inline: true
      }
    ],
    footer: {
      text: 'Want to play again? Use /challenge-bot'
    }
  };

  await interaction.editReply({
    embeds: [lastResultEmbed, finalEmbed],
    components: []
  });

  // Clean up game state
  activeGames.delete(userId);
  
  // TODO: Save game result to database for win-loss tracking
  // This connects to user story #4 "Keep a win-loss record"
  saveGameResult(userId, userWon, tie, gameState);
}

// Save game result (placeholder for database integration)
function saveGameResult(userId, won, tie, gameState) {
  // TODO: Implement database save
  console.log(`Game Result for ${userId}:`, {
    won,
    tie,
    userScore: gameState.userScore,
    botScore: gameState.botScore,
    difficulty: gameState.difficulty,
    rounds: gameState.totalRounds,
    timestamp: new Date().toISOString()
  });
}

// app.js - Integration with your main bot file
// Add this to your existing bot code

import { InteractionType, InteractionResponseType } from 'discord-interactions';
import { CHALLENGE_BOT_COMMAND } from './commands.js';
import { startBotChallenge, handleAnswer } from './botChallenge.js';

// In your interaction handler:
export async function handleInteraction(interaction) {
  const { type, data } = interaction;

  if (type === InteractionType.APPLICATION_COMMAND) {
    const { name, options } = data;

    if (name === 'challenge-bot') {
      const difficulty = options.find(opt => opt.name === 'difficulty')?.value || 'medium';
      const rounds = options.find(opt => opt.name === 'rounds')?.value || 5;
      
      await startBotChallenge(interaction, difficulty, rounds);
    }
  }

  if (type === InteractionType.MESSAGE_COMPONENT) {
    // Handle button clicks for answers
    if (data.custom_id.startsWith('answer_')) {
      await handleAnswer(interaction);
    }
  }
}

// Don't forget to register the command with Discord!
// Add CHALLENGE_BOT_COMMAND to your commands array when installing commands
