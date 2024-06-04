function createFirework() {
  var firework = document.createElement("div");
  firework.className = "firework";

  var left = Math.random() * window.innerWidth + "px";
  var top = Math.random() * window.innerHeight + "px";
  firework.style.left = left;
  firework.style.top = top;

  document.body.appendChild(firework);

  firework.addEventListener("animationend", function () {
    firework.parentNode.removeChild(firework);
  });
}

document
  .getElementById("fireworkButton")
  .addEventListener("click", function () {
    for (var i = 0; i < 100; i++) {
      createFirework();
    }
  });
