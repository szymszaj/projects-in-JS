let $todoInput
let $alertInput
let $addBtn
let $ulList
let $newTask
let $allTasks
let $idNumber = 0
let $popup
let $popupInfo
let $editedTodo
let $popupInput
let $addPopupBtn
let $closeTodoBtn

const main = () => {
    prepareDOMElements();
    prepareDOMEvents();
}
const prepareDOMElements = () => {
    $todoInput = document.querySelector('.todo-input');
    $alertInfo = document.querySelector('.alert-info');
    $addBtn = document.querySelector('.add-btn');
    $ulList = document.querySelector('.todo-list ul');
    $allTasks = document.getElementsByTagName('li');
    $popup = document.querySelector('.popup');
    $popupInfo = document.querySelector('.popup-info');
    $popupInput = document.querySelector('.popup-input');
    $addPopupBtn = document.querySelector('.accept');
    $closeTodoBtn = document.querySelector('.cancel');
}
const prepareDOMEvents = () => {
    $addBtn.addEventListener('click', addNewTask);
    $todoInput.addEventListener('keyup', enterCheck)
    $ulList.addEventListener('click', chceckClick);
    $addPopupBtn.addEventListener('click', changeTodo);
    $closeTodoBtn.addEventListener('click', closePopup);
}
const addNewTask = () => {
    if ($todoInput.value !== '') {
        $idNumber++
        $newTask = document.createElement('li')
        $newTask.innerText = $todoInput.value
        $newTask.setAttribute('id', `todo-${$idNumber}`)
        $ulList.appendChild($newTask)

        $todoInput.value = ''
        $alertInfo.innerText = ''
        createToolsArea();
    } else {
        $alertInfo.innerText = 'Wpisz treść zadania!'

    }
}

const enterCheck = () => {
    console.log(event);
    if (event.keyCode === 13) {
        addNewTask();
    }
}
const createToolsArea = () => {
    const toolsPnael = document.createElement('div');
    toolsPnael.classList.add('tools');
    $newTask.appendChild(toolsPnael);

    const completeBtn = document.createElement('button');
    completeBtn.classList.add('complete');
    completeBtn.innerHTML = '<i class="fas fa-check"></i>';

    const editBtn = document.createElement('button');
    editBtn.classList.add('edit');
    editBtn.innerHTML = 'EDIT';

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add('delete');
    deleteBtn.innerHTML = '<i class="fas fa-times"></i>';

    toolsPnael.appendChild(completeBtn);
    toolsPnael.appendChild(editBtn);
    toolsPnael.appendChild(deleteBtn);
}

const chceckClick = (e) => {
    if (e.target.classList.value !== '') {
        if (e.target.closest('button').classList.contains('complete')) {

            e.target.closest('li').classList.toggle('completed')
            e.target.closest('button').classList.toggle('completed')

        } else if (e.target.closest('button').classList.contains('edit')) {
            editTask(e)
        } else if (e.target.closest('button').classList.contains('delete')) {
            deliteTask(e)
        }
    }
}
const editTask = (e) => {
    const oldTodo = e.target.closest('li').id;
    $editedTodo = document.getElementById(oldTodo)
    $popupInput.value = $editedTodo.firstChild.textContent
    $popup.style.display = 'flex'

}
const changeTodo = () => {
    if ($popupInput.value !== '') {
        $editedTodo.firstChild.textContent = $popupInput.value
        $popup.style.display = 'none'
        $popupInfo.innerHTML = ''
    } else {
        $popupInfo.innerHTML = 'Musisz podać jakąś treść!'
    }
}
const deliteTask = (e) => {
    const deleteTodo = e.target.closest('li')
    deleteTodo.remove()

    if ($allTasks.length === 0) {
        $alertInfo.innerText = 'Brak zadań na liście.'
    }
}

const closePopup = () => {
    $popup.style.display = 'none'
    $popupInfo.innerHTML = ''
}
//moty tła 
const slider = document.getElementById('theme-slider');
const handle = document.querySelector('.slider-handle');

function toggleTheme(theme) {
    const body = document.body;
    if (theme === 'dark') {
        body.style.backgroundColor = 'rgb(25, 27, 51)';
        handle.style.transform = 'translateX(30px)';
        handle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    } else {
        body.style.backgroundColor = '#fff';
        handle.style.transform = 'translateX(0)';
        handle.innerHTML = '<i class="fas fa-sun"></i>';
    }
}

slider.addEventListener('click', () => {
    const body = document.body;
    const currentTheme = body.style.backgroundColor === 'rgb(25, 27, 51)' ? 'light' : 'dark';
    toggleTheme(currentTheme);
});
document.addEventListener('DOMContentLoaded', main);