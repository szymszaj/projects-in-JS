document.addEventListener("DOMContentLoaded", function () {
  const box = document.querySelector(".box");
  const prevBtn = document.querySelector(".btn.prev");
  const nextBtn = document.querySelector(".btn.next");

  let currentIndex = 0;
  const totalImages = document.querySelectorAll(".box span").length;

  function showImage(index) {
    box.style.transform = `perspective(1000px) rotateY(${index * -45}deg)`;
    currentIndex = index;
  }

  prevBtn.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
  });

  nextBtn.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
  });
});
