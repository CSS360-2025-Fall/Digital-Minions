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
        leaderboard: {
            title: "🏆 **Trivia Leaderboard - Top 20**",
            empty: "📊 No trivia records yet in this server. Play some trivia to get on the leaderboard!",
            entry: (medal, userId, accuracy, correct, incorrect) => `${medal} <@${userId}> - **${accuracy}%** (${correct}✅ ${incorrect}❌)`,
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
        leaderboard: {
            title: "🏆 **Tabla de Clasificación de Trivia - Top 20**",
            empty: "📊 Aún no hay registros de trivia en este servidor. ¡Juega trivia para aparecer en la tabla!",
            entry: (medal, userId, accuracy, correct, incorrect) => `${medal} <@${userId}> - **${accuracy}%** (${correct}✅ ${incorrect}❌)`,
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
        leaderboard: {
            title: "🏆 **Classement Trivia - Top 20**",
            empty: "📊 Pas encore de records de trivia sur ce serveur. Jouez au trivia pour apparaître dans le classement!",
            entry: (medal, userId, accuracy, correct, incorrect) => `${medal} <@${userId}> - **${accuracy}%** (${correct}✅ ${incorrect}❌)`,
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
            {
                question: "What is the only even prime number?",
                options: ["2", "4", "0", "6"],
                correct: "2",
            },
            {
                question: "How many prime numbers are between 1 and 20?",
                options: ["4", "10", "9", "8"],
                correct: "8",
            },
            {
                question: "What is the next prime number after 97?",
                options: ["99", "101", "153", "103"],
                correct: "101",
            },
            {
                question: "How many sides does a hexagon have?",
                options: ["5", "6", "7", "8"],
                correct: "6",
            },
            {
                question: "What type of triangle has sides 3,4, and 5?",
                options: ["Isosceles", "Equilateral", "Right", "Scalene"],
                correct: "Right",
            },
            // new question start point:
            {//1
                question: "What is the derivative of ln(x)?",
                options: ["x", "1", "1/x", "x/1"],
                correct: "1/x",
            },
            {//2
                question: "What is the difference between 100 and 245?",
                options: ["144", "150", "145", "146"],
                correct: "145",
            },
            {//3
                question: "What is the next number in the Fibonacci sequence: 1, 1, 2, 3, 5, 8, ?",
                options: ["11", "12", "13", "15"],
                correct: "13",
            },
            {//4
                question: "Which of the following is an obtuse angle?",
                options: ["44", "90", "91", "89"],
                correct: "91",
            },
            {//5
                question: "What percentage is 5/8?",
                options: ["50%", "60.4%", "64.2%", "62.5%"],
                correct: "62.5%",
            },
            {//6
                question: "What is the median of 8,5,6,15,10?",
                options: ["10", "8", "5", "15"],
                correct: "8",
            },
            {//7
                question: "What is the fraction form of 0.55?",
                options: ["1/2", "5/8", "13/20", "11/20"],
                correct: "11/20",
            },
            {//8
                question: "How many sides does an Octagon have?",
                options: ["6", "7", "8", "9"],
                correct: "8",
            },
            {//9
                question: "What is the square root of 961?",
                options: ["30", "31", "32", "33"],
                correct: "31",
            },
            {//10
                question: "What is the sum of angles in a square?",
                options: ["180", "90", "270", "360"],
                correct: "360",
            },
            {//11
                question: "What is the circumference formula for a circle?",
                options: ["πr", "2πr", "πr²", "2πr²"],
                correct: "2πr",
            },
            {//12
                question: "What is the area of a 5x3 rectangle?",
                options: ["26", "25", "15", "10"],
                correct: "15",
            },
            {//13
                question: "What is 67% of 35?",
                options: ["24", "23", "23.45", "23.50"],
                correct: "23.45",
            },
            {//14
                question: "What is the value of pi to the 4th decimal place?",
                options: ["3.1416", "3.1426", "3.1406", "3.1413"],
                correct: "3.1416",
            },
            {//15
                question: "What is 3 to the power of 5?",
                options: ["15", "243", "245", "210"],
                correct: "243",
            },
            {//16
                question: "How many hours does 246 minutes make?",
                options: ["4.0", "4.3", "4.1", "4.2"],
                correct: "4.1",
            },
            {//17
                question: "What is the greatest common divisor of 60 and 80?",
                options: ["2", "30", "20", "10"],
                correct: "20",
            },
            {//18
                question: "If you add the digits of any multiple of 9, what number will the sum always be divisible by?",
                options: ["3", "6", "9", "12"],
                correct: "9",
            },
            {//19
                question: "What number is known as the \"additive identity\”?",
                options: ["1", "0", "10", "2"],
                correct: "0",
            },
            {//20
                question: "Which shape has the largest area for a given perimeter?",
                options: ["Square", "Circle", "triangle", "rectangle"],
                correct: "Circle",
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
            {
                question: "Who wrote the Declaration of Independence?",
                options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Hancock"],
                correct: "Thomas Jefferson",
            },
            {
                question: "Who was the first woman to fly solo across the Atlantic Ocean?",
                options: ["Bessie Coleman", "Amelia Earhart", "Sally Ride", "Harriet Quimby"],
                correct: "Amelia Earhart",
            },
            {
                question: "Who was the longest-reigning British monarch before Queen Elizabeth II?",
                options: ["Queen Victoria", "King George III", "Henry VIII", "Elizabeth I"],
                correct: "Queen Victoria",
            },
            {
                question: "The ancient city of Troy was located in which modern-day country?",
                options: ["Greece", "Italy", "Turkey", "Egypt"],
                correct: "Turkey",
            },
            //new question start point
            {//1
                question: "In what year did World War II end?",
                options: ["1943", "1944", "1945", "1946"],
                correct: "1945",
            },
            {//2
                question: "Who was the first Emperor of Rome?",
                options: ["Julius Caesar", "Augustus", "Nero", "Caligula"],
                correct: "Augustus",
            },
            {//3
                question: "What year did the Berlin Wall fall?",
                options: ["1987", "1988", "1989", "1990"],
                correct: "1989",
            },
            {//4
                question: "Who discovered penicillin?",
                options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Jonas Salk"],
                correct: "Alexander Fleming",
            },
            {//5
                question: "What ancient wonder was located in Alexandria, Egypt?",
                options: ["Hanging Gardens", "Colossus of Rhodes", "Lighthouse", "Temple of Artemis"],
                correct: "Lighthouse",
            },
            {//6
                question: "Who was the first person to circumnavigate the globe?",
                options: ["Christopher Columbus", "Ferdinand Magellan", "Vasco da Gama", "Marco Polo"],
                correct: "Ferdinand Magellan",
            },
            {//7
                question: "Who built the Great Wall of China?",
                options: ["Qin Shi Huang", "Kublai Khan", "Confucius", "Sun Tzu"],
                correct: "Qin Shi Huang",
            },
            {//8
                question: "In what year did India gain independence from British rule?",
                options: ["1945", "1946", "1947", "1948"],
                correct: "1947",
            },
            {//9
                question: "What was the name of the first successful English colony in America?",
                options: ["Plymouth", "Jamestown", "Roanoke", "Boston"],
                correct: "Jamestown",
            },
            {//10
                question: "Who was the Egyptian queen who allied with Julius Caesar and Mark Antony?",
                options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Nefertari"],
                correct: "Cleopatra",
            },
            {//11
                question: "What year did the Titanic sink?",
                options: ["1910", "1911", "1912", "1913"],
                correct: "1912",
            },
            {//12
                question: "What year did the Spanish Armada attempt to invade England?",
                options: ["1568", "1578", "1588", "1598"],
                correct: "1588",
            },
            {//13
                question: "Who was assassinated in Sarajevo in 1914, triggering World War I?",
                options: ["Franz Ferdinand", "Otto von Bismarck", "Kaiser Wilhelm II", "Nicholas II"],
                correct: "Franz Ferdinand",
            },
            {//14
                question: "What was the name of the pandemic that killed millions in the 14th century?",
                options: ["Spanish Flu", "Black Death", "Cholera", "Typhus"],
                correct: "Black Death",
            },
            {//15
                question: "Who led the Haitian Revolution?",
                options: ["Simon Bolivar", "Toussaint Louverture", "Che Guevara", "José Martí"],
                correct: "Toussaint Louverture",
            },
            {//16
                question: "What city was buried by the eruption of Mount Vesuvius in 79 AD?",
                options: ["Athens", "Pompeii", "Carthage", "Babylon"],
                correct: "Pompii",
            },
            {//17
                question: "Who invented the printing press?",
                options: ["Galileo Galilei", "Leonardo da Vinci", "Johannes Gutenberg", "Isaac Newton"],
                correct: "Johannes Gutenberg",
            },
            {//18
                question: "Which ancient civilization invented the wheel?",
                options: ["Egyptians", "Sumerians", "Greeks", "Romans"],
                correct: "Sumerians",
            },
            {//19
                question: "The Rosetta Stone helped historians finally understand what writing system?",
                options: ["Cuneiform", "Mayan script", "Hieroglyphics", "Runes"],
                correct: "Hieroglyphics",
            },
            {//20
                question: "Who was the first President to live in the White House?",
                options: ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"],
                correct: "John Adams",
            }
        ],
        science: [
            {//1
                question: "What planet is known as the Red Planet?",
                options: ["Venus", "Mars", "Jupiter", "Mercury"],
                correct: "Mars",
            },
            {//2
                question: "What is the chemical symbol for water?",
                options: ["H2O", "O2", "CO2", "HO2"],
                correct: "H2O",
            },
            {//3
                question: "Which element has the atomic number 1?",
                options: ["Oxygen", "Hydrogen", "Nitrogen", "Helium"],
                correct: "Hydrogen",
            },
            {//4
                question: "What type of energy is stored in a stretched rubber band?",
                options: ["Thermal energy", "Kinetic energy", "Elastic potential energy", "Nuclear energy"],
                correct: "Elastic potential energy",
            },
            {//5
                question: "Which planet has the most moons in our Solar System?",
                options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                correct: "Saturn",
            },
            {//6
                question: "What is the powerhouse of the cell?",
                options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
                correct: "Mitochondria",
            },
            {//7
                question: "What law states that for every action, there is an equal and opposite reaction?",
                options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Conservation of Energy"],
                correct: "Newton's Third Law",
            },
            {//8
                question: "What particle in an atom has a positive charge?",
                options: ["Neutron", "Electron", "Proton", "Photon"],
                correct: "Proton",
            },
            //new questions start
            {//9
                question: "What is the hardest natural substance on Earth?",
                options: ["Gold", "Iron", "Diamond", "Titanium"],
                correct: "Diamond",
            },
            {//10
                question: "What is the speed of light in a vacuum?",
                options: ["186,000 mph", "186,000 km/s", "300,000 km/s", "300,000 mph"],
                correct: "300,000 km/s",
            },
            {//11
                question: "What gas makes up most of Earth's atmosphere?",
                options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
                correct: "Nitrogen",
            },
            {//12
                question: "How many bones are in the adult human body?",
                options: ["196", "206", "216", "226"],
                correct: "206",
            },
            {//13
                question: "What is the chemical symbol for gold?",
                options: ["Go", "Gd", "Au", "Ag"],
                correct: "Au",
            },
            {//14
                question: "What planet is closest to the Sun?",
                options: ["Venus", "Earth", "Mercury", "Mars"],
                correct: "Mercury",
            },
            {//15
                question: "What is the boiling point of water in Celsius?",
                options: ["90°C", "95°C", "100°C", "105°C"],
                correct: "100°C",
            },
            {//16
                question: "What organ pumps blood through the human body?",
                options: ["Liver", "Lungs", "Heart", "Kidney"],
                correct: "Heart",
            },
            {//17
                question: "What is the largest planet in our solar system?",
                options: ["Saturn", "Neptune", "Jupiter", "Uranus"],
                correct: "Jupiter",
            },
            {//18
                question: "What type of animal is a Komodo dragon?",
                options: ["Snake", "Lizard", "Crocodile", "Dinosaur"],
                correct: "Lizard",
            },
            {//19
                question: "How many hearts does an octopus have?",
                options: ["1", "2", "3", "4"],
                correct: "3",
            },
            {//20
                question: "What is the study of weather called?",
                options: ["Geology", "Meteorology", "Astronomy", "Biology"],
                correct: "Meteorology",
            },
            {//21
                question: "What is the smallest unit of life?",
                options: ["Atom", "Molecule", "Cell", "Tissue"],
                correct: "Cell",
            },
            {//22
                question: "What is dry ice made of?",
                options: ["Frozen water", "Frozen nitrogen", "Frozen oxygen", "Frozen carbon dioxide"],
                correct: "Frozen carbon dioxide",
            },
            {//23
                question: "How long does it take for Earth to orbit the Sun?",
                options: ["30 days", "365 days", "24 hours", "12 months"],
                correct: "365 days",
            },
            {//24
                question: "What is the largest organ in the human body?",
                options: ["Liver", "Brain", "Skin", "Heart"],
                correct: "Skin",
            },
            {//25
                question: "What force keeps us on the ground?",
                options: ["Magnetism", "Gravity", "Friction", "Inertia"],
                correct: "Gravity",
            },
            {//26
                question: "What is the chemical formula for table salt?",
                options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
                correct: "NaCl",
            },
            {//27
                question: "Which blood type is known as the universal donor?",
                options: ["A", "B", "AB", "O"],
                correct: "O",
            },
            {//28
                question: "What vitamin is produced when skin is exposed to sunlight?",
                options: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
                correct: "Vitamin D",
            },
            {//29
                question: "What do we call molten rock beneath the Earth’s surface?",
                options: ["Lava", "Magma", "Basalt", "Granite"],
                correct: "Magma",
            },
            {//30
                question: "Which layer of Earth contains all weather?",
                options: ["Stratosphere", "Mesosphere", "Troposphere", "Thermosphere"],
                correct: "Troposphere",
            },
        ],
        sports: [
            {
                question: "How many players are there on a soccer team on the field at once?",
                options: ["9", "10", "11", "12"],
                correct: "11",
            },
            {
                question: "In what sport would you perform a slam dunk?",
                options: ["Volleyball", "Basketball", "Tennis", "Baseball"],
                correct: "Basketball",
            },
            {
                question: "What country hosted the 2016 Summer Olympics?",
                options: ["China", "Brazil", "United Kingdom", "Japan"],
                correct: "Brazil",
            },
            {
                question: "What is the maximum break in a standard game of snooker?",
                options: ["147", "155", "150", "160"],
                correct: "147",
            },
            {
                question: "Which country has won the most FIFA World Cup titles in men's soccer?",
                options: ["Germany", "Italy", "Argentina", "Brazil"],
                correct: "Brazil",
            },
            {
                question: "In baseball, how many strikes make an out?",
                options: ["2", "3", "4", "5"],
                correct: "3",
            },
            {
                question: "What sport uses the terms ‘birdie’, ‘eagle’, and ‘bogey’?",
                options: ["Tennis", "Badminton", "Golf", "Cricket"],
                correct: "Golf",
            },
            {
                question: "Who has won the most Olympic gold medals of all time?",
                options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Simone Biles"],
                correct: "Michael Phelps",
            },
            {
                question: "Which team won the first Super Bowl in 1967?",
                options: ["Green Bay Packers", "Kansas City Chiefs", "New York Jets", "Dallas Cowboys"],
                correct: "Green Bay Packers",
            },
            {
                question: "What is the distance of a marathon?",
                options: ["24.2 miles", "26.2 miles", "28.2 miles", "30.2 miles"],
                correct: "26.2 miles",
            },
            //start of new questions:
            {//1
                question: "Which team won the Super Bowl in 2000?",
                options: ["Saint Louis Rams", "Los Angeles Rams", "Tennessee Titans", "Indianapolis Colts"],
                correct: "Saint Louis Rams",
            },
            {//2
                question: "What sport is known as 'the beautiful game'?",
                options: ["Basketball", "Soccer", "Tennis", "Cricket"],
                correct: "Soccer",
            },
            {//3
                question: "How many Grand Slam tournaments are there in tennis each year?",
                options: ["2", "3", "4", "5"],
                correct: "4",
            },
            {//4
                question: "What is the national sport of Japan?",
                options: ["Karate", "Judo", "Sumo wrestling", "Kendo"],
                correct: "Sumo wrestling",
            },
            {//5
                question: "What is the term for a score of zero in tennis?",
                options: ["Love", "Nil", "Zero", "Nought"],
                correct: "Love",
            },
            {//6
                question: "What is the only sport to have been played on the moon?",
                options: ["Baseball", "Golf", "Frisbee", "Tennis"],
                correct: "Golf",
            },
            {//7
                question: "How many holes are played in a standard round of golf?",
                options: ["9", "12", "18", "27"],
                correct: "18",
            },
            {//8
                question: "Which boxer was known as 'The Greatest'?",
                options: ["Mike Tyson", "Muhammad Ali", "Joe Frazier", "George Foreman"],
                correct: "Muhammad Ali",
            },
            {//9
                question: "How many NBA championships did Michael Jordan win with the Chicago Bulls?",
                options: ["4", "5", "6", "7"],
                correct: "6",
            },
            {//10
                question: "What is the term for three strikes in a row in bowling?",
                options: ["Turkey", "Eagle", "Hat trick", "Triple"],
                correct: "Turkey",
            },
            {//11
                question: "Which tennis player has won the most Grand Slam singles titles (as of 2024)?",
                options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
                correct: "Novak Djokovic",
            },
            {//12
                question: "Which city is the only one to have won championships in the NFL, MLB, NBA, and NHL in the same year?",
                options: ["None", "Seattle", "Saint Louis", "Atlanta"],
                correct: "None",
            },
            {//13
                question: "In what year did Michael Phelps win his record 8 gold medals in a single Olympics?",
                options: ["2008", "2009", "2007", "2010"],
                correct: "2008",
            },
            {//14
                question: "In American football, how many yards is the offense penalized for a holding call?",
                options: ["10", "15", "5", "20"],
                correct: "10",
            },
            {//15
                question: "Which NBA team did Kobe Bryant play for his entire career?",
                options: ["LA Lakers", "Chicago Bulls", "Philadelphia 76ers", "Minnesota Timberwolves"],
                correct: "LA Lakers",
            },
            {//16
                question: "Which country has won the most Olympic gold medals in hockey (field hockey)?",
                options: ["India", "USA", "China", "Russia"],
                correct: "India",
            },
            {//17
                question: "What sport is known as “the king of sports”?", 
                options: ["Soccer", "Cricket", "Baseball", "Basketball"],
                correct: "Soccer",
            },
            {//18
                question: "Which sport uses a shuttlecock?",
                options: ["Badminton", "Soccer", "Cricket", "Track"],
                correct: "Badminton",
            },
            {//19
                question: "What year was the first modern Olympic Games held?",
                options: ["1890", "1896", "1900", "1897"],
                correct: "1896",
            },
            {//20
                question: "What is the regulation height of a basketball hoop?",
                options: ["10 feet", "10 inches", "11 feet", "11 inches"],
                correct: "10 feet",
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
            {
                question: "What does the word 'bonjour' mean in French?",
                options: ["Good morning", "Goodbye", "Please", "Thank you"],
                correct: "Good morning",
            },
            {
                question: "In the Spanish language, what does the word 'rojo' mean?",
                options: ["Blue", "Red", "Green", "Yellow"],
                correct: "Red",
            },
            {
                question: "Which ancient language is the root of most modern European languages?",
                options: ["Greek", "Latin", "Sanskrit", "Hebrew"],
                correct: "Latin",
            },
            {
                question: "Which language is written from right to left?",
                options: ["Arabic", "Korean", "Hindi", "Greek"],
                correct: "Arabic",
            },
            {
                question: "What is the longest word in the English dictionary (non-technical)?",
                options: [
                    "Antidisestablishmentarianism",
                    "Supercalifragilisticexpialidocious",
                    "Pneumonoultramicroscopicsilicovolcanoconiosis",
                    "Floccinaucinihilipilification"
                ],
                correct: "Pneumonoultramicroscopicsilicovolcanoconiosis",
            },
            {
                question: "What does the word 'aldrig' mean in Swedish?",
                options: ["Always", "Never", "Often", "Or"],
                correct: "Never",
            },
            {
                question: "What does the word 'Usein' mean in Finnish?",
                options: ["Always", "Never", "Often", "Or"],
                correct: "Often",
            },
            {
                question: "What does the word 'Livi' mean in Tongan?",
                options: ["Leave", "Come", "Away", "Child"],
                correct: "Leave",
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
            {
                question: "The painting 'The Starry Night' was created by which artist?",
                options: ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Georgia O’Keeffe"],
                correct: "Vincent van Gogh",
            },
            {
                question: "What is the art movement associated with Salvador Dalí?",
                options: ["Cubism", "Surrealism", "Impressionism", "Expressionism"],
                correct: "Surrealism",
            },
            {
                question: "Which artist is known for the abstract drip paintings in the mid-20th century?",
                options: ["Jackson Pollock", "Andy Warhol", "Wassily Kandinsky", "Henri Matisse"],
                correct: "Jackson Pollock",
            },
            {
                question: "What material did Michelangelo use to carve the statue of David?",
                options: ["Bronze", "Marble", "Granite", "Wood"],
                correct: "Marble",
            },
            {
                question: "The painting 'The Persistence of Memory', featuring melting clocks, was painted by whom?",
                options: ["Salvador Dalí", "René Magritte", "Joan Miró", "Henri Rousseau"],
                correct: "Salvador Dalí",
            },
            {
                question: "Which artist is considered the founder of the Cubist movement?",
                options: ["Pablo Picasso", "Henri Matisse", "Paul Gauguin", "Claude Monet"],
                correct: "Pablo Picasso",
            },
            {
                question: "The term 'Renaissance' refers to a period of renewed interest in which subjects?",
                options: ["Science and Religion", "Art and Learning", "War and Politics", "Trade and Exploration"],
                correct: "Art and Learning",
            },
            {
                question: "What city is home to the Louvre Museum?",
                options: ["Rome", "Paris", "London", "Madrid"],
                correct: "Paris",
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
            {
                question: "What social media app is known for short video clips and viral trends?",
                options: ["Twitter", "TikTok", "Snapchat", "Instagram"],
                correct: "TikTok",
            },
            {
                question: "Which singer released the 2022 album Midnights?",
                options: ["Ariana Grande", "Beyoncé", "Taylor Swift", "Adele"],
                correct: "Taylor Swift",
            },
            {
                question: "In The Office (U.S.), what is the name of the paper company?",
                options: ["Dunder Mifflin", "PaperCo", "Scranton Supply", "Office Depot"],
                correct: "Dunder Mifflin",
            },
            {
                question: "Which film won the Academy Award for Best Picture in 2020?",
                options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
                correct: "Parasite",
            },
            {
                question: "Who voiced Elsa in Disney’s Frozen?",
                options: ["Idina Menzel", "Kristen Bell", "Demi Lovato", "Mandy Moore"],
                correct: "Idina Menzel",
            },
            {
                question: "Which artist painted the album cover for The Beatles’ Sgt. Pepper’s Lonely Hearts Club Band?",
                options: ["Peter Blake", "Andy Warhol", "Roy Lichtenstein", "David Hockney"],
                correct: "Peter Blake",
            },
            {
                question: "Who won the first season of American Idol?",
                options: ["Kelly Clarkson", "Carrie Underwood", "Fantasia Barrino", "Ruben Studdard"],
                correct: "Kelly Clarkson",
            },
            {
                question: "What is the name of the fictional African nation in Black Panther?",
                options: ["Zamunda", "Wakanda", "Narnia", "Latveria"],
                correct: "Wakanda",
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
            {
                question: "¿Cuál es el único número primo par?",
                options: ["2", "4", "0", "6"],
                correct: "2",
            },
            {
                question: "¿Cuántos números primos hay entre 1 y 20?",
                options: ["4", "10", "9", "8"],
                correct: "8",
            },
            {
                question: "¿Cuál es el siguiente número primo después del 97?",
                options: ["99", "101", "153", "103"],
                correct: "101",
            },
            {
                question: "¿Cuántos lados tiene un hexágono?",
                options: ["5", "6", "7", "8"],
                correct: "6",
            },
            {
                question: "¿Qué tipo de triángulo tiene lados de 3, 4 y 5?",
                options: ["Isósceles", "Equilátero", "Rectángulo", "Escaleno"],
                correct: "Rectángulo",
            },
            //start of new questions:
            {//1
                question: "¿Cuál es la derivada de ln(x)?",
                options: ["x", "1", "1/x", "x/1"],
                correct: "1/x",
            },
            {//2
                question: "¿Cuál es la diferencia entre 100 y 245?",
                options: ["144", "150", "145", "146"],
                correct: "145",
            },
            {//3
                question: "¿Cuál es el siguiente número en la secuencia de Fibonacci: 1, 1, 2, 3, 5, 8, ?",
                options: ["11", "12", "13", "15"],
                correct: "13",
            },
            {//4
                question: "¿Cuál de los siguientes es un ángulo obtuso?",
                options: ["44", "90", "91", "89"],
                correct: "91",
            },
            {//5
                question: "¿Qué porcentaje es 5/8?",
                options: ["50%", "60.4%", "64.2%", "62.5%"],
                correct: "62.5%",
            },
            {//6
                question: "¿Cuál es la mediana de 8,5,6,15,10?",
                options: ["10", "8", "5", "15"],
                correct: "8",
            },
            {//7
                question: "¿Cuál es la forma fraccionaria de 0.55?",
                options: ["1/2", "5/8", "13/20", "11/20"],
                correct: "11/20",
            },
            {//8
                question: "¿Cuántos lados tiene un octágono?",
                options: ["6", "7", "8", "9"],
                correct: "8",
            },
            {//9
                question: "¿Cuál es la raíz cuadrada de 961?",
                options: ["30", "31", "32", "33"],
                correct: "31",
            },
            {//10
                question: "¿Cuál es la suma de los ángulos en un cuadrado?",
                options: ["180", "90", "270", "360"],
                correct: "360",
            },
            {//11
                question: "¿Cuál es la fórmula de la circunferencia de un círculo?",
                options: ["πr", "2πr", "πr²", "2πr²"],
                correct: "2πr",
            },
            {//12
                question: "¿Cuál es el área de un rectángulo de 5x3?",
                options: ["26", "25", "15", "10"],
                correct: "15",
            },
            {//13
                question: "¿Cuál es el 67% de 35?",
                options: ["24", "23", "23.45", "23.50"],
                correct: "23.45",
            },
            {//14
                question: "¿Cuál es el valor de pi hasta la cuarta cifra decimal?",
                options: ["3.1416", "3.1426", "3.1406", "3.1413"],
                correct: "3.1416",
            },
            {//15
                question: "¿Cuál es 3 elevado a la potencia de 5?",
                options: ["15", "243", "245", "210"],
                correct: "243",
            },
            {//16
                question: "¿Cuántas horas son 246 minutos?",
                options: ["4.0", "4.3", "4.1", "4.2"],
                correct: "4.1",
            },
            {//17
                question: "¿Cuál es el máximo común divisor de 60 y 80?",
                options: ["2", "30", "20", "10"],
                correct: "20",
            },
            {//18
                question: "Si sumas los dígitos de cualquier múltiplo de 9, ¿por qué número será siempre divisible la suma?",
                options: ["3", "6", "9", "12"],
                correct: "9",
            },
            {//19
                question: "¿Qué número se conoce como la \"identidad aditiva\"?",
                options: ["1", "0", "10", "2"],
                correct: "0",
            },
            {//20
                question: "¿Qué figura tiene el área más grande para un perímetro dado?",
                options: ["Cuadrado", "Círculo", "Triángulo", "Rectángulo"],
                correct: "Círculo",
            },
        ],
        history: [
            {
                question: "¿Qué tratado puso fin a la Primera Guerra Mundial?",
                options: ["Tratado de París", "Tratado de Versalles", "Tratado de Gante", "Tratado de Tordesillas"],
                correct: "Tratado de Versalles",
            },
            {
                question: "¿Cuál fue el nombre del primer asentamiento inglés permanente en América del Norte?",
                options: ["Plymouth", "Jamestown", "Roanoke", "Salem"],
                correct: "Jamestown",
            },
            {
                question: "¿En qué año comenzó la Revolución Francesa?",
                options: ["1744", "1740", "1804", "1789"],
                correct: "1789",
            },
            {
                question: "¿Qué imperio fue gobernado por Genghis Khan?",
                options: ["Imperio chino", "Imperio ruso", "Imperio otomano", "Imperio mongol"],
                correct: "Imperio mongol",
            },
            {
                question: "¿Quién descubrió América en 1492 (para Europa)?",
                options: ["Fernando de Magallanes", "Cristóbal Colón", "Marco Polo", "Vasco da Gama"],
                correct: "Cristóbal Colón",
            },
            {
                question: "¿Quién fue el primer presidente de los Estados Unidos?",
                options: ["Benjamin Franklin", "Thomas Jefferson", "Abraham Lincoln", "George Washington"],
                correct: "George Washington",
            },
            {
                question: "¿Quién escribió la Declaración de Independencia?",
                options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Hancock"],
                correct: "Thomas Jefferson",
            },
            {
                question: "¿Quién fue la primera mujer en volar sola a través del Océano Atlántico?",
                options: ["Bessie Coleman", "Amelia Earhart", "Sally Ride", "Harriet Quimby"],
                correct: "Amelia Earhart",
            },
            {
                question: "¿Quién fue el monarca británico de reinado más largo antes de la reina Isabel II?",
                options: ["Reina Victoria", "Rey Jorge III", "Enrique VIII", "Isabel I"],
                correct: "Reina Victoria",
            },
            {
                question: "¿En qué país actual estaba situada la antigua ciudad de Troya?",
                options: ["Grecia", "Italia", "Turquía", "Egipto"],
                correct: "Turquía",
            },
            //start of new questions:
            {//1
                question: "¿En qué año terminó la Segunda Guerra Mundial?",
                options: ["1943", "1944", "1945", "1946"],
                correct: "1945",
            },
            {//2
                question: "¿Quién fue el primer emperador de Roma?",
                options: ["Julio César", "Augusto", "Nerón", "Calígula"],
                correct: "Augusto",
            },
            {//3
                question: "¿En qué año cayó el Muro de Berlín?",
                options: ["1987", "1988", "1989", "1990"],
                correct: "1989",
            },
            {//4
                question: "¿Quién descubrió la penicilina?",
                options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Jonas Salk"],
                correct: "Alexander Fleming",
            },
            {//5
                question: "¿Qué maravilla antigua estaba ubicada en Alejandría, Egipto?",
                options: ["Jardines Colgantes", "Coloso de Rodas", "Faro", "Templo de Artemisa"],
                correct: "Faro",
            },
            {//6
                question: "¿Quién fue la primera persona en circunnavegar el mundo?",
                options: ["Cristóbal Colón", "Fernando de Magallanes", "Vasco da Gama", "Marco Polo"],
                correct: "Fernando de Magallanes",
            },
            {//7
                question: "¿Quién construyó la Gran Muralla China?",
                options: ["Qin Shi Huang", "Kublai Khan", "Confucio", "Sun Tzu"],
                correct: "Qin Shi Huang",
            },
            {//8
                question: "¿En qué año obtuvo la India su independencia del dominio británico?",
                options: ["1945", "1946", "1947", "1948"],
                correct: "1947",
            },
            {//9
                question: "¿Cuál fue el nombre de la primera colonia inglesa exitosa en América?",
                options: ["Plymouth", "Jamestown", "Roanoke", "Boston"],
                correct: "Jamestown",
            },
            {//10
                question: "¿Quién fue la reina egipcia que se alió con Julio César y Marco Antonio?",
                options: ["Nefertiti", "Cleopatra", "Hatshepsut", "Nefertari"],
                correct: "Cleopatra",
            },
            {//11
                question: "¿En qué año se hundió el Titanic?",
                options: ["1910", "1911", "1912", "1913"],
                correct: "1912",
            },
            {//12
                question: "¿En qué año intentó la Armada Española invadir Inglaterra?",
                options: ["1568", "1578", "1588", "1598"],
                correct: "1588",
            },
            {//13
                question: "¿Quién fue asesinado en Sarajevo en 1914, desencadenando la Primera Guerra Mundial?",
                options: ["Francisco Fernando", "Otto von Bismarck", "Kaiser Guillermo II", "Nicolás II"],
                correct: "Francisco Fernando",
            },
            {//14
                question: "¿Cuál fue el nombre de la pandemia que mató a millones en el siglo XIV?",
                options: ["Gripe Española", "Peste Negra", "Cólera", "Tifus"],
                correct: "Peste Negra",
            },
            {//15
                question: "¿Quién lideró la Revolución Haitiana?",
                options: ["Simón Bolívar", "Toussaint Louverture", "Che Guevara", "José Martí"],
                correct: "Toussaint Louverture",
            },
            {//16
                question: "¿Qué ciudad fue enterrada por la erupción del Monte Vesubio en el año 79 d.C.?",
                options: ["Atenas", "Pompeya", "Cartago", "Babilonia"],
                correct: "Pompeya",
            },
            {//17
                question: "¿Quién inventó la imprenta?",
                options: ["Galileo Galilei", "Leonardo da Vinci", "Johannes Gutenberg", "Isaac Newton"],
                correct: "Johannes Gutenberg",
            },
            {//18
                question: "¿Qué civilización antigua inventó la rueda?",
                options: ["Egipcios", "Sumerios", "Griegos", "Romanos"],
                correct: "Sumerios",
            },
            {//19
                question: "¿La Piedra de Rosetta ayudó a los historiadores a comprender finalmente qué sistema de escritura?",
                options: ["Cuneiforme", "Escritura maya", "Jeroglíficos", "Runas"],
                correct: "Jeroglíficos",
            },
            {//20
                question: "¿Quién fue el primer presidente en vivir en la Casa Blanca?",
                options: ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"],
                correct: "John Adams",
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
            {
                question: "¿Qué tipo de energía se almacena en una banda elástica estirada?",
                options: ["Energía térmica", "Energía cinética", "Energía potencial elástica", "Energía nuclear"],
                correct: "Energía potencial elástica",
            },
            {
                question: "¿Qué planeta tiene más lunas en el Sistema Solar?",
                options: ["Júpiter", "Saturno", "Urano", "Neptuno"],
                correct: "Saturno",
            },
            {
                question: "¿Cuál es la central de energía de la célula?",
                options: ["Núcleo", "Ribosoma", "Mitocondria", "Aparato de Golgi"],
                correct: "Mitocondria",
            },
            {
                question: "¿Qué ley afirma que para cada acción existe una reacción igual y opuesta?",
                options: ["Primera ley de Newton", "Segunda ley de Newton", "Tercera ley de Newton", "Ley de conservación de la energía"],
                correct: "Tercera ley de Newton",
            },
            {
                question: "¿Qué partícula en un átomo tiene carga positiva?",
                options: ["Neutrón", "Electrón", "Protón", "Fotón"],
                correct: "Protón",
            },
            {//9
                question: "¿Cuál es la sustancia natural más dura de la Tierra?",
                options: ["Oro", "Hierro", "Diamante", "Titanio"],
                correct: "Diamante",
            },
            {//10
                question: "¿Cuál es la velocidad de la luz en el vacío?",
                options: ["186,000 mph", "186,000 km/s", "300,000 km/s", "300,000 mph"],
                correct: "300,000 km/s",
            },
            {//11
                question: "¿Qué gas compone la mayor parte de la atmósfera terrestre?",
                options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Hidrógeno"],
                correct: "Nitrógeno",
            },
            {//12
                question: "¿Cuántos huesos tiene el cuerpo humano adulto?",
                options: ["196", "206", "216", "226"],
                correct: "206",
            },
            {//13
                question: "¿Cuál es el símbolo químico del oro?",
                options: ["Go", "Gd", "Au", "Ag"],
                correct: "Au",
            },
            {//14
                question: "¿Qué planeta está más cerca del Sol?",
                options: ["Venus", "Tierra", "Mercurio", "Marte"],
                correct: "Mercurio",
            },
            {//15
                question: "¿Cuál es el punto de ebullición del agua en grados Celsius?",
                options: ["90°C", "95°C", "100°C", "105°C"],
                correct: "100°C",
            },
            {//16
                question: "¿Qué órgano bombea la sangre a través del cuerpo humano?",
                options: ["Hígado", "Pulmones", "Corazón", "Riñón"],
                correct: "Corazón",
            },
            {//17
                question: "¿Cuál es el planeta más grande de nuestro sistema solar?",
                options: ["Saturno", "Neptuno", "Júpiter", "Urano"],
                correct: "Júpiter",
            },
            {//18
                question: "¿Qué tipo de animal es un dragón de Komodo?",
                options: ["Serpiente", "Lagarto", "Cocodrilo", "Dinosaurio"],
                correct: "Lagarto",
            },
            {//19
                question: "¿Cuántos corazones tiene un pulpo?",
                options: ["1", "2", "3", "4"],
                correct: "3",
            },
            {//20
                question: "¿Cómo se llama el estudio del clima?",
                options: ["Geología", "Meteorología", "Astronomía", "Biología"],
                correct: "Meteorología",
            },
            {//21
                question: "¿Cuál es la unidad más pequeña de la vida?",
                options: ["Átomo", "Molécula", "Célula", "Tejido"],
                correct: "Célula",
            },
            {//22
                question: "¿De qué está hecho el hielo seco?",
                options: ["Agua congelada", "Nitrógeno congelado", "Oxígeno congelado", "Dióxido de carbono congelado"],
                correct: "Dióxido de carbono congelado",
            },
            {//23
                question: "¿Cuánto tarda la Tierra en orbitar alrededor del Sol?",
                options: ["30 días", "365 días", "24 horas", "12 meses"],
                correct: "365 días",
            },
            {//24
                question: "¿Cuál es el órgano más grande del cuerpo humano?",
                options: ["Hígado", "Cerebro", "Piel", "Corazón"],
                correct: "Piel",
            },
            {//25
                question: "¿Qué fuerza nos mantiene en el suelo?",
                options: ["Magnetismo", "Gravedad", "Fricción", "Inercia"],
                correct: "Gravedad",
            },
            {//26
                question: "¿Cuál es la fórmula química de la sal de mesa?",
                options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
                correct: "NaCl",
            },
            {//27
                question: "¿Qué tipo de sangre se conoce como donante universal?",
                options: ["A", "B", "AB", "O"],
                correct: "O",
            },
            {//28
                question: "¿Qué vitamina se produce cuando la piel se expone a la luz solar?",
                options: ["Vitamina A", "Vitamina C", "Vitamina D", "Vitamina E"],
                correct: "Vitamina D",
            },
            {//29
                question: "¿Cómo llamamos a la roca fundida bajo la superficie terrestre?",
                options: ["Lava", "Magma", "Basalto", "Granito"],
                correct: "Magma",
            },
            {//30
                question: "¿Qué capa de la Tierra contiene todo el clima?",
                options: ["Estratósfera", "Mesósfera", "Troposfera", "Termósfera"],
                correct: "Troposfera",
            },
        ],
        sports: [
            {
                question: "¿Cuántos jugadores hay en un equipo de fútbol en el campo al mismo tiempo?",
                options: ["9", "10", "11", "12"],
                correct: "11",
            },
            {
                question: "¿En qué deporte realizarías un 'slam dunk'?",
                options: ["Voleibol", "Baloncesto", "Tenis", "Béisbol"],
                correct: "Baloncesto",
            },
            {
                question: "¿Qué país fue sede de los Juegos Olímpicos de Verano de 2016?",
                options: ["China", "Brasil", "Reino Unido", "Japón"],
                correct: "Brasil",
            },
            {
                question: "¿Cuál es la máxima puntuación en una partida estándar de snooker?",
                options: ["147", "155", "150", "160"],
                correct: "147",
            },
            {
                question: "¿Qué país ha ganado más Copas Mundiales de la FIFA en fútbol masculino?",
                options: ["Alemania", "Italia", "Argentina", "Brasil"],
                correct: "Brasil",
            },
            {
                question: "En el béisbol, ¿cuántos strikes hacen un out?",
                options: ["2", "3", "4", "5"],
                correct: "3",
            },
            {
                question: "¿Qué deporte utiliza los términos 'birdie', 'eagle' y 'bogey'?",
                options: ["Tenis", "Bádminton", "Golf", "Críquet"],
                correct: "Golf",
            },
            {
                question: "¿Quién ha ganado más medallas de oro olímpicas en la historia?",
                options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Simone Biles"],
                correct: "Michael Phelps",
            },
            {
                question: "¿Qué equipo ganó el primer Super Bowl en 1967?",
                options: ["Green Bay Packers", "Kansas City Chiefs", "New York Jets", "Dallas Cowboys"],
                correct: "Green Bay Packers",
            },
            {
                question: "¿Cuál es la distancia de un maratón?",
                options: ["24.2 millas", "26.2 millas", "28.2 millas", "30.2 millas"],
                correct: "26.2 millas",
            },
            //new questions
            {//1
                question: "¿Qué equipo ganó el Super Bowl en el año 2000?",
                options: ["Saint Louis Rams", "Los Angeles Rams", "Tennessee Titans", "Indianapolis Colts"],
                correct: "Saint Louis Rams",
            },
            {//2
                question: "¿Qué deporte es conocido como 'el juego bonito'?",
                options: ["Baloncesto", "Fútbol", "Tenis", "Críquet"],
                correct: "Fútbol",
            },
            {//3
                question: "¿Cuántos torneos de Grand Slam hay en tenis cada año?",
                options: ["2", "3", "4", "5"],
                correct: "4",
            },
            {//4
                question: "¿Cuál es el deporte nacional de Japón?",
                options: ["Karate", "Judo", "Sumo", "Kendo"],
                correct: "Sumo",
            },
            {//5
                question: "¿Cuál es el término para un marcador de cero en tenis?",
                options: ["Love", "Nil", "Zero", "Nought"],
                correct: "Love",
            },
            {//6
                question: "¿Cuál es el único deporte que se ha jugado en la luna?",
                options: ["Béisbol", "Golf", "Frisbee", "Tenis"],
                correct: "Golf",
            },
            {//7
                question: "¿Cuántos hoyos se juegan en una ronda estándar de golf?",
                options: ["9", "12", "18", "27"],
                correct: "18",
            },
            {//8
                question: "¿Qué boxeador fue conocido como 'El Más Grande'?",
                options: ["Mike Tyson", "Muhammad Ali", "Joe Frazier", "George Foreman"],
                correct: "Muhammad Ali",
            },
            {//9
                question: "¿Cuántos campeonatos de la NBA ganó Michael Jordan con los Chicago Bulls?",
                options: ["4", "5", "6", "7"],
                correct: "6",
            },
            {//10
                question: "¿Cuál es el término para tres strikes seguidos en boliche?",
                options: ["Turkey", "Eagle", "Hat trick", "Triple"],
                correct: "Turkey",
            },
            {//11
                question: "¿Qué tenista ha ganado más títulos de Grand Slam en individuales (hasta 2024)?",
                options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
                correct: "Novak Djokovic",
            },
            {//12
                question: "¿Qué ciudad es la única que ha ganado campeonatos en la NFL, MLB, NBA y NHL en el mismo año?",
                options: ["Ninguna", "Seattle", "Saint Louis", "Atlanta"],
                correct: "Ninguna",
            },
            {//13
                question: "¿En qué año ganó Michael Phelps su récord de 8 medallas de oro en unos mismos Juegos Olímpicos?",
                options: ["2008", "2009", "2007", "2010"],
                correct: "2008",
            },
            {//14
                question: "En el fútbol americano, ¿cuántas yardas se penaliza a la ofensiva por una falta de 'holding'?",
                options: ["10", "15", "5", "20"],
                correct: "10",
            },
            {//15
                question: "¿En qué equipo de la NBA jugó Kobe Bryant toda su carrera?",
                options: ["LA Lakers", "Chicago Bulls", "Philadelphia 76ers", "Minnesota Timberwolves"],
                correct: "LA Lakers",
            },
            {//16
                question: "¿Qué país ha ganado más medallas de oro olímpicas en hockey (hockey sobre césped)?",
                options: ["India", "EE.UU.", "China", "Rusia"],
                correct: "India",
            },
            {//17
                question: "¿Qué deporte es conocido como 'el rey de los deportes'?",
                options: ["Fútbol", "Críquet", "Béisbol", "Baloncesto"],
                correct: "Fútbol",
            },
            {//18
                question: "¿Qué deporte utiliza un volante (shuttlecock)?",
                options: ["Bádminton", "Fútbol", "Críquet", "Atletismo"],
                correct: "Bádminton",
            },
            {//19
                question: "¿En qué año se celebraron los primeros Juegos Olímpicos modernos?",
                options: ["1890", "1896", "1900", "1897"],
                correct: "1896",
            },        
            {//20
                question: "¿Cuál es la altura reglamentaria de un aro de baloncesto?",
                options: ["10 pies", "10 pulgadas", "11 pies", "11 pulgadas"],
                correct: "10 pies",
            },
        ],
        language: [
            {
                question: "¿Cuál es la lengua más hablada del mundo por hablantes nativos?",
                options: ["Inglés", "Español", "Chino mandarín", "Hindi"],
                correct: "Chino mandarín",
            },
            {
                question: "¿Cuál es el idioma oficial de Brasil?",
                options: ["Español", "Portugués", "Francés", "Inglés"],
                correct: "Portugués",
            },
            {
                question: "¿Qué significa la palabra 'bonjour' en francés?",
                options: ["Buenos días", "Adiós", "Por favor", "Gracias"],
                correct: "Buenos días",
            },
            {
                question: "En español, ¿qué significa la palabra 'rojo'?",
                options: ["Azul", "Rojo", "Verde", "Amarillo"],
                correct: "Rojo",
            },
            {
                question: "¿Qué lengua antigua es la raíz de la mayoría de los idiomas europeos modernos?",
                options: ["Griego", "Latín", "Sánscrito", "Hebreo"],
                correct: "Latín",
            },
            {
                question: "¿Qué idioma se escribe de derecha a izquierda?",
                options: ["Árabe", "Coreano", "Hindi", "Griego"],
                correct: "Árabe",
            },
            {
                question: "¿Cuál es la palabra más larga del diccionario inglés (no técnica)?",
                options: [
                    "Antidisestablishmentarianism",
                    "Supercalifragilisticexpialidocious",
                    "Pneumonoultramicroscopicsilicovolcanoconiosis",
                    "Floccinaucinihilipilification"
                ],
                correct: "Pneumonoultramicroscopicsilicovolcanoconiosis",
            },
            {
                question: "¿Qué significa la palabra 'aldrig' en sueco?",
                options: ["Siempre", "Nunca", "A menudo", "O"],
                correct: "Nunca",
            },
            {
                question: "¿Qué significa la palabra 'Usein' en finlandés?",
                options: ["Siempre", "Nunca", "A menudo", "O"],
                correct: "A menudo",
            },
            {
                question: "¿Qué significa la palabra 'Livi' en tongano?",
                options: ["Irse", "Venir", "Lejos", "Niño"],
                correct: "Irse",
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
            {
                question: "¿Quién creó la pintura 'La noche estrellada'?",
                options: ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Georgia O’Keeffe"],
                correct: "Vincent van Gogh",
            },
            {
                question: "¿Con qué movimiento artístico se asocia a Salvador Dalí?",
                options: ["Cubismo", "Surrealismo", "Impresionismo", "Expresionismo"],
                correct: "Surrealismo",
            },
            {
                question: "¿Qué artista es conocido por las pinturas abstractas de goteo del siglo XX?",
                options: ["Jackson Pollock", "Andy Warhol", "Wassily Kandinsky", "Henri Matisse"],
                correct: "Jackson Pollock",
            },
            {
                question: "¿Qué material usó Miguel Ángel para esculpir la estatua de David?",
                options: ["Bronce", "Mármol", "Granito", "Madera"],
                correct: "Mármol",
            },
            {
                question: "¿Quién pintó 'La persistencia de la memoria', con los relojes derretidos?",
                options: ["Salvador Dalí", "René Magritte", "Joan Miró", "Henri Rousseau"],
                correct: "Salvador Dalí",
            },
            {
                question: "¿Qué artista es considerado el fundador del movimiento cubista?",
                options: ["Pablo Picasso", "Henri Matisse", "Paul Gauguin", "Claude Monet"],
                correct: "Pablo Picasso",
            },
            {
                question: "El término 'Renacimiento' se refiere a un período de renovado interés en qué temas?",
                options: ["Ciencia y religión", "Arte y aprendizaje", "Guerra y política", "Comercio y exploración"],
                correct: "Arte y aprendizaje",
            },
            {
                question: "¿En qué ciudad se encuentra el Museo del Louvre?",
                options: ["Roma", "París", "Londres", "Madrid"],
                correct: "París",
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
            {
                question: "¿Qué aplicación de redes sociales es conocida por videos cortos y tendencias virales?",
                options: ["Twitter", "TikTok", "Snapchat", "Instagram"],
                correct: "TikTok",
            },
            {
                question: "¿Qué cantante lanzó el álbum 'Midnights' en 2022?",
                options: ["Ariana Grande", "Beyoncé", "Taylor Swift", "Adele"],
                correct: "Taylor Swift",
            },
            {
                question: "En The Office (EE. UU.), ¿cómo se llama la compañía papelera?",
                options: ["Dunder Mifflin", "PaperCo", "Scranton Supply", "Office Depot"],
                correct: "Dunder Mifflin",
            },
            {
                question: "¿Qué película ganó el Premio de la Academia a Mejor Película en 2020?",
                options: ["1917", "Joker", "Parásitos", "Érase una vez en Hollywood"],
                correct: "Parásitos",
            },
            {
                question: "¿Quién dio voz a Elsa en Frozen de Disney?",
                options: ["Idina Menzel", "Kristen Bell", "Demi Lovato", "Mandy Moore"],
                correct: "Idina Menzel",
            },
            {
                question: "¿Qué artista pintó la portada del álbum 'Sgt. Pepper's Lonely Hearts Club Band' de The Beatles?",
                options: ["Peter Blake", "Andy Warhol", "Roy Lichtenstein", "David Hockney"],
                correct: "Peter Blake",
            },
            {
                question: "¿Quién ganó la primera temporada de American Idol?",
                options: ["Kelly Clarkson", "Carrie Underwood", "Fantasia Barrino", "Ruben Studdard"],
                correct: "Kelly Clarkson",
            },
            {
                question: "¿Cuál es el nombre de la nación africana ficticia en Black Panther?",
                options: ["Zamunda", "Wakanda", "Narnia", "Latveria"],
                correct: "Wakanda",
            },
        ],
    },
    fr: {
        math: [
            {
                question: "Combien font 11 x 15 ?",
                options: ["175", "140", "165", "160"],
                correct: "165",
            },
            {
                question: "Quelle est la valeur de 7 factorielle (7!) ?",
                options: ["5 000", "5 500", "5 050", "5 040"],
                correct: "5 040",
            },
            {
                question: "Quel est le plus petit nombre positif qui soit à la fois un carré et un cube ?",
                options: ["2", "3", "1", "0"],
                correct: "1",
            },
            {
                question: "Quel est le chiffre romain pour 100 ?",
                options: ["L", "C", "D", "M"],
                correct: "C",
            },
            {
                question: "Quelle est la racine carrée de 529 ?",
                options: ["24", "20", "23", "21"],
                correct: "23",
            },
            {
                question: "Quel est le seul nombre premier pair ?",
                options: ["2", "4", "0", "6"],
                correct: "2",
            },
            {
                question: "Combien y a-t-il de nombres premiers entre 1 et 20 ?",
                options: ["4", "10", "9", "8"],
                correct: "8",
            },
            {
                question: "Quel est le prochain nombre premier après 97 ?",
                options: ["99", "101", "153", "103"],
                correct: "101",
            },
            {
                question: "Combien de côtés possède un hexagone ?",
                options: ["5", "6", "7", "8"],
                correct: "6",
            },
            {
                question: "Quel type de triangle possède des côtés de 3, 4 et 5 ?",
                options: ["Isocèle", "Équilatéral", "Rectangle", "Scalène"],
                correct: "Rectangle",
            },
            //start of new questions:
            {//1
                question: "Quelle est la dérivée de ln(x) ?",
                options: ["x", "1", "1/x", "x/1"],
                correct: "1/x",
            },
            {//2
                question: "Quelle est la différence entre 100 et 245 ?",
                options: ["144", "150", "145", "146"],
                correct: "145",
            },
            {//3
                question: "Quel est le nombre suivant dans la suite de Fibonacci : 1, 1, 2, 3, 5, 8, ?",
                options: ["11", "12", "13", "15"],
                correct: "13",
            },
            {//4
                question: "Lequel des angles suivants est un angle obtus ?",
                options: ["44", "90", "91", "89"],
                correct: "91",
            },
            {//5
                question: "Quel pourcentage représente 5/8 ?",
                options: ["50%", "60.4%", "64.2%", "62.5%"],
                correct: "62.5%",
            },
            {//6
                question: "Quelle est la médiane de 8,5,6,15,10 ?",
                options: ["10", "8", "5", "15"],
                correct: "8",
            },
            {//7
                question: "Quelle est la forme fractionnaire de 0.55 ?",
                options: ["1/2", "5/8", "13/20", "11/20"],
                correct: "11/20",
            },
            {//8
                question: "Combien de côtés a un octogone ?",
                options: ["6", "7", "8", "9"],
                correct: "8",
            },
            {//9
                question: "Quelle est la racine carrée de 961 ?",
                options: ["30", "31", "32", "33"],
                correct: "31",
            },
            {//10
                question: "Quelle est la somme des angles dans un carré ?",
                options: ["180", "90", "270", "360"],
                correct: "360",
            },
            {//11
                 question: "Quelle est la formule de la circonférence d’un cercle ?",
                 options: ["πr", "2πr", "πr²", "2πr²"],
                 correct: "2πr",
            },
            {//12
                 question: "Quelle est l’aire d’un rectangle de 5x3 ?",
                 options: ["26", "25", "15", "10"],
                 correct: "15",
            },
            {//13
                 question: "Quel est 67% de 35 ?",
                 options: ["24", "23", "23.45", "23.50"],
                 correct: "23.45",
            },
            {//14
                 question: "Quelle est la valeur de pi à la quatrième décimale ?",
                 options: ["3.1416", "3.1426", "3.1406", "3.1413"],
                 correct: "3.1416",
            },
            {//15
                 question: "Quel est 3 à la puissance 5 ?",
                 options: ["15", "243", "245", "210"],
                 correct: "243",
            },
            {//16
                 question: "Combien d’heures font 246 minutes ?",
                 options: ["4.0", "4.3", "4.1", "4.2"],
                 correct: "4.1",
            },
            {//17
                 question: "Quel est le plus grand diviseur commun de 60 et 80 ?",
                 options: ["2", "30", "20", "10"],
                 correct: "20",
            },
            {//18
                 question: "Si tu additionnes les chiffres de n’importe quel multiple de 9, par quel nombre la somme sera-t-elle toujours divisible ?",
                 options: ["3", "6", "9", "12"],
                 correct: "9",
            },
            {//19
                 question: "Quel nombre est connu comme « l’identité additive » ?",
                 options: ["1", "0", "10", "2"],
                 correct: "0",
            },
            {//20
                 question: "Quelle figure a la plus grande aire pour un périmètre donné ?",
                 options: ["Carré", "Cercle", "Triangle", "Rectangle"],
                 correct: "Cercle",
            },
        ],

        history: [
            {
                question: "Quel traité a mis fin à la Première Guerre mondiale ?",
                options: ["Traité de Paris", "Traité de Versailles", "Traité de Gand", "Traité de Tordesillas"],
                correct: "Traité de Versailles",
            },
            {
                question: "Quel était le nom du premier établissement anglais permanent en Amérique du Nord ?",
                options: ["Plymouth", "Jamestown", "Roanoke", "Salem"],
                correct: "Jamestown",
            },
            {
                question: "En quelle année a commencé la Révolution française ?",
                options: ["1744", "1740", "1804", "1789"],
                correct: "1789",
            },
            {
                question: "Quel empire a été dirigé par Gengis Khan ?",
                options: ["Empire chinois", "Empire russe", "Empire ottoman", "Empire mongol"],
                correct: "Empire mongol",
            },
            {
                question: "Qui a découvert l’Amérique en 1492 (pour l’Europe) ?",
                options: ["Fernand de Magellan", "Christophe Colomb", "Marco Polo", "Vasco de Gama"],
                correct: "Christophe Colomb",
            },
            {
                question: "Qui fut le premier président des États-Unis ?",
                options: ["Benjamin Franklin", "Thomas Jefferson", "Abraham Lincoln", "George Washington"],
                correct: "George Washington",
            },
            {
                question: "Qui a rédigé la Déclaration d’indépendance ?",
                options: ["George Washington", "Benjamin Franklin", "Thomas Jefferson", "John Hancock"],
                correct: "Thomas Jefferson",
            },
            {
                question: "Quelle femme fut la première à traverser l’Atlantique en solitaire en avion ?",
                options: ["Bessie Coleman", "Amelia Earhart", "Sally Ride", "Harriet Quimby"],
                correct: "Amelia Earhart",
            },
            {
                question: "Quel monarque britannique détint le plus long règne avant la reine Élisabeth II ?",
                options: ["Reine Victoria", "Roi George III", "Henri VIII", "Élisabeth Iʳᵉ"],
                correct: "Reine Victoria",
            },
            {
                question: "Dans quel pays moderne se trouvait l'ancienne ville de Troie ?",
                options: ["Grèce", "Italie", "Turquie", "Égypte"],
                correct: "Turquie",
            },
            //start of new questions
            {//1
                question: "En quelle année la Seconde Guerre mondiale s’est-elle terminée ?",
                options: ["1943", "1944", "1945", "1946"],
                correct: "1945",
            },
            {//2
                question: "Qui fut le premier empereur de Rome ?",
                options: ["Jules César", "Auguste", "Néron", "Caligula"],
                correct: "Auguste",
            },
            {//3
                question: "En quelle année le Mur de Berlin est-il tombé ?",
                options: ["1987", "1988", "1989", "1990"],
                correct: "1989",
            },
            {//4
                question: "Qui a découvert la pénicilline ?",
                options: ["Louis Pasteur", "Alexander Fleming", "Marie Curie", "Jonas Salk"],
                correct: "Alexander Fleming",
            },
            {//5
                question: "Quelle merveille antique se trouvait à Alexandrie, en Égypte ?",
                options: ["Jardins suspendus", "Colosse de Rhodes", "Phare", "Temple d’Artémis"],
                correct: "Phare",
            },
            {//6
                question: "Qui fut la première personne à faire le tour du monde ?",
                options: ["Christophe Colomb", "Fernand de Magellan", "Vasco de Gama", "Marco Polo"],
                correct: "Fernand de Magellan",
            },
            {//7
                question: "Qui a construit la Grande Muraille de Chine ?",
                options: ["Qin Shi Huang", "Kublai Khan", "Confucius", "Sun Tzu"],
                correct: "Qin Shi Huang",
            },
            {//8
                question: "En quelle année l’Inde a-t-elle obtenu son indépendance de la domination britannique ?",
                options: ["1945", "1946", "1947", "1948"],
                correct: "1947",
            },
            {//9
                question: "Quel fut le nom de la première colonie anglaise réussie en Amérique ?",
                options: ["Plymouth", "Jamestown", "Roanoke", "Boston"],
                correct: "Jamestown",
            },
            {//10
                question: "Quelle reine égyptienne s’est alliée avec Jules César et Marc Antoine ?",
                options: ["Néfertiti", "Cléopâtre", "Hatshepsout", "Néfertari"],
                correct: "Cléopâtre",
            },
            {//11
                question: "En quelle année le Titanic a-t-il coulé ?",
                options: ["1910", "1911", "1912", "1913"],
                correct: "1912",
            },
            {//12
                question: "En quelle année l’Armada espagnole a-t-elle tenté d’envahir l’Angleterre ?",
                options: ["1568", "1578", "1588", "1598"],
                correct: "1588",
            },
            {//13
                question: "Qui a été assassiné à Sarajevo en 1914, déclenchant la Première Guerre mondiale ?",
                options: ["François-Ferdinand", "Otto von Bismarck", "Kaiser Guillaume II", "Nicolas II"],
                correct: "François-Ferdinand",
            },
            {//14
                question: "Quel était le nom de la pandémie qui a tué des millions de personnes au XIVe siècle ?",
                options: ["Grippe espagnole", "Peste noire", "Choléra", "Typhus"],
                correct: "Peste noire",
            },
            {//15
                question: "Qui a dirigé la Révolution haïtienne ?",
                options: ["Simón Bolívar", "Toussaint Louverture", "Che Guevara", "José Martí"],
                correct: "Toussaint Louverture",
            },
            {//16
                question: "Quelle ville a été ensevelie par l’éruption du Vésuve en 79 apr. J.-C. ?",
                options: ["Athènes", "Pompéi", "Carthage", "Babylone"],
                correct: "Pompéi",
            },
            {//17
                question: "Qui a inventé l’imprimerie ?",
                options: ["Galilée", "Léonard de Vinci", "Johannes Gutenberg", "Isaac Newton"],
                correct: "Johannes Gutenberg",
            },
            {//18
                question: "Quelle civilisation antique a inventé la roue ?",
                options: ["Égyptiens", "Sumériens", "Grecs", "Romains"],
                correct: "Sumériens",
            },
            {//19
                question: "La pierre de Rosette a aidé les historiens à comprendre enfin quel système d’écriture ?",
                options: ["Cunéiforme", "Écriture maya", "Hiéroglyphes", "Runes"],
                correct: "Hiéroglyphes",
            },
            {//20
                question: "Qui fut le premier président à vivre à la Maison-Blanche ?",
                options: ["George Washington", "John Adams", "Thomas Jefferson", "James Madison"],
                correct: "John Adams",
            },
        ],

        science: [
            {
                question: "Quelle planète est connue comme la planète rouge ?",
                options: ["Vénus", "Mars", "Jupiter", "Mercure"],
                correct: "Mars",
            },
            {
                question: "Quel est le symbole chimique de l’eau ?",
                options: ["H₂O", "O₂", "CO₂", "HO₂"],
                correct: "H₂O",
            },
            {
                question: "Quel élément a le numéro atomique 1 ?",
                options: ["Oxygène", "Hydrogène", "Azote", "Hélium"],
                correct: "Hydrogène",
            },
            {
                question: "Quel type d’énergie est stocké dans un élastique étiré ?",
                options: ["Énergie thermique", "Énergie cinétique", "Énergie potentielle élastique", "Énergie nucléaire"],
                correct: "Énergie potentielle élastique",
            },
            {
                question: "Quelle planète possède le plus de lunes dans le Système solaire ?",
                options: ["Jupiter", "Saturne", "Uranus", "Neptune"],
                correct: "Saturne",
            },
            {
                question: "Quelle est la centrale énergétique de la cellule ?",
                options: ["Noyau", "Ribosome", "Mitochondrie", "Appareil de Golgi"],
                correct: "Mitochondrie",
            },
            {
                question: "Quelle loi stipule que pour chaque action, il existe une réaction égale et opposée ?",
                options: ["Première loi de Newton", "Deuxième loi de Newton", "Troisième loi de Newton", "Loi de conservation de l'énergie"],
                correct: "Troisième loi de Newton",
            },
            {
                question: "Quelle particule dans un atome possède une charge positive ?",
                options: ["Neutron", "Électron", "Proton", "Photon"],
                correct: "Proton",
            },
            {//9
                question: "Quelle est la substance naturelle la plus dure sur Terre ?",
                options: ["Or", "Fer", "Diamant", "Titane"],
                correct: "Diamant",
            },
            {//10
                question: "Quelle est la vitesse de la lumière dans le vide ?",
                options: ["186,000 mph", "186,000 km/s", "300,000 km/s", "300,000 mph"],
                correct: "300,000 km/s",
            },
            {//11
                question: "Quel gaz compose la majeure partie de l’atmosphère terrestre ?",
                options: ["Oxygène", "Dioxyde de carbone", "Azote", "Hydrogène"],
                correct: "Azote",
            },
            {//12
                question: "Combien d’os y a-t-il dans le corps humain adulte ?",
                options: ["196", "206", "216", "226"],
                correct: "206",
            },
            {//13
                question: "Quel est le symbole chimique de l’or ?",
                options: ["Go", "Gd", "Au", "Ag"],
                correct: "Au",
            },
            {//14
                question: "Quelle planète est la plus proche du Soleil ?",
                options: ["Vénus", "Terre", "Mercure", "Mars"],
                correct: "Mercure",
            },
            {//15
                question: "Quel est le point d’ébullition de l’eau en degrés Celsius ?",
                options: ["90°C", "95°C", "100°C", "105°C"],
                correct: "100°C",
            },
            {//16
                question: "Quel organe pompe le sang dans le corps humain ?",
                options: ["Foie", "Poumons", "Cœur", "Rein"],
                correct: "Cœur",
            },
            {//17
                question: "Quelle est la plus grande planète de notre système solaire ?",
                options: ["Saturne", "Neptune", "Jupiter", "Uranus"],
                correct: "Jupiter",
            },
            {//18
                question: "Quel type d’animal est un dragon de Komodo ?",
                options: ["Serpent", "Lézard", "Crocodile", "Dinosaure"],
                correct: "Lézard",
            },
            {//19
                question: "Combien de cœurs possède une pieuvre ?",
                options: ["1", "2", "3", "4"],
                correct: "3",
            },
            {//20
                question: "Comment appelle-t-on l’étude du climat ?",
                options: ["Géologie", "Météorologie", "Astronomie", "Biologie"],
                correct: "Météorologie",
            },
            {//21
                question: "Quelle est la plus petite unité de la vie ?",
                options: ["Atome", "Molécule", "Cellule", "Tissu"],
                correct: "Cellule",
            },
            {//22
                question: "De quoi est constitué la glace carbonique ?",
                options: ["Eau congelée", "Azote congelé", "Oxygène congelé", "Dioxyde de carbone congelé"],
                correct: "Dioxyde de carbone congelé",
            },
            {//23
                question: "Combien de temps la Terre met-elle pour orbiter autour du Soleil ?",
                options: ["30 jours", "365 jours", "24 heures", "12 mois"],
                correct: "365 jours",
            },
            {//24
                question: "Quel est le plus grand organe du corps humain ?",
                options: ["Foie", "Cerveau", "Peau", "Cœur"],
                correct: "Peau",
            },
            {//25
                question: "Quelle force nous maintient au sol ?",
                options: ["Magnétisme", "Gravité", "Friction", "Inertie"],
                correct: "Gravité",
            },
            {//26
                question: "Quelle est la formule chimique du sel de table ?",
                options: ["NaCl", "KCl", "CaCl2", "MgCl2"],
                correct: "NaCl",
            },
            {//27
                question: "Quel groupe sanguin est connu comme donneur universel ?",
                options: ["A", "B", "AB", "O"],
                correct: "O",
            },
            {//28
                question: "Quelle vitamine est produite lorsque la peau est exposée au soleil ?",
                options: ["Vitamine A", "Vitamine C", "Vitamine D", "Vitamine E"],
                correct: "Vitamine D",
            },
            {//29
                question: "Comment appelle-t-on la roche en fusion sous la surface de la Terre ?",
                options: ["Lave", "Magma", "Basalte", "Granite"],
                correct: "Magma",
            },
            {//30
                question: "Quelle couche de l’atmosphère terrestre contient tout le climat ?",
                options: ["Stratosphère", "Mésosphère", "Troposphère", "Thermosphère"],
                correct: "Troposphère",
            },
        ],

        sports: [
            {
                question: "Combien de joueurs une équipe de football a-t-elle sur le terrain en même temps ?",
                options: ["9", "10", "11", "12"],
                correct: "11",
            },
            {
                question: "Dans quel sport réalise-t-on un « slam dunk » ?",
                options: ["Volley-ball", "Basket-ball", "Tennis", "Baseball"],
                correct: "Basket-ball",
            },
            {
                question: "Quel pays a accueilli les Jeux olympiques d’été de 2016 ?",
                options: ["Chine", "Brésil", "Royaume-Uni", "Japon"],
                correct: "Brésil",
            },
            {
                question: "Quel est le score maximum dans une partie standard de snooker ?",
                options: ["147", "155", "150", "160"],
                correct: "147",
            },
            {
                question: "Quel pays a remporté le plus de Coupes du monde de football masculine ?",
                options: ["Allemagne", "Italie", "Argentine", "Brésil"],
                correct: "Brésil",
            },
            {
                question: "Au baseball, combien de prises (« strikes ») entraînent un retrait (« out ») ?",
                options: ["2", "3", "4", "5"],
                correct: "3",
            },
            {
                question: "Quel sport utilise les termes « birdie », « eagle » et « bogey » ?",
                options: ["Tennis", "Badminton", "Golf", "Cricket"],
                correct: "Golf",
            },
            {
                question: "Qui a gagné le plus de médailles d’or olympiques dans l’histoire ?",
                options: ["Usain Bolt", "Michael Phelps", "Carl Lewis", "Simone Biles"],
                correct: "Michael Phelps",
            },
            {
                question: "Quelle équipe a remporté le premier Super Bowl en 1967 ?",
                options: ["Green Bay Packers", "Kansas City Chiefs", "New York Jets", "Dallas Cowboys"],
                correct: "Green Bay Packers",
            },
            {
                question: "Quelle est la distance d’un marathon ?",
                options: ["24,2 miles", "26,2 miles", "28,2 miles", "30,2 miles"],
                correct: "26,2 miles",
            },
            //start of new questions
            {//1
                question: "Quelle équipe a remporté le Super Bowl en 2000 ?",
                options: ["Saint Louis Rams", "Los Angeles Rams", "Tennessee Titans", "Indianapolis Colts"],
                correct: "Saint Louis Rams",
            },
            {//2
                question: "Quel sport est connu comme 'le beau jeu' ?",
                options: ["Basket-ball", "Football", "Tennis", "Cricket"],
                correct: "Football",
            },
            {//3
                question: "Combien de tournois du Grand Chelem y a-t-il en tennis chaque année ?",
                options: ["2", "3", "4", "5"],
                correct: "4",
            },
            {//4
                question: "Quel est le sport national du Japon ?",
                options: ["Karaté", "Judo", "Sumo", "Kendo"],
                correct: "Sumo",
            },        
            {//5
                question: "Quel est le terme pour un score de zéro au tennis ?",
                options: ["Love", "Nil", "Zéro", "Nought"],
                correct: "Love",
            },
            {//6
                question: "Quel est le seul sport qui a été pratiqué sur la lune ?",
                options: ["Baseball", "Golf", "Frisbee", "Tennis"],
                correct: "Golf",
            },
            {//7
                question: "Combien de trous sont joués dans une partie standard de golf ?",
                options: ["9", "12", "18", "27"],
                correct: "18",
            },
            {//8
                question: "Quel boxeur était connu comme 'Le Plus Grand' ?",
                options: ["Mike Tyson", "Muhammad Ali", "Joe Frazier", "George Foreman"],
                correct: "Muhammad Ali",
            },
            {//9
                question: "Combien de championnats NBA Michael Jordan a-t-il remportés avec les Chicago Bulls ?",
                options: ["4", "5", "6", "7"],
                correct: "6",
            },
            {//10
                question: "Quel est le terme pour trois strikes consécutifs au bowling ?",
                options: ["Turkey", "Eagle", "Hat trick", "Triple"],
                correct: "Turkey",
            },
            {//11
                question: "Quel joueur de tennis a remporté le plus de titres du Grand Chelem en simple (en 2024) ?",
                options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
                correct: "Novak Djokovic",
            },
            {//12
                question: "Quelle ville est la seule à avoir remporté des championnats en NFL, MLB, NBA et NHL la même année ?",
                options: ["Aucune", "Seattle", "Saint Louis", "Atlanta"],
                correct: "Aucune",
            },
            {//13
                question: "En quelle année Michael Phelps a-t-il remporté son record de 8 médailles d’or en un seul Jeux Olympiques ?",
                options: ["2008", "2009", "2007", "2010"],
                correct: "2008",
            },
            {//14
                question: "Au football américain, de combien de yards l’attaque est-elle pénalisée pour une faute de 'holding' ?",
                options: ["10", "15", "5", "20"],
                correct: "10",
            },
            {//15
                question: "Dans quelle équipe NBA Kobe Bryant a-t-il joué toute sa carrière ?",
                options: ["LA Lakers", "Chicago Bulls", "Philadelphia 76ers", "Minnesota Timberwolves"],
                correct: "LA Lakers",
            },
            {//16
                question: "Quel pays a remporté le plus de médailles d’or olympiques en hockey sur gazon ?",
                options: ["Inde", "États-Unis", "Chine", "Russie"],
                correct: "Inde",
            },
            {//17
                question: "Quel sport est connu comme 'le roi des sports' ?",
                options: ["Football", "Cricket", "Baseball", "Basket-ball"],
                correct: "Football",
            },
            {//18
                question: "Quel sport utilise un volant (shuttlecock) ?",
                options: ["Badminton", "Football", "Cricket", "Athlétisme"],
                correct: "Badminton",
            },
            {//19
                question: "En quelle année ont eu lieu les premiers Jeux Olympiques modernes ?",
                options: ["1890", "1896", "1900", "1897"],
                correct: "1896",
            },
            {//20
                question: "Quelle est la hauteur réglementaire d’un panier de basket-ball ?",
                options: ["10 pieds", "10 pouces", "11 pieds", "11 pouces"],
                correct: "10 pieds",
            },
        ],

        language: [
            {
                question: "Quelle est la langue la plus parlée au monde par locuteurs natifs ?",
                options: ["Anglais", "Espagnol", "Chinois mandarin", "Hindi"],
                correct: "Chinois mandarin",
            },
            {
                question: "Quelle est la langue officielle du Brésil ?",
                options: ["Espagnol", "Portugais", "Français", "Anglais"],
                correct: "Portugais",
            },
            {
                question: "Que signifie le mot « bonjour » en français ?",
                options: ["Bonjour", "Au revoir", "S’il vous plaît", "Merci"],
                correct: "Bonjour",
            },
            {
                question: "En espagnol, que signifie le mot « rojo » ?",
                options: ["Bleu", "Rouge", "Vert", "Jaune"],
                correct: "Rouge",
            },
            {
                question: "Quelle langue ancienne est à l’origine de la plupart des langues européennes modernes ?",
                options: ["Grec", "Latin", "Sanskrit", "Hébreu"],
                correct: "Latin",
            },
            {
                question: "Quelle langue s’écrit de droite à gauche ?",
                options: ["Arabe", "Coréen", "Hindi", "Grec"],
                correct: "Arabe",
            },
            {
                question: "Quel est le mot le plus long du dictionnaire anglais (non technique) ?",
                options: [
                    "Antidisestablishmentarianism",
                    "Supercalifragilisticexpialidocious",
                    "Pneumonoultramicroscopicsilicovolcanoconiosis",
                    "Floccinaucinihilipilification"
                ],
                correct: "Pneumonoultramicroscopicsilicovolcanoconiosis",
            },
            {
                question: "Que signifie le mot « aldrig » en suédois ?",
                options: ["Toujours", "Jamais", "Souvent", "Ou"],
                correct: "Jamais",
            },
            {
                question: "Que signifie le mot « Usein » en finnois ?",
                options: ["Toujours", "Jamais", "Souvent", "Ou"],
                correct: "Souvent",
            },
            {
                question: "Que signifie le mot « Livi » en tongien ?",
                options: ["Partir", "Venir", "Loin", "Enfant"],
                correct: "Partir",
            },
        ],

        art: [
            {
                question: "Qui a peint la Joconde ?",
                options: ["Vincent van Gogh", "Léonard de Vinci", "Pablo Picasso", "Claude Monet"],
                correct: "Léonard de Vinci",
            },
            {
                question: "Quel artiste est célèbre pour s’être coupé une partie de l’oreille ?",
                options: ["Salvador Dalí", "Vincent van Gogh", "Edvard Munch", "Paul Cézanne"],
                correct: "Vincent van Gogh",
            },
            {
                question: "Qui a créé la peinture « La Nuit étoilée » ?",
                options: ["Vincent van Gogh", "Claude Monet", "Pablo Picasso", "Georgia O’Keeffe"],
                correct: "Vincent van Gogh",
            },
            {
                question: "Avec quel mouvement artistique Salvador Dalí est-il associé ?",
                options: ["Cubisme", "Surréalisme", "Impressionnisme", "Expressionnisme"],
                correct: "Surréalisme",
            },
            {
                question: "Quel artiste est connu pour ses peintures abstraites dégoulinantes du XXᵉ siècle ?",
                options: ["Jackson Pollock", "Andy Warhol", "Wassily Kandinsky", "Henri Matisse"],
                correct: "Jackson Pollock",
            },
            {
                question: "Quel matériau Michel-Ange a-t-il utilisé pour sculpter la statue de David ?",
                options: ["Bronze", "Marbre", "Granite", "Bois"],
                correct: "Marbre",
            },
            {
                question: "Qui a peint « La Persistance de la mémoire », avec les montres molles ?",
                options: ["Salvador Dalí", "René Magritte", "Joan Miró", "Henri Rousseau"],
                correct: "Salvador Dalí",
            },
            {
                question: "Quel artiste est considéré comme le fondateur du cubisme ?",
                options: ["Pablo Picasso", "Henri Matisse", "Paul Gauguin", "Claude Monet"],
                correct: "Pablo Picasso",
            },
            {
                question: "Le terme « Renaissance » désigne une période de regain d’intérêt pour quels sujets ?",
                options: ["Science et religion", "Art et savoir", "Guerre et politique", "Commerce et exploration"],
                correct: "Art et savoir",
            },
            {
                question: "Dans quelle ville se trouve le musée du Louvre ?",
                options: ["Rome", "Paris", "Londres", "Madrid"],
                correct: "Paris",
            },
        ],

        pop_culture: [
            {
                question: "Quel chanteur est connu comme le « Roi de la pop » ?",
                options: ["Elvis Presley", "Prince", "Michael Jackson", "Justin Timberlake"],
                correct: "Michael Jackson",
            },
            {
                question: "Qui a interprété Iron Man dans les films Marvel ?",
                options: ["Chris Evans", "Chris Hemsworth", "Robert Downey Jr.", "Tom Holland"],
                correct: "Robert Downey Jr.",
            },
            {
                question: "Quelle application de médias sociaux est connue pour ses vidéos courtes et ses tendances virales ?",
                options: ["Twitter", "TikTok", "Snapchat", "Instagram"],
                correct: "TikTok",
            },
            {
                question: "Quel artiste a sorti l’album « Midnights » en 2022 ?",
                options: ["Ariana Grande", "Beyoncé", "Taylor Swift", "Adele"],
                correct: "Taylor Swift",
            },
            {
                question: "Dans The Office (US), comment s’appelle la compagnie de papier ?",
                options: ["Dunder Mifflin", "PaperCo", "Scranton Supply", "Office Depot"],
                correct: "Dunder Mifflin",
            },
            {
                question: "Quel film a remporté l’Oscar du meilleur film en 2020 ?",
                options: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
                correct: "Parasite",
            },
            {
                question: "Qui a prêté sa voix à Elsa dans Frozen de Disney ?",
                options: ["Idina Menzel", "Kristen Bell", "Demi Lovato", "Mandy Moore"],
                correct: "Idina Menzel",
            },
            {
                question: "Quel artiste a conçu la pochette de l’album « Sgt. Pepper’s Lonely Hearts Club Band » des Beatles ?",
                options: ["Peter Blake", "Andy Warhol", "Roy Lichtenstein", "David Hockney"],
                correct: "Peter Blake",
            },
            {
                question: "Qui a remporté la première saison d’American Idol ?",
                options: ["Kelly Clarkson", "Carrie Underwood", "Fantasia Barrino", "Ruben Studdard"],
                correct: "Kelly Clarkson",
            },
            {
                question: "Quel est le nom de la nation africaine fictive dans Black Panther ?",
                options: ["Zamunda", "Wakanda", "Narnia", "Latveria"],
                correct: "Wakanda",
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
