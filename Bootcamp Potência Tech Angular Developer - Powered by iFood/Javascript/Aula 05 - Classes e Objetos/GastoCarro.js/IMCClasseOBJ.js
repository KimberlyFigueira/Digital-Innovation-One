/*
2 -  Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos: nome, peso e altura.
As pessoas devem ter a capacidade de indicar o valor do seu IMC (peso / (altura*altura)).
Instancie uma pessoa chamada José que tenha 70kg de peso e 1.75 de alutra e peça ao José para indicar seu IMC
*/

class Pessoas {
    nome;
    peso;
    altura;

    constructor(nome, peso, altura){
        this.nome = nome
        this.peso = peso
        this.altura = altura
    }
    calcularIMC(){
        this.IMC = this.peso / (Math.pow(this.altura, 2))
        return (`Seu IMC é de ${(this.IMC).toFixed(2)}`)
    }
}

jose = new Pessoas("José", 70, 1.75)
console.log(jose.calcularIMC())