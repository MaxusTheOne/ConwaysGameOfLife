import Grid from "./grid.js";

let lifeGrid = []
let neighbourGrid = []

export function init(rows, cols){
    console.log("model start");
    lifeGrid = new Grid(rows, cols)
    neighbourGrid = new Grid(rows, cols)
    lifeGrid.fill(0)
    console.log(lifeGrid.dump());
     
}

export function countNeigbours(){
    let newNeighbourGrid = new Grid(lifeGrid.getRows(), lifeGrid.getCols())
    newNeighbourGrid.fill(0)
    for (let row = 0; row <= lifeGrid.getRows(); row++){
        for (let col = 0; col <= lifeGrid.getCols(); col++){
            const neighbourValues = lifeGrid.neighbourValues({row: row, col: col})
            let myValue = 0;
            neighbourValues.forEach(obj => {
                myValue += obj.value
            });
            newNeighbourGrid.set({row: row, col: col}, myValue)
        }
    }
    console.log(newNeighbourGrid.dump());
    neighbourGrid = newNeighbourGrid
    
    return neighbourGrid
}

export function getLifeGrid() {
    return lifeGrid;
}

export function logLifeGrid() {
    console.log(lifeGrid.dump());
    
}
export function logneighbourGrid() {
    console.log(neighbourGrid.dump());
    
}

export function randomCellFill(){
    lifeGrid.fillWithTwo(1,0)
    console.log(lifeGrid.dump());

    return lifeGrid
}

export function neigboursToLiveCells(){
    let newLifeGrid = new Grid(lifeGrid.getRows(), lifeGrid.getCols())
    newLifeGrid.fill(0)
    for (let row = 0; row < lifeGrid.getRows(); row++){
        for (let col = 0; col < lifeGrid.getCols(); col++){

            // console.log(`Checking cell at row: ${row}, col: ${col}, value: ${neighbourGrid.get(row, col).value}`);
            const neigbours = neighbourGrid.get({row: row, col: col})
          
            
            
            
            if (neigbours < 2) newLifeGrid.set(row, col, 0);
            else if (neigbours == 2) newLifeGrid.set(row, col, lifeGrid.get(row, col));
            else if (neigbours == 3) newLifeGrid.set(row, col, 1);
            else if (neigbours > 3) newLifeGrid.set(row, col, 0);
            
        }   
    }
    lifeGrid = newLifeGrid;
    console.log(lifeGrid.dump());
    

    return lifeGrid
}

export function runIteration(){
    countNeigbours().dump()
     
    neigboursToLiveCells()
}