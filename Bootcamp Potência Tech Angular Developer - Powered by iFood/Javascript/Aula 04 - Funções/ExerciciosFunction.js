nome = "Renan"

function escreveNome(nome){
    console.log(`Que nome lindo, ${nome}`)
}
//Quando se usa ${}, se utiliza crase (`) ao invés das aspas (" ")

escreveNome(nome);

function verificarIdade(idade){
    if(idade < 18){
        return "Proibida a entrada de menores de idade!"
    }else return "Seja muito bem vindo!"
}

console.log(verificarIdade(16))