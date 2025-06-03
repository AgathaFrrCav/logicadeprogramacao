console.log("Digite os respectivos números que indicam sobre qual sistema você deseja aprender:")
console.log("Opção 1: Linux")
console.log("Opção 2: Cmd")
let programa = Number(prompt("Digite a opção: "))

switch(programa){

    case 1:
        console.log("\nO Linux é um sistema operacional de código aberto que oferece grande liberdade e variedade para seus úsuarios, permitindo a execução de vários programas e interfaces.\n");
           let linux = Number(prompt("\nQual comando do linux você deseja aprender? \n1:cd..\n2:mkdir \n3:echo> \n4:ls -R \n5:cat \n6:echo>> \n7:ls \n8:rm \n9:rmdir \n10:mv\n"));
    
    
    if (linux == 1){
        console.log(" O comando 'cd ..' é utilizado para retornar ao diretório anterior.")
    }
    else if (linux == 2){
  console.log(" O comando 'mkdir' é utilizado para criar um diretório.")
    }
 else if (linux == 3){
  console.log(" O comando 'echo>' é utilizado para criar um arquivo.")
 }
  else if (linux == 4){
  console.log(" O comando 'ls -R' é utilizado para mostrar arquivos dentro de subdiretórios.")
  }
   else if (linux == 5){
  console.log(" O comando 'cat' é utilizado para mostrar o texto dentro de um arquivo.")
   }
     else if (linux == 6){
  console.log(" O comando 'echo>>' é utilizado para escrever texto.")
     }
   else if (linux == 7){
  console.log(" O comando 'ls' é utilizado para mostrar subdiretórios.")
   }
   else if (linux == 8){
  console.log(" O comando 'rm' é utilizado para deletar um arquivo.")
   }
   else if (linux == 9){
  console.log(" O comando 'rmdir' é utilizado para remover um diretório vazio")
   }
     else if (linux == 10){
  console.log(" O comando 'mv' é utilizado para mover.")
     }
   else {
             console.log("Não existe!");
         }
  
   let linux2 = prompt("Gostaria de um resumo total dos comandos?\n")
switch (linux2){
       case "Sim":
    console.log("clear : Limpa a tela 'equivalente ao 'cls' no CMD'\nmkdir MeuProjeto: Cria uma nova pasta chamada MeuProjeto\ncd MeuProjeto: Entra na pasta MeuProjeto\necho Bem-vindo! > leia.txt: Cria o arquivo leia.txt com o texto 'Bem-vindo!'\nls -: Lista arquivos e pastas de forma recursiva\ncat leia.txt: Mostra o conteúdo do arquivo leia.txt\necho 'Adicionado depois.' >> leia.txt: Adiciona texto ao final do arquivo\nls: Lista os arquivos da pasta atual\nrm leia.txt: Remove o arquivo leia.txt\ncd ..: Volta para a pasta anterior\nrmdir MeuProjeto: Remove a pasta MeuProjeto (se estiver vazia)\nmv outro.txt novo.txt: Renomeia (ou move) o arquivo outro.txt para novo.txt.");
    break;

   case "Não":
       console.log("Ok.");}
   break;
     
     
     
     case 2:
        console.log("\nO CMD é o Prompt de Comando do Windows, serve para que os úsuarios possam realizar comandos e outras funções atráves de  de texto.\n");
        let cmd = Number(prompt("Digite o número do comando qual você quer saber mais sobre:\n1: dir \n2:cls \n3:cd.. \n4:mkdir  \n5:echo> \n6:del \n7:rmdir\n"));
 
 
 if (cmd == 1){
        console.log(" O comando 'dir' é utilizado para mostrar os arquivos dentro da pasta.")
 }
    else if (cmd == 2){
  console.log(" O comando 'cls' é utilizado para apagar.")
    }
 else if (cmd == 3){
  console.log(" O comando 'cd..' é utilizado para voltar ao diretório anterior.")
 }
  else if (cmd == 4){
  console.log(" O comando 'mkdir' é utilizado para criar uma pasta.")
  }
   else if (cmd == 5){
  console.log(" O comando 'echo>' é utilizado para criar um arquivo.")
   }
     else if (cmd == 6){
  console.log(" O comando 'del' é utilizado para deletar um arquivo.")
     }
   else if (cmd == 7){
  console.log(" O comando 'rmdir' é utilizado para deletar uma pasta.")
   }
    else {
             console.log("Não existe!");
         }
   
   let cmd2 = prompt("Gostaria de um resumo total?\n")
   switch (cmd2){
       case "Sim":
    console.log("\n Resumo geral das funções linux: \n\n cls: Limpa a tela\nmkdir MeuProjeto: Cria uma nova pasta chamada MeuProjeto\ncd MeuProjeto: Entra na pasta MeuProjeto\necho Bem-vindo!> leia.txt: Cria um arquivo com o texto 'Bem-vindo'\ndir: Mostra os arquivos da pasta (deve mostrar leia.txt)\ncd..: Volta para a pasta anterior\ndel MeuProjeto\leia.txt: Deleta o arquivo leia.txt dentro da pasta\nrmdir MeuProjeto: Remove a pasta MeuProjeto(agora vazia).");
    break;

   case "Não":
       console.log("Ok.");}
   break;
   
   default:
   console.log("Sua escolha não está disponível, por favor escolha 1 ou 2.")
   }