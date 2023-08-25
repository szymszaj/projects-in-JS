feather.replace();

const actionBtn = document.querySelector(".action-btn");

const modal = (body) => {
    return `<div class="modal">
    <p class="modal-title info">
      <i class="modal-title-icon" data-feather="info"></i>
      ${body.title}
    </p>
    <p class="modal-description">
      ${body.description}
    </p>
    <div class="modal-buttons">
        <button class="modal-accept">Akceptuj</button>
        <button class="modal-decline">Anuluj</button>
    </div>
    <button class="modal-close-icon"> <i data-feather="x"></i></button>
  </div>`
}
const addToBaslet = () => {
    console.log("dodano do oferty");

    const modalContainer = document.createElement('div');
    modalContainer.className = "modal-container";
    modalContainer.innerHTML = modal({
        title: "Lorem ipsum dolor title",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing."
    });

    document.body.appendChild(modalContainer);
    feather.replace();

};



actionBtn.addEventListener("click", addToBaslet)