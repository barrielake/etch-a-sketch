const container = document.querySelector("#grid-container");

function createGrid(number){
    container.setAttribute("style", `grid-template: repeat(${number}, 1fr) / repeat(${number}, 1fr);`)
    for (let i = 0; i < number*number; i++){
        let cell = document.createElement("div");
        cell.addEventListener("mouseover", function(e) {
            let targetCell = e.target;
            changeColor(targetCell);
        });
        container.appendChild(cell);
    }
}

createGrid(16);

function changeColor(targetCell){
    targetCell.setAttribute("style", "background-color: black");
}
