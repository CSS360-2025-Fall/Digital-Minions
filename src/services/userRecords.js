/**

//When deleted, it caused errors



// src/services/userRecords.js
import { GAME_RESULTS } from '../constants/index.js';

// In-memory storage for user win/loss records
// NOTE: This is ephemeral and will be cleared on bot restart
// For production, replace with persistent database storage
const userRecords = new Map(); // ← CHANGED TO Map() FOR MODERN JS

/**
 * Initializes a user record if it doesn't exist

function initializeUserRecord(userId) {
  if (!userRecords.has(userId)) {
    userRecords.set(userId, { wins: 0, losses: 0, ties: 0 });
  }
}

/**
 * Updates a user's record with a win, loss, or tie
 


export function updateUserRecord(userId, result) {
  let record = userRecords.get(userId) || { wins: 0, losses: 0, ties: 0 };
  // ... your existing switch ...
  userRecords.set(userId, record);

  // ←←← FIX: Save to file every update
  saveRecords();
}

// ←←← ADD AT BOTTOM
import fs from 'fs';
const FILE = 'records.json';

function saveRecords() {
  try {
    fs.writeFileSync(FILE, JSON.stringify(Object.fromEntries(userRecords)));
  } catch (e) {}
}

// Load on startup (add to top of file or app.js)
try {
  const data = fs.readFileSync(FILE, 'utf8');
  const obj = JSON.parse(data);
  for (const [id, rec] of Object.entries(obj)) {
    userRecords.set(id, rec);
  }
} catch (e) {}

/**
 * Retrieves a user's record
 
export function getUserRecord(userId) {
  return userRecords.get(userId) || { wins: 0, losses: 0, ties: 0 };
}

/**
 * Calculates win rate for a user
 
export function calculateWinRate(userId) {
  const record = getUserRecord(userId);
  const totalGames = record.wins + record.losses + record.ties;
  if (totalGames === 0) return "0.0";
  return ((record.wins / totalGames) * 100).toFixed(1);
}

/**
 * Returns all user records (for debugging)
 
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
