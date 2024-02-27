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
//criando validador de senha com maximo de 3 tentativas
// let entrada = require('prompt-sync')();
// const senha = '123456';
// let = cont = 0 //contador
// do {
//     if (cont ===3){
//         break;
//     } //fechando sistema após 3 tentativas
//     cont++; //somando um número a cada tentativa
//     var senhaDig = entrada('Digite a senha para acessar o sistema:');
// }   while (senhaDig !== senha);

// if (cont >= 3){
//     console.log('Acesso não autorizado!');
// } else{
//     console.log('Acesso autorizado!');
// }


//senha FORMA 2
// let sn = '123456';
// let snDg = entrada('Digite a senha para acessar o sistema:');

// while (sn !== snDg){
//     snDg = entrada('Digite a senha para acessar o sistema:');
// }



let entrada = require('prompt-sync')();
const senha = '123456';
let cont = 0
for (let cont = 0; cont <= 2; cont++){
    var senhaDig = entrada('Digite a senha:');
if (senhaDig === senha){
    console.log('Acesso não autorizado!');
    break
} else{
    console.log('Acesso autorizado!');
}
}

// for (let cont = 1; cont <= 10; cont++){
//     let calc = num * cont;
//     console.log (`${num} X ${cont} = ${calc}`);
// }