const container = document.querySelector("#grid-container");

function createGrid(number){
    container.setAttribute("style", `grid-template: repeat(${number}, 1fr) / repeat(${number}, 1fr);`)
    for (let i = 0; i < number*number; i++){
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", function(e) {
            changeColor(e.target);
        });
        container.appendChild(cell);
    }
}

createGrid(16);

function changeColor(targetCell){
    targetCell.setAttribute("style", "background-color: black");
}

const resetButton = document.querySelector("#reset-button");
console.log(resetButton);
resetButton.addEventListener("click", resetBoard);

function resetBoard(){
    //clear the container
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    let number = prompt("How many cells per side?");
    createGrid(number);
}
