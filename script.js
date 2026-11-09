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


let selectedColor = '#000000';

let colorPalette = document.getElementById("color-palette");
colorPalette.addEventListener("click", (e)=>{
    if(e.target.classList.contains('color-btn')){
        selectedColor = e.target.dataset.color;
        
    }
})

const customColor = document.getElementById('custom-color');
customColor.addEventListener("input", ()=> {
    selectedColor = customColor.value;
});


grid.addEventListener("click", function(event){
    if(event.target.classList.contains("pixel")){
        const clickedPixel = event.target;
        const r = Number(clickedPixel.dataset.row);
        const c = Number(clickedPixel.dataset.column);
        console.log(`Pixel clicked ${r}-${c}`);
        matrix[r][c] = selectedColor
        clickedPixel.style.backgroundColor = selectedColor;
    }
})
// reset part
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", ()=>{
    for(let i = 0; i<25; i++){
        for (let j = 0; j<25; j++){
            let temp = document.querySelector(`.pixel[data-row="${i}"][data-column="${j}"]`);
            temp.style.backgroundColor = "#ffffff"
        }
    }
})

// print btn
const printBtn = document.getElementById("print-btn");
printBtn.addEventListener("click", ()=> {
    const pixelSize = 4;
    const canvas = document.createElement("canvas");
    canvas.width = 25 * pixelSize;
    canvas.height = 25 * pixelSize;
    const ctx = canvas.getContext('2d');
    for(let i = 0; i<25; i++){
        for (let j=0; j<25; j++){
            ctx.fillStyle = matrix[i][j];
            const x = j * pixelSize;
            const y = i * pixelSize;

            ctx.fillRect(x, y, pixelSize, pixelSize);
        }
    }
    document.body.appendChild(canvas);

});


