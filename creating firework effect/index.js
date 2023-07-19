// Creating fireworks
function createFirework() {
    // Create a <div> element for the firework
    var firework = document.createElement("div");
    firework.className = "firework";
    
    // Generate a random position for the firework on the screen
    var left = Math.random() * window.innerWidth + "px";
    var top = Math.random() * window.innerHeight + "px";
    firework.style.left = left;
    firework.style.top = top;
    
    // Add a firework to the body of the document
    document.body.appendChild(firework);
    
    // Remove the firework after the animation ends
    firework.addEventListener("animationend", function() {
      firework.parentNode.removeChild(firework);
    });
  }
  
  // Handling the button click event
  document.getElementById("fireworkButton").addEventListener("click", function() {
    // Create 10 fireworks
    for (var i = 0; i < 100; i++) {
      createFirework();
    }
  });