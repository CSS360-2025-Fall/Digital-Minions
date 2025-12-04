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
            {
                question: "What type of energy is stored in a stretched rubber band?",
                options: ["Thermal energy", "Kinetic energy", "Elastic potential energy", "Nuclear energy"],
                correct: "Elastic potential energy",
            },
            {
                question: "Which planet has the most moons in our Solar System?",
                options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
                correct: "Saturn",
            },
            {
                question: "What is the powerhouse of the cell?",
                options: ["Nucleus", "Ribosome", "Mitochondria", "Golgi Apparatus"],
                correct: "Mitochondria",
            },
            {
                question: "What law states that for every action, there is an equal and opposite reaction?",
                options: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Law of Conservation of Energy"],
                correct: "Newton's Third Law",
            },
            {
                question: "What particle in an atom has a positive charge?",
                options: ["Neutron", "Electron", "Proton", "Photon"],
                correct: "Proton",
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
        ],
        science: [
            {
                question: "¿Qué planeta es conocido como el Planeta Rojo?",
                options: ["Venus", "Marte", "Júpiter", "Mercurio"],
                correct: "Marte",
            },
            {
                question: "¿Qué gas exhalan los humanos al respirar?",
                options: ["Oxígeno", "Dióxido de carbono", "Nitrógeno", "Hidrógeno"],
                correct: "Dióxido de carbono",
            },
            {
                question: "¿Cuál es el símbolo químico del agua?",
                options: ["H2O", "O2", "CO2", "HO2"],
                correct: "H2O",
            },
            {
                question: "¿Qué parte de la célula contiene el material genético?",
                options: ["Citoplasma", "Mitocondria", "Núcleo", "Ribosoma"],
                correct: "Núcleo",
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
        ],

        science: [
            {
                question: "Quelle planète est connue comme la planète rouge ?",
                options: ["Vénus", "Mars", "Jupiter", "Mercure"],
                correct: "Mars",
            },
            {
                question: "Quel gaz les humains expirent-ils lorsqu’ils respirent ?",
                options: ["Oxygène", "Dioxyde de carbone", "Azote", "Hydrogène"],
                correct: "Dioxyde de carbone",
            },
            {
                question: "Quel est le symbole chimique de l’eau ?",
                options: ["H₂O", "O₂", "CO₂", "HO₂"],
                correct: "H₂O",
            },
            {
                question: "Quelle partie de la cellule contient le matériel génétique ?",
                options: ["Cytoplasme", "Mitochondrie", "Noyau", "Ribosome"],
                correct: "Noyau",
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
