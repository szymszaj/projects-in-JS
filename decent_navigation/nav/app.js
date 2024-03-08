let marker = document.querySelector("#marker");
let list = document.querySelectorAll("ul li");

function moveIndicatore(e) {
  marker.style.left = e.target.offsetLeft + "px";
  marker.style.width = e.target.offsetWidth + "px";
}

list.forEach((link) => {
  link.addEventListener("click", (e) => {
    moveIndicatore(e);
  });
});

function activeLink() {
  list.forEach((item) => item.classList.remove("active"));
  this.classList.add("active");
}
list.forEach((item) => item.addEventListener("click", activeLink));
