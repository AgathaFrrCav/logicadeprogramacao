let respostaIncorreta = 0
let respostaCorreta = 0

//pergunta1
console.log("\nQuem é a rainha decapitada durante a revolução francesa?")
console.log("A - Maria Antonieta")
console.log("B - Cleopatra")
console.log("C - Elizabeth")
console.log("D - Maria II")
let resposta1 = prompt("Qual resposta está correta?\n")
switch (resposta1){
    case "A":
    case"Maria Antonieta":
        console.log("Correto!\n");
        respostaCorreta++
        break;
        
        default:
        console.log("Incorreto\n");
        respostaIncorreta++
        break;
}

//Pergunta2 
console.log(" \nQual foi o primeiro presidente do Brasil após o fim da ditadura militar? ")
console.log("A - Sarney ")
console.log("B - Vargas")
console.log("C - Brizola")
console.log("D - Deodoro")
let pergunta2 = prompt("Digite a alternativa correta: \n")
switch (pergunta2){
case "A":
case "Sarney":
        console.log("Correto!\n");
        respostaCorreta ++
        break;
        
        default:
        console.log("Incorreto!\n")
respostaIncorreta++
break;
}

//Pergunta3 
console.log("\n Quem foi o primeiro imperador do Brasil ? ")
console.log("A - Dom João ")
console.log("B - Tiradentes")
console.log("C - Dom Pedro I")
console.log("D - Dom Pedro II")
let pergunta3 = prompt("Digite a alternativa correta: \n")
switch (pergunta3){ 
case "C":
case "Dom Pedro I":
    console.log("Alternativa correta!")
    respostaCorreta ++
    break;
    
default:
    console.log("Alternativa errada! ");
    break;

respostaIncorreta ++
}

//pergunta4
console.log("\n Onde a humanidade aprendeu a agricultura? ")
console.log("A - Espanha ")
console.log("B - América")
console.log("C - Crescente fértil")
console.log("D - Grécia")
let pergunta4 = prompt("Digite a alternativa correta: \n")
switch (pergunta4){
case"C":
case"Crescente fértil ":
    console.log("Alternativa correta!");
    respostaCorreta ++
break;

default:
    console.log("Alternativa errada! ");
respostaIncorreta ++
break;
}

//Pergunta5
console.log("\n Quem foi o ditador da Alemanha na Segunda Guerra? ")
console.log("A - Mussolini ")
console.log("B - Hitler")
console.log("C - Stalin")
console.log("D - Lênin")
let pergunta5 = prompt("Digite a alternativa correta: \n")
switch (pergunta5){
case"B":
case"Hitler ":
    console.log("Alternativa correta!");
    respostaCorreta ++
    break;
    
    default:
    console.log("Alternativa incorreta!");
respostaIncorreta ++
break;
}

//Pergunta6
console.log("\n Quem pintou a Monalisa ")
console.log("A - DaVinci ")
console.log("B - Rafael")
console.log("C - Caravaggio")
console.log("D - Picasso")
let pergunta6 = prompt("Digite a alternativa correta: \n")
switch(pergunta6){
case"A":
case"DaVinci ":
    console.log("Alternativa correta!");
    respostaCorreta ++
    break;
    
default:
    console.log("Alternativa errada! ")
respostaIncorreta ++
break;
}

//Pergunta7
console.log("\n Qual país colonizou o Brasil? ")
console.log("A - Espanha ")
console.log("B - Portugal")
console.log("C - França")
console.log("D - Itália")
let pergunta7 = prompt("Digite a alternativa correta: \n")
switch(pergunta7){
case"B":
case"Portugal ":
    console.log("Alternativa correta!");
    respostaCorreta ++
    break;
    
default:
    console.log("Alternativa errada! ");
respostaIncorreta ++
break;
}

//Pergunta8
console.log("\n Que povo criou os Jogos Olímpicos? ")
console.log("A - Gregos ")
console.log("B - Romanos")
console.log("C - Árabes")
console.log("D - Chineses")
let pergunta8 = prompt("Digite a alternativa correta: \n")
switch(pergunta8){
case"A":
case"Gregos ":
    console.log("Alternativa correta!");
    respostaCorreta ++
    break;

default:
    console.log("Alternativa errada! ");

respostaIncorreta ++
break;
}

//Pergunta9
console.log("\n Que país lançou a primeira bomba atômica? ")
console.log("A - Estados Unidos ")
console.log("B - Japão")
console.log("C - Italia")
console.log("D - Alemanha")
let pergunta9 = prompt("Digite a alternativa correta: \n")
switch(pergunta9){
case"A":
case"Estados Unidos":
    console.log("Alternativa correta!");
    respostaCorreta ++
    break;

default:
    console.log("Alternativa errada! ");

respostaIncorreta ++
break;
}

//Pergunta10
console.log("\n Que dia é comemorado a Independência do Brasil? ")
console.log("A - 25/12 ")
console.log("B - 1/4")
console.log("C - 2/10")
console.log("D - 7/9")
let pergunta10 = prompt("Digite a alternativa correta: \n")
switch(pergunta10){ 
case"D":
case"7/9":
    console.log("Alternativa correta!");
    respostaCorreta ++
    break;
    
    default:
    console.log("Alternativa errada! ");
respostaIncorreta ++
break;
}

//Exibir Resultado
console.log("\n Resumo final: ")
console.log(" Respostas Corretas: " + respostaCorreta)
console.log(" Respostas incorretas: " + respostaIncorreta)
