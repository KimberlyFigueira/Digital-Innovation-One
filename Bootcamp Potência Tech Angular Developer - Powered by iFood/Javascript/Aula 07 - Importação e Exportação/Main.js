//Importa e passa o caminho de onde virá a exportação
//const functions = require('./Aula07');

//Importa já criando duas variáveis que recebem a importação
const {gets, print} = require('./Aula07')

//Podendo então ser usadas da seguinte maneira
print(gets())
console.log(gets())

//Ao invés de:
//NÃO FUNCIONA POIS FUNCTIONS NÃO ESTÁ DECLARADO
functions.print(functions.gets())
console.log(functions.gets())
functions.print('teste print')

/*const {nome} =  pessoa;
    SÃO EQUIVALENTES
const nome = pessoa.nome */