// creation objet personnages-citation
const persoMainTable =[
{
  nomPersonnage: "arthur",
  persoImage: ["https://i.ibb.co/fHB5fyV/Roi-Arthur-livre1.webp",
                "https://i.ibb.co/R0gHcKz/kaamelott-pourquoi-sortie-film-aura-pas-lieu-novembre.jpg",
                "https://i.ibb.co/SBT5VCZ/EOa-Iv-Fk-X0-AAF8v.jpg",
                "https://i.ibb.co/bFGLyy0/Arthur-Kaamelott-Infobox.webp",
                "https://i.ibb.co/yFBfvPZ/dans-kaamelott-alexandre.jpg"],

  citation: ["Au bout d'un moment, il est vraiment druide, c'mec-là, ou ça fait quinze ans qu'il me prend pour un con ?",
             "Si ça s’trouve ? Alors pour nous sortir de là il va nous falloir un peu plus solide que du si ça s’trouve !",
             "Y a pas à dire, dès qu'il y a du dessert, le repas est tout de suite plus chaleureux !",
             "Qu'est ce qu'ils foutent ces cons de Saxons ?",
             "Mon père, il n'était pas ébouriffé, déjà, hein, il avait une coupe à la con mais c'était plutôt aplati et puis il était pas vaporeux, voilà ! Allez, au lit !"]
},
{
  nomPersonnage: "karadoc",
    persoImage: ["https://i.ibb.co/yNVCFz6/27dd7cddd3c2da4d8b388b00e3c63c22-XL.jpg",
                "https://i.ibb.co/9skYK81/DDZq-DO4a-400x400.jpg",
                "https://i.ibb.co/tp3L4sH/images.jpg",
                "https://i.ibb.co/YdT072x/img-18345149698.jpg",
                "https://i.ibb.co/K5YtK6b/Karadoc.webp"],
  
    citation: ["Mais y a rien à développer ! C'est de la merde, c'est de la merde, c'est tout ! Moi, on me sert ça dans une auberge, le tavernier, il s'prend une quiche dans sa tête !",
               "Ce pain-là, il est cuit trop vite dans un four trop chaud ; la montée n'a pas le temps de se faire et il y a trop d'air dans la mie. […] C'est de la merde.",
               "L'agneau était daubé du cul !",
               "Eh oui mémé, t'es bien mouchée!",
               "Des p'tits croutons tout vieux genre pour les lapins ? Ouais j'savais pas c'que c'était, dans le doute j'les ai bouffés."]
  },
{
  nomPersonnage: "perceval",
    persoImage: ["https://i.ibb.co/GkWGddN/18-Aelis.jpg",
                 "https://i.ibb.co/TgMgpb9/15-Holly95.jpg",
                 "https://i.ibb.co/87TZxCj/9-Holly95.jpg",
                 "https://i.ibb.co/mhTHKWy/6-katoush.jpg",
                 "https://i.ibb.co/Xtvy1JD/4-katoush.jpg",
                 "https://i.ibb.co/TP9Vrgq/20-Anonyme22.webp"],
  
    citation: ["Vous pouvez être sûr que si Joseph d’Arimathie a pas été trop con, le graal, c’est un bocal à anchois !",
               "J'voudrais pas faire ma raclette, mais la soirée s'annonce pas super.",
               "Dans la vie, j'avais deux ennemis : le vocabulaire et les épinards. Maintenant j’ai la botte secrète, et je bouffe plus d’épinards. Merci de rien, au revoir messieurs dames.",
               "Une fois, à une exécution, je m'approche d'une fille. Pour rigoler, je lui fais : Vous êtes de la famille du pendu ? C'était sa sœur. Bonjour l'approche !",
               "Faut arrêter ces conneries de nord et de sud ! Une fois pour toutes, le nord, suivant comment on est tourné, ça change tout !"]
  },
{
    nomPersonnage: "leodagan",
    persoImage: ["https://i.ibb.co/VM1WQKG/4046600-jpg-r-1280-720-f-jpg-q-x-xxyxx.jpg",
                 "https://i.ibb.co/yVTFfXG/2897993075-1.jpg",
                 "https://i.ibb.co/nC5WfWc/download.jpg",
                 "https://i.ibb.co/DCyzh95/Leodagan.webp"],
  
    citation: ["Non, mais attendez, vous faites semblant de négocier, tranquille. Pendant ce temps, moi je fais celui qui va pisser, là bas, et quand j'arrive à sa hauteur, tac, je sors ma dague et je l'ouvre en deux par le bas.",
               "Ah bah c'est sûr qu'c'est pas Jo l'Rigolo.",
               "J'pense pas que deux trous-du-cul soient plus efficaces qu’un seul !",
               "Vous allez pas être embêté avec une maîtresse qu’a plus d’mains ?",
               "Vous êtes marié, comme moi ; vous savez que la monstruosité peut prendre des formes très diverses."]
  }
];

function randomPerso (personnage) {
  const personnageSection = document.querySelector(`#${personnage.nomPersonnage}`);
    const newPersonnageImg = document.createElement('img');
    newPersonnageImg.src = personnage.persoImage[Math.floor(Math.random() * (personnage.persoImage.length))];
    personnageSection.appendChild(newPersonnageImg);

  const newPersonnageCitation = document.createElement('p');
  newPersonnageCitation.classList.add("persoCitation");
  newPersonnageCitation.innerText = `"${personnage.citation[Math.floor(Math.random() * (personnage.citation.length))]}"`;
  personnageSection.appendChild(newPersonnageCitation);
};

for (let i = 0; i<persoMainTable.length; i++) {
  randomPerso(persoMainTable[i]);
};

setTimeout("location.reload()",9000);
