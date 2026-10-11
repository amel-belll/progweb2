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

