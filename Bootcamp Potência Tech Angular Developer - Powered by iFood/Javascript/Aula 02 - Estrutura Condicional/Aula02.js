let numero = 10;

/* "=" para atribuição (ex: let numero = 100)"
"==" para igualdade (ex: 0 == "0")
"===" para igualdade (idêntico) ex: 0 === 0 */
const numeroPar = (numero % 2) === 0;

if (numeroPar){
    console.log("É par!")
}else console.log("É impar!")


/*Também poderia ser feito da seguinte maneira
if (numeroPar){
    console.log("É par!")
}

"!" pode ser usado para negação
if (!numeroPar){
    console.log("É impar!")
} */