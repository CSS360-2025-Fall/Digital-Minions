import { capitalize } from './utils.js';

export function getResult(p1, p2) {
    const gameResult = calculateGameResult(p1, p2);
    return formatResult(gameResult);
}

export function calculateGameResult(p1, p2) {
    let gameResult;
    if (RPSChoices[p1.objectName] && RPSChoices[p1.objectName][p2.objectName]) {
        // o1 wins
        gameResult = {
            win: p1,
            lose: p2,
            verb: RPSChoices[p1.objectName][p2.objectName],
        };
    } else if (
        RPSChoices[p2.objectName] &&
        RPSChoices[p2.objectName][p1.objectName]
    ) {
        // o2 wins
        gameResult = {
            win: p2,
            lose: p1,
            verb: RPSChoices[p2.objectName][p1.objectName],
        };
    } else {
        // tie -- win/lose don't
        gameResult = { win: p1, lose: p2, verb: 'tie' };
    }

    return gameResult;
}

function formatResult(result) {
    const { win, lose, verb } = result;
    return verb === 'tie'
        ? `<@${win.id}> and <@${lose.id}> draw with **${win.objectName}**`
        : `<@${win.id}>'s **${win.objectName}** ${verb} <@${lose.id}>'s **${lose.objectName}**`;
}

// this is just to figure out winner + verb
const RPSChoices = {
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

export function getRPSChoices() {
    return Object.keys(RPSChoices);
}

// Function to fetch shuffled options for select menu
export function getShuffledOptions() {
    const allChoices = getRPSChoices();
    const options = [];

    for (let c of allChoices) {
        // Formatted for select menus
        // https://discord.com/developers/docs/components/reference#string-select-select-option-structure
        options.push({
            label: capitalize(c),
            value: c.toLowerCase(),
            description: RPSChoices[c]['description'],
        });
    }

    return options.sort(() => Math.random() - 0.5);
}
