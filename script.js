const taskInput= document.querySelector(".task-input");
const form = document.querySelector("form");
const tasks = document.querySelector(".tasks");

function handleSubmit(e){
e.preventDefault();
const task = taskInput.value;
if(task.length){
    

const taskItem = document.createElement("div");
taskItem.classList.add("task-item");
const paragraph = document.createElement("p");
paragraph.textContent = task;
const btnsContainer = document.createElement("div");
const checkBtn = document.createElement("button");
checkBtn.classList.add("checkboxBtn");
checkBtn.addEventListener("click", e => {
    e.preventDefault();
    if(e.currentTarget.children[0].textContent === "check") {
    e.currentTarget.closest(".task-item").style.backgroundColor  = "rgb(158, 253, 160)";

      e.currentTarget.children[0].textContent = "close"; 
      e.currentTarget.classList.remove("checkboxBtn"); 
      e.currentTarget.classList.add("checkboxBtnRed"); 
    }else {
     e.currentTarget.closest(".task-item").style.backgroundColor  = "white";

        e.currentTarget.children[0].textContent = "check";
        e.currentTarget.classList.remove("checkboxBtnRed"); 
      e.currentTarget.classList.add("checkboxBtn"); 
    }
})
spanInCheckBtn =document.createElement("span");
spanInCheckBtn.classList.add("material-symbols-outlined");
spanInCheckBtn.textContent= "check";
const deleteBtn = document.createElement("button");
deleteBtn.addEventListener('click',e => {
    e.currentTarget.closest(".task-item").remove();
})
deleteBtn.classList.add("delete");
spanInDeleteBtn =document.createElement("span");
spanInDeleteBtn.classList.add("material-symbols-outlined");
spanInDeleteBtn.textContent= "delete";
checkBtn.append(spanInCheckBtn);
deleteBtn.append(spanInDeleteBtn);
btnsContainer.append(checkBtn,deleteBtn)
taskItem.append(paragraph,btnsContainer);
tasks.append(taskItem);
taskInput.value = "";
}
}
form.addEventListener("submit", handleSubmit);

taskInput.addEventListener("keypress", e => {
    if(e.key === "Enter"){
        handleSubmit(e);
    }
})