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
