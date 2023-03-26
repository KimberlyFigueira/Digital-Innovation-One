/* 
Uma sala contém 5 anlunos, para cada aluno foi sorteado m número de 1 - 100.
Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior número sorteado.

ENTRADA:
5
50
10
98
23

SAÍDA:
98
*/

const {gets, print} =  require('./FunctionsAuxiliares')

const numerosSorteados = []

for (let i = 0; i < 5; i++) {
    const Sorteado = gets();
    numerosSorteados.push(Sorteado);
}

print(numerosSorteados)

let maiorValor = 0
for (let i = 0; i < numerosSorteados.length; i++) {
    const Sorteado = numerosSorteados[i];
    if (Sorteado >  maiorValor){
        maiorValor = Sorteado
    }
}

print(maiorValor)

//O código também pode ser feito da seguinte maneira, assim cortando pela metade:
for (let i = 0; i < 5; i++) {
    const Sorteado = gets();
    if(sorteado > maiorValor){
        maiorValor =  sorteado
    } 
}
