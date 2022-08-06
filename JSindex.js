//javascript

let countEl = document.getElementById("count-el");

let count = 0;


let saveEl = document.getElementById("save-el");


function increment() {
   
    count += 1;
    countEl.innerText = count; 
    console.log(count);
};

function reset() {

    
    count = null; 

    saveEl.textContent = count; 
    console.log(count);
    
    
};

function save() {

    let totalCount = count + " - ";
    saveEl.textContent += totalCount ;
    console.log(count);
    if (count > 0) {
        count -= count; 
        countEl.textContent = count; 
        console.log(count);
    }

}