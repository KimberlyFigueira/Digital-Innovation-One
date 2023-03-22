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
const formaDePagamento = 4;
let valorFinal = 0;

function aplicarDesconto(valor, desconto){
return (valor - ((valor*desconto)/100))
}

function aplicarJuros(valor, juros){
    return (valor + ((valor*juros)/100))
}

function formaPagamento(){
    switch (formaDePagamento){
        case 1:
            valorFinal = aplicarDesconto(precoEtiqueta, 10);
            return("A forma de pagamento escolhida foi a vista no débito.\nO total a pagar é de R$ " + valorFinal.toFixed(02))
            break;
        case 2:
            valorFinal = aplicarDesconto(precoEtiqueta, 15);
            return("A forma de pagamento escolhida foi a vista no dinheiro ou pix.\nO total a pagar é de R$ " + valorFinal.toFixed(02))
            break;
        case 3:
            valorFinal = precoEtiqueta;
            return("A forma de pagamento escolhida foi em duas vezes no crédito.\nO total a pagar é de R$ " + valorFinal.toFixed(02))
            break;
        case 4:
            valorFinal = aplicarJuros(precoEtiqueta, 10);
            return("A forma de pagamento escolhida foi no cartão de crédito em mais de duas vezes.\nO total a pagar é de R$ " + valorFinal.toFixed(02))
            break;
            default:
                return("OPÇÃO INVÁLIDA!")
    }
}

console.log(formaPagamento());
