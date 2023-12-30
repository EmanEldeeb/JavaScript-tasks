const red=document.querySelector("input[name=red]");
const green=document.querySelector("input[name=green]");
const blue=document.querySelector("input[name=blue]");
const txt=document.querySelector(".text");

let redVal=0;
let greenVal=0;
let blueVal=0;


red.addEventListener("input",(e)=>{
    redVal=e.currentTarget.value;
    txt.style.color=`rgb(${redVal},${greenVal},${blueVal})`
})
green.addEventListener("input",(e)=>{
    greenVal=e.currentTarget.value;
    txt.style.color=`rgb(${redVal},${greenVal},${blueVal})`
})
blue.addEventListener("input",(e)=>{
    blueVal=e.currentTarget.value;
    txt.style.color=`rgb(${redVal},${greenVal},${blueVal})`
})