let globalId = 1;
let todoState = [];
let oldTodoState = [];


function createTodo(title, description, id){
  const parent = document.getElementById("todo-list");
  const child = document.createElement("div");
  child.classList.add("todo-item");

  const grandChild1 = document.createElement("div");
  grandChild1.innerHTML = `<strong>${title}</strong>`;
  const grandChild2 = document.createElement("div");
  grandChild2.innerHTML = description;
  const grandChild3 = document.createElement("button");
  grandChild3.innerHTML = "Mark as Done";
  grandChild3.setAttribute("onclick", `removeTodo('${id}')`);

  child.appendChild(grandChild1);
  child.appendChild(grandChild2);
  child.appendChild(grandChild3);
  child.setAttribute("id", id);

  parent.appendChild(child);
}
function removeTodo(id) {
  const parent = document.getElementById("todo-list");
  parent.removeChild(document.getElementById(id));
}

function updateTodo(oldTodo, newTodo) {
  const element = document.getElementById(oldTodo.id);
  if (newTodo.complete) {
    element.children[0].innerHTML = newTodo.title;
    element.children[1].innerHTML = newTodo.description;
    element.children[0].innerHTML = newTodo.complete?"Mark as done" : "Done";
  }
  }
// return true if was updated else false
function updateState(newTodos){
// calculate the diff b/w newTodos and oldTodos.
  // More specifically, find out what todos are -
  // 1. added
  // 2. deleted
  // 3. updated
  const added = [];
  const deleted = [];
  const updated = [];
  // calculate these 3 arrays
  // call addTodo, removeTodo, updateTodo functions on each of the
  // elements

  oldTodoState = newTodos;
}

function addTodo() {
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  todoState.push({
    title: title,
    description: description,
    id: globalId++,
  });
  updateState(todoState);
}