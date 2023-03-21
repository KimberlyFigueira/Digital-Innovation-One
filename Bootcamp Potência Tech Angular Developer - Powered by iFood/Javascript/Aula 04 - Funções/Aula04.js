//Função para retornar o valor ao quadrado de um numero passado por parâmetro
function quadrado(valor){
return valor*valor
}

///Imprime o resultado após chamar a função e passa o parâmetro
console.log(quadrado(25))

//Recebe como parâmetro o valor e o juros em percentual
function incrementarJuros(valor, percentualJuros){
    const valorIncremento = (percentualJuros * valor)/100
    return valor + valorIncremento
}

//Imprime o resultado após chamar a função incrementarJuros e recebe como parâsmetro o valor e o percentual de juros
console.log(incrementarJuros(150, 18))

//incrementarJuros() é um objeto do tipo função

//FUNÇÃO IMEDIATAMENTE INVOCADA, não precisa ser chamada atraves de "nomeFuncao()"
(function imediatamenteInvocada(){
    //código aqui dentrro
})()