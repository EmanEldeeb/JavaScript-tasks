const generateBtn=document.querySelector("button");
const lengthInput=document.getElementById("passlen");
const passcontainer=document.getElementById("password");
const copyBtn=document.getElementById("copy-btn")

const capLetters="ABCDEFGHIJKLMNOPQ1RSTUVWXYZ";
const smallLetters="abcdefghijklmnopqrstuvwxyz";
const numbers="1234567890";
const specialChar="#@!$%&*=+-? <>|/";
const allChar=capLetters+smallLetters+numbers+specialChar;

function generatePassword(len){
    let password="";
    password+=capLetters[Math.floor(Math.random()*capLetters.length)]
    password+=smallLetters[Math.floor(Math.random()*smallLetters.length)]
    password+=numbers[Math.floor(Math.random()*numbers.length)]
    password+=specialChar[Math.floor(Math.random()*specialChar.length)]

    while(password.length<len){
        password+=allChar[Math.floor(Math.random()*allChar.length)]
    }

    passcontainer.value=password
}

function generatorHandeler(){
    let requiredLen=parseInt(lengthInput.value)
    if(requiredLen>=8&&requiredLen<=30){
        generatePassword(requiredLen)
    }else{
        lengthInput.value="Enter vaild length"
    }
}
function copyPasswordHandler(){
    passcontainer.select();
    document.execCommand("copy");
}
generateBtn.addEventListener("click",generatorHandeler)
copyBtn.addEventListener("click",copyPasswordHandler)
