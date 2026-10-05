// ==========================================
// 1. Tableaux de nombres
// ==========================================

// 1) 
const numbers = Object.freeze([3, 14, 15, 92 ,65, 35, 89, 79, 32, 38]);
for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

// 2) 
function double(n) {
  return n * 2;
}
const doubleNumbers = numbers.map(double);
console.log(doubleNumbers);

// 3) 
const oddNumbers = numbers.filter(nombre => nombre % 2 !== 0);
console.log(oddNumbers);

// 4) 
const sliceFirst = numbers.slice(1);
console.log(sliceFirst);

// 5)  
const sliceLast = numbers.slice(0, -1);
console.log(sliceLast);

// 6) Retourner la somme des nombres
const somme = numbers.reduce((total, nombre) => total + nombre);
console.log(somme);

// 7) Retourner le plus grand nombre 
const plusGrand = Math.max(...numbers);
console.log(plusGrand);

// 8) 
const hasMultipleOf9 = numbers.some(nombre => nombre % 9 === 0);
console.log(hasMultipleOf9);

// 9) Indiquer si le tableau ne contient que des nombres positifs
const allPositive = numbers.every(nombre => nombre > 0);
console.log(allPositive);

// 10) Retourner un tableau contenant d'abord les nombres pairs, puis impairs
const evenNumbers = numbers.filter(nombre => nombre % 2 === 0);
const reorderedNumbers = [...evenNumbers, ...oddNumbers]; 
console.log(reorderedNumbers, evenNumbers);


// ==========================================
// 2. Tableaux de chaînes de caractères
// ==========================================

const strings = Object.freeze(["Sator", "Arepo", "Tenet", "Opera", "Rotas"]);

// 1) Mot avec des R
const motsAvecR = strings.filter(mot => mot.toLowerCase().includes('r'));
console.log(motsAvecR);

// 2) 
const Cinqlettres = strings.every(mot => mot.length === 5);
console.log(Cinqlettres);

// 3) 
const Lorem = ["lorem", ...strings];
console.log(Lorem);

// 4)
const Ipsum = [...strings, "Ipsum"];
console.log(Ipsum);

// 5) 
const indexMilieu = Math.floor(strings.length / 2);
const nouveauTableau = strings.map((mot, index) => index === indexMilieu ? "radar" : mot);
console.log(nouveauTableau);

// 6)
console.log(strings.join(""));

// 7)
console.log(strings.toSorted()[0]);

// 8) Palindrome
const texteComplet = strings.join("").toLowerCase();
const texteInverse = texteComplet.split("").reverse().join("");
console.log(texteComplet === texteInverse);


// ==========================================
// 3. Tableaux d'objets : jeu de cartes
// ==========================================

// 1 et 2
const JACK = 11;
const QUEEN = 12;
const KING = 13;
const ACE = 14;

const RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, JACK, QUEEN, KING, ACE];
const SUITS = ['hearts', 'spades', 'clubs', 'diamonds'];

function buildBaseDeck() {
  const paquet = []; 
  
  for (let i = 0; i < SUITS.length; i++) {
    for (let j = 0; j < RANKS.length; j++) {
      paquet.push({ rang: RANKS[j], couleur: SUITS[i] });
    }
  }
  
  return paquet;
}

// 3
function shuffleInPlace(deck) {
  for (let i = deck.length - 1; i >= 1; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = deck[i];
    deck[i] = deck[j];
    deck[j] = temp;
  }
}

// 4
function drawCards(deck, nombreDeCartes) {
  const copieDeck = [...deck]; 
  shuffleInPlace(copieDeck);
  return copieDeck.slice(0, nombreDeCartes);
}

// 5
const monPaquet = buildBaseDeck();
const mesDeuxCartes = drawCards(monPaquet, 2);

const carteA = mesDeuxCartes[0];
const carteB = mesDeuxCartes[1];

function compareRank(carte1, carte2) { 
  return carte1.rang - carte2.rang;
}

const resultat = compareRank(carteA, carteB);
if (resultat < 0) {
  console.log(carteB); 
} else if (resultat === 0) {
  console.log("Égalité !");
} else {
  console.log(carteA);
}

// 6
function getHighestCard(main) {
  let plusForte = main[0]; 

  for (let i = 1; i < main.length; i++) {
    const carteActuelle = main[i];
    const resultatComp = compareRank(carteActuelle, plusForte);
    
    if (resultatComp > 0) {
      plusForte = carteActuelle;
    }
  }
  
  return plusForte;
}

// 7 Affichage des cartes

// Fonction pour transformer les nombres 11-14 en lettres
function displayRank(rang) {
  if (rang === 11) {
    return 'J';
  } else if (rang === 12) {
    return 'Q';
  } else if (rang === 13) {
    return 'K';
  } else if (rang === 14) {
    return 'A';
  } else {
    return rang.toString();
  }
}

// Les variables de couleurs
const red = '\x1b[31;47m';
const black = '\x1b[30;47m';
const defaultColor = '\x1b[0m';

// La fonction d'affichage de la carte
function showCard(carte) {
  const rangTexte = displayRank(carte.rang);

  if (carte.couleur === 'hearts') {
    console.log(red + rangTexte + '♥' + defaultColor);
  } else if (carte.couleur === 'diamonds') {
    console.log(red + rangTexte + '♦' + defaultColor);
  } else if (carte.couleur === 'spades') {
    console.log(black + rangTexte + '♠' + defaultColor);
  } else if (carte.couleur === 'clubs') {
    console.log(black + rangTexte + '♣' + defaultColor);
  }
}

// Création d'une main de 5 cartes et affichage
console.log("\nVoici ma main de 5 cartes :");
const maMain = drawCards(monPaquet, 5);

for (let i = 0; i < maMain.length; i++) {
  showCard(maMain[i]);
}