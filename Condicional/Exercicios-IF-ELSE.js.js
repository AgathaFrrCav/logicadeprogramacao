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
2. Saudação com base na hora
javascript
Copiar
Editar
let horas = prompt("Qual o horário? ");
if(horas <= "12h" && horas >= "6h"){
    console.log("Bom dia");
}
if(horas >= "12h" && horas <= "18h"){
    console.log("Boa tarde");
}
if(horas >= "18h"){
    console.log("Boa noite");
}
3. Verificação de idade para evento
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
4. Comparação entre dois números
javascript
Copiar
Editar
let num1 = prompt("Insira um número ");
let num2 = prompt("Insira outro número ");

if (num1 > num2) {
    console.log(`O maior número é: ${num1}`);
} else if (num2 > num1) {
    console.log(`O maior número é: ${num2}`);
} else {
    console.log("Os dois números são iguais.");
}
5. Temperatura com operador ternário
javascript
Copiar
Editar
let temperatura = prompt("Digite a temperatura em °C:");

console.log(
    temperatura <= 15 ? "Frio" :
    temperatura <= 30 ? "Térmico" :
    "Quente"
);
6. Verificação de palavra
javascript
Copiar
Editar
let palavra = prompt("Digite uma palavra ");
if(palavra == "Felicidade"){
    console.log("Palavra correta");
} else {
    console.log("Palavra incorreta");
}
7. Classificação por quantidade de moedas
javascript
Copiar
Editar
let moedas = prompt("Digite a quantidade de moedas:");
if(moedas <= "10"){
    console.log("Poucas moedas");
}
if(moedas <= "20"){
    console.log("Quantidade média");
}
if(moedas > "20"){
    console.log("Grande quantidade");
}
8. Classificação de temperatura
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
9. Verificar se número é positivo ou negativo
javascript
Copiar
Editar
let num = prompt("Digite um número: ");
if (num >= 0){
    console.log("Positivo");
} else {
    console.log("Negativo");
}
10. Avaliação por nota
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
11. Verificação de animal
javascript
Copiar
Editar
let animal = prompt("Digite o nome de um animal ");
if(animal === "Cachorro" || animal === "Gato" || animal === "Pássaro")
{
    console.log("Animal listado");
} else {
    console.log("Animal não listado");
}
12. Verificação de dia útil ou fim de semana
javascript
Copiar
Editar
let dia = prompt("Digite o dia da semana: ");
if (dia === "sábado" || dia === "domingo") {
    console.log("Fim de semana");
} else {
    console.log("Dia útil");
}
13. Experiência de trabalho
javascript
Copiar
Editar
let anos = prompt("Quantos anos de experiência você tem? ");
if (anos > 2){
    console.log("Experiente");
} else {
    console.log("Iniciante");
}
14. Verificar se número está no intervalo
javascript
Copiar
Editar
let num = prompt("Digite um número:");
if (num >= 10 && num <= 20){
    console.log("Dentro do intervalo");
} else {
    console.log("Fora do intervalo");
}
15. Verificação de idade para carteira de motorista
javascript
Copiar
Editar
let idade = prompt("Digite sua idade:");
if (idade >= 18){
    console.log("Pode tirar a carteira de motorista");
} else {
    console.log("Não pode tirar a carteira de motorista");
}
16. Verificação de número (positivo, negativo ou zero)
javascript
Copiar
Editar
let num = prompt("Digite um número:");
if (num > 0){
    console.log("Positivo");
} else if (num < 0){
    console.log("Negativo");
} else {
    console.log("Zero");
