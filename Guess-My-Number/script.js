'use strict';
const againBtn=document.querySelector(".again");
const rightNum=document.querySelector(".number");
const inputNum=document.querySelector(".guess");
const checkBtn=document.querySelector(".check");
const message=document.querySelector(".message");
const score=document.querySelector(".score")
const highScore=document.querySelector(".highscore")

let randomNum=Math.trunc(Math.random()*20)+1
let totalScore=20;
console.log(randomNum)
console.log(checkBtn)
checkBtn.addEventListener("click",()=>{
  let enteredNum=Number(inputNum.value)
  console.log(enteredNum)
//win
  if(enteredNum===randomNum){
   win()
  }
  //to high
  else if(enteredNum>randomNum){
    guessAgain("TOO HIGH")
  }
  //to low
  else if(enteredNum<randomNum){
    guessAgain("TOO LOW")
  }



})

againBtn.addEventListener("click",()=>{
    document.body.classList.remove("green")
    checkBtn.classList.remove("btn-disable")
    inputNum.value=""
    rightNum.textContent="?";
    message.textContent="Start guessing..."
    totalScore=20;
    score.textContent=totalScore;
    
   
})

function win(){
    randomNum=Math.trunc(Math.random()*20)+1
    document.body.classList.add("green")
    message.textContent="You Won"
    rightNum.textContent=randomNum;
    if(totalScore > Number(highScore.textContent)){
        highScore.textContent=totalScore;
    }
}

function guessAgain(txt){
    if(totalScore>0){
        message.textContent=txt;
        totalScore--;
        score.textContent=totalScore;
    }else{
        message.textContent="GAME OVER"
        checkBtn.classList.add("btn-disable")
    }
    
}
