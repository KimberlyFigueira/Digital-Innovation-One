/*CALCULAR MÉDIA DO ALUNO A PARTIR DOS VALORES DA LISTA
const notas = []

notas.push(5, 8, 7.5)
console.log(notas)

const soma = notas[0] + notas[1] + notas[2]
const media = soma / notas.length
console.log(media.toFixed(2)) */

const notas = []
notas.push(5, 8, 7.5)
let soma = 0

for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    soma += nota
}

console.log((soma / notas.length).toFixed(2))