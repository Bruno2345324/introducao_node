let entrada = require('prompt-sync')();

//Criando variavel para guardar o nome
let nome

//Fazendo uma pergunta/Interagindo com o sistema ----- node aula_entrada.js (comando para executar)
nome = entrada('Digite seu nome:');

console.log(`Seu nome é ${nome}`);

entrada ('Pressione enter para encerrar!');