document.addEventListener('DOMContentLoaded', function () {
    const openCardButton = document.getElementById('openCard');
    const closeCardButton = document.getElementById('closeCard');
    const card = document.getElementById('card');
    const addBoxButton = document.getElementById('addBoxButton');
    const boxesContainer = document.getElementById('boxesContainer');

    openCardButton.addEventListener('click', function () {
        card.classList.add('open');
    });

    closeCardButton.addEventListener('click', function () {
        card.classList.remove('open');
    });

    let boxCounter = 1;

    addBoxButton.addEventListener('click', function () {
        const newBox = document.createElement('div');
        newBox.classList.add('box');
        newBox.textContent = `Box ${boxCounter}`;

        // Dodajemy przyciski edycji i usuwania do każdego nowego boksu
        const boxOptionsContainer = document.createElement('div');
        boxOptionsContainer.classList.add('box-options-container');
        
        const editButton = document.createElement('button');
        editButton.textContent = 'Edytuj';
        editButton.classList.add('edit-button');
        editButton.addEventListener('click', function (event) {
            // Tutaj dodaj kod obsługujący edycję boksu
            alert(`Edytuj: ${newBox.textContent}`);
            event.stopPropagation();
        });

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Usuń';
        deleteButton.classList.add('delete-button');
        deleteButton.addEventListener('click', function () {
            // Usuń boks
            boxesContainer.removeChild(newBox);
        });

        boxOptionsContainer.appendChild(editButton);
        boxOptionsContainer.appendChild(deleteButton);
        newBox.appendChild(boxOptionsContainer);

        // Dodajemy obsługę zdarzenia dla nowo utworzonego boksu
        newBox.addEventListener('click', function () {
            newBox.classList.toggle('flipped');
        });

        boxesContainer.appendChild(newBox);
        boxCounter++;
    });

    // Funkcja zwracająca losowy kąt obrotu
    function getRandomRotation() {
        return Math.floor(Math.random() * 360);
    }
});
