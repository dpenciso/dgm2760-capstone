// async function getHotelData() {
//     try {
//         const response = await fetch('../hotel.json')
//         return await response.json() //return json object
//     } catch (error) {
//         console.error(error)
//     }
// }

const todoInput = document.querySelector('.todo-input')
const todoButton = document.querySelector('.todo-button')
const todoList = document.querySelector('.todo-list')

todoButton.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

function addTodo(event) {
    event.preventDefault()
    
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    const newTodo = document.createElement('li')
    newTodo.innerText = todoInput.value
    newTodo.classList.add('todo-item')

    todoDiv.appendChild(newTodo)

    const completedButton = document.createElement('button')
    completedButton.innerHTML = '<i class="fas fa-check"></i>'
    completedButton.classList.add('completed-btn')

    todoDiv.appendChild(completedButton)

    const trashButton = document.createElement('button')
    trashButton.innerHTML = '<i class="fas fa-trash"></i>'
    trashButton.classList.add('trash-btn')

    todoDiv.appendChild(trashButton)

    todoList.appendChild(todoDiv)

    todoInput.value = ''
}

function deleteCheck(e) {
    const item = e.target
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement
        todo.remove()
    }

    if (item.classList[0] === 'completed-btn') {
        const todo = item.parentElement
        todo.classList.toggle('completed')
    }
}