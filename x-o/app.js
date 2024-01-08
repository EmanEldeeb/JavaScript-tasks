const optionModel=document.querySelector(".option-container");
const competeBrowserBtn=document.querySelector(".browser-btn");
const competeFrindBtn=document.querySelector(".frind-btn");
const cellContainer=document.querySelector(".cell-container");
const currentPlayer=document.querySelector(".current-player");
const gameStatus=document.querySelector(".game-status");
const restBtn=document.querySelector(".reset span");

let currentLetter="X";
let playingMode;
let playingstatus=false;
const board=["","","","","","","","",""];
const winCondations=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
competeBrowserBtn.addEventListener("click",()=>{
    playingMode=0;
    closeModel()
});
competeFrindBtn.addEventListener("click",()=>{
    playingMode=1;
    closeModel()
})
function closeModel(){
    optionModel.classList.add("hide")
}


cellContainer.addEventListener("click",writeCellHandeler)
function writeCellHandeler(e){
    playingstatus=true;
    const clickedCell=e.target;
    if(clickedCell.classList.contains("cell")){    
        clickedCell.classList.add("disable")
        const clickedCellIndex=clickedCell.dataset.num;
        clickedCell.textContent=currentLetter;
        board[clickedCellIndex]=currentLetter;
        checkWinning()
        console.log(board);
        if(playingstatus&&board.some(space=>space=="")){
            switchPlayer()
        }
    }  
}
function switchPlayer(){
    //play with browser
    if(playingMode==0 && playingstatus){
        currentLetter=currentLetter=="X"?"O":"X";
        currentPlayer.textContent=currentLetter;
        let browserRandomIndex;
        do{
            browserRandomIndex=Math.floor(Math.random()*board.length);
            console.log(browserRandomIndex);
        }while(playingstatus && playingMode==0 && board[browserRandomIndex]!="")
        board[browserRandomIndex]=currentLetter;  
        const browserClickedCell= document.querySelector(`[data-num="${browserRandomIndex}"]`)
        browserClickedCell.textContent =currentLetter;
        checkWinning()
        browserClickedCell.classList.add("disable");
        currentLetter=currentLetter=="X"?"O":"X";
        currentPlayer.textContent=currentLetter;
    }//play with firend
    else if(playingMode ==1 && gameStatus){
        currentLetter=currentLetter=="X"?"O":"X";
        currentPlayer.textContent=currentLetter;
        cellContainer.addEventListener("click",writeCellHandeler)
    }
}
function checkWinning(){
    for(let i=0;i<winCondations.length;i++){
            let winCase=winCondations[i];
            let cellA=board[winCase[0]];
            let cellB=board[winCase[1]];
            let cellC=board[winCase[2]];
        if(cellA ==""|| cellB=="" ||cellC==""){
            continue;
        }  // get the winner
        else if(cellA == cellB && cellB == cellC){
            for(let i=0;i<3;i++){
                console.log(document.querySelector(`[data-num="${winCase[i]}"]`));
                document.querySelector(`[data-num="${winCase[i]}"]`).classList.add("win");
            }
            gameStatus.textContent=`${currentLetter} wins the game`;
            cellContainer.classList.add("disable");
            playingstatus=false;
        }//draw case
        else if(!board.some(space=>space=="")&&playingstatus){
            gameStatus.textContent=`It's A Draw`;
            playingstatus=false;
        }
        
    }
}
// reset the game
restBtn.addEventListener("click",()=>{
    location.reload();
})









