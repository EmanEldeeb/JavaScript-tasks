function getCookie(key){
 var value='';
var cookies=document.cookie.split("; ");
for(var i=0;i<cookies.length;i++){
    if(cookies[i].includes(key)){
        value=cookies[i]
    }
}
 return value.split("=")[1]
}

function setCookie(key,value,expire=0){

    // if(!getCookie(key)){
        document.cookie=`${key}=${value};expires=${expire}`
    // }
    // else{
    //     console.log("already exist")
    // }
}

function deleteCookie(key){
   if(getCookie(key)){
    document.cookie=`${key}=; Max-Age=0`
   }
}

function allCookieList(){
    console.log(document.cookie)
    return document.cookie
}

function hasCookie(key){
    if(getCookie(key)){
        console.log("exists")
        return true;
    }else{
        console.log("not exists");
        return false;
    }
}