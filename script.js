const container = document.querySelector("#grid-container");

function createGrid(number){
    container.setAttribute("style", `grid-template: repeat(${number}, 1fr) / repeat(${number}, 1fr);`)
    for (let i = 0; i < number*number; i++){
        let cell = document.createElement("div");
        cell.classList.add("grid-item");
        container.appendChild(cell);
    }
}

createGrid(16);