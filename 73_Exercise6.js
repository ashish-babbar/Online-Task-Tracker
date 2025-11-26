let addTask = document.getElementById("add-task-btn"); //Positions at add-task-button
let ihtml
addTask.addEventListener("click", function (e) {
  e.preventDefault()
  let taskName = document.getElementById("task-input").value;
  let taskDetail = document.getElementById("task-detail").value;

  if (taskName === "" || taskDetail === "") {
    alert("Enter Valid Task!!")
    return;
  }
  console.log(taskName)
  console.log(taskDetail)

  localStorage.setItem(taskName, taskDetail);

  ihtml = `<div class="task-box-display">
                <h2>${taskName}</h2>
                <h1>${localStorage.getItem(taskName)}</h1>
            </div>`

  // document.querySelector(".task-container").innerHTML += ihtml
  document
    .querySelector(".task-container")
    .insertAdjacentHTML("beforeend", ihtml)

  document.getElementById("task-input").value = ""
  document.getElementById("task-detail").value = ""
}); 