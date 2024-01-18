/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/js/Popovers/popover.js

class Popover {
  constructor() {
    this._popovers = [];
  }
  showPopover(title, text, element) {
    const popover = document.createElement("div");
    const popoverPointer = document.createElement("div");
    const popoverHeader = document.createElement("h3");
    const popoverText = document.createElement("div");
    popover.classList.add("popover");
    popoverPointer.classList.add("popover-pointer");
    popoverHeader.classList.add("popover-title");
    popoverText.classList.add("popover-text");
    popoverHeader.textContent = title;
    popoverText.textContent = text;
    popover.appendChild(popoverPointer);
    popover.appendChild(popoverHeader);
    popover.appendChild(popoverText);
    document.body.appendChild(popover);
    const id = performance.now();
    this._popovers.push({
      id,
      popoverEl: popover
    });
    const {
      left,
      top
    } = element.getBoundingClientRect();
    popover.style.top = top - popover.offsetHeight - 10 + "px";
    popover.style.left = left - (popover.offsetWidth / 2 - element.offsetWidth / 2) + "px";
    popoverPointer.style.left = popover.offsetWidth / 2 - 10 + "px";
    popoverPointer.style.top = popover.offsetHeight - 1 + "px";
    return id;
  }
  removePopover(id) {
    const popover = this._popovers.find(t => t.id === id);
    popover.popoverEl.remove();
    this._popovers = this._popovers.filter(t => t.id !== id);
  }
}
;// CONCATENATED MODULE: ./src/js/app.js

document.addEventListener("DOMContentLoaded", () => {
  const popoverButton = document.querySelector(".click-popover");
  const popovers = new Popover();
  let popoverList = [];
  popoverButton.addEventListener("click", event => {
    event.preventDefault();
    const removePopoverlist = popoverList.filter(i => i.buttton == popoverButton);
    if (removePopoverlist.length == 0) {
      const popoverId = popovers.showPopover("Popover title", "And here's some amazing content. It's very engaging. Right?", popoverButton);
      popoverList.push({
        popoverId,
        buttton: popoverButton
      });
    } else {
      popovers.removePopover(removePopoverlist[0].popoverId);
      for (let i of popoverList) {
        if (i.popoverId == removePopoverlist[0].popoverId) {
          popoverList.pop(i);
        }
      }
    }
  });
});
;// CONCATENATED MODULE: ./src/index.js



// TODO: write your code in app.js
/******/ })()
;