1. Verificar idade
javascript
Copiar
Editar
let idade = prompt("Digite a idade ");
if(idade >= "18"){
    console.log("Maior de idade");
}
if(idade <= "18"){
    console.log("Menor de idade");
}
2. Sauda��o com base na hora
javascript
Copiar
Editar
let horas = prompt("Qual o hor�rio? ");
if(horas <= "12h" && horas >= "6h"){
    console.log("Bom dia");
}
if(horas >= "12h" && horas <= "18h"){
    console.log("Boa tarde");
}
if(horas >= "18h"){
    console.log("Boa noite");
}
3. Verifica��o de idade para evento
javascript
Copiar
Editar
let idade = prompt("Entrada do evento, insira sua idade ");
if(idade >= "16"){
    console.log("Acesso negado");
}
if(idade < "16"){
    console.log("Acesso liberado");
}
4. Compara��o entre dois n�meros
javascript
Copiar
Editar
let num1 = prompt("Insira um n�mero ");
let num2 = prompt("Insira outro n�mero ");

if (num1 > num2) {
    console.log(`O maior n�mero �: ${num1}`);
} else if (num2 > num1) {
    console.log(`O maior n�mero �: ${num2}`);
} else {
    console.log("Os dois n�meros s�o iguais.");
}
5. Temperatura com operador tern�rio
javascript
Copiar
Editar
let temperatura = prompt("Digite a temperatura em �C:");

console.log(
    temperatura <= 15 ? "Frio" :
    temperatura <= 30 ? "T�rmico" :
    "Quente"
);
6. Verifica��o de palavra
javascript
Copiar
Editar
let palavra = prompt("Digite uma palavra ");
if(palavra == "Felicidade"){
    console.log("Palavra correta");
} else {
    console.log("Palavra incorreta");
}
7. Classifica��o por quantidade de moedas
javascript
Copiar
Editar
let moedas = prompt("Digite a quantidade de moedas:");
if(moedas <= "10"){
    console.log("Poucas moedas");
}
if(moedas <= "20"){
    console.log("Quantidade m�dia");
}
if(moedas > "20"){
    console.log("Grande quantidade");
}
8. Classifica��o de temperatura
javascript
Copiar
Editar
let temperatura = prompt("Digite a temperatura ");
if (temperatura > 30){
    console.log("Muito quente");
} else if (temperatura > 20) {
    console.log("Calor");
} else {
    console.log("Frio");
}
9. Verificar se n�mero � positivo ou negativo
javascript
Copiar
Editar
let num = prompt("Digite um n�mero: ");
if (num >= 0){
    console.log("Positivo");
} else {
    console.log("Negativo");
}
10. Avalia��o por nota
javascript
Copiar
Editar
let nota = 10;
if(nota >= 9){
    console.log("Aprovado com boa nota");
}
else if(nota >= 7){
    console.log("Aprovado");
}
else{
    console.log("Reprovado");
}
11. Verifica��o de animal
javascript
Copiar
Editar
let animal = prompt("Digite o nome de um animal ");
if(animal === "Cachorro" || animal === "Gato" || animal === "P�ssaro")
{
    console.log("Animal listado");
} else {
    console.log("Animal n�o listado");
}
12. Verifica��o de dia �til ou fim de semana
javascript
Copiar
Editar
let dia = prompt("Digite o dia da semana: ");
if (dia === "s�bado" || dia === "domingo") {
    console.log("Fim de semana");
} else {
    console.log("Dia �til");
}
13. Experi�ncia de trabalho
javascript
Copiar
Editar
let anos = prompt("Quantos anos de experi�ncia voc� tem? ");
if (anos > 2){
    console.log("Experiente");
} else {
    console.log("Iniciante");
}
14. Verificar se n�mero est� no intervalo
javascript
Copiar
Editar
let num = prompt("Digite um n�mero:");
if (num >= 10 && num <= 20){
    console.log("Dentro do intervalo");
} else {
    console.log("Fora do intervalo");
}
15. Verifica��o de idade para carteira de motorista
javascript
Copiar
Editar
let idade = prompt("Digite sua idade:");
if (idade >= 18){
    console.log("Pode tirar a carteira de motorista");
} else {
    console.log("N�o pode tirar a carteira de motorista");
}
16. Verifica��o de n�mero (positivo, negativo ou zero)
javascript
Copiar
Editar
let num = prompt("Digite um n�mero:");
if (num > 0){
    console.log("Positivo");
} else if (num < 0){
    console.log("Negativo");
} else {
    console.log("Zero");
