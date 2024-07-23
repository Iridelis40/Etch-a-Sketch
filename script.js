const container = document.querySelector("main");

//this function create the Grid and applies a random color to each box when hovering
function createGrid(n) {
    for(let i=0; i<n; i++) {
        const row = document.createElement("div");
        container.appendChild(row);
        row.classList.add("row");
        for(let i=0; i<n; i++) {
           const box = document.createElement("div");
        row.appendChild(box);
        box.classList.add("box"); 
        box.addEventListener("mouseover", ()=> 
            box.style.backgroundColor = "blue")
        }
    }
}

//this button set up the grid
const sizeBtn = document.querySelector("#sizeBtn");
sizeBtn.addEventListener("click", ()=> {
    let gridSize = prompt("enter the size");
    createGrid(gridSize);
})

//this button reset the container content
const resetBtn = document.querySelector("#resetBtn");
resetBtn.addEventListener("click", ()=> {
    container.innerHTML = "";
})




