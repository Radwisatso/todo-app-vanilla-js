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

function getTodos() {
    let todos = JSON.parse(localStorage.getItem('todos'))
    if (!todos) {
        localStorage.setItem('todos', JSON.stringify(initialTodos))
        todos = JSON.parse(localStorage.getItem('todos'))
    }
    return todos
}

function pushTodo(todo) {
    let todos = getTodos()
    todos.push(todo)
    localStorage.setItem('todos', JSON.stringify(todos))
}

function saveTodos(todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}