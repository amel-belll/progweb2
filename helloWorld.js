// 1) écrire une fonction qui retourne la plus grande valeur
function getMax (a,b,c){
if (a >= b && a >= c) {
    return a;
  } else if (b >= a && b >= c) {
    return b;
  } else {
    return c;
  }
}
const max =getMax (1,5,2);
console.log(max);

// 2) Ecrire une fonction qui retourne un nombre entier pseudo-aléatoire
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


console.log(getRandomInt(1, 6)); // Retourne un entier entre 1 et 6

//3) 
// Égalité faible (autorise la conversion automatique de type)
function compareA(x, y) {
  return x == y;
}

// Égalité stricte (vérifie la valeur ET le type)
function compareB(z, w) {
  return z === w;
}

// Vérifications :
console.log(compareA(4, '4'));       // true
console.log(compareA(4.0, '4'));     // true
console.log(compareA(4, 'quatre'));  // false

console.log(compareB(8, '8'));       // false
console.log(compareB(8, 'huit'));    // false
console.log(compareB(8, 8));         // true

//4) 
function Nombre(n) {
  if (n <= 0) {
    console.log("Le nombre doit être supérieur à 0");
    return; // Arrête la fonction ici, la suite n'est pas lue
  }

  console.log("Le nombre est positif");
  console.log("--- 1) Pairs entre 0 et n ---");

  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
  console.log("--- 2) Pairs entre 0 et n et multiples de 7---");
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0 && i % 7 === 0) {
      console.log(i);
    }
  }
  console.log("--- 3) Nombres pairs entre 0 et n et multiples de 3 ou de 7---");
  for (let i = 0; i <= n; i++) {
    if ((i % 2 === 0 && i % 3 === 0) || i % 7 ===0) {
      console.log(i);
    }
  }
  console.log("--- 4) Nombres pairs et multiples de 3 mais non de 7---");
  for (let i = 0; i <= n; i++) {
    if ((i % 2 === 0 && i % 3 === 0) && i % 7 !==0) {
      console.log(i);
    }
}
}


// Test :
Nombre(6);
Nombre(21);
Nombre(21);
Nombre (30);

//5)
console.log("--- 5) Nombres de piles obtenus");
function Piece (n){

let piles = 0; 
let faces = 0;

for (let i = 0; i < n; i++) {
if (Math.random() <0.5){
  piles++
}else {
  faces++ 
}
}

console.log("le nombre de pile est de " + piles + " sur " + n + " lancers")
}

Piece(100)