const app = {
    gridSize: 10,
    pixelSize: 40,
    ColorSelected: "black",
    // la config de base au lancement de l'app
    
    init(){
        app.drawPixel(app.gridSize, app.pixelSize);
        const paletteColorElt = document.querySelectorAll('.palette-color');
        for (const color of paletteColorElt){
            color.addEventListener("click", app.chooseColor);
        }
        document.querySelector('form').addEventListener('submit', app.reDrawPixel);
    },

    drawPixel(gridSize, pixelSize){
        const containerElt = document.getElementById("container-pixel");

        for (let row = 0; row < gridSize; row++){
            let pixelRow = document.createElement('div');
            pixelRow.classList.add('pixel-rows-container');
            pixelRow.style.width = (pixelSize * gridSize)+ "px";
            pixelRow.style.height = pixelSize + "px";
            containerElt.appendChild(pixelRow);
            for (let collumn = 0; collumn < gridSize; collumn++) {
                let pixel = document.createElement('div');
                pixel.style.width = pixelSize + "px";
                pixel.style.height = pixelSize + "px";
                pixel.style.border = "gray solid 1px";
                pixel.style.backgroundColor = "white";
                pixelRow.appendChild(pixel);
                pixel.addEventListener('click', app.changeColor);
            }
        }
    },

    reDrawPixel(event){
        event.preventDefault();
        app.deleteGrid();
        const sizeGrid = document.getElementById('size-grid').value;
        const sizePixel = document.getElementById('size-pixel').value;
        app.drawPixel(sizeGrid, sizePixel);
    },

    deleteGrid(){
        const containerElt = document.getElementById("container-pixel");
        while (containerElt.firstChild) {
            containerElt.removeChild(containerElt.firstChild);
        }
    },

    changeColor(event){
        //change la couleur d'un pixel en fonction de la couleur de la palette sélectionner
        event.target.style.backgroundColor = app.ColorSelected ;
    },

    chooseColor(event) {
        //change la couleur choisis de la palette
        const paletteColorElt = document.querySelectorAll('.palette-color');
        for (const color of paletteColorElt){
            color.style.border = "none";
        }
        event.target.style.border = "#c966c0 solid 3px";
        app.ColorSelected = `${event.target.id.slice(6)}`;
    }
};

document.addEventListener('DOMContentLoaded', app.init);