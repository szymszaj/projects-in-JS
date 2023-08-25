feather.replace();

const actionBtn = document.querySelector(".action-btn");



const modal = (body = {}) => {
    return `<div class="modal">
    <p class="modal-title ${body.type || ""}">
      <i class="modal-title-icon" data-feather="${body.modal_icon || "info"}"></i>
      ${body.title || "Czy jesteś pewny?"}
    </p>
    <p class="modal-description">
      ${body.description || "Potwierdz swój wybór"}
    </p>
    <div class="modal-buttons">
        <button class="modal-accept modal-action-btn">${body.accept_btn || "Tak"}</button>
        <button class="modal-decline modal-action-btn">${body.decline_btn || "Nie"}</button>
    </div>
    <button class="modal-close-icon"> <i data-feather="x"></i></button>
  </div>`
}

const createModal = (value) => {
    const modalContainer = document.createElement('div');
    modalContainer.className = "modal-container";
    modalContainer.innerHTML = modal(value);
    document.body.appendChild(modalContainer);


    const closeIcon = document.querySelector(".modal-close-icon")
    closeIcon.addEventListener("click", () => {
        const modal = document.querySelector(".modal-container")
        modal.remove()
    })
    const closeButtons = document.querySelectorAll(".modal-action-btn")
    closeButtons.forEach(btn => btn.addEventListener("click",
        () => {
            const modal = document.querySelector(".modal-container")
            modal.remove()
        }))

    feather.replace();
    document.body.style.overflow = "hidden"

};
const addToBaslet = () => {
    console.log("dodano do oferty");

    createModal({
        type: "warning",
        modal_icon: "alert-triangle",
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

const actionThreeBtn = document
    .querySelector(".action-three-btn")
    .addEventListener("click", () => {
        createModal()
    })
actionBtn.addEventListener("click", addToBaslet)