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


grid.addEventListener("click", function(event){
    if(event.target.classList.contains("pixel")){
        const clickedPixel = event.target;
        const r = clickedPixel.dataset.row;
        const c = clickedPixel.dataset.column;
        console.log(`Pixel clicked ${r}-${c}`);
        clickedPixel.style.backgroundColor = "black";
    }
})
const cell = document.querySelector(".pixel");
cell.addEventListener("click", function() {
    console.log("Pixel clicked!");
});

