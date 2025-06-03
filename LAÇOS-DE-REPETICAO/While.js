/1,2,3,4,5 e 6
let tentativas = 0
let usuario = prompt("Digite o seu usuário: ")
while (usuario != "AgathaFerreira") {
    usuario = prompt("\nDigite seu usuário: ")
}

let senha = prompt("Digite sua senha: ")
while (senha != "12345") {  
    senha = prompt("\nDigite sua senha: ")
}

console.log("\nPara continuarmos o login,")

let senhaConfirmacao = prompt("Confirme sua senha: ")
tentativas = 1

while (senhaConfirmacao != "12345" && tentativas < 3) {
    console.log("\nSenha incorreta! Tente novamente.")
    senhaConfirmacao = prompt("\nConfirme sua senha: ")
    tentativas++
   
    if (senhaConfirmacao != "12345" && tentativas >= 3) {
        console.log("\nAcesso bloqueado!")
        break
    }
}

if (senhaConfirmacao === "12345") {
    console.log("\nLogin Efetuado")
}


//7
let usuario = prompt("Crie um nome de usuario:")
let senha = prompt("Crie uma senha:")
let login1 = prompt("Digite seu usuário: ")
let login2 = prompt("Digite sua senha: ")

while(login1 != usuario || login2 != senha){
console.log("Usuario ou senha incorreto. Tente novamente.")
login1 = prompt("Digite seu usuário: ")
login2 = prompt("Digite sua senha: ")
}
console.log("Login efetuado!")

//8
let senha = Number (prompt("Digite sua senha: "))
let senhacorreta = 12345
while(senha != senhacorreta){
    let mensagem = prompt("Esqueceu sua senha? ")
    if(mensagem = "Sim")
    console.log(senhacorreta)
    senha = Number (prompt("Digite sua senha: "))
}
console.log("Senha correta")


//9
let usuario = prompt("Digite seu usuario: ")
let senha = Number (prompt("Digite sua senha: "))

while(usuario !== "Carol" || senha !== 12345 ){
    console.log("Usuario ou senha incorretos, tente novamente")
usuario = prompt("Digite seu usuario: ")
 senha = Number (prompt("Digite sua senha: "))
}
 console.log("Você esta logado ")

let acesso = prompt("Palavra de saída: ")
let sair = "logout"
while(acesso == sair){
    console.log("Você não está mais logado")
    usuario = prompt("Digite seu usuario: ")
    senha = Number (prompt("Digite sua senha: "))
}
console.log("Comando não encontrado")
