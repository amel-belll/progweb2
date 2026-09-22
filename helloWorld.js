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



function compareA (x,y){
    if(x == x){
        return true
    }else {
        return false
    }
}

function compareB (z,w){
    if(z === z){
        return false
    }else {
        return false
    }
}


