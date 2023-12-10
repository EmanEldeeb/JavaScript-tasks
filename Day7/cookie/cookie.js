function getCookie(key){
    if(arguments.length>1 || arguments.length==0){
        throw new Error ("you must pass one key only")
    }
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
    if(arguments.length <2){
        throw new Error("not enough argument at least give value and key")
    }
    var exdata=new Date();
    exdata.setTime(exdata.getTime()+(expire*1000*60*60*24))
    // if(!getCookie(key)){
        document.cookie=`${key}=${value};expires=${exdata}`
    // }
    // else{
    //     console.log("already exist")
    // }
}

function deleteCookie(key){
    if(arguments.length>1 || arguments.length==0){
        throw new Error ("we must pass only one key")
    }
   if(getCookie(key)){
    document.cookie=`${key}=; Max-Age=0`
   }
}

function allCookieList(){
    if(arguments){
        throw new Error("doesn't expect any argument")
    }
    console.log(document.cookie)
    return document.cookie
}

function hasCookie(key){
    if(arguments.length>1 || arguments.length==0){
        throw new Error ("we must pass only one key")
    }
    if(getCookie(key)){
        console.log("exists")
        return true;
    }else{
        console.log("not exists");
        return false;
    }
}