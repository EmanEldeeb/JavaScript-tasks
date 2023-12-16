function Sequence(start,end,step){
  
        var list=[];
        var fillSequence=(function (){
            for(var i=start;i<=end;i+=step){
            list.push(i)
            }
        }).bind(this)
        fillSequence()
        this.getSequence=function(){
            return list;
        }


        this.appendList=(function(value){
        console.log(step)
            if(list[list.length-1]==(value-step)){
                list.push(value)
                
            }
            else{
                throw new Error("not correct seqence");
            }
        })

        this.prependList=function(value){
            if(list[0]>(value)&& value%step==0){
                list.unshift(value)
                
            }
            else{
                throw new Error("not correct seqence");
            }
        }


        this.popList=function(){
            if(list.length){
                list.pop()
            }else{
                throw new Error("list is empty")
            }
        }

        this.shiftList=function(){
            if(list.length){
                list.shift()
            }else{
                throw new Error("list is empty")
            }

        }


}

var r=new Sequence(1,8,2)
console.log("get",r.getSequence())

r.prependList(0)
console.log("get",r.getSequence())
r.appendList(9)
r.appendList(11)
console.log("get",r.getSequence())
r.popList()
console.log("get",r.getSequence())

///
// function Sequence2(start,end,step){
//     this.start=start;
//     this.end=end;
//     this.step=step;
//     var list=[];
//     var fillSequence=(function (){
//         for(var i=this.start;i<=this.end;i+=this.step){
//         list.push(i)
//         }
//     }).bind(this)
    
//     fillSequence()
//     this.getSequence=function(){
//         return list;
//     }

// // var obj = this
//         this.appendList=(function(value){
       
//             if(list[list.length-1]==(value-this.step)){
//                 list.push(value)
                
//             }
//             else{
//                 throw new Error("not correct seqence");
//             }
//         })

//         this.prependList=function(value){
//             if(list[0]>(value)&& value%step==0){
//                 list.unshift(value)
                
//             }
//             else{
//                 throw new Error("not correct seqence");
//             }
//         }


//         this.popList=function(){
//             if(list.length){
//                 list.pop()
//             }else{
//                 throw new Error("list is empty")
//             }
//         }

//         this.shiftList=function(){
//             if(list.length){
//                 list.shift()
//             }else{
//                 throw new Error("list is empty")
//             }

//         }


// }