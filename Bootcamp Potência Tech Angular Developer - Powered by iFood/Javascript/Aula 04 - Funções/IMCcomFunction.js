function calcularIMC(peso, altura){
   return peso / Math.pow(altura, 2)
}

function classificarIMC(IMC){
    if (IMC < 18.5){
        return "Abaixo do peso."
    }else if (IMC >= 18.5 & IMC <= 25){
        return "Peso normal."
    }else if (IMC >= 25 & IMC <=  30){
        return "Acima do peso"
    }else if (IMC >= 30 & IMC <= 40){
        return "Obeso"
    }else return "Obesidade grave"
}

function main(){
    // pode ser invocado desta maneira
    // calcularIMC(85, 1.66)
    const peso = 85;
    const altura = 1.66;
    // ou desta maneira, com as variáveis já definidas anteriormente
    IMC = calcularIMC(peso, altura)
    console.log(classificarIMC(IMC))
    }

main();