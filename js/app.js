function startGame(){

    hideElement("welcome-screen");
    showElement("app");

    openQuestion();
}

function nextStage(){

    state.currentQuestion++;

    if(state.currentQuestion >= GAME_CONFIG.QUESTIONS.length){
        finishGame();
        return;
    }

    openQuestion();
}

function finishGame(){

    state.canPlace = false;

    hideElement("app");

    const letter = document.getElementById("birthday-letter");

    letter.classList.remove("hidden");

    gsap.fromTo(
        ".letter-paper",
        {
            opacity:0,
            scale:.8,
            y:80
        },
        {
            opacity:1,
            scale:1,
            y:0,
            duration:1.6,
            ease:"power3.out"
        }
    );

}

function backToAlbum(){

    hideElement("birthday-letter");

    showElement("app");

    setAlbumPage(4);

    state.canPlace = false;

}

document.addEventListener("DOMContentLoaded", () => {

    initAlbum();

    document.getElementById("start-btn")
        .addEventListener("click", startGame);

    document.getElementById("answer-btn")
        .addEventListener("click", validateAnswer);

    document.getElementById("open-pack-btn")
        .addEventListener("click", revealPack);

    document.getElementById("continue-btn")
        .addEventListener("click", startPlacement);

    document
    .getElementById("ir-a")
    .addEventListener(
        "click",
        backToAlbum
    );

});