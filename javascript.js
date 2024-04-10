// (1) Mensagem de 'Olá Mundo'
console.log('Olá Mundo');
// (2) Saída de soma de 2 inteiros
let num1 = 5;
let num2 = 10;
let soma = num1 + num2;

console.log('A soma de', num1, 'e', num2, 'é', soma);

// (3) Altera a propriedade de um elemento por id
document.getElementById('titulo').innerText = 'Novo Título';
// (4) Altere a propriedade de um elemento por name
document.getElementsByName('campoTexto')[0].value = 'Novo Texto';
// (5) Altere a propriedade de um elemento por class
let elementos = document.getElementsByClassName('paragrafo');
for (let i = 0; i < elementos.length; i++) {
    elementos[i].innerText = 'Novo Parágrafo';
}
