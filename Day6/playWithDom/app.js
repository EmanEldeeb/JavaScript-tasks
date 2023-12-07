var imageCon=document.querySelector("#header")
var image=imageCon.querySelector("img")
var navUl=document.getElementById("nav")
var clonedImg=image.cloneNode(true)
navUl.style.listStyle="circle";
imageCon.style.textAlign="right"
document.body.append(clonedImg)
