const rollBtn=document.querySelector(".btn--roll");
const holdBtn=document.querySelector(".btn--hold");
const newGameBtn=document.querySelector(".btn--new");
const diceImg=document.querySelector(".dice")
const playerZeroScore=document.getElementById("score--0")
const playerOneScore=document.getElementById("score--1")
const playerZeroCurrent=document.getElementById("current--0")
const playerOneCurrent=document.getElementById("current--1")
diceImg.classList.add("hidden")
playerOneScore.textContent=0;
playerZeroScore.textContent=0
let currentScore=0
let player=0
const finalScores=[0,0]

// rolling the dice
rollBtn.addEventListener("click",function(){

    const diceRandomNum=Math.trunc(Math.random()*6)+1
    diceImg.classList.remove("hidden");
    diceImg.src=`./images/dice-${diceRandomNum}.png`

    if(diceRandomNum != 1){
        //getting current scorce for the current player
        currentScore+=diceRandomNum;
        document.getElementById(`current--${player}`).textContent=currentScore

    }
    else{
        //switch player
        switchPlayer()
        
}})


function switchPlayer(){
    //end game and get the winner
    win();
   
    console.log("switch")
    document.querySelector(`.player--${player}`).classList.toggle("player--active")
    currentScore=0;
    document.getElementById(`current--${player}`).textContent=0;
    player=player==0?1:0;
    document.querySelector(`.player--${player}`).classList.toggle("player--active")

}

function win(){
    if(finalScores[player]>=20){
        console.log("win")
        holdBtn.classList.add("disable-btn")
        rollBtn.classList.add("disable-btn")
        document.querySelector(`.player--${player}`).classList.remove("player--active")
        document.querySelector(`.player--${player}`).classList.add("player--winner")


    }
   
}


holdBtn.addEventListener("click",function(){
    //end game and get the winner
    win()
    console.log(finalScores[player],player)
    finalScores[player]+= currentScore
    document.getElementById(`current--${player}`).textContent=0
    document.getElementById(`score--${player}`).textContent=finalScores[player]
    switchPlayer()  



})


