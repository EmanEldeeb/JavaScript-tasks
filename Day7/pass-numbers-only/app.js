function add(a,b){
var sum=0
if(arguments.length==0){
    throw new Error("there are no arguments")
}
for( var i=0;i<arguments.length;i++){
 if(typeof arguments[i] !="number" ){
    sum=0
    throw new Error("arguments don't match the requirement (number) type")
 }
 else{
    sum+=arguments[i]
 }
 
}
console.log(sum)

}

add(1)