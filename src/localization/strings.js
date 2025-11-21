// src/localization/strings.js
// Centralized string definitions for all user-facing text

export const strings = {
    en: {
        // Command responses
        test: {
            greeting: (emoji) => `hello world ${emoji}`,
        },
        trivia: {
            embedTitle: (category) => `🎯 **Trivia: ${category.charAt(0).toUpperCase() + category.slice(1)}**`,
            embedFooter: "You have 30 seconds • Correct answers earn points!",
            placeholder: "Choose the correct answer...",
            optionLabel: (index) => `Option ${index + 1}`,
            correct: (answer) => `✅ **Correct!** The answer is **${answer}**`,
            incorrect: (answer) => `❌ **Incorrect.** The correct answer was **${answer}**`,
            expired: "⏰ This trivia has expired!",
        },
        rules: {
            title: "**Trivia Rules**",
            rule1: "1. Questions are multiple choice.",
            rule2: "2. Correct answers earn you 1 point.",
            rule3: "3. No cheating! Google is off-limits!",
            rule4: "4. The player with the highest score wins.",
        },
        record: {
            title: (userId) => `📊 Trivia Record for <@${userId}>:`,
            correct: (count) => `✅ **Correct:** ${count}`,
            incorrect: (count) => `❌ **Incorrect:** ${count}`,
            accuracy: (percent) => `🏆 **Accuracy:** ${percent}%`,
        },
        errors: {
            processing: "⚠️ An error occurred processing your selection.",
        },
        categories: {
            math: "Math",
            history: "History",
            science: "Science",
            sports: "Sports",
            language: "Language",
            art: "Art",
            pop_culture: "Pop Culture",
            random: "Random",
        },
    },
    es: {
        // Spanish translations
        test: {
            greeting: (emoji) => `hola mundo ${emoji}`,
        },
        trivia: {
            embedTitle: (category) => `🎯 **Trivia: ${category.charAt(0).toUpperCase() + category.slice(1)}**`,
            embedFooter: "¡Tienes 30 segundos • Las respuestas correctas dan puntos!",
            placeholder: "Elige la respuesta correcta...",
            optionLabel: (index) => `Opción ${index + 1}`,
            correct: (answer) => `✅ **¡Correcto!** La respuesta es **${answer}**`,
            incorrect: (answer) => `❌ **Incorrecto.** La respuesta correcta era **${answer}**`,
            expired: "⏰ ¡Esta trivia ha expirado!",
        },
        rules: {
            title: "**Reglas de Trivia**",
            rule1: "1. Las preguntas son de opción múltiple.",
            rule2: "2. Las respuestas correctas te dan 1 punto.",
            rule3: "3. ¡No hagas trampa! Google está prohibido.",
            rule4: "4. El jugador con la puntuación más alta gana.",
        },
        record: {
            title: (userId) => `📊 Récord de Trivia para <@${userId}>:`,
            correct: (count) => `✅ **Correctas:** ${count}`,
            incorrect: (count) => `❌ **Incorrectas:** ${count}`,
            accuracy: (percent) => `🏆 **Precisión:** ${percent}%`,
        },
        errors: {
            processing: "⚠️ Ocurrió un error al procesar tu selección.",
        },
        categories: {
            math: "Matemáticas",
            history: "Historia",
            science: "Ciencia",
            sports: "Deportes",
            language: "Idioma",
            art: "Arte",
            pop_culture: "Cultura Pop",
            random: "Aleatorio",
        },
    },
    fr: {
        // French translations
        test: {
            greeting: (emoji) => `bonjour monde ${emoji}`,
        },
        trivia: {
            embedTitle: (category) => `🎯 **Trivia: ${category.charAt(0).toUpperCase() + category.slice(1)}**`,
            embedFooter: "Vous avez 30 secondes • Les bonnes réponses rapportent des points!",
            placeholder: "Choisissez la bonne réponse...",
            optionLabel: (index) => `Option ${index + 1}`,
            correct: (answer) => `✅ **Correct!** La réponse est **${answer}**`,
            incorrect: (answer) => `❌ **Incorrect.** La bonne réponse était **${answer}**`,
            expired: "⏰ Ce trivia a expiré!",
        },
        rules: {
            title: "**Règles du Trivia**",
            rule1: "1. Les questions sont à choix multiples.",
            rule2: "2. Les bonnes réponses vous rapportent 1 point.",
            rule3: "3. Pas de triche! Google est interdit!",
            rule4: "4. Le joueur avec le score le plus élevé gagne.",
        },
        record: {
            title: (userId) => `📊 Record de Trivia pour <@${userId}>:`,
            correct: (count) => `✅ **Correctes:** ${count}`,
            incorrect: (count) => `❌ **Incorrectes:** ${count}`,
            accuracy: (percent) => `🏆 **Précision:** ${percent}%`,
        },
        errors: {
            processing: "⚠️ Une erreur s'est produite lors du traitement de votre sélection.",
        },
        categories: {
            math: "Mathématiques",
            history: "Histoire",
            science: "Science",
            sports: "Sports",
            language: "Langue",
            art: "Art",
            pop_culture: "Culture Pop",
            random: "Aléatoire",
        },
    },
};

// Trivia questions organized by category and locale
export const triviaQuestions = {
    en: {
        math: [
            {
                question: "What is 11 x 15?",
                options: ["175", "140", "165", "160"],
                correct: "165",
            },
            {
                question: "What is 7 factorial(7!)?",
                options: ["5,000", "5,500", "5,050", "5,040"],
                correct: "5,040",
            },
            {
                question: "What is the smallest positive number that is both a square and a cube?",
                options: ["2", "3", "1", "0"],
                correct: "1",
            },
            {
                question: "What is the Roman numeral for 100?",
                options: ["L", "C", "D", "M"],
                correct: "C",
            },
            {
                question: "What is the square root of 529?",
                options: ["24", "20", "23", "21"],
                correct: "23",
            },
        ],
        history: [
            {
                question: "Which treaty ended WW1?",
                options: ["Treaty of Paris", "Treaty of Versailles", "Treaty of Ghent", "Treaty of Tordesillas"],
                correct: "Treaty of Versailles",
            },
            {
                question: "What year did the French Revolution begin?",
                options: ["1744", "1740", "1804", "1789"],
                correct: "1789",
            },
            {
                question: "Which empire was ruled by Genghis Khan?",
                options: ["Chinese empire", "Russian empire", "Ottoman empire", "Mongol empire"],
                correct: "Mongol empire",
            },
            {
                question: "Who was the first President of the United States?",
                options: ["Benjamin Franklin", "Thomas Jefferson", "Abraham Lincoln", "George Washington"],
                correct: "George Washington",
            },
        ],
        science: [
            {
                question: "What planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Mercury"],
                correct: "Mars",
            },
            {
                question: "What is the chemical symbol for water?",
                options: ["H2O", "O2", "CO2", "HO2"],
                correct: "H2O",
            },
            {
                question: "Which element has the atomic number 1?",
                options: ["Oxygen", "Hydrogen", "Nitrogen", "Helium"],
                correct: "Hydrogen",
            },
        ],
        sports: [
            {
                question: "How many players are there on a soccer team on the field at once?",
                options: ["9", "10", "11", "12"],
                correct: "11",
            },
            {
                question: "Which country has won the most FIFA World Cup titles in men's soccer?",
                options: ["Germany", "Italy", "Argentina", "Brazil"],
                correct: "Brazil",
            },
        ],
        language: [
            {
                question: "What is the most widely spoken language in the world by native speakers?",
                options: ["English", "Spanish", "Mandarin Chinese", "Hindi"],
                correct: "Mandarin Chinese",
            },
            {
                question: "Which language is the official language of Brazil?",
                options: ["Spanish", "Portuguese", "French", "English"],
                correct: "Portuguese",
            },
        ],
        art: [
            {
                question: "Who painted the Mona Lisa?",
                options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
                correct: "Leonardo da Vinci",
            },
            {
                question: "Which artist is famous for cutting off part of his ear?",
                options: ["Salvador Dalí", "Vincent van Gogh", "Edvard Munch", "Paul Cézanne"],
                correct: "Vincent van Gogh",
            },
        ],
        pop_culture: [
            {
                question: "Which singer is known as the 'King of Pop'?",
                options: ["Elvis Presley", "Prince", "Michael Jackson", "Justin Timberlake"],
                correct: "Michael Jackson",
            },
            {
                question: "Who played Iron Man in the Marvel movies?",
                options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Tom Holland"],
                correct: "Robert Downey Jr.",
            },
        ],
    },
    es: {
        math: [
            {
                question: "¿Cuánto es 11 x 15?",
                options: ["175", "140", "165", "160"],
                correct: "165",
            },
            {
                question: "¿Cuánto es 7 factorial (7!)?",
                options: ["5,000", "5,500", "5,050", "5,040"],
                correct: "5,040",
            },
            {
                question: "¿Cuál es el número positivo más pequeño que es tanto un cuadrado como un cubo?",
                options: ["2", "3", "1", "0"],
                correct: "1",
            },
            {
                question: "¿Cuál es el numeral romano para 100?",
                options: ["L", "C", "D", "M"],
                correct: "C",
            },
            {
                question: "¿Cuál es la raíz cuadrada de 529?",
                options: ["24", "20", "23", "21"],
                correct: "23",
            },
        ],
        history: [
            {
                question: "¿Qué tratado terminó la Primera Guerra Mundial?",
                options: ["Tratado de París", "Tratado de Versalles", "Tratado de Gante", "Tratado de Tordesillas"],
                correct: "Tratado de Versalles",
            },
            {
                question: "¿En qué año comenzó la Revolución Francesa?",
                options: ["1744", "1740", "1804", "1789"],
                correct: "1789",
            },
            {
                question: "¿Qué imperio fue gobernado por Genghis Khan?",
                options: ["Imperio Chino", "Imperio Ruso", "Imperio Otomano", "Imperio Mongol"],
                correct: "Imperio Mongol",
            },
            {
                question: "¿Quién fue el primer presidente de los Estados Unidos?",
                options: ["Benjamin Franklin", "Thomas Jefferson", "Abraham Lincoln", "George Washington"],
                correct: "George Washington",
            },
        ],
        science: [
            {
                question: "¿Qué planeta es conocido como el Planeta Rojo?",
                options: ["Venus", "Marte", "Júpiter", "Mercurio"],
                correct: "Marte",
            },
            {
                question: "¿Cuál es el símbolo químico del agua?",
                options: ["H2O", "O2", "CO2", "HO2"],
                correct: "H2O",
            },
            {
                question: "¿Qué elemento tiene el número atómico 1?",
                options: ["Oxígeno", "Hidrógeno", "Nitrógeno", "Helio"],
                correct: "Hidrógeno",
            },
        ],
        sports: [
            {
                question: "¿Cuántos jugadores hay en un equipo de fútbol en el campo a la vez?",
                options: ["9", "10", "11", "12"],
                correct: "11",
            },
            {
                question: "¿Qué país ha ganado más títulos de la Copa Mundial de la FIFA en fútbol masculino?",
                options: ["Alemania", "Italia", "Argentina", "Brasil"],
                correct: "Brasil",
            },
        ],
        language: [
            {
                question: "¿Cuál es el idioma más hablado en el mundo por hablantes nativos?",
                options: ["Inglés", "Español", "Chino Mandarín", "Hindi"],
                correct: "Chino Mandarín",
            },
            {
                question: "¿Cuál es el idioma oficial de Brasil?",
                options: ["Español", "Portugués", "Francés", "Inglés"],
                correct: "Portugués",
            },
        ],
        art: [
            {
                question: "¿Quién pintó la Mona Lisa?",
                options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Claude Monet"],
                correct: "Leonardo da Vinci",
            },
            {
                question: "¿Qué artista es famoso por cortarse parte de la oreja?",
                options: ["Salvador Dalí", "Vincent van Gogh", "Edvard Munch", "Paul Cézanne"],
                correct: "Vincent van Gogh",
            },
        ],
        pop_culture: [
            {
                question: "¿Qué cantante es conocido como el 'Rey del Pop'?",
                options: ["Elvis Presley", "Prince", "Michael Jackson", "Justin Timberlake"],
                correct: "Michael Jackson",
            },
            {
                question: "¿Quién interpretó a Iron Man en las películas de Marvel?",
                options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Tom Holland"],
                correct: "Robert Downey Jr.",
            },
        ],
    },
    fr: {
        math: [
            {
                question: "Combien font 11 x 15?",
                options: ["175", "140", "165", "160"],
                correct: "165",
            },
            {
                question: "Combien fait 7 factorielle (7!)?",
                options: ["5,000", "5,500", "5,050", "5,040"],
                correct: "5,040",
            },
            {
                question: "Quel est le plus petit nombre positif qui est à la fois un carré et un cube?",
                options: ["2", "3", "1", "0"],
                correct: "1",
            },
            {
                question: "Quel est le chiffre romain pour 100?",
                options: ["L", "C", "D", "M"],
                correct: "C",
            },
            {
                question: "Quelle est la racine carrée de 529?",
                options: ["24", "20", "23", "21"],
                correct: "23",
            },
        ],
        history: [
            {
                question: "Quel traité a mis fin à la Première Guerre mondiale?",
                options: ["Traité de Paris", "Traité de Versailles", "Traité de Gand", "Traité de Tordesillas"],
                correct: "Traité de Versailles",
            },
            {
                question: "En quelle année a commencé la Révolution française?",
                options: ["1744", "1740", "1804", "1789"],
                correct: "1789",
            },
            {
                question: "Quel empire était dirigé par Gengis Khan?",
                options: ["Empire chinois", "Empire russe", "Empire ottoman", "Empire mongol"],
                correct: "Empire mongol",
            },
            {
                question: "Qui était le premier président des États-Unis?",
                options: ["Benjamin Franklin", "Thomas Jefferson", "Abraham Lincoln", "George Washington"],
                correct: "George Washington",
            },
        ],
        science: [
            {
                question: "Quelle planète est connue comme la Planète Rouge?",
                options: ["Vénus", "Mars", "Jupiter", "Mercure"],
                correct: "Mars",
            },
            {
                question: "Quel est le symbole chimique de l'eau?",
                options: ["H2O", "O2", "CO2", "HO2"],
                correct: "H2O",
            },
            {
                question: "Quel élément a le numéro atomique 1?",
                options: ["Oxygène", "Hydrogène", "Azote", "Hélium"],
                correct: "Hydrogène",
            },
        ],
        sports: [
            {
                question: "Combien de joueurs y a-t-il dans une équipe de football sur le terrain à la fois?",
                options: ["9", "10", "11", "12"],
                correct: "11",
            },
            {
                question: "Quel pays a remporté le plus de titres de Coupe du Monde de la FIFA en football masculin?",
                options: ["Allemagne", "Italie", "Argentine", "Brésil"],
                correct: "Brésil",
            },
        ],
        language: [
            {
                question: "Quelle est la langue la plus parlée au monde par des locuteurs natifs?",
                options: ["Anglais", "Espagnol", "Chinois Mandarin", "Hindi"],
                correct: "Chinois Mandarin",
            },
            {
                question: "Quelle est la langue officielle du Brésil?",
                options: ["Espagnol", "Portugais", "Français", "Anglais"],
                correct: "Portugais",
            },
        ],
        art: [
            {
                question: "Qui a peint la Joconde?",
                options: ["Vincent van Gogh", "Léonard de Vinci", "Pablo Picasso", "Claude Monet"],
                correct: "Léonard de Vinci",
            },
            {
                question: "Quel artiste est célèbre pour s'être coupé une partie de l'oreille?",
                options: ["Salvador Dalí", "Vincent van Gogh", "Edvard Munch", "Paul Cézanne"],
                correct: "Vincent van Gogh",
            },
        ],
        pop_culture: [
            {
                question: "Quel chanteur est connu comme le 'Roi de la Pop'?",
                options: ["Elvis Presley", "Prince", "Michael Jackson", "Justin Timberlake"],
                correct: "Michael Jackson",
            },
            {
                question: "Qui a joué Iron Man dans les films Marvel?",
                options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Tom Holland"],
                correct: "Robert Downey Jr.",
            },
        ],
    },
};

// Helper function to get localized string
export function t(locale, path, ...args) {
    const keys = path.split('.');
    let value = strings[locale] || strings.en;

    for (const key of keys) {
        value = value[key];
        if (!value) {
            // Fallback to English if translation missing
            value = strings.en;
            for (const k of keys) {
                value = value[k];
                if (!value) return path; // Return path if not found
            }
            break;
        }
    }

    // If it's a function, call it with arguments
    return typeof value === 'function' ? value(...args) : value;
}

// Get random question from localized question bank
export function getLocalizedQuestion(category = "random", locale = "en") {
    // Normalize category key
    const categoryKey = category.toLowerCase().replace(/\s+/g, '_');

    let availableQuestions = [];

    // Get questions for the specified locale, fallback to English
    const questionBank = triviaQuestions[locale] || triviaQuestions.en;

    if (categoryKey === "random") {
        // Add ALL questions from every category
        for (const cat in questionBank) {
            availableQuestions = availableQuestions.concat(questionBank[cat]);
        }
    } else {
        const catQuestions = questionBank[categoryKey];
        if (catQuestions) {
            availableQuestions = catQuestions;
        }
    }

    if (availableQuestions.length === 0) {
        return null; // no questions
    }

    // Pick random question
    const selectedQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions.length)];

    // Shuffle options
    const shuffled = [...selectedQuestion.options].sort(() => Math.random() - 0.5);

    return {
        question: selectedQuestion.question,
        options: shuffled,
        correct: selectedQuestion.correct,
    };
}

// Get all available locales
export function getAvailableLocales() {
    return Object.keys(strings);
}