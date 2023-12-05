var form=document.querySelector("form ")
var popup=document.querySelector(".layer")
var yesBtn=document.getElementById("yes")

var noBtn=document.getElementById("no")

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    popup.classList.add("view")
   
})

yesBtn.addEventListener("click",()=>{
    popup.classList.remove("view")
    location.assign("welcome.html");
})

no.addEventListener("click",()=>{
    popup.classList.remove("view")
    
})
popup.addEventListener("click",()=>{
    popup.classList.remove("view")
})