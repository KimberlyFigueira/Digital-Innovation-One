/*
Faça um programa para calcular o valor de uma viagem

Você terá 5 variáveis, sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - O tipo de combustível do carro;
4 - Gasto médio de combustível do carro em KM;
5 -  Distância em KM da viagem.

Imprima no console o valor que será gasto para realizar essa viagem
*/

//Pacote do NodeJS que permite a inserção de informações através do terminal
const input = require('prompt-sync')({sigint: true});

console.log("Digite o tipo de combustível (apenas letras minúsculas)")

let precoGasolina = 4.50;
let precoEtanol = 3.90;
let kmPorLitros = 10;
let distanciaViagem = 100;
const tipoCombustivel = input("Etanol ou Gasolina?");
let valorGasto;

if (tipoCombustivel == "etanol"){
    valorGasto = (distanciaViagem/kmPorLitros) * precoEtanol;
    console.log("Valor gasto em média: R$" + valorGasto.toFixed(2))
} else if (tipoCombustivel == "gasolina"){
    valorGasto = (distanciaViagem/kmPorLitros) * precoGasolina;
    console.log("Valor gasto em média: R$" + valorGasto.toFixed(2))
}



