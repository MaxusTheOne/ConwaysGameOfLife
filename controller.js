import * as model from "./model.js"

window.addEventListener("load", main());

function main(){
    console.log("controller init");
    model.init(20, 30)
    
    window.model = model;
  
}