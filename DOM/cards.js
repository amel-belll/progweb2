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


