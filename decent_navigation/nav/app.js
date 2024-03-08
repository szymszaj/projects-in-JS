let marker = document.querySelector("#marker");
let list = document.querySelectorAll("ul li");

function moveIndicatore(e) {
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px";
}
list.forEach((link) => {
  link.addEventListener("click", (e) => {
    moveIndicatore(e.target);
  });
});

