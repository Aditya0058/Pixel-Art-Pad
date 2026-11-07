const rows = 25;
const columns = 25;
const matrix = new Array(rows)
    .fill(null)
    .map(() => new Array(columns).fill(0));

console.log(matrix);

const grid = document.getElementById("pixel-grid");
for(let i = 0; i < rows; i++){
    for (let j = 0; j < columns; j++) {
        const cell = document.createElement("div");
        cell.classList.add('pixel');
        cell.dataset.row = i;
        cell.dataset.column = j;
        grid.appendChild(cell);
    }
}

const cell = document.querySelector(".pixel");
cell.addEventListener("click", function() {
    console.log("Pixel clicked!");
});