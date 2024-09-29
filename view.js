import * as controller from './controller.js';

export function start() {
    console.log('Started view');
    makeTable(20, 20);
    document.querySelector(".clear-grid-button").addEventListener("click", clearGridButton);
    document.querySelector(".add-random-cells-button").addEventListener("click", addRandomCellsButton);
    document.querySelector(".pause-button").addEventListener("click", pauseButton);
}

export function makeTable(rows, columns) {
    const table = document.querySelector(".grid-container");
    let isMouseDown = false;

    table.addEventListener("mousedown", () => {
        isMouseDown = true;
    });

    table.addEventListener("mouseup", () => {
        isMouseDown = false;
    });

    table.addEventListener("mouseleave", () => {
        isMouseDown = false;
    });

    for (let i = 0; i < rows; i++) {
        const tr = document.createElement('tr');
        for (let j = 0; j < columns; j++) {
            const td = document.createElement('td');
            td.dataset.row = i;
            td.dataset.column = j;
            tr.appendChild(td);

            let holdTimer;
            td.addEventListener("mousedown", function () {
                controller.reviveCell(i, j);
            });

            td.addEventListener("mouseover", function () {
                if (isMouseDown) {
                    controller.reviveCell(i, j);
                }
            });
        }
        table.appendChild(tr);
    }
}

export function displayGrid(model) {
    const gridLife = model.getLifeGrid();

    for (let row = 0; row < gridLife.getRows(); row++) {
        for (let column = 0; column < gridLife.getCols(); column++) {
            if (gridLife.get(row, column) === 1) {
                document.querySelector(`td[data-row="${row}"][data-column="${column}"]`).classList.add("alive");
            } else document.querySelector(`td[data-row="${row}"][data-column="${column}"]`).classList.remove("alive");
        }
    }
}

export function clearGridButton() {
    controller.clear();
}

export function addRandomCellsButton() {
    controller.addRandomCells();
}

export function pauseButton(){
    controller.pause()
}

export function updateGenerationCount(generationCount) {
    document.querySelector(".generation-count").innerHTML = generationCount;
}