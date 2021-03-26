// creation objet personnages-citation
const persoMainTable =[
{
  nomPersonnage: "arthur", 
  persoImage: ["https://i.ibb.co/WktwHhS/arthur-01.jpg",
  "https://i.ibb.co/FbYBcCK/arthur-02.png",
  "https://i.ibb.co/ckfC3tx/arthur-03.png",
  "https://i.ibb.co/XWp9xwk/arthur-04.jpg",
  "https://i.ibb.co/2NvDG3k/arthur-05.jpg"],

  citation: ["Au bout d'un moment, il est vraiment druide, c'mec-là, ou ça fait quinze ans qu'il me prend pour un con ?",
             "Si ça s’trouve ? Alors pour nous sortir de là il va nous falloir un peu plus solide que du si ça s’trouve !",
             "Y a pas à dire, dès qu'il y a du dessert, le repas est tout de suite plus chaleureux !",
             "Qu'est ce qu'ils foutent ces cons de Saxons ?",
             "Mon père, il n'était pas ébouriffé, déjà, hein, il avait une coupe à la con mais c'était plutôt aplati et puis il était pas vaporeux, voilà ! Allez, au lit !"]
},
{
nomPersonnage: "karadoc", 
    persoImage: ["https://i.ibb.co/5X3xt0Z/karadoc-01.jpg",
      "https://i.ibb.co/2784hVW/karadoc-02.jpg",
      "https://i.ibb.co/b11HNZp/karadoc-03.png",
      "https://i.ibb.co/CH15Bz7/karadoc-04.jpg"],
  
    citation: ["Mais y a rien à développer ! C'est de la merde, c'est de la merde, c'est tout ! Moi, on me sert ça dans une auberge, le tavernier, il s'prend une quiche dans sa tête !",
               "Ce pain-là, il est cuit trop vite dans un four trop chaud ; la montée n'a pas le temps de se faire et il y a trop d'air dans la mie. […] C'est de la merde.",
               "L'agneau était daubé du cul !",
               "Eh oui mémé, t'es bien mouchée!",
               "Des p'tits croutons tout vieux genre pour les lapins ? Ouais j'savais pas c'que c'était, dans le doute j'les ai bouffés."]
  },
  {
nomPersonnage: "perceval", 
    persoImage: ["https://i.ibb.co/0yXcr95/lancelot-01.jpg",
    "https://i.ibb.co/GHVDMck/lancelot-02.jpg",
    "https://i.ibb.co/MfzZW9C/lancelot-03.jpg",
    "https://i.ibb.co/rfyLgtx/lancelot-04.jpg",
    "https://i.ibb.co/Mgn0Rqt/lancelot-05.png",
    "https://i.ibb.co/ZKH66td/lancelot-06.png"],
  
    citation: ["Vous pouvez être sûr que si Joseph d’Arimathie a pas été trop con, le graal, c’est un bocal à anchois !",
               "J'voudrais pas faire ma raclette, mais la soirée s'annonce pas super.",
               "Dans la vie, j'avais deux ennemis : le vocabulaire et les épinards. Maintenant j’ai la botte secrète, et je bouffe plus d’épinards. Merci de rien, au revoir messieurs dames.",
               "Une fois, à une exécution, je m'approche d'une fille. Pour rigoler, je lui fais : Vous êtes de la famille du pendu ? C'était sa sœur. Bonjour l'approche !",
               "Faut arrêter ces conneries de nord et de sud ! Une fois pour toutes, le nord, suivant comment on est tourné, ça change tout !"]
  },
  {
nomPersonnage: "leodagan", 
    persoImage: ["https://i.ibb.co/k0FrtQF/leo-01.png",
"https://i.ibb.co/6PQTTsz/leo-02.jpg",
"https://i.ibb.co/B4d3jzT/leo-03.jpg",
"https://i.ibb.co/syqCxK7/leo-04.jpg"],
  
    citation: ["Non, mais attendez, vous faites semblant de négocier, tranquille. Pendant ce temps, moi je fais celui qui va pisser, là bas, et quand j'arrive à sa hauteur, tac, je sors ma dague et je l'ouvre en deux par le bas.",
               "Ah bah c'est sûr qu'c'est pas Jo l'Rigolo.",
               "J'pense pas que deux trous-du-cul soient plus efficaces qu’un seul !",
               "Vous allez pas être embêté avec une maîtresse qu’a plus d’mains ?",
               "Vous êtes marié, comme moi ; vous savez que la monstruosité peut prendre des formes très diverses."]
  },
  {
nomPersonnage: "Guenievre",
    persoImage: ["https://i.ibb.co/nLmZ8Px/guenievre-01.jpg",
"https://i.ibb.co/pXY2Zwv/guenievre-02.jpg",
"https://i.ibb.co/GnH2xH5/guenievre-03.jpg",
"https://i.ibb.co/wJdxZrw/guenievre-04.jpg",
"https://i.ibb.co/kDfyXCp/guenievre-05.png"],
  
    citation: [" Ah tiens, demain midi y a des côtes de porc.",
               "Ah tiens, aujourd’hui j’ai fait tailler le rosier de l’arrière-cour parce qu’il en avait drôlement besoin. […] Et vous, vous me racontez pas votre petite journée ?",
               "J’y connais rien, hein, mais… À votre avis, le fait que vous me touchiez pratiquement jamais, ça a une influence sur la fécondité ?",
               "Ils n'ont pas de bras les oiseaux, c'est affreux, j'ai toujours l'impression qu'il vont culbuter vers l'avant, ça n'a aucun sens.",
               "Si votre père était vivant, il se retournerait dans sa tombe."]
  },
  {
nomPersonnage: "Blaise",
    persoImage: ["https://i.ibb.co/VBd470k/blaise-01.jpg",
"https://i.ibb.co/5kwfpMk/blaise-02.jpg",
"https://i.ibb.co/cYJfPnB/blaise-03.png",
"https://i.ibb.co/JBffK0P/blaise-04.jpg",
"https://i.ibb.co/fvyh36s/blaise-05.jpg"],
  
    citation: [" A Faudrait voir à pas oublier que sans les Romains, on serait jamais qu’une bande de pécores qui pataugent dans la bouse !",
               "MAIS VOUS ÊTES DES MALADES !!!",
               "En voilà une bonne chose, faisons la liste des cons, et puis ça me donnera l'occasion de gratter du papier.",
               "Non, mais attention ! Si je deviens pape, y'a rien qui m'empêche de revenir de temps en temps pour faire un petit coucou.",
               "Ouais, ben si vous vouliez du captivant, fallait peut-être me faire lire autre chose que des textes de lois !"]
  },
  {
nomPersonnage: "Bohort",
    persoImage: ["https://i.ibb.co/GvKXmCb/Bohort-01.jpg",
"https://i.ibb.co/XLthRxZ/Bohort-02.jpg",
"https://i.ibb.co/Lp8WZdZ/Bohort-03.jpg",
"https://i.ibb.co/4ZsBsWm/Bohort-04.png",
"https://i.ibb.co/6YZBpZ9/Bohort-05.jpg",
"https://i.ibb.co/nQjJFpz/Bohort-06.jpg"],
  
    citation: ["Jo le rigolo ???!!!",
               "MAIS VOUS ÊTES DES MALADES !!!",
               "Ça vous ennuie si je vomis ?",
               "Moi aussi, je ne me sens pas dans mon assiette, j'ai jamais beaucoup aimé les tunnels.",
               "Et les petits pigeons ? Vous croyez peut-être qu'ils se nourrissent tout seuls, les petits pigeons ?"]
  },
  {
nomPersonnage: "Merlin",
    persoImage: ["https://i.ibb.co/qskC3qB/Merlin-01.jpg",
"https://i.ibb.co/5hdbvy6/Merlin-02.jpg",
"https://i.ibb.co/tXYfQhM/Merlin-03.jpg",
"https://i.ibb.co/WtQQgn3/Merlin-04.jpg",
"https://i.ibb.co/2n6YpBh/Merlin-05.jpg",
"https://i.ibb.co/z6WK1wB/Merlin-06.jpg"],

    citation: ["Qu'est-ce qui est petit et marron ? Élias de Kelliwic'h : Un marron. Putain, il est fort ce con." ,
               "Mais évidemment c'est sans alcool !",
                "Alors le chevalier il crie au Romain : Hé ! Vous vous prenez pour le Colisée ?",
               "Franchement, une potion pour faire pisser bleu, ça presse forcément la minute ?"]
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

setTimeout("location.reload()",60000);
