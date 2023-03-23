//CLASSE
class Cliente {
    nome;
    idade;
    cidade;
    //Método construtor. Serve para, de certa forma, padrozinar o código. Determina oque vai acontecer toda vez em que um objeto for instanciado pela classe. Ex: determinar que toda pessoa residirá no RS
    constructor(nome, idade, cidade){
        this.nome = nome;
        this.idade = idade;
        this.cidade = cidade
    }
    //Em método (função dentro de classe/objeto) não é necessário escrever function
    descrever(nome, idade, cidade){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e resido em ${this.cidade}`)
    }
}

//A partir do método construtor, os atributos do objeto podem ser declarados da seguinte maneira:
const ednaldo = new Cliente ("Ednaldo Pereira", 52, "Paraíba")
ednaldo.descrever()

const renan =  new Cliente()
renan.nome = "Renan Arthur da Silva";
renan.idade = 27;
renan.cidade = "Londrina - PR";
renan.descrever()

function compararIdade(pessoa1, pessoa2){
    if(pessoa1.idade > pessoa2.idade){
        console.log(pessoa1.nome + " é mais velho(a) que " + pessoa2.nome)
    }else if (pessoa2.idade > pessoa1.idade){
        console.log(pessoa2.nome + " é mais velho(a) que " + pessoa1.nome)
    }else console.log(`${pessoa1.nome} e ${pessoa2.nome} têm a mesma idade`)
}

compararIdade(ednaldo, renan);

//OBJETOS
const cliente = {
    nome: "Eduardo Brandão de Moraes",
    idade: 32,
    cidade: "Esteio - RS",
    descrever: function(){
        console.log(`Meu nome é ${this.nome}, tenho ${this.idade} anos e resido em ${this.cidade}`)
    }
}

