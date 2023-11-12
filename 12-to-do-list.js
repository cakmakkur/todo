todoList = JSON.parse(localStorage.getItem("todoList")) || [{
    name: 'what to do?',
    dueDate: 'when'}, 
    ]

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  todoList.forEach((todoObject, index) => {
    const {name, dueDate} = todoObject;

    const html = `<div class="name-css">${name}</div><div class="due-css">${dueDate}</div><button class="css-button js-delete" >Delete</button>`;
    todoListHTML += html;
  });

  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
  localStorage.setItem("todoList", JSON.stringify(todoList)); 
  console.log(todoListHTML);

  document.querySelectorAll('.js-delete').forEach((deleteButton, index) => {
    deleteButton.addEventListener('click', () => {
    todoList.splice(index, 1); renderTodoList();
    });
  });
}

document.querySelector('.add-js').addEventListener('click', () => {
  addTodo();
});

document.body.addEventListener('keydown', (event) => {
  console.log(event.key);
  }
);
 

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const dateInputElement = document.querySelector('.js-date-input');
  const name = inputElement.value 
  const dueDate = dateInputElement.value
 
  todoList.push({
    name: name,
    dueDate
  });
  console.log(todoList);
  inputElement.value = '';
  localStorage.setItem("todoList", JSON.stringify(todoList));
  renderTodoList();
}