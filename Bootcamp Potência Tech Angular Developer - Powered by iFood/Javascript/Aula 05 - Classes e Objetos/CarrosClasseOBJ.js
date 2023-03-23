/*1 - Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por KM rodado. Crie um método que, dado a quantidade de KM e o preço do combustível, nos dê o valor gasto em reais para realizar esse percurso.
*/

class Carros{
    marca;
    cor;
    gastoMedioPorKM;
    gastoMedio

    constructor(marca, cor, gastoMedioPorKM){
        this.marca = marca
        this.cor = cor
        this.gastoMedioPorKM = gastoMedioPorKM
    }

    gastoMedioCombustivel(distanciaViagem, precoCombustivel){
        this.gastoMedio = (distanciaViagem/this.gastoMedioPorKM) * precoCombustivel
        return(`Seu carro da marca ${this.marca} e cor ${this.cor}, gastará cerca de R$ ${(this.gastoMedio).toFixed(2)} para completar a viagem`)
        }
    }

const renault = new Carros("Renault", "verde oliva", 10/1)
console.log(renault.gastoMedioCombustivel(80, 4.50))