const myObj={
    id:'1',
    name:"eman",
    getSetGen:function(){
        var obj=this;
        console.log("obj",obj)
        console.log(this)
        for(var key in obj){
           (function(key){
            console.log(key)
              if(typeof obj[key] !== "function"){
                obj[`set${key}`]=function(val){
                  obj[key]=val;
                }
                obj[`get${key}`]=function(){
                 return obj[key]
                }
             }
           })(key)
        }
    }
}

myObj.getSetGen()
console.log(myObj)
myObj.setid(3)
console.log(myObj.getid())

var newObj={
    color:"green",
    version:2023,
}
newObj["u"]=8;
myObj.getSetGen.call(newObj)


console.log(newObj)
newObj.setu("o")

