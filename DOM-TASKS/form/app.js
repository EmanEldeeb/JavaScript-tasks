var nameregx=/^[a-z A-z]{1,}$/
var mobileregex=/^01(0|1|2|)[0-9]{8}$/
var emailregex=/^[a-z A-Z]*@[0-9]{3,5}\.com$/
var inputName=document.getElementById("userName")
var inputEmail=document.getElementById("email")
var inputTitle=document.getElementById("jobtitle")
var inputMobile=document.getElementById("mobile")



inputName.addEventListener("input",()=>{
    if(!nameregx.test(inputName.value)){
        inputName.classList.add("error")
    }
    else{
        inputName.classList.remove("error")
    }
})
inputTitle.addEventListener("input",()=>{
    if(!nameregx.test(inputTitle.value)){
        inputTitle.classList.add("error")
    }
    else{
        inputTitle.classList.remove("error")
    }
})
inputEmail.addEventListener("input",()=>{
    if(!emailregex.test(inputEmail.value)){
        inputEmail.classList.add("error")
    }
    else{
        inputEmail.classList.remove("error")
    }
})

inputMobile.addEventListener("input",()=>{
    if(!mobileregex.test(inputMobile.value)){
        inputMobile.classList.add("error")
    }
    else{
        inputMobile.classList.remove("error")
    }
})