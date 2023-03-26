const alunos = ['Jonas', 'Arthur', 'Fernanda', 'Emanuelly']

//O contador começa em 0, então a posição 1 na verdade é 0, e assim por diante
console.log(alunos[0], alunos[3])

//Adiciona novo item ao array
alunos.push('Eduarda')

//Adiciona item à posição indicada, porém substitui se colocada em uma posição que já existe
alunos[2] = 'Mônica'
console.log(alunos)

//Remove o último valor
alunos.pop()
console.log("POP\n" + alunos)

//Remove o primeiro valor
alunos.shift()
console.log("\nSHIFT\n" + alunos + "\n")

//CALCULAR MÉDIA DO ALUNO A PARTIR DOS VALORES DA LISTA
const notas = []

notas.push(5, 8, 7.5)
console.log(notas)

const soma = notas[0] + notas[1] + notas[2]
const media = soma / notas.length
console.log(media.toFixed(2)) 