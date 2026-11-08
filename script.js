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
let isDrawing = false;
grid.addEventListener('mousedown',function(e){
    if(e.target.classList.contains("pixel")) {
        isDrawing = true;
    }
})

window.addEventListener('mouseup', function(){
    isDrawing = false;
})
grid.addEventListener('mouseover', function(e){
    if(isDrawing && e.target.classList.contains("pixel")){
        let r = e.target.dataset.row;
        let c = e.target.dataset.column;

        matrix[Number(r)][Number(c)] = 1;

        e.target.style.backgroundColor = "black";
    };
})