"use strict";

const backProject = document.querySelector(".backProject");
const overlay = document.querySelector(".overlay");
const modalStart = document.getElementById("modal--start");
const modalClose = document.querySelector(".modal--close");
const burger = document.querySelector(".burger");

const showModal = function () {
  overlay.classList.remove("hide");
  modalStart.classList.remove("hide");
};

const closeModal = function () {
  overlay.classList.add("hide");
  modalStart.classList.add("hide");
};

backProject.addEventListener("click", showModal);
modalClose.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// burger menu
const showMenu = document.querySelector(".show");
const overlay2 = document.querySelector(".overlay2");
burger.addEventListener("click", function () {
  console.log("clicked");
  burger.classList.toggle("toggle");
  showMenu.classList.toggle("translate-x-0");
  overlay2.classList.toggle("hidden");
});
