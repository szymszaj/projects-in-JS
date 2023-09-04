// Funkcja do zapisywania notatek w localStorage

const saveNotesToLocalStorage = () => {
    const notesHTML = noteArea.innerHTML;
    localStorage.setItem('savedNotesHTML', notesHTML);
  };
  
  // Funkcja do wczytywania notatek z localStorage
  const loadNotesFromLocalStorage = () => {
    const savedNotesHTML = localStorage.getItem('savedNotesHTML');
    if (savedNotesHTML) {
      noteArea.innerHTML = savedNotesHTML;
    }
  };
  
  // Funkcja do usuwania notatki z localStorage i odświeżania widoku
  const deleteNoteAndRefreshView = (id) => {
    const noteToDelete = document.getElementById(id);
    noteArea.removeChild(noteToDelete);
    saveNotesToLocalStorage();
  };
  
  // Wywołanie funkcji wczytującej notatki po załadowaniu strony
  loadNotesFromLocalStorage();

