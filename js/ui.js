function showElement(id){
    document.getElementById(id).classList.remove("hidden");
}

function hideElement(id){
    document.getElementById(id).classList.add("hidden");
}

function updateProgress(){

    const total = state.placedStickers.length;

    document.getElementById("progress-text")
        .textContent = `${total}/28`;

    document.getElementById("progress-fill")
        .style.width = `${(total / 28) * 100}%`;
}