export const quotes = {
    en: [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Innovation distinguishes between a leader and a follower. - Steve Jobs",
        "Stay hungry, stay foolish. - Steve Jobs",
        "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
        "It is during our darkest moments that we must focus to see the light. - Aristotle",
        "The only impossible journey is the one you never begin. - Tony Robbins",
        "Life is what happens when you're busy making other plans. - John Lennon",
        "The way to get started is to quit talking and begin doing. - Walt Disney",
        "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
        "The future depends on what you do today. - Mahatma Gandhi",
    ],
    es: [
        "La única forma de hacer un gran trabajo es amar lo que haces. - Steve Jobs",
        "La innovación distingue entre un líder y un seguidor. - Steve Jobs",
        "Mantente hambriento, mantente tonto. - Steve Jobs",
        "El futuro pertenece a aquellos que creen en la belleza de sus sueños. - Eleanor Roosevelt",
        "Es durante nuestros momentos más oscuros que debemos enfocarnos para ver la luz. - Aristóteles",
        "El único viaje imposible es el que nunca comienzas. - Tony Robbins",
        "La vida es lo que sucede mientras estás ocupado haciendo otros planes. - John Lennon",
        "La forma de empezar es dejar de hablar y comenzar a hacer. - Walt Disney",
        "No mires el reloj; haz lo que él hace. Sigue adelante. - Sam Levenson",
        "El futuro depende de lo que hagas hoy. - Mahatma Gandhi",
    ],
    fr: [
        "La seule façon de faire du bon travail est d'aimer ce que vous faites. - Steve Jobs",
        "L'innovation distingue un leader d'un suiveur. - Steve Jobs",
        "Restez affamé, restez fou. - Steve Jobs",
        "L'avenir appartient à ceux qui croient en la beauté de leurs rêves. - Eleanor Roosevelt",
        "C'est pendant nos moments les plus sombres que nous devons nous concentrer pour voir la lumière. - Aristote",
        "Le seul voyage impossible est celui que vous ne commencez jamais. - Tony Robbins",
        "La vie est ce qui se passe pendant que vous êtes occupé à faire d'autres plans. - John Lennon",
        "La façon de commencer est d'arrêter de parler et de commencer à faire. - Walt Disney",
        "Ne regardez pas l'horloge ; faites ce qu'elle fait. Continuez. - Sam Levenson",
        "L'avenir dépend de ce que vous faites aujourd'hui. - Mahatma Gandhi",
    ],
};

export const jokes = {
    en: [
        "Why don't scientists trust atoms? Because they make up everything!",
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
        "I told my wife she was drawing her eyebrows too high. She looked surprised.",
        "Why don't skeletons fight each other? They don't have the guts.",
        "What do you call fake spaghetti? An impasta!",
        "Why couldn't the bicycle stand up by itself? It was two tired.",
        "What did the ocean say to the beach? Nothing, it just waved.",
        "Why do we tell actors to 'break a leg'? Because every play has a cast.",
        "I'm reading a book about anti-gravity. It's impossible to put down!",
        "What's the best thing about Switzerland? I don't know, but the flag is a big plus.",
    ],
    es: [
        "¿Por qué los científicos no confían en los átomos? ¡Porque lo componen todo!",
        "¿Por qué el espantapájaros ganó un premio? ¡Porque era sobresaliente en su campo!",
        "Le dije a mi esposa que se estaba dibujando las cejas demasiado altas. Parecía sorprendida.",
        "¿Por qué los esqueletos no pelean entre sí? No tienen agallas.",
        "¿Cómo llamas a los espaguetis falsos? ¡Un impasta!",
        "¿Por qué la bicicleta no podía sostenerse sola? Estaba demasiado cansada.",
        "¿Qué le dijo el océano a la playa? Nada, solo saludó con la mano.",
        "¿Por qué les decimos a los actores 'rómpete una pierna'? Porque cada obra tiene un elenco.",
        "Estoy leyendo un libro sobre anti-gravedad. ¡Es imposible dejarlo!",
        "¿Qué es lo mejor de Suiza? No lo sé, pero la bandera es un gran plus.",
    ],
    fr: [
        "Pourquoi les scientifiques ne font-ils pas confiance aux atomes ? Parce qu'ils composent tout !",
        "Pourquoi l'épouvantail a-t-il gagné un prix ? Parce qu'il était exceptionnel dans son domaine !",
        "J'ai dit à ma femme qu'elle dessinait ses sourcils trop haut. Elle avait l'air surprise.",
        "Pourquoi les squelettes ne se battent-ils pas entre eux ? Ils n'ont pas de tripes.",
        "Comment appelle-t-on de faux spaghettis ? Un impasta !",
        "Pourquoi le vélo ne pouvait-il pas tenir debout tout seul ? Il était trop fatigué.",
        "Qu'a dit l'océan à la plage ? Rien, il a juste fait un signe.",
        "Pourquoi dit-on aux acteurs de 'casser une jambe' ? Parce que chaque pièce a un plâtre.",
        "Je lis un livre sur l'anti-gravité. C'est impossible à poser !",
        "Quelle est la meilleure chose en Suisse ? Je ne sais pas, mais le drapeau est un gros plus.",
    ],
};

/**
 * Get a random quote in the specified language
 */
export function getRandomQuote(locale = 'en') {
    const quoteList = quotes[locale] || quotes.en;
    return quoteList[Math.floor(Math.random() * quoteList.length)];
}

/**
 * Get a random joke in the specified language
 */
export function getRandomJoke(locale = 'en') {
    const jokeList = jokes[locale] || jokes.en;
    return jokeList[Math.floor(Math.random() * jokeList.length)];
}