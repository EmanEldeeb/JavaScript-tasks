var nameInput=document.querySelector("input");
var myEvent=new Event("stayup")

var timerId=setInterval(()=>{
    nameInput.dispatchEvent(myEvent)
},1000)

nameInput.addEventListener("stayup",()=>{
    console.log("passed")
})

nameInput.addEventListener("input",()=>{
    console.log("stopped")
 clearTimeout(timerId)
})

nameInput.addEventListener("blur",()=>{
    timerId=setInterval(()=>{
        nameInput.dispatchEvent(myEvent)
    },1000)

})