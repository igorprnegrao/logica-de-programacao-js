let temDinheiro = true;
let estaEnsolarado = true;

let resultadoE = 'Vai pro shopping? True && True = ';

console.log('====== && =======')
resultadoE += temDinheiro && estaEnsolarado
console.log(resultadoE)

let temDinheiro1 = false;
let estaEnsolarado1 = true;

let resultadoE1 = 'Vai pro shopping? False && True = ';
resultadoE1 += temDinheiro1 && estaEnsolarado1
console.log(resultadoE1)

let temDinheiro2 = false;
let estaEnsolarado2 = false;

let resultadoE2 = 'Vai pro shopping? False && False = ';
resultadoE2 += temDinheiro2 && estaEnsolarado2
console.log(resultadoE2)

console.log('====== Ou =======')

let temDinheiroOu = true;
let estaEnsolaradoOu = true;

let resultadoEOu = 'Vai pro shopping? True || True = ';
resultadoEOu += temDinheiroOu || estaEnsolaradoOu
console.log(resultadoEOu)

let temDinheiroOu1 = false;
let estaEnsolaradoOu1 = true;

let resultadoEOu1 = 'Vai pro shopping? False || True = ';
resultadoEOu1 += temDinheiroOu1 || estaEnsolaradoOu1
console.log(resultadoEOu1)

let temDinheiroOu2 = false;
let estaEnsolaradoOu2 = false;

let resultadoEOu2 = 'Vai pro shopping? False || False = ';
resultadoEOu2 += temDinheiroOu2 || estaEnsolaradoOu2
console.log(resultadoEOu2)

console.log('====== != =======')

console.log(true != true)
console.log(true != false)
console.log(false != true)
console.log(false != false)

