const todoForm = document.getElementById('todo-form')
const todoList = document.getElementById('todo-list')
const themeButton = document.getElementById('theme-button')

const initialTodos = [
    {
        id: 1,
        name: "Drawing"
    },
    {
        id: 2,
        name: "Watching"
    },
]

function renderTodos() {
    let todoKey = localStorage.getItem('todos')

    if (!todoKey) {
        localStorage.setItem('todos', JSON.stringify(initialTodos))
    }

    let todos = JSON.parse(localStorage.getItem('todos'))

    todoList.querySelector('ul').innerText = null

    for (let i = 0; i < todos.length; i++) {
        let newTodo = document.createElement('li')
        newTodo.innerHTML = `
            <h4>${todos[i].name}</h4>
            <div>
                <button>Edit</button>
                <button onclick="deleteTodo(${todos[i].id})">Delete</button>
            </div>
        `
        todoList.querySelector('ul').append(newTodo)
    }
}

function deleteTodo(id) {
    let todos = JSON.parse(localStorage.getItem('todos'))
    let newTodos = []

    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id !== id) {
            newTodos.push(todos[i])
        }
    }

    localStorage.setItem('todos', JSON.stringify(newTodos))
    renderTodos() // re-render ulang
}

function addTodo(event) {
    event.preventDefault()
    // event.target || document.getElementById('todo-form')
    const formData = new FormData(event.target)
    let todoName = formData.get('todoName') // event.target.todoName.value


    let todos = JSON.parse(localStorage.getItem('todos')) // data yang lama
    let newId;
    if (todos.length > 0) {
        newId = todos[todos.length - 1].id + 1
    } else {
        newId = 1
    }

    // Save data nya
    todos.push({ id: newId, name: todoName }) // diperbaharui
    localStorage.setItem('todos', JSON.stringify(todos)) // timpa dengan yang baru
    todoForm.reset();
    renderTodos()
}

todoForm.addEventListener('submit', addTodo)

window.addEventListener('load', renderTodos)

themeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark')
})

