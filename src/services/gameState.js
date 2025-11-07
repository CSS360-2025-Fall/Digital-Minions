// src/services/gameState.js
const games = new Map(); // ← THIS WAS MISSING IN YOUR FILE!

export function generateGameId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export function createGame(userId, data, gameId = generateGameId()) {
  const game = {
    id: gameId,
    userId,
    objectName: data, // Keeps compatibility with selectMenus.js
    createdAt: Date.now(),
  };
  games.set(gameId, game);
  //console.log(`Trivia game created: ${gameId} for user ${userId}`);
  return gameId;
}

export function getGame(gameId) {
  return games.get(gameId);
}

export function deleteGame(gameId) {
  games.delete(gameId);
  console.log(`Trivia game deleted: ${gameId}`);
}

// Optional: auto-expire old games (run every 10 minutes)
setInterval(() => {
  const now = Date.now();
  for (const [id, game] of games.entries()) {
    if (now - game.createdAt > 10 * 60 * 1000) { // 10 minutes
      deleteGame(id);
    }
  }
}, 10 * 60 * 1000);
