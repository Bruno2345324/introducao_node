/*
let entrada = require('prompt-sync')();

// criando variavel idade e recebendo dado
let idade = entrada('Digite sua idade:');

//convertendo valor idade para número inteiro 
// parseInt -- Para receber números Inteiros 
// parseFloat -- para receber números quebrados/com casas decimais 
let idadeint = parseInt(idade);

if (idade < 18){
    console.log("Menor de Idade!");
}else if (idade === 18){
    console.log('Tem 18 anos!');
}else {
    console.log('Maior de Idade!');
}

console.log ('Sua idade é ${idade}');
*/

//---------------------------------------------------------------------------------------------------------------------------------------

//TABUADA - FORMA 1
// let entrada = require('prompt-sync')();

//     //Criando variavel "num" para receber um número e ja convertendo o valor para um número inteiro
// let num = parseInt(entrada('Digite um número para visualizar a tabuada:'))

// let cont = 1;

// while (cont <=10) {
//     let calc = num * cont;
//     console.log (`${num} X ${cont} = ${calc}`);
//     cont++;
// }

//TABUADA - FORMA 2 abreviada
// let entrada = require('prompt-sync')();
// let num = parseInt(entrada('Digite um número para visualizar a tabuada:'))

// for (let cont = 1; cont <= 10; cont++){
//     let calc = num * cont;
//     console.log (`${num} X ${cont} = ${calc}`);
// }

// -------------------------------------------------------------------------------------------------------------------------

//senha - FORMA 1
let entrada = require('prompt-sync')();
const senha = '123456';
do {
    var senhaDig = entrada('Digite a senha para acessar o sistema:');
}   while (senha ==! senhaDig);

// //senha FORMA 2
// let sn = '123456';
// let snDg = entrada('Digite a senha para acessar o sistema:');

// while (sn ==! snDg){
//     snDg = entrada('Digite a senha para acessar o sistema:');
//}
