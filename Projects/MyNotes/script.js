const addBtn = document.querySelector('.add')
const saveBtn = document.querySelector('.save')
const cancelBtn = document.querySelector('.cancel')
const deleteBtns = document.getElementsByClassName('delete-note')
const deleteAllBtn = document.querySelector('.delete-all')
const noteArea = document.querySelector('.note-area')
const notePanel = document.querySelector('.note-panel')
const category = document.querySelector('#category')
const textarea = document.querySelector('#text')
const error = document.querySelector('.error')

let selectedValue;
let cardID = 0;

const openPanel = () => {
    notePanel.style.display = 'flex';
}
const closePanel = () => {
    notePanel.style.display = 'none'
    error.style.visibility = 'hidden'
    textarea.value = '';
    category.selectedIndex = 0
}

const addNote = () => {
    if (textarea.value !== '' && category.options[category.selectedIndex].value !== '0') {
        createNote();
        error.style.visibility = 'hidden'
    } else {
        error.style.visibility = 'visible'
    }
}
const createNote = () => {
    const newNote = document.createElement('div');
    newNote.classList.add('note');
    newNote.setAttribute('id', cardID);

    newNote.innerHTML = `
    <div class="note-header">
      <h3 class="note-title">${selectedValue}</h3>
      <button class="delete-note" onclick="deleteNote(${cardID})">
        <i class="fas fa-times icon"></i>
      </button>
    </div>

    <div class="note-body">
      ${textarea.value}
    </div>
  </div>`

    noteArea.appendChild(newNote);
    cardID++;
    textarea.value = ''
    category.selectedIndex = 0
    notePanel.style.display = 'none'
    chcekColor(newNote)

}
const selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text;
}

const chcekColor = note => {
    switch (selectedValue) {
        case 'Zakupy':
            note.style.backgroundColor = 'rgba(24, 148, 51, 0.808)';
            break;
        case 'Praca':
            note.style.backgroundColor = 'rgb(255,243,0)';
            break;
        case 'Inne':
            note.style.backgroundColor = 'rgb(0,170,255)';
            break;
        case 'Szkoła':
            note.style.backgroundColor = 'rgba(160, 70, 235, 0.897)';
            break;
    }
}
const deleteNote = (id) => {
    const noteToDelete = document.getElementById(id)
    noteArea.removeChild(noteToDelete)
}
// const deleteAllNotes = () => {
//     noteArea.textContent = ''
// }
const deleteAllNotes = () => {
    const confirmation = confirm("Czy na pewno chcesz usunąć wszystkie notatki? Tej operacji nie będzie można cofnąć.");
    if (confirmation) {
        noteArea.textContent = '';
    }
}

// variables to dark theme
let isDarkTheme = false;

// Theme change function
const toggleTheme = () => {
    const body = document.body;

    if (isDarkTheme) {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    } else {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    }

    isDarkTheme = !isDarkTheme;
};
// Support for clicking on the theme change icon
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', toggleTheme);



//calling functions
addBtn.addEventListener('click', openPanel);
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNote)
deleteAllBtn.addEventListener('click', deleteAllNotes)
