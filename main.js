//déclaration des variables globalement utilisées par les menus
//code pour transformer le bouton burger en croix
let mainMenu = document.querySelector("#menu");
let burgerMenu = document.querySelector("#menu-burger");
//ceci permet d'avoir le même comportement au clic qu'au touch (je pense notamment aux écrans en 1024)
let clickedEvent = "click";
window.addEventListener(
  "touchstart",
  function detectTouch() {
    clickedEvent = "touchstart"; // Transforme l'événement en "touchstart"
    window.removeEventListener("touchstart", detectTouch, false);
  },
  false
);
//ceci fait changer la forme du bouton burger et apparaître le menu
burgerMenu.addEventListener(
  clickedEvent,
  function (evt) {
    if (!this.getAttribute("class")) {
      this.setAttribute("class", "clicked");
      mainMenu.style.right="0px";
    } else {
      this.removeAttribute("class");
      mainMenu.style.right="-150px";
    }
  },
  false
);
