// In-memory storage for active games
// NOTE: This is ephemeral and will be cleared on bot restart
// For production, replace with persistent database storage
const activeGames = {};

export function generateGameId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}
/**
 * Creates a new game with the given ID
 */
export function createGame(userId, data, gameId = generateGameId()) {
  const game = {
    id: gameId,
    userId,
    objectName: data, // ← keeps compatibility with your current selectMenus.js
    createdAt: Date.now(),
  };
  games.set(gameId, game);
}

/**
 * Retrieves a game by ID
 */
export function getGame(gameId) {
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
  delete activeGames[gameId];
}

/**
 * Returns all active games (primarily for debugging)
 */
export function getAllGames() {
  return { ...activeGames };
}

// Track trivia scores per user
const triviaScores = {};

export function recordTriviaResult(userId, correct) {
  if (!triviaScores[userId]) {
    triviaScores[userId] = { correct: 0, incorrect: 0 };
  }
  if (correct) {
    triviaScores[userId].correct += 1;
  } else {
    triviaScores[userId].incorrect += 1;
  }
}

export function getTriviaRecord(userId) {
  return triviaScores[userId] || { correct: 0, incorrect: 0 };
}
