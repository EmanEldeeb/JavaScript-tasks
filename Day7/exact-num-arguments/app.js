function exact(a,b){
    if(exact.length !=arguments.length){
        throw new Error("num of arguments is not correct!!")
    }else{
        return [a,b]
    }

}
console.log("correct call return",exact(2,3)
)
exact(1,2,3,4)