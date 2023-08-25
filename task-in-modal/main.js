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
        <button class="modal-accept">${body.accept_btn}</button>
        <button class="modal-decline">${body.decline_btn}</button>
    </div>
    <button class="modal-close-icon"> <i data-feather="x"></i></button>
  </div>`
}

const createModal = (value) => {
    const modalContainer = document.createElement('div');
    modalContainer.className = "modal-container";
    modalContainer.innerHTML = modal(value);
    document.body.appendChild(modalContainer);
    feather.replace();
}
const addToBaslet = () => {
    console.log("dodano do oferty");

    createModal({
        title: "Lorem ipsum dolor title",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
        accept_btn: "Zaakceptuj",
        decline_btn: "Anuluj"
    })



};

const actionTwoBtn = document
    .querySelector(".action-two-btn")
    .addEventListener("click", () => {
        createModal({
            title: "drugi tekst modala",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat enim excepturi maxime molestiae qui illo!",
            accept_btn: "OK",
            decline_btn: "NIE"
        })
    });


actionBtn.addEventListener("click", addToBaslet)