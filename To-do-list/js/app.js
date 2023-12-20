const addBtn=document.getElementById("add-btn");
const userInput=document.getElementById("task");
const taskDeadline=document.getElementById("task-date");
const taskArea=document.getElementById("task-area");
const today=new Date();
let deadLine;
//check every day
const checkTime=1*24*60*60*1000
function clearInput(){
    userInput.value=""
    taskDeadline.value=''
}

addBtn.addEventListener("click",()=>{
    
    const newRow=document.createElement("tr");
    const element=`<td>${userInput.value}</td>
    <td> <button class="status-btn btn btn-info">pendding</button> </td>
    <td class="dead-line">${taskDeadline.value}</td>
    <td> <span class="delete"><i class="fa-regular fa-trash-can"></i></span></td>`
    newRow.innerHTML=element
    if(userInput.value){
        taskArea.append(newRow)
    }
    clearInput()
})

taskArea.addEventListener("click",(event)=>{
    if(event.target.tagName=="BUTTON"){
        const statusBtn=  event.target.closest("tr").querySelector("button")
        statusBtn.textContent="completed";
        statusBtn.classList.remove("btn-info")
        statusBtn.classList.add("btn-success")

    }
    else if(event.target.tagName=="I"){
       

        event.target.closest("tr").remove()
    }

})
setInterval(()=>{
    document.querySelectorAll(".dead-line").forEach(date=>{
        const statusBtn=  date.closest("tr").querySelector("button")
        if(new Date(date.textContent) <today && statusBtn.textContent != "completed"){
            statusBtn.textContent="missed"
            statusBtn.classList.remove("btn-info")
            statusBtn.classList.add("btn-danger")

        }
    })
},20000 ) //should use checkTime to cheak every day to be implemented

