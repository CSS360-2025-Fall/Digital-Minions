// src/services/gameState.js
const games = new Map();

function generateGameId() {
  return Math.random().toString(36).substring(2, 15);
}

export function createGame(userId, data, gameId = generateGameId()) {
  const game = {
    id: gameId,
    userId,
    data,
    createdAt: Date.now(),
  };
  games.set(gameId, game);

  // ←←← PROPER 30-SECOND TIMEOUT — NO SPAM
  setTimeout(() => {
    if (games.has(gameId)) {
      deleteGame(gameId);
    }
  }, 30 * 1000); // 30 seconds

  return gameId;
}

export function getGame(gameId) {
  return games.get(gameId);
}

export function deleteGame(gameId) {
  games.delete(gameId);
}

// OPTIONAL: AUTO-CLEAN OLD GAMES ON STARTUP
setInterval(() => {
  const now = Date.now();
  for (const [id, game] of games.entries()) {
    if (now - game.createdAt > 60 * 1000) { // 1 minute old
      deleteGame(id);
    }
  }
}, 60 * 1000);

const triviaScores = {};

export function recordTriviaResult(userId, isCorrect) {
  if (!triviaScores[userId]) {
    triviaScores[userId] = { correct: 0, incorrect: 0 };
  }
  if (isCorrect) triviaScores[userId].correct++;
  else triviaScores[userId].incorrect++;
}

export function getTriviaRecord(userId) {
  if (!triviaScores[userId]) {
    triviaScores[userId] = { correct: 0, incorrect: 0 };
  }
  return triviaScores[userId];
}
