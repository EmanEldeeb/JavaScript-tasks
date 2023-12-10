var userName=document.getElementById("welUser")
var visiteNum=document.getElementById("visitNum")
var userGender=document.getElementById("gender")
var gender=getCookie("gender")
var Name=getCookie("UserName")
var count=getCookie("count")
if(gender=="male"){
    userGender.src="./images/1.jpg"
}else{
    userGender.src="./images/2.jpg"
}
userName.innerHTML=Name;
console.log(count)
;
// window.onload=function(){
    if(!getCookie("count")){
        setCookie("count",0)
    }
  var count= parseInt(getCookie("count"));
  setCookie("count",++count)
// }

visiteNum.innerHTML=count
visiteNum.style.color=getCookie("color")
userName.style.color=getCookie("color")

