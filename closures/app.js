const testClosure={
    user:"eman",
    getSetGenrator(){
        const self=this
       for(var key in self){
         if( typeof self[key] !== "function"){
           (function(key){
            self[`set${key}`]=function(value){
                self[key]=value;
           }
           })(key);
            (function(key){
                self[`get${key}`]=function(){
                    return self[key]
                }
            })(key);
         }
       }
    }
}
testClosure.getSetGenrator()
console.log(testClosure.getuser());
const obj={
    color:"green"
}
testClosure.getSetGenrator.call(obj)
/*Why do we use the self variable to capture the this value in the IIFE function? When executed, 
it refers to the window object. If I use this inside it, the setter and getter will be defined inside
the window, not within my object.

So, why do we use an IIFE function to narrow the scope? If we don't use it, the key that appears in 
the getter and setter functions will always be the last key that was read in the object. In this case,
it's the function itself. 
Consequently, we can't create setters and getters for other properties */