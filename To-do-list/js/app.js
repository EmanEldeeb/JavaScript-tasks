const addBtn=document.getElementById("add-btn");
const userInput=document.getElementById("task");
const taskArea=document.getElementById("task-area");

function clearInput(){
    userInput.value=""
}

addBtn.addEventListener("click",()=>{
    const newRow=document.createElement("tr");
    const element=`<td>${userInput.value}</td>
    <td> <button class="status-btn btn btn-info">pendding</button> </td>
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