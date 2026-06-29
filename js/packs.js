function openPack(){

    state.phase = "pack";

    state.currentPack = getPackStickers();

    document.getElementById("pack-modal")
        .classList.remove("hidden");
}

function getPackStickers(){

    const start =
        state.currentQuestion * 7;

    return STICKERS.slice(start, start + 7);
}

function revealPack(){

    hideElement("pack-modal");

    const container =
        document.getElementById("new-stickers");

    container.innerHTML = "";

    state.currentPack.forEach(sticker => {

        state.collectedStickers.push(sticker.id);

        createSticker(sticker);

    });

    showElement("stickers-modal");
}

function createSticker(sticker){

    const inventory =
        document.getElementById("inventory");

    const card = document.createElement("div");

    card.classList.add("sticker");
    card.draggable = true;
    card.dataset.id = sticker.id;

    card.innerHTML = `
        <img src="${sticker.image}">
    `;
    card.innerHTML = `
        <p class="image-id">${sticker.id}</p>
    `;

    card.addEventListener("dragstart", dragSticker);

    inventory.appendChild(card);
}

function startPlacement(){

    hideElement("stickers-modal");

    state.canPlace = true;
    state.phase = "placing";
}