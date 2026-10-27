function shuffleInPlace(deck) {
  for (let i = deck.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}

const tableauCartes = [...document.querySelectorAll("playing-card")];
const deck = document.querySelector(".deck");
// 1
function clearSelection() {
  const toutesLesCartes = deck.querySelectorAll("playing-card");
  for (const carte of toutesLesCartes) {
    carte.classList.remove("selected");
  }
}

//2)A) 

document.querySelector("#select-ace-spade").addEventListener("click", () => { 
  clearSelection();
  deck.querySelector("#SPADE-ACE").classList.add("selected");
});

//2)B)
document.querySelector("#select-hearts").addEventListener("click", () => { 
  clearSelection();
  const cartesCoeur = deck.querySelectorAll(".heart");
  for (const carte of cartesCoeur) {
    carte.classList.add("selected");
  }
});

//2)C)
document.querySelector("#select-red").addEventListener("click", () => { 
  clearSelection();
  const cartesRouges = deck.querySelectorAll(".heart, .diamond"); 
 for (const cartes of cartesRouges) {
 cartes.classList.add ("selected");}
});


//2) D) 
document.querySelector("#select-face-cards").addEventListener("click", () => { 
  clearSelection();
  const cartesFaces = deck.querySelectorAll("[data-face-card]");
  for (const carte of cartesFaces) {
    carte.classList.add("selected");
  }
});

//2)E)
document.querySelector("#select-red-face-cards").addEventListener("click", () => { 
  clearSelection();
  const cartesRedFaces = deck.querySelectorAll(".heart[data-face-card], .diamond[data-face-card]");
  for (const carte of cartesRedFaces) {
    carte.classList.add("selected");
  }
});

//2)F)
document.querySelector("#select-not-spades").addEventListener("click", () => { 
  clearSelection();
  const cartesNonPiques = deck.querySelectorAll("playing-card:not(.spade)");
  for (const carte of cartesNonPiques) {
    carte.classList.add("selected");
  }
});

//4)


//5) 
// On récupère le conteneur de la main une seule fois en haut avec les autres
const handContainer = document.querySelector("#hand");

// 5)
document.querySelector("#draw-hand").addEventListener("click", () => { 
  clearSelection();
  
  // On copie et on mélange
  const paquetMelange = [...tableauCartes];
  shuffleInPlace(paquetMelange); 
  
  // On prend les 5 premières cartes
  const main = paquetMelange.slice(0, 5);
  
  // On prépare un nouveau tableau pour stocker nos clones
  const handCards = [];
  
  for (const carte of main) {
    // On clone la carte (true permet de copier aussi l'intérieur de la balise)
    const clone = carte.cloneNode(true);
    
    // On nettoie le clone
    clone.removeAttribute("id");
    clone.classList.remove("selected");
    
    // On ajoute le clone propre dans notre tableau
    handCards.push(clone);
  }
  
  // On affiche les 5 clones dans le conteneur #hand (et plus dans deck !)
  handContainer.replaceChildren(...handCards);
});

