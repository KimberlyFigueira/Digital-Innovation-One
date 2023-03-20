/* DESAFIO: Faça um porgrama que calcule o valor em combustível gasto durante uma viagem.
Você terá três variáveis: 
1 - Preço do combustível;
2 - Valor médio de combustivel gasto pelo carro por KM;
3 - distancia em KM da viagem;
Imprima no console o valor final gasto. */

let precoCombustivel = 4.50;
let kmPorLitros = 10;
let distanciaViagem = 100;
let valorGasto;

valorGasto = (distanciaViagem/kmPorLitros) * precoCombustivel;
console.log("R$" + valorGasto.toFixed(2))