const container = document.querySelector("#grid-container");
let colorMode = "default";

function createGrid(number){
    container.setAttribute("style", `grid-template: repeat(${number}, 1fr) / repeat(${number}, 1fr);`)
    for (let i = 0; i < number*number; i++){
        let cell = document.createElement("div");
        cell.classList.add("grid-cell");
        cell.addEventListener("mouseover", function(e) {
            changeColor(e.target);
        });
        container.appendChild(cell);
    }
}

createGrid(16);

function changeColor(targetCell){
    switch(colorMode){
        case "default":
            targetCell.setAttribute("style", "background-color: rgba(234, 92, 90, 1)");
            break;
        case "random":
            targetCell.setAttribute("style", `background-color: ${getRandomColor()};`);
            break;
        case "shade":
            let opacity = Number(targetCell.style.opacity);
                targetCell.style.backgroundColor = "black";
                targetCell.style.opacity = opacity + 0.1; //add shade  
            break;
    }
}

function getRandomColor(){
    let r = getRandomInt(255);
    let g = getRandomInt(255);
    let b = getRandomInt(255);
    return `rgba(${r}, ${g}, ${b}, 1)`;
}

function getRandomInt(maxNumber){
    return Math.floor(Math.random() * (maxNumber + 1));
}

const resetButton = document.querySelector("#reset-button");
resetButton.addEventListener("click", resetBoard);

function resetBoard(){
    //clear the container
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    let number = prompt("How many cells per side?");
    createGrid(number);
    colorMode = "default";
}

const randomButton = document.querySelector("#random-button");
randomButton.addEventListener("click", function(){
    colorMode = "random";
});

const shadeButton = document.querySelector("#shade-button");
shadeButton.addEventListener("click", function(){
    colorMode = "shade";
});

const defaultButton = document.querySelector("#default-button");
defaultButton.addEventListener("click", function(){
    colorMode = "default";
})
