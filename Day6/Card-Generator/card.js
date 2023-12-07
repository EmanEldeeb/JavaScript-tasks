var closeBtn=document.getElementById("close")

var cardImage=document.getElementById("card-img")
var message=document.getElementById("message")

window.onload=function(){
    cardImage.src=getCookie("cardImg")
    console.log(getCookie("message"))
    message.innerHTML=getCookie("message")
}

closeBtn.addEventListener("click",()=>{
    window.close()
})

function getCookie(key){
    var value='';
   var cookies=document.cookie.split("; ");
   for(var i=0;i<cookies.length;i++){
       if(cookies[i].includes(key)){
           value=cookies[i]
       }
   }
    return value.split("=")[1]
   }