const GameCategory=document.querySelector(".chosenCategory")
const guessWordContainer=document.querySelector(".guess-word");
const hangAndMan=document.querySelectorAll(".draw div.hide");
const lettres="abcdefghijklmnopqrstuvwxyz".split("");
const lettersConatiner=document.querySelector(".letters");
const resetBtn=document.querySelector(".reset span");
const MaxTries=hangAndMan.length;
let wrongTries=0;
let rightLeterr=0;
// chooses
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
  }
// getting random word
const categories=Object.keys(words);
const numOfCategories=categories.length;
const randomCategoryIndex=Math.floor(Math.random()*numOfCategories);
const chosenCategory=categories[randomCategoryIndex];
GameCategory.textContent=chosenCategory;
const chosenCategoryList=words[chosenCategory];
const chosenCategoryLenght=chosenCategoryList.length;
const chosenWordIndex=Math.floor(Math.random()*chosenCategoryLenght);
const ChosenWord=chosenCategoryList[chosenWordIndex].toLowerCase().split("");
console.log(ChosenWord);
// creating spaces =num of letter in the word
ChosenWord.forEach(letter=>{
    const span=document.createElement("span");
    span.classList.add("right-guess");
    guessWordContainer.append(span);
})
//select these spaces
const lettersPlaceholders=guessWordContainer.children;

// creating keyboard
lettres.forEach(letter=>{
    const span=document.createElement("span");
    span.classList.add("letter");
    span.textContent=letter;
    lettersConatiner.append(span);

})


// handel letter clicks
lettersConatiner.addEventListener("click",(event)=>{
    if(event.target.classList.contains("letter")){
        //get clicked letter
       let clickedLetter=event.target;
       clickedLetter.classList.add("clicked-letter");
       let clickedLetterValue=clickedLetter.textContent.toLowerCase();
           // check existance
            if(ChosenWord.includes(clickedLetterValue)){
                for(let i=0;i<ChosenWord.length;i++){
                    //show correct chocess
                    if(ChosenWord[i]==clickedLetterValue){
                        rightLeterr++;
                        lettersPlaceholders[i].textContent=clickedLetterValue;
                    }
                }
            }else{//handle wrong chocess
                hangAndMan[0].classList.remove("hide")
                for(let i=0;i<wrongTries+1;i++){
                    hangAndMan[i].classList.remove("hide");
                }
                wrongTries++;

            }
            //ending the game
            if(wrongTries==MaxTries){
                event.currentTarget.classList.add("disabled");
                guessWordContainer.innerHTML="Lost the Game";
            }else if(rightLeterr == ChosenWord.length){
                guessWordContainer.innerHTML=`congratulations the word is ${ChosenWord.join("")}`;
                guessWordContainer.classList.add("won");
                event.currentTarget.classList.add("disabled");
            }
    }
})

resetBtn.addEventListener("click",()=>{
    location.reload()
})