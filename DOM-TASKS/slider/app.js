var nextBtn=document.getElementById("next")
var showBtn=document.getElementById("show")
var stopBtn=document.getElementById("stop")
var preBtn=document.getElementById("Pre")

var gallary=document.querySelectorAll("img")
var current=1;
var start=0;
var flag=0;
var end=gallary.length-1;
console.log(gallary)

function removeView(){
    for(var i=0;i<gallary.length;i++){
        gallary[i].classList.remove("view")
    }
}
nextBtn.addEventListener("click",()=>{
    
   if(current<=end){
    removeView()
    gallary[current].classList.add("view");
    current++;
   }
   if(current>end){
    return;
   }
})

preBtn.addEventListener("click",()=>{
if(current == gallary.length){
    current--;
}
if(current<=end&&current>start){
    removeView()
    --current;
    gallary[current].classList.add("view");

}
if(current==start){
   return
}
})

stopBtn.addEventListener("click",()=>{
   
    showBtn.classList.toggle("dis")

})

showBtn.addEventListener("click",()=>{
if(current==end ){
    console.log("=e",current)

    removeView()
    current=0;
    gallary[current].classList.add("view");

}
else if(current<=end){
    removeView()
    console.log("<",current)
    current++;
    gallary[current].classList.add("view");
    
}
else if(current>=start){
    console.log(">",current)

    removeView()
    current--;
    gallary[current].classList.add("view");
}
else if(current==start){
    console.log("=s",current)

    removeView()
    current=end;
    gallary[current].classList.add("view");
}
})