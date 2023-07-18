// Tworzenie fajerwerków
function createFirework() {
    // Utwórz element <div> dla fajerwerka
    var firework = document.createElement("div");
    firework.className = "firework";
    
    // Wygeneruj losowe położenie dla fajerwerka na ekranie
    var left = Math.random() * window.innerWidth + "px";
    var top = Math.random() * window.innerHeight + "px";
    firework.style.left = left;
    firework.style.top = top;
    
    // Dodaj fajerwerk do ciała dokumentu
    document.body.appendChild(firework);
    
    // Usuń fajerwerk po zakończeniu animacji
    firework.addEventListener("animationend", function() {
      firework.parentNode.removeChild(firework);
    });
  }
  
  // Obsługa zdarzenia kliknięcia przycisku
  document.getElementById("fireworkButton").addEventListener("click", function() {
    // Utwórz 10 fajerwerków
    for (var i = 0; i < 10; i++) {
      createFirework();
    }
  });