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
    } else {
        $alertInfo.innerText = 'Wpisz treść zadania!'

    }
}


const enterCheck = () => {
    console.log(event);
    if (event.keyCode === 13) {
        addNewTask()
    }
}
document.addEventListener('DOMContentLoaded', main);