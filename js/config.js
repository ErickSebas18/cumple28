const GAME_CONFIG = {

    TOTAL_STICKERS: 28,
    STICKERS_PER_PACK: 7,

    QUESTIONS: [
        { question: "¿Dónde nos conocimos? (Introduce la respuesta en minúsculas)", answer: "cudes" },
        { question: "Lugar de nuestro primer beso (Introduce la respuesta en minúsculas)", answer: "uce" },
        { question: "¿Cuál es tú color favorito? (Introduce la respuesta en minúsculas)", answer: "azul" },
        { question: "¿Equipo favorito? (Introduce la respuesta en minúsculas)", answer: "liga" }
    ]
};

const STICKERS = Array.from({ length: 28 }, (_, i) => ({
    id: i + 1,
    image: `../img/${i + 1}.jpeg`
}));