let numero1 = Number(prompt("Digite o primeiro número: "))
let numero2 = Number(prompt("Digite o segundo número: "))
let operacoes = prompt("Qual operação você quer realizar?\n soma, multiplicação, subtração e divisão\n")

function soma(){
    let resultado = numero1 + numero2
    return resultado
}

function multiplicação(){
    let resultado = numero1 * numero2
    return resultado
}

function subtraçaõ(){
    let resultado = numero1 - numero2
    return resultado
}

function divisão(){
    let resultado = numero1 / numero2
    return resultado
}


if (operacoes == "soma" ){
console.log("O resultado é:",soma())
}
else if (operacoes == "multiplicação"){
console.log("O resultado é: ", multiplicação())
}
else if(operacoes == "subtração"){
console.log("O resultado é: ", subtração())
}
else if (operacoes == "divisão"){
console.log("O resultado é: ", divisão())
}
