import { capitalize } from '../utils/helpers.js';

// Game choices and their win conditions
// Each category beats 3 others with creative verb descriptions
const RPS_CHOICES = {
  math: {
    description: 'Painful, hard, and perhaps clever',
    sports: 'out calculates',
    language: 'confuses',
    science: 'overdoes',
  },
  history: {
    description: 'The birth of past from a new age',
    science: 'Showing it the pain of its past',
    art: 'From taking the fun',
    math: 'outlives',
  },
  science: {
    description: 'percise, dangerous, and explosive',
    pop_culture: 'By bringing the country back to live',
    language: 'Demonstrating its own strong language',
    sports: 'By exploding the feilds with dangerous cemicals',
  },
  sports: {
    description: 'exciting, engergetic and limit pushing',
    history: 'bring the fun back',
    language: 'By creating its own lingo',
    art: 'throw a ball into the canvas',
  },
  language: {
    description: 'Vi ar valdigt ung',
    history: 'No understanding',
    pop_culture: 'Creates new versions of it',
    art: 'generates its next creators',
  },
  art: {
    description: 'Silly, fun yet deliberate',
    pop_culture: 'inspires the next generation',
    math: 'paints its equations to the stars',
    science: 'turns them into their suppliers',
  },
  pop_culture: {
    description: 'Wild and fun yet attractive',
    sports: 'brings the party to',
    history: 'begins the next era of',
    math: 'begins to aid teaching',
  },
};

/**
 * Returns all available game choices
 */
export function getChoices() {
  return Object.keys(RPS_CHOICES);
}

/**
 * Calculates the game result between two players
 */
export function calculateGameResult(p1, p2) {
  // Check if p1 wins
  if (RPS_CHOICES[p1.objectName]?.[p2.objectName]) {
    return {
      win: p1,
      lose: p2,
      verb: RPS_CHOICES[p1.objectName][p2.objectName],
    };
  }

  // Check if p2 wins
  if (RPS_CHOICES[p2.objectName]?.[p1.objectName]) {
    return {
      win: p2,
      lose: p1,
      verb: RPS_CHOICES[p2.objectName][p1.objectName],
    };
  }

  // Tie - both chose the same
  return {
    win: p1,
    lose: p2,
    verb: 'tie',
  };
}

/**
 * Formats the game result as a string
 */
export function formatResult(result) {
  const { win, lose, verb } = result;

  if (verb === 'tie') {
    return `<@${win.id}> and <@${lose.id}> draw with **${win.objectName}**`;
  }

  return `<@${win.id}>'s **${win.objectName}** ${verb} <@${lose.id}>'s **${lose.objectName}**`;
}

/**
 * Calculates result and formats it as a string (convenience function)
 */
export function getResult(p1, p2) {
  const gameResult = calculateGameResult(p1, p2);
  return formatResult(gameResult);
}

/**
 * Returns shuffled options formatted for Discord select menus
 */
export function getShuffledOptions() {
  const allChoices = getChoices();
  const options = allChoices.map((choice) => ({
    label: capitalize(choice),
    value: choice.toLowerCase(),
    description: RPS_CHOICES[choice].description,
  }));

  // Shuffle array
  return options.sort(() => Math.random() - 0.5);
}
