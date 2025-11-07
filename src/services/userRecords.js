// src/services/userRecords.js
import { GAME_RESULTS } from '../constants/index.js';

// In-memory storage for user win/loss records
// NOTE: This is ephemeral and will be cleared on bot restart
// For production, replace with persistent database storage
const userRecords = new Map(); // ← CHANGED TO Map() FOR MODERN JS

/**
 * Initializes a user record if it doesn't exist
 */
function initializeUserRecord(userId) {
  if (!userRecords.has(userId)) {
    userRecords.set(userId, { wins: 0, losses: 0, ties: 0 });
  }
}

/**
 * Updates a user's record with a win, loss, or tie
 */
export function updateUserRecord(userId, result) {
  initializeUserRecord(userId);
  const record = userRecords.get(userId);

  switch (result) {
    case GAME_RESULTS.WIN:
    case "win": // ← SUPPORT BOTH OLD RPS AND NEW TRIVIA
      record.wins++;
      break;
    case GAME_RESULTS.LOSS:
    case "loss":
      record.losses++;
      break;
    case GAME_RESULTS.TIE:
      record.ties++;
      break;
    default:
      console.warn(`Unknown game result: ${result}`);
  }
}

/**
 * Retrieves a user's record
 */
export function getUserRecord(userId) {
  return userRecords.get(userId) || { wins: 0, losses: 0, ties: 0 };
}

/**
 * Calculates win rate for a user
 */
export function calculateWinRate(userId) {
  const record = getUserRecord(userId);
  const totalGames = record.wins + record.losses + record.ties;
  if (totalGames === 0) return "0.0";
  return ((record.wins / totalGames) * 100).toFixed(1);
}

/**
 * Returns all user records (for debugging)
 */
export function getAllRecords() {
  return Object.fromEntries(userRecords);
}

// ←←← FIXED getTriviaRecord — NOW USES userRecords NOT "records"
export function getTriviaRecord(userId) {
  const record = userRecords.get(userId) || { wins: 0, losses: 0, ties: 0 };
  const total = record.wins + record.losses;
  const winRate = total === 0 ? 0 : Math.round((record.wins / total) * 100);

  return {
    wins: record.wins,
    losses: record.losses,
    total,
    winRate,
    ties: record.ties,
  };
}
