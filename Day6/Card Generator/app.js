var cardOptions=document.getElementsByTagName("img")
var picBox=document.getElementById("pics")
var generateBtn=document.getElementById("generate")

var src="./images/gws2.jpg"



picBox.addEventListener("click",(event)=>{
    if(event.target.tagName=="INPUT"){
        src=event.target.value
        document.cookie="cardImg="+src
        if(event.target?.previousElementSibling.tagName == "IMG"){
            for(var i=0;i<cardOptions.length;i++){
                cardOptions[i].classList.remove("clicked")
            }
            event.target.previousElementSibling.classList.add("clicked")
            
              }
    }
   
})

generateBtn.addEventListener("click",()=>{
    var message = document.getElementById("p-m").value
    document.cookie="message="+message
    // location.assign("card.html")
     window.open("card.html","","width=600,height=600").focus();
})