function openQuestion(){

    const current =
        GAME_CONFIG.QUESTIONS[state.currentQuestion];

    if(!current) return;

    document.getElementById("question-text")
        .textContent = current.question;

    showElement("question-modal");
}

function validateAnswer(){

    const input =
        document.getElementById("answer-input");

    const answer = input.value.trim().toLowerCase();

    const correct =
        GAME_CONFIG.QUESTIONS[state.currentQuestion]
        .answer.toLowerCase();

    if(answer === correct){

        hideElement("question-modal");
        input.value = "";

        openPack();

    }else{

        Swal.fire({
            icon: "error",
            title: "Incorrecto",
            text: "Intenta nuevamente"
        });
    }
}