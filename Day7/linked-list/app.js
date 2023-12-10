const linkedList={
    data:[],
    sortVal: function () {
        for (let i = 0; i < this.data.length - 1; i++) {
            for (let j = 0; j < this.data.length - i - 1; j++) {
                if (this.data[j].val > this.data[j + 1].val) {
                    let temp = this.data[j];
                    this.data[j] = this.data[j + 1];
                    this.data[j + 1] = temp;
                }
            }
        }
    },
    pushVal:function(value){
        const obj={
            val:value
        }
        if(this.data.length !=0){
            if(this.data[this.data.length-1]?.val<(value)){
                this.data.push(obj)
                this.sortVal();
             }
             else{
                throw new Error(`not in sequence should be  larger than${this.data[this.data.length-1]?.val} not ${value}`)
             }
        
           
        }else{
            this.data.push(obj)  
        }
         
        
    },
    insertVal:function(value,index){
        const foundEle=this.data.find(ele=>ele.val==value)
        if(!foundEle && this.data[index-1].val<value ){
            // if(!foundEle){
            this.data.splice(index,0,{val:value})
            this.sortVal()
        }
        else{
            this.displayVals()
            throw new Error(`element exsits or not in sequence the last element is${this.data[index-1].val} index ${index-1} and your value is ${value} index ${index}`)
        }

    },
    popVal:function(){
        this.data.pop()
    },
    removeVal:function(value){
        let index=0;
        const foundEle=this.data.find((ele,ind)=>{ 
            index=ind;
            return ele.val==value
        })
        if(foundEle){
    
            this.data.splice(index,1)
        }else{
            throw new Error("element not found")
        }

    },
    dequeueVal:function(){
        this.data.shift()
    },
    displayVals:function(){
        for(const val of this.data){
            console.log(val)
        }
    }
}


linkedList.pushVal(2)
linkedList.pushVal(6)
linkedList.pushVal(8)
linkedList.insertVal(4,1)
// linkedList.insertVal(4,3) //give error wrong insertion index
console.log(linkedList.data)

linkedList.displayVals()



