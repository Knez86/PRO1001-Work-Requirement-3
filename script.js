let todos = [
    {id: 1, text: "Learn JavaScript"},
    {id: 2, text: "Build a to-do app"},
    {id: 3, text: "Master DOM manipulation"}
];


const todoList = document.getElementById("todo-list");
const todoInput = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");

// Create todo item element

function createTodoElement(todo) {

    const newTodoEl = document.createElement("li");
    newTodoEl.classList.add("todo-item");
    const newSpanEl = document.createElement("span");
    newSpanEl.textContent = todo.text;
    const delButton = document.createElement("button");
    delButton.textContent = "Delete";
    delButton.addEventListener("click", function() {
        deleteTodo(todo.id)
    });
    newTodoEl.appendChild(newSpanEl);
    newTodoEl.appendChild(delButton);
    return newTodoEl;
}

// Render todos

function renderTodos() {

    todoList.innerHTML = "";
    todos.forEach(function(todo) {
        todoList.appendChild(createTodoElement(todo));
    });

}

// Add todo

function addTodo() {
 
    const inputText = todoInput.value.trim();

    if (inputText !== "") {

        const newTodo = {
        id: todos.length + 1,
        text: inputText
        };
       
       todos.push(newTodo);
       todoInput.value = "";
       renderTodos();
    };
}

// Delete todo

function deleteTodo(id) {
   
    todos = todos.filter(function(todo) {
        return (todo.id !== id);
    });

    renderTodos();
}

addButton.addEventListener("click", addTodo);
todoInput.addEventListener("keypress", function(keyPress) {
    if (keyPress.key == "Enter") {
        addTodo();
    }
});

renderTodos();
