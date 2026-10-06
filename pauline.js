const JACK = 11;
const QUEEN = 12;
const KING = 13;
const ACE = 14;

const RANKS = [2, 3, 4, 5, 6, 7, 8, 9, 10, JACK, QUEEN, KING, ACE];
const SUITS = ['hearts', 'spades', 'clubs', 'diamonds'];

const carte = {
    rank:11,
    suit: 'hearts'
};

const deck =[];

for (let suit of SUITS){
    for (let rank of RANKS) {
        deck.push({rank : rank, suit : suit});
    }
};

console.log(deck);
console.log("Nombre de cartes : " + deck.length);

// version simplifie

const deckn2 = SUITS.flatMap(suit => 
  RANKS.map(rank => ({ rank, suit }))
);
console.log(deckn2);

function buildBaseDeck (){
    const deck= [];
    for (let suit of SUITS){
    for (let rank of RANKS) {
        deck.push({rank : rank, suit : suit});
    }
}
return deck;

}

// version simplifie
const buildBaseDeck2 = () => SUITS.flatMap(suit => RANKS.map(rank => ({ rank, suit })));

function shuffleInPlace (deck){
    for (let i = deck.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * ( i+1));

        const temp = deck [i];
        deck [i] = deck [j];
        deck [j] = temp;
    }
    return deck; 
}

// version simplifie

function shuffleInPlace(deck) {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
}

const monPaquet = buildBaseDeck();
shuffleInPlace(monPaquet);
console.log(monPaquet);

function drawCards (deck, count){
    const copie = [...deck];

    shuffleInPlace(copie);

    return copie.slice(0, count); 
}

function compareRank(carte1, carte2) {
    if (carte1.rank < carte2.rank) { 
        return -1; 
    } else if (carte1.rank === carte2.rank) { 
        return 0; 
    } else {
        return 1;
    }
}

const monPaquet1 = buildBaseDeck();
const main = drawCards(monPaquet, 2);

const carte1 = main[0];
const carte2 = main[1];

console.log(`Tirage : un ${carte1.rank} de ${carte1.suit} contre un ${carte2.rank} de ${carte2.suit}`);

const resultat = compareRank(carte1, carte2);

if (resultat < 0) {
    console.log("La deuxième carte est plus forte !");
} else if (resultat > 0) {
    console.log("La première carte est plus forte !");
} else {
    console.log("Égalité parfaite sur le rang !");
}

function getHighestCard(hand) {
if (hand.length === 0) return null;

let highestCard = hand[0];

for (let i = 0; i< hand.length; i++){
if (hand[i].rank > highestCard.rank) 
    highestCard = hand[i]
}
return highestCard;


}

const monPaquet3 = buildBaseDeck();


const mainDeCinqCartes = drawCards(monPaquet, 5);

console.log("Ma main de 5 cartes :");
console.log(mainDeCinqCartes);


const carteLaPlusForte = getHighestCard(mainDeCinqCartes);

console.log("La carte la plus forte de la main est :");
console.log(carteLaPlusForte);


    function displayRank (rank) {
switch (rank) {
        case 11: return 'J';
        case 12: return 'Q';
        case 13: return 'K';
        case 14: return 'A';
        default: return rank.toString(); 
    }
}

function showCard(card) {
const red = '\x1b[31;47m';
    const black = '\x1b[30;47m';
    const defaultColor = '\x1b[0m';

    let symbol = '';
    let color = '';
    
    switch (card.suit) {
        case 'hearts':
            symbol = '♥';
            color = red;
            break;
        case 'diamonds':
            symbol = '♦';
            color = red;
            break;
        case 'spades':
            symbol = '♠';
            color = black;
            break;
        case 'clubs':
            symbol = '♣';
            color = black;
            break;
    }

    const rankLabel = displayRank(card.rank);
    
   
    console.log(color + rankLabel + symbol + defaultColor);
}

console.log("Voici la main de 5 cartes :");

for (let card of mainDeCinqCartes) {
    showCard(card);
}
