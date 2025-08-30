const taskInput= document.querySelector(".task-input");
const form = document.querySelector("form");
const tasks = document.querySelector(".tasks");

function createTaskItem(txt) {
  const taskItem = document.createElement("div");
  taskItem.classList.add("task-item");

  const paragraph = document.createElement("p");
  paragraph.textContent = txt;

  const btnsContainer = document.createElement("div");

  const checkBtn = document.createElement("button");
  checkBtn.classList.add("checkboxBtn");

  const checkIcon = document.createElement("span");
  checkIcon.classList.add("material-symbols-outlined");
  checkIcon.textContent = "check";
  checkBtn.append(checkIcon);

  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete");

  const deleteIcon = document.createElement("span");
  deleteIcon.classList.add("material-symbols-outlined");
  deleteIcon.textContent = "delete";
  deleteBtn.append(deleteIcon);

  btnsContainer.append(checkBtn, deleteBtn);
  taskItem.append(paragraph, btnsContainer);

  return taskItem;
}

function handleSubmit(e) {
  e.preventDefault();
  const taskText = taskInput.value.trim();
  if (!taskText) return;

  const taskItem = createTaskItem(taskText);
  tasks.append(taskItem);

  taskInput.value = "";
  taskInput.focus();
}


tasks.addEventListener("click", (e) => {
   const target = e.target;
  const taskItem = target.closest(".task-item");
  if (!taskItem) return;

  if (target.closest(".checkboxBtn, .checkboxBtnRed")) {
    const btn = target.closest(".checkboxBtn, .checkboxBtnRed");
    const icon = btn.querySelector("span");

    taskItem.classList.toggle("completed");

    
    btn.classList.toggle("checkboxBtn");
    btn.classList.toggle("checkboxBtnRed");

   
    icon.textContent = icon.textContent === "check" ? "close" : "check";
  }

  
  if (target.closest(".delete")) {
    taskItem.remove();
  }
});


form.addEventListener("submit", handleSubmit);
taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    handleSubmit(e);     
  }
});