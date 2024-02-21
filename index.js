console.log('Hello world!');

//Criando uma variavel Nome e já atribuindo um valor a ela (Bruno)
let nome ='Bruno';

console.log(nome);

//informando uma variavel
let idade = 155;
let altura = 1.75;
console.log('Nome: ' + nome + ' - Idade: ' + idade + ' anos');
console.log(`Nome: ${nome}  - Idade: ${idade} anos`);


//Determinando valor Verdadeiro ou Falso para variavel
let trabalha = true;

console.log(trabalha);
console.log('trabalha: ' + (trabalha === true ? 'sim' :  'não'));

if (trabalha === true) {
    console.log('Trabalha: Sim');
}else {
    console.log('Trabalha: Não');
}

//Adcionando uma constante, não pode mudar o valor dela
const sangue = 'B+';

//Substituindo o valor da variavel idade
idade = 3600; 
console.log(idade);


//Dados de endereço
let endereco = {
    'rua' : 'Perolas',
    'num' : 15,
    'bairro' : 'Centro',
    'cidade' : 'Bastos',
    'uf' : 'SP'
}

console.log(endereco);

let frutas = ['Banana', 'Mamão', 'Maça'];

//typeof - determinar o tipo de um valor
console.log(
    'vNome: ' + typeof(nome) + '\n' + 
    'vIdade: ' + typeof(idade) + '\n' + 
    'vAltura: ' + typeof(altura) + '\n' + 
    'vTrabalha: ' + typeof(trabalha) + '\n' + 
    'vConstante: ' + typeof(sangue) + '\n' +
    'vEndereco: ' + typeof(endereco) + '\n'
);


let velha = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
]

console.log(velha [2][2]);
console.log(typeof(velha));
console.log((Array.isArray(velha)) ? 'Array' : 'Não é Array');