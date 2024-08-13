let todoDetail = document.getElementById('todo-detail')

function renderTodoById(id) {
    const todos = getTodos()
    let foundTodo = todos.find(todo => {
        return todo.id === id
    });
    todoDetail.innerHTML = `
    <h3>${foundTodo.name}</h3>
    <form action="" onsubmit="editTodoById(event,${foundTodo.id})">
        <input name="todoName" type="text" value="${foundTodo.name}">
        <button type="submit">Edit</button>
    </form>
    `
}

function editTodoById(event, id) {
    event.preventDefault()
    const todos = getTodos()
    let formData = new FormData(event.target)
    let todoName = formData.get('todoName')
    let foundTodo = todos.find(todo => {
        return todo.id === id
    });
    foundTodo.name = todoName

    saveTodos(todos)
    renderTodoById(+foundTodo.id)
   
}


window.addEventListener('load', () => {
    let url = document.location.search
    let query = new URLSearchParams(url)
    let id = query.get('id')
    renderTodoById(+id)
})