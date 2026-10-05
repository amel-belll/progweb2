//1) Ecrire une fonction qui retourne la plus grande valeur parmi les 
// trois nombres fournis en paramètre.
const maxOf = function (a, b ,c) { 
    if (a > b && a >c){ 
    console.log("le plus grand nombre est" , a);
    return a;
    }else if (b>a && b> c){ 
    console.log ("le plus grand nombre est" , b);
    return b ; }
    else { console.log (c);}
return c;}

maxOf (10, 20, 35);

//2) Ecrire une fonction qui retourne un nombre entier pseudo-aléatoire 
// entre une borne inférieure et une borne supérieure 
// (bornes entières et comprises dans l'intervalle).

const randomNumber = function (min, max) { 
    return Math.floor( Math.random() * (max - min + 1) ) + min;
   
}
console.log(randomNumber(12, 45));

//3) Ecrire deux fonctions compareA et compareB qui retournent 
// les mêmes résultats que dans les exemples suivant:
const compareA = function(a,b) {
if (a == b){
return true;
}else { 
    return false;}
}

const compareB = function(a,b) {
if (a === b){
return true;
}else { 
    return false;}
}

//4En fonction d'un nombre n (ou n > 0) donné en paramètre,
// écrire une fonction qui affiche dans la console :
const EvenNumbers = function (n){
    for (let i = 0; i<=n; i++){
    if (i % 2 === 0){ 
        console.log(i);}
    }
}

const EvenNumbers1 = function(n) {
  for (let i = 0; i <= n; i++) {
    if (i % 2 === 0 && i % 3 === 0 && i % 7 !== 0) {
      console.log(i);
    }
  }
}

//5 Ecrire deux fonctions retournant réciproquement:
// le nombre de piles obtenus sur un lancé de n pièces de monnaies 
// simulées par l'utilisation du générateur de nombre aléatoire.

const countPiles = function (n) {
    let piles = 0;
let faces = 0
    let i = 0;
    for (i = 0; i < n; i++) {
     if (Math.random() < 0.5) {
     piles++;
     }else { faces ++;}

 }
return [piles, faces];
}

//5 
function rollNtimes (min,max, times){
    const rolls = [];
    for (let i = 0; i<times;i++){
        rolls.push(randomNumber(min,max));
    }
    return rolls;
}
function count (n, values){
    let count = 0;
    for (const v of values){
        if(v===n)count ++;
    }
    return count;
}
const TAIL = 0;
const FACE = 1;

function getNbTailsandFaces(times){
    const rolls =(rollNtimes(TAIL,FACE,10));
    const nbTails = count(TAIL,rolls);
    const nbFaces = count(FACE,rolls);
    // const nbFaces = rolls.length - nbTails;
    return {
        tails : nbTails,
        face : nbFaces,
    }
}
console.log(getNbTailsandFaces(1000));


//6 Ecrire une fonction qui indique si un nombre entier est 
// un nombre premier ou non
const estPremier = function (n){
    if (n < 2){
    return false ;
}
    for (let i = 2 ; i<n ; i ++) 
        {
            if (n%i == 0)
            {return false;}
        }
return true
}

//function isPrime (n){//
  //  const nbDiv= 0;
   // for(let div = 1; div<=n;div++){
 //       if(n % div == 0) nbDiv++;
   // }
   // return nbDiv == 2;
//}
//console.log("0 is prime " + isPrime(0));
//console.log("26 is prime " + isPrime(26));



//7
const cl = function (...donnees){
    for (let i = 0 ; i<donnees.length; i++)
        {console.log( donnees[i]); 

        }
}

//8 
const double = function (n) { 
    return n *2;
}

    const square = function (n) { 
        return n *n;
    }

//9 
const transform = function (nombre, fonction) {
  return fonction(nombre);
};

//10 
const createGreeting = function(greeting) {
    return function(prenom) {
        return greeting + " " + prenom + " !";
    
}
}

