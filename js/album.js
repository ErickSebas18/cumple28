function initAlbum(){

    setupAlbum();
    setupAlbumNavigation();

    setAlbumPage(state.currentPage);
}

function setupAlbum(){

    document.querySelectorAll(".slot")
        .forEach(slot => {

            slot.addEventListener("dragover", e => {
                e.preventDefault();
            });

            slot.addEventListener("drop", dropSticker);
        });
}

function dragSticker(e){

    if(!state.canPlace) return;

    const sticker =
        e.target.closest(".sticker");

    if(!sticker) return;

    e.dataTransfer.setData("id", sticker.dataset.id);
}

function dropSticker(e){

    if(!state.canPlace) return;

    const stickerId =
        Number(e.dataTransfer.getData("id"));

    const slotId =
        Number(this.dataset.id);

    if(stickerId !== slotId) return;

    if(this.classList.contains("filled")) return;

    this.innerHTML = `
        <img src="img/${slotId}.jpeg">
    `;

    this.classList.add("filled");

    state.placedStickers.push(slotId);

    updateProgress();

    verifyPackFinished();
}

function verifyPackFinished(){

    const expected =
        (state.currentQuestion + 1) * 7;

    if(state.placedStickers.length === expected){

        state.canPlace = false;

        Swal.fire({
            icon: "success",
            title: "¡Pack completado!",
            text: "Responde la siguiente pregunta"
        }).then(() => {

            nextStage(); 
            setAlbumPage(state.currentQuestion + 1); 

        });
    }
}

function setAlbumPage(page){

    state.currentPage = page;

    // cambiar páginas visuales
    document.querySelectorAll(".album-page")
        .forEach(p => p.classList.remove("active-page"));

    const target =
        document.querySelector(`.album-page[data-page="${page}"]`);

    if(target){
        target.classList.add("active-page");
    }
    
    document.getElementById("page-title").textContent =
        `Página ${page} de 4`;
}

function setupAlbumNavigation(){

    const prevBtn =
        document.getElementById("prev-page");

    const nextBtn =
        document.getElementById("next-page");

    prevBtn.addEventListener("click", () => {
        changePage(-1);
    });

    nextBtn.addEventListener("click", () => {
        changePage(1);
    });
}

function changePage(direction){

    const totalPages = 4;

    const targetPage =
        state.currentPage + direction;

    if(targetPage < 1 || targetPage > totalPages) return;

    setAlbumPage(targetPage);
}