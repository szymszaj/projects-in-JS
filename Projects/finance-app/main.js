const incomeSection = document.querySelector('.income-area')
const expensesSection = document.querySelector('.expenses-area')
const availableMoney = document.querySelector('.available-money')
const addTransactionPanel = document.querySelector('.add-transaction-panel')

const nameInput = document.querySelector('#name')
const amountInput = document.querySelector('#amount')
const categorySelect = document.querySelector('#category')

const addTransaction = document.querySelector('.add-transaction')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtn = document.querySelector('.delete')
const deleteAllBtn = document.querySelector('.delete-all')

//zmienne 
let root = document.documentElement;
let ID = 0;
let categoryIcon;
let selectedCategory;
let moneyArr = [0];

const showPanel = () => {
    addTransactionPanel.style.display = 'flex'
}
const closePanel = () => {
    addTransactionPanel.style.display = 'none'
    clearInputs()
}
const checkForm = () => {
    if (nameInput.value !== '' && amountInput.value !== '' && categorySelect.value !== 'none') {
        console.log('ok');
    } else {
        alert('Wypełnij wszystkie pola!')
    }
}
const clearInputs = () => {
    nameInput.value = '';
    amountInput.value = '';
    categorySelect.selectedIndex = 0;
}

//wywoływanie funkcji
addTransaction.addEventListener('click', showPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', checkForm)
