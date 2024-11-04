import data from "./data";

const navToggle = document.querySelector(".btn-toggle");
const navbar = document.querySelector(".nav");
const navLinks = document.querySelectorAll(".nav li a");

navToggle.addEventListener("click", function () {
  navbar.classList.toggle("active");
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navbar.classList.remove("active");
  });
});

const modal = document.querySelector(".modal");
const btnClose = document.querySelector(".btn-close");
const btnOpen = document.querySelector(".watch-btn");

btnOpen.addEventListener("click", function () {
  modal.classList.add("active");
});

btnClose.addEventListener("click", function () {
  modal.classList.remove("active");
});

const btnSwitchRight = document.querySelector(".btn-right");
const btnSwitchLeft = document.querySelector(".btn-left");
const shopContainer = document.querySelector(".shop__content");

let currIndex = 0;
const itemsPerPage = 4;

function loadItems() {
  // Clear existing items
  shopContainer.innerHTML = "";

  // Check if the current index is within bounds
  if (currIndex < 0) {
    currIndex = 0;
  }
  if (currIndex >= data.length) {
    currIndex = data.length - itemsPerPage;
  }

  // Load items for the current page
  data.slice(currIndex, itemsPerPage + currIndex).forEach((item) => {
    const updatedItem = `
      <div class="shop-item">
        <img src="${item.img}" alt="shop item" />
        <div class="shop-item__info">
          <h3>${item.title}</h3>
          <span>$${item.price}</span>
        </div>
      </div>`;
    shopContainer.innerHTML += updatedItem;
  });
}

// Event listeners for buttons
btnSwitchRight.addEventListener("click", () => {
  if (currIndex + itemsPerPage < data.length) {
    currIndex += itemsPerPage;
    loadItems();
  }
});

btnSwitchLeft.addEventListener("click", () => {
  if (currIndex - itemsPerPage >= 0) {
    currIndex -= itemsPerPage;
    loadItems();
  }
});

// Initial load
loadItems();
