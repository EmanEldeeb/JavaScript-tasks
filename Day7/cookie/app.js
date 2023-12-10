var userName=document.getElementById("userName")
var userAge=document.getElementById("userage")
var genderOptions=document.getElementsByName("gender")
var genderValue="male";
var color=document.getElementById("color")



var submitBtn=document.getElementById("submit");
submitBtn.addEventListener("click",()=>{
 for(var i=0;i<genderOptions.length;i++){
        if(genderOptions[i].checked){
           genderValue=genderOptions[i].value
        } 
       }
   setCookie("UserName",userName.value)
   setCookie("userAge",userAge.value)
   setCookie("gender",genderValue)
    setCookie("color",color.value)
    console.log(color.value)
setTimeout(()=>{
    location.assign("welcome.html")
    
},1000)
})


