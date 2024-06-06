const t1 = true;
const t2 = true;

let comprarTv50 = t1 && t2;
console.log('Vamos comprar a TV 50" ? =', comprarTv50 ); //And
let comprarTv32 = t1 !== t2;
console.log('Vamos comprar a TV 32" ? =', comprarTv32); // Xor
let tomarSorvete = t1 || t2
console.log('Vamos comprar sorvete ? =', tomarSorvete); // Or
let ficarEmCasa = !tomarSorvete
console.log('Vamos ficar em casa ? =', ficarEmCasa); // Not
