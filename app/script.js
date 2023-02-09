"use strict";

const backProject = document.querySelector(".backProject");
const overlay = document.querySelector(".overlay");
const modalStart = document.getElementById("modal--start");
const modalClose = document.querySelector(".modal--close");
const burger = document.querySelector(".burger");
const showMenu = document.querySelector(".show");
const overlay2 = document.querySelector(".overlay2");
const thankYou = document.querySelector(".thank--you");
const btnCloseThankYou = document.querySelector(".btn--close--thankyou");
const pledgeContainer = document.querySelector(".pledge--container");
const radioBtnNode = document.querySelectorAll('input[type="radio"]');
const inputs = document.querySelectorAll('input[type="text"]');
const btns = document.querySelectorAll(".input--btn > button");
const bookmark = document.querySelector(".bookmark");
const totalBackedEl = document.querySelector(".totalBackedEl");
const backedEl = document.querySelector(".backers");
const range = document.querySelector(".range");

let pledge = 0;
let totalBacked = 89914;
let backed = 100000;

const showModal = function () {
  overlay.classList.remove("hide");
  modalStart.classList.remove("hide");
};

const closeModal = function () {
  overlay.classList.add("hide");
  modalStart.classList.add("hide");

  // thank you modal menu
  thankYou.classList.add("hide");
  thankYou.classList.remove("flex");
};

backProject.addEventListener("click", showModal);
modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
btnCloseThankYou.addEventListener("click", closeModal);

// burger menu
burger.addEventListener("click", function () {
  burger.classList.toggle("toggle");
  showMenu.classList.toggle("translate-x-0");
  overlay2.classList.toggle("hidden");
});

// pledge container section

pledgeContainer.addEventListener("click", function (e) {
  let clickedPledge = e.target.closest(".pledge");

  if (!clickedPledge) return;

  // radio btns
  let radioBtn = clickedPledge.firstElementChild.firstElementChild;

  // remove active pledge on clicking another pledge
  document.querySelectorAll(".pledge").forEach((pld) => {
    if (pld.classList.contains("activePledge"))
      pld.classList.remove("activePledge");
  });

  // remove active radio btns
  radioBtnNode.forEach((btn) => {
    if (btn.checked === true) {
      btn.checked = false;
    }
  });

  // add active classes to radio btns and the div element
  clickedPledge.classList.add("activePledge");
  radioBtn.checked = true;
});

btns.forEach((btn, i) => {
  btn.addEventListener("click", function () {
    // will change this later
    pledge = Number(inputs[i].value);
    totalBacked += pledge;
    console.log(totalBacked);
    totalBackedEl.textContent = `$${totalBacked}`;
    let percentageValue = (totalBacked / backed) * 100;
    range.style.width = Math.floor(percentageValue) + "%";

    renderThankYou();
  });
});

const renderThankYou = function () {
  modalStart.classList.add("hide");
  thankYou.classList.remove("hide");
  thankYou.classList.add("flex");
};

bookmark.addEventListener("click", function () {
  bookmark.classList.toggle("bookmarked");
});

// progress bar section

// const newString = totalBacked.replaceAll(/\,/g, "");
