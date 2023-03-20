/*
3) Elabore um algoritmo que calcule o valor que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

CÓDIGO CONDIÇÃO DE PAGAMENTO
1 - A vista débito: recebe 10% de desconto;
2 - A vista no dinheiro ou pix: recebe 15% de desconto;
3 - Em duas vezes: preço normal de etiqueta sem juros;
4 - Acima de duas vezes: preço normal de etiqueta + juros de 10%.
 */

const precoEtiqueta = 124;
const formaPagamento = 2;
let valorFinal;
//valorFinal é let pois assim pode ser mudado o seu valor futuramente. com const não conseguiriramos fazer a atribuição do valor final, tendo em vista que seu valor nunca pode ser mudado.

//DUAS FORMAS DE FAZER ESTRUTURA CONDICIONAL
//IF ELSE
if (formaPagamento == 1){
    valorFinal = precoEtiqueta - ((10 * precoEtiqueta) / 100);
    console.log("A forma de pagamento escolhida foi a vista no débito.\nO total a pagar é de R$ " + valorFinal.toFixed(02))
} else if (formaPagamento == 2){
    valorFinal = precoEtiqueta - ((15 * precoEtiqueta) / 100);
    console.log("A forma de pagamento escolhida foi a vista no dinheiro ou pix.\nO total a pagar é de R$ " + valorFinal.toFixed(02))
}else if (formaPagamento == 3){
    valorFinal = precoEtiqueta;
    console.log("A forma de pagamento escolhida foi em duas vezes no crédito.\nO total a pagar é de R$ " + valorFinal.toFixed(02))
} else if(formaPagamento == 4){
    valorFinal = precoEtiqueta + ((10 * precoEtiqueta) / 100);
    console.log("A forma de pagamento escolhida foi no cartão de crédito em mais de duas vezes.\nO total a pagar é de R$ " + valorFinal.toFixed(02))
} 

//SWITCH CASE
switch (formaPagamento){
    case 1:
        valorFinal = precoEtiqueta - ((10 * precoEtiqueta) / 100);
        console.log("A forma de pagamento escolhida foi a vista no débito.\nO total a pagar é de R$ " + valorFinal.toFixed(02))
        break;
    case 2:
        valorFinal = precoEtiqueta - ((15 * precoEtiqueta) / 100);
        console.log("A forma de pagamento escolhida foi a vista no dinheiro ou pix.\nO total a pagar é de R$ " + valorFinal.toFixed(02))
        break;
    case 3:
        valorFinal = precoEtiqueta;
        console.log("A forma de pagamento escolhida foi em duas vezes no crédito.\nO total a pagar é de R$ " + valorFinal.toFixed(02))
        break;
    case 4:
        valorFinal = precoEtiqueta + ((10 * precoEtiqueta) / 100);
        console.log("A forma de pagamento escolhida foi no cartão de crédito em mais de duas vezes.\nO total a pagar é de R$ " + valorFinal.toFixed(02))
        break;
        default:
            console.log("OPÇÃO INVÁLIDA!")
}