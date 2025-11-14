// src/services/gameState.js
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
// In-memory storage for active games
// NOTE: This is ephemeral and will be cleared on bot restart
// For production, replace with persistent database storage
const activeGames = {};

/**
 * Creates a new game with the given ID
 */
export function createGame(gameId, userId, objectName) {
  activeGames[gameId] = {
    id: userId,
    objectName,
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

/**
 * Retrieves a game by ID
 */
export function getGame(gameId) {
  return games.get(gameId);
  return activeGames[gameId];
}

/**
 * Checks if a game exists
 */
export function gameExists(gameId) {
  return gameId in activeGames;
}

/**
 * Deletes a game by ID
 */
export function deleteGame(gameId) {
  games.delete(gameId);
  delete activeGames[gameId];
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
/**
 * Returns all active games (primarily for debugging)
 */
export function getAllGames() {
  return { ...activeGames };
}
