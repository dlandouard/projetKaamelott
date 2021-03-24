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

// creation objet personnages-citation

const arthur = {
  persoImage: ["https://i.ibb.co/fHB5fyV/Roi-Arthur-livre1.webp",
                "https://i.ibb.co/R0gHcKz/kaamelott-pourquoi-sortie-film-aura-pas-lieu-novembre.jpg",
                "https://i.ibb.co/SBT5VCZ/EOa-Iv-Fk-X0-AAF8v.jpg",
                "https://i.ibb.co/bFGLyy0/Arthur-Kaamelott-Infobox.webp",
                "https://i.ibb.co/yFBfvPZ/dans-kaamelott-alexandre.jpg"],

  citation: ["Neque porro quisquam est qui",
             "Quisquam est qui",
             "Porro, adipisci velit..."]
}
const arthurSection = document.querySelector('#arthur');

// version math random
const newArthurImg = document.createElement('img');
newArthurImg.src = arthur.persoImage[Math.floor(Math.random() * (arthur.persoImage.length))] ;
arthurSection.appendChild(newArthurImg);

const newArthurCitation = document.createElement('p');
newArthurCitation.classList.add("persoCitation");
newArthurCitation.innerText = `"${arthur.citation[Math.floor(Math.random() * (arthur.citation.length))]}"`;
arthurSection.appendChild(newArthurCitation);

