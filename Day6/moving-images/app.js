
var img1 = document.querySelector(".img1");
var img2=document.querySelector(".img2")
var img3=document.querySelector(".img3")
var top1 = 0;
var left2=0;
var left3=0;
var d1= 1;
var d2=1;
var d2=1 
setInterval(() => {
    top1 = parseInt(getComputedStyle(img1).getPropertyValue("top"));
    console.log(top1,"before")
    if (top1 >= 400) {
    console.log(top1)
        d1 = -1; // Change d1 to move up

    } else if (top1 <= 0) {
    console.log(top1)
        d1 = 1; // Change d1 to move down

    }

    img1.style.top = `${top1 + d1 * 50}px`; 
}, 1000)
setInterval(() => {
    left2 = parseInt(getComputedStyle(img2).getPropertyValue("left"));
    if (left2 >= 450) {
    
        d2 = -1; 

    } else if (left2 <= 0) {

        d2 = 1; 

    }

    img2.style.left = `${left2 + d2 * 50}px`; 
}, 1000)
setInterval(() => {
    left3= parseInt(getComputedStyle(img3).getPropertyValue("left"));
    if (left3 >= 450) {
        d3 = -1; 

    } else if (left3 <= 0) {
    
        d3 = 1; 

    }

    img3.style.left = `${left3 + d3 * 50}px`; 
}, 1000)