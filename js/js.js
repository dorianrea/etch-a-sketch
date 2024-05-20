let gridCount = 16;
let grid = document.getElementById("gridSpace");

document.getElementById("reset").addEventListener("click", resetGrid);
document.getElementById("setup").addEventListener("click", setupGrid);


function resetGrid(){
    while (grid.firstChild) {
        grid.removeChild(grid.firstChild);
    }
    makeGrid(gridCount);
}

function makeGrid(gridCount){



    for (let i = 0; i < gridCount; i++) {
        let rowSquare = document.createElement("div");
        // rowSquare.innerHTML = i;
        rowSquare.style.width = "700px";
        rowSquare.style.height = `${700 / gridCount}px`;
        // rowSquare.style.backgroundColor = "red";
        rowSquare.id = "gridRows";
        grid.appendChild(rowSquare);

        for (let j = 0; j < gridCount; j++) {
            let columnSquare = document.createElement("div");
            // columnSquare.innerHTML = j;
            columnSquare.style.width = `${700 / gridCount}px`;
            columnSquare.style.height = `${700 / gridCount}px`;
            // columnSquare.style.backgroundColor = "blue";
            columnSquare.id = "gridSquare";
            rowSquare.appendChild(columnSquare);

            columnSquare.addEventListener("mouseover", changecolor);
            
        }

    }

}

function changecolor(event){
    let square = event.srcElement;
    if(square.style.backgroundColor === ""){
        square.style.backgroundColor = getRandomColor();
    }else{
        colors = getComputedStyle(square).getPropertyValue('background-color').split(', ');
        colors[0] = parseFloat(colors[0].split('(')[1]);
        colors[1] = parseFloat(colors[1]);
        colors[2] = parseFloat(colors[2]);

        //Apply new style
        colors[3] = parseFloat(colors[3]) + 0.1;
        colors = 'rgba(' + colors.join(',') + ')';
        square.style.backgroundColor = colors;
    }
}

function getRandomColor() {
    let max = 256;
    let r = Math.floor(Math.random() * max);
    let g = Math.floor(Math.random() * max);
    let b = Math.floor(Math.random() * max);
    let color = `rgba(${r},${g},${b},0.1)`;
    return color;
  }

function setupGrid(){
    let newGridCount = prompt("Enter new grid size between 1 and 100", `Current grid is ${gridCount}`);
    if(newGridCount === null){
        return;
    }
    newGridCount = parseInt(newGridCount);
    if(!Number.isInteger(newGridCount) || newGridCount < 1 || newGridCount > 100 ){
        alert("Please enter a valid number between 1 and 100");
        setupGrid();
    }else{
        gridCount = newGridCount;
        resetGrid();
    }
}

makeGrid(gridCount);