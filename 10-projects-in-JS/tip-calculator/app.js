const price = document.querySelector('#price');
const people = document.querySelector('#people');
const tip = document.querySelector('#tip');
const error = document.querySelector('.error');
const countBtn = document.querySelector('.count');
const costInfo = document.querySelector('.cost-info');
const cost = document.querySelector('.cost');


const showBill = () => {
    if (price.value == '' || people.value == '' || tip.value == 0) {
        error.textContent = 'Uzupełnij wszystkie pola!';
        costInfo.style.display = 'none'; 
    } else {
        error.textContent = '';
        countBill();
    }
};

const countBill = () => {
    const newPrice = parseFloat(price.value);
    const newPeople = parseInt(people.value);
    const newTip = parseFloat(tip.value);
    const sum = (newPrice + (newPrice * newTip)) / newPeople;

    costInfo.style.display = 'block';
    cost.textContent = sum.toFixed(2);
};


countBtn.addEventListener('click', showBill);




// document.addEventListener("DOMContentLoaded", function() {
//     const countButton = document.querySelector(".count");
//     const confettiContainer = document.querySelector(".wrapper");
  
//     countButton.addEventListener("click", function(event) {
//       event.preventDefault();
  
//       const form = document.getElementById("billForm");
//       if (form.checkValidity()) {

//         for (let i = 0; i < 100; i++) {
//           const confetti = document.createElement("div");
//           confetti.classList.add("confetti");
//           confetti.style.left = Math.random() * 100 + "vw";
//           confetti.style.top = Math.random() * 100 + "vh";
  
//           confettiContainer.appendChild(confetti);
  
//           confetti.addEventListener("animationend", function() {
//             confettiContainer.removeChild(confetti);
//           });
//         }
//       }
//     });
//   });