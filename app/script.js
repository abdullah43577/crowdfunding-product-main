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
const backedEl = document.querySelector(".backers > h2");
const range = document.querySelector(".range");
const bambooLeftEl = document.querySelector(".bambooLeft");
const editionLeftEl = document.querySelector(".editionLeft");
let noPledge = document.querySelector(".noPledge");
const section3 = document.getElementById("section3");

let pledge = 0;
let totalBacked = 89914;
let backed = 100000;
let bambooLeft = 101;
let editionLeft = 64;
let backers = 5007;
let functionCalled = false;

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
btnCloseThankYou.addEventListener("click", function () {
  closeModal();

  // this is for a later section
  // remove active pledge on clicking another pledge
  document.querySelectorAll(".component").forEach((pld) => {
    if (pld.classList.contains("activePledge"))
      pld.classList.remove("activePledge");
  });

  functionCalled = false;
});

bookmark.addEventListener("click", function () {
  bookmark.classList.toggle("bookmarked");
});

const mbBookmark = document.querySelector(".btn--sect svg");
mbBookmark.addEventListener("click", function () {
  mbBookmark.classList.toggle("mbBookmark");
});

// burger menu
burger.addEventListener("click", function () {
  burger.classList.toggle("toggle");
  showMenu.classList.toggle("translate-x-0");
  overlay2.classList.toggle("hidden");
});

// pledge container section
let btn;

function validateInput(input, errorMsg, btn) {
  // validate inputs
  const regexCode = /[0-9]/g;

  btn.addEventListener("click", function () {
    if (functionCalled) return;
    functionCalled = true;

    // if input doesn't match a value between 0 - 9
    if (!regexCode.test(Number(input.value))) {
      errorMsg.textContent = "invalid";
      input.style.borderColor = "red";

      setTimeout(() => {
        errorMsg.textContent = "";
        input.style.borderColor = "hsl(0, 0%, 48%)";
      }, 3000);

      functionCalled = false;
      return;
    }

    pledge = Number(input.value);
    totalBacked += pledge;
    pledge = 0;

    renderThankYou();
  });
}

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

  // validation of input section

  // input at the selected pledge container
  let input =
    clickedPledge.lastElementChild.lastElementChild.firstElementChild
      .firstElementChild;

  // btn at the selected pledge container
  btn = clickedPledge.lastElementChild.lastElementChild.lastElementChild;

  // validate inputs
  const regexCode = /[0-9]/g;
  let errorMsg =
    clickedPledge.lastElementChild.lastElementChild.firstElementChild
      .lastElementChild;

  validateInput(input, errorMsg, btn);
});

const renderThankYou = function () {
  modalStart.classList.add("hide");
  thankYou.classList.remove("hide");
  thankYou.classList.add("flex");
  overlay.classList.remove("hide");

  // delayed updating of the DOM
  setTimeout(() => {
    // if backed value is greater than 100,000 set the value to 100,000
    if (totalBacked >= 100000) {
      totalBacked = 100000;
      totalBackedEl.textContent = `$${formatNumber(totalBacked)}`;
      let percentageValue = (totalBacked / backed) * 100;
      range.style.width = Math.floor(percentageValue) + "%";
    } else {
      totalBackedEl.textContent = `$${formatNumber(totalBacked)}`;
      let percentageValue = (totalBacked / backed) * 100;
      range.style.width = Math.floor(percentageValue) + "%";
    }
    // increase backers count
    increaseBackers();
  }, 5000);
};

// no pledge sect
noPledge.addEventListener("click", function () {
  renderThankYou();
});

section3.addEventListener("click", function (e) {
  let reward = e.target.closest("button");

  let reward2 = e.target.closest(".component");

  if (!reward) return;

  // remove active pledge on clicking another pledge
  document.querySelectorAll(".component").forEach((pld) => {
    if (pld.classList.contains("activePledge"))
      pld.classList.remove("activePledge");
  });

  reward2.classList.add("activePledge");

  // validation of input section

  // input at the selected pledge container
  let input =
    reward2.lastElementChild.lastElementChild.firstElementChild
      .firstElementChild;

  // btn at the selected pledge container
  btn = reward2.lastElementChild.lastElementChild.lastElementChild;

  // validate inputs
  const regexCode = /\d/g;
  let errorMsg =
    reward2.lastElementChild.lastElementChild.firstElementChild
      .lastElementChild;

  validateInput(input, errorMsg, btn);
});

function formatNumber(num) {
  return num.toLocaleString();
}

function increaseBackers() {
  backers++;
  backedEl.textContent = formatNumber(backers);
}
