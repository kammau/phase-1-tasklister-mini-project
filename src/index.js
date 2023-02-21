document.addEventListener("DOMContentLoaded", () => {
  // your code here
  function listBuilder(value) {
    let li = document.createElement("li");
    let btn = document.createElement("button");
    btn.addEventListener("click", deleteHandler);
    btn.textContent = "Delete"
    li.textContent = `${value} `
    li.appendChild(btn)
    document.getElementById("tasks").appendChild(li)
  }

  function deleteHandler(value) {
    value.target.parentNode.remove()
  }
  
  let form = document.getElementById("create-task-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    listBuilder(event.target["new-task-description"].value)
    form.reset();
  })
});

