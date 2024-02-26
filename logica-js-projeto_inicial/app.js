alert("Bem vindo ao jogo do número secreto");
let numeroMaximo = 1000;
let numeroSecreto = parseInt (Math.random () * numeroMaximo + 1);
console.log (numeroSecreto);
let chute;
let tentativas = 1;

//enquanto  o chuto não for igual ao núumero secreto
while (chute != numeroSecreto) {
    chute = prompt (`Escolha um número entre 1 e ${numeroMaximo}`);
    // se o chute for igual ao numero secreto
    if (chute == numeroSecreto) {
        break;
    }  else {
         if (chute > numeroSecreto) {
             alert (`o Número Secreto é menor que ${chute}`);
         } else{ 
             alert (`o Número Secreto é maior que ${chute}`);
         }
         //tentativas = tentativas + 1;
         tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa"; 
alert (`Isso aí! Voce descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`);

//if (tentativas > 1){
   // alert (`Isso aí! Voce descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativas`);
//} else {
  //  alert (`Isso aí! Voce descobriu o número secreto ${numeroSecreto} com ${tentativas} tentativa`);
//}