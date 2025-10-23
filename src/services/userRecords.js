import { GAME_RESULTS } from '../constants/index.js';

// In-memory storage for user win/loss records
// NOTE: This is ephemeral and will be cleared on bot restart
// For production, replace with persistent database storage
const userRecords = {};

/**
 * Initializes a user record if it doesn't exist
 */
function initializeUserRecord(userId) {
  if (!userRecords[userId]) {
    userRecords[userId] = { wins: 0, losses: 0, ties: 0 };
  }
}

/**
 * Updates a user's record with a win, loss, or tie
 */
export function updateUserRecord(userId, result) {
  initializeUserRecord(userId);

  switch (result) {
    case GAME_RESULTS.WIN:
      userRecords[userId].wins++;
      break;
    case GAME_RESULTS.LOSS:
      userRecords[userId].losses++;
      break;
    case GAME_RESULTS.TIE:
      userRecords[userId].ties++;
      break;
    default:
      console.warn(`Unknown game result: ${result}`);
  }
}

/**
 * Retrieves a user's record
 */
export function getUserRecord(userId) {
  return userRecords[userId] || { wins: 0, losses: 0, ties: 0 };
}

/**
 * Calculates win rate for a user
 */
export function calculateWinRate(userId) {
  const record = getUserRecord(userId);
  const totalGames = record.wins + record.losses + record.ties;

  if (totalGames === 0) {
    return 0;
  }

  return ((record.wins / totalGames) * 100).toFixed(1);
}

/**
 * Returns all user records (primarily for debugging)
 */
export function getAllRecords() {
  return { ...userRecords };
}
