/*
1) Faça um algorítmo que, dado as 3 notas de um aluno em um semestre, calcule sua média e a sua classificação conforme a tabela abaixo

Media = (nota 1 + nota 2 + nota 3)/3

- Média menor que 5: reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, aprovado.
*/

const nota1 = 8
const nota2 = 7
const nota3 = 4

const mediaFinal = (nota1 + nota2 + nota3) / 3;

if (mediaFinal < 5){
    console.log("REPROVADO!\nSua média ficou " + mediaFinal.toFixed(2))
}else if (mediaFinal >= 5 & mediaFinal <= 7){
    console.log("RECUPERAÇÃO\nSua média ficou " + mediaFinal.toFixed(2))
}else console.log("APROVADO!\nSua média ficou " + mediaFinal.toFixed(2))