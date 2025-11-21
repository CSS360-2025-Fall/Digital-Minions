// src/services/gameState.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { getLocalizedQuestion } from '../localization/strings.js';

// Get __dirname equivalent in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ===== Trivia Score Tracking =====
const DATA_DIR = path.join(__dirname, '../../data');
const TRIVIA_SCORES_FILE = path.join(DATA_DIR, 'triviaScores.json');

// Ensure data directory exists
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Load trivia scores from file or initialize empty
let triviaScores = {};
try {
    if (fs.existsSync(TRIVIA_SCORES_FILE)) {
        const data = fs.readFileSync(TRIVIA_SCORES_FILE, 'utf8');
        triviaScores = JSON.parse(data);
        console.log('Loaded trivia scores from file');
    }
} catch (error) {
    console.error('Error loading trivia scores:', error);
    triviaScores = {};
}
/**
 * Question function moved from triviaQuestions
 */
export { getLocalizedQuestion as getRandomQuestion };

// User preferences storage
const userPreferences = new Map();

/**
 * Set user's language preference
 */
export function setUserLocale(userId, locale) {
    userPreferences.set(userId, { locale });
}

/**
 * Get user's language preference (defaults to English)
 */
export function getUserLocale(userId) {
    return userPreferences.get(userId)?.locale || 'en';
}

// Save trivia scores to file
function saveTriviaScores() {
    try {
        fs.writeFileSync(TRIVIA_SCORES_FILE, JSON.stringify(triviaScores, null, 2), 'utf8');
    } catch (error) {
        console.error('Error saving trivia scores:', error);
    }
}

export function recordTriviaResult(userId, isCorrect) {
    if (!triviaScores[userId]) {
        triviaScores[userId] = { correct: 0, incorrect: 0 };
    }
    if (isCorrect) triviaScores[userId].correct++;
    else triviaScores[userId].incorrect++;

    // Persist to disk
    saveTriviaScores();
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
