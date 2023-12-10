function reverseParams(){

    var revArr=Array.from(arguments).reverse()
    console.log(revArr)

}
function reversearguments(){

    var revArr=Object.values(arguments).reverse()
    console.log(revArr)

}

reversearguments(1,2,3,4)
reverseParams(1,2,3,4,5)