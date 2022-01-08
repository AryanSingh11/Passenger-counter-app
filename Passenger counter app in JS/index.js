//document.getElementById("count-el").innerText=5

let count = 0;

let countEl = document.getElementById("count-el")

function increment(){
   console.log( "clicked")
    count+=1
    countEl.textContent= count
    console.log(count);
}
  
let saveEl= document.getElementById("save-el")

 
function save(){
    let countStr= count + " - "
   saveEl.textContent+= countStr
   count=0
   countEl.textContent=0
}