import * as model from "./model.js";
import * as view from "./view.js";

window.addEventListener("load", main());

let count = 0;

function main() {
    console.log("controller init");
    model.init(20, 20);
    view.start();
    window.model = model;
    window.view = view;

    setInterval(runIteration, 1500);
}

export function runIteration() {
    model.runIteration();
    view.displayGrid(model);
    generationCount();
}

export function clear() {
    model.clear();
    view.displayGrid(model);
}

export function addRandomCells() {
    model.randomCellFill();
    view.displayGrid(model);
}

export function generationCount() {
    count++;
    view.updateGenerationCount(count);
}