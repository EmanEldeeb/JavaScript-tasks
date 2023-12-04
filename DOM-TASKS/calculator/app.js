var AnswerOutput=document.getElementById("Answer");
var x,y,oper;

function EnterNumber(val){
  x=+val;
}

function EnterOperator(opertion){
    
 oper=opertion
 if(!y){
   y=x
 }
;
}



function EnterClear(){
    AnswerOutput.value=""
    
    
}

function EnterEqual(){
  
    if(oper == "+" ){
      console.log("y",y,"x",x)
      y+=x;
      
        AnswerOutput.value=y;
        console.log(y)
     }
     if(oper == "-"){
        y-=x;
        AnswerOutput.value=y;
     }
     if(oper == "*"){
      y*=x;
      AnswerOutput.value=y;
      }
     if(oper == "/" ){
      y/=x;
      AnswerOutput.value=y;
        
     }
    
}