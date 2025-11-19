// src/services/gameState.js

// ===== Trivia Score Tracking =====
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

// ===== Category Choices =====
const RPS_CHOICES = {
    math: { description: "Painful, hard, and perhaps clever" },
    history: { description: "The birth of past from a new age" },
    science: { description: "Precise, dangerous, and explosive" },
    sports: { description: "Exciting, energetic and limit pushing" },
    language: { description: "Vi är väldigt ung" },
    art: { description: "Silly, fun yet deliberate" },
    pop_culture: { description: "Wild and fun yet attractive" },
};

export function getChoices() {
    return Object.keys(RPS_CHOICES);
}

// ===== ACTIVE GAME STORAGE =====
const games = new Map();

/**
 * Create a trivia game
 */
export function createGame(gameId, userId, category, question) {
    const game = {
        id: userId,
        category,
        data: {
            question,
        },
        createdAt: Date.now(),
    };

    // Store the game in the Map
    games.set(gameId, game);

    // Auto-clean after 30 seconds
    setTimeout(() => {
        games.delete(gameId);
    }, 30 * 1000);

    return gameId;
}



/**
 * Retrieve game by ID
 */
export function getGame(gameId) {
    return games.get(gameId);
}

/**
 * Delete game
 */
export function deleteGame(gameId) {
    games.delete(gameId);
}

/**
 * Debug helper
 */
//possible dead code below but unknown due to it saying debug helper
export function getAllGames() {
    return Object.fromEntries(games.entries());
}
