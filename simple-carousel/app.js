const carousel = document.querySelector(".carousel");
const carouselList = carousel.querySelector("ul");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let currentIndex = 0;
const totalItems = carouselList.children.length;
const itemWidth = carouselList.firstElementChild.clientWidth;

prevButton.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? totalItems - 1 : currentIndex - 1;
  updateCarousel();
});

nextButton.addEventListener("click", () => {
  currentIndex = currentIndex === totalItems - 1 ? 0 : currentIndex + 1;
  updateCarousel();
});

function updateCarousel() {
  const offset = -1 * currentIndex * itemWidth;
  carouselList.style.transform = `translateX(${offset}px)`;
}
