alert ("Bem-Vindo, essa pagina foi desenvolvida pela Amanda🌷.")
// Essas são as variaveis ultilizada para o placar;
let somaJ = 0;
let somaC = 0;

function ComputadorResposta(){
    // A variável "opcoes" é um array que contém as três jogadas possíveis: Pedra (posição 0), Papel (posição 1) e Tesoura (posição 2)
    let opcoes = ["Pedra", "Papel", "Tesoura"];

    // "Math.floor(Math.random() * 3)" gera um número aleatório inteiro entre 0 e 2
    let numAleatorio = Math.floor(Math.random() * 3);

    // A variável "escolhaC" (escolha do Computador) usa o número aleatório para pegar uma das opções dentro do array
    // Por exemplo: se "numAleatorio" for 1, "opcoes[1]" será "Papel"
    let escolhaC = opcoes[numAleatorio];

    // A variável "elemento" seleciona o local do HTML onde o resultado da escolha do computador será exibido
    // Aqui usamos o método "querySelector" para pegar o elemento com a classe "resultadoC"
    let elemento = document.querySelector(".resultadoC");

    // Com "elemento.textContent = escolhaC", exibimos a escolha do computador no local selecionado
    elemento.textContent = escolhaC;
}



function jogada(escolhaJogador){
    console.log(escolhaJogador);
    
    let opcoes = ["Pedra", "Papel", "Tesoura"];
    let numAleatorio = Math.floor(Math.random() * 3);
    let escolhaC = opcoes[numAleatorio];


    let elemento = document.querySelector(".resultadoC");
    elemento.textContent = escolhaC;

    resultadoF(escolhaJogador, escolhaC);


}

function resultadoF(escolhaJogador, escolhaC){
    // A variavel resultado é para armazenar o resultado da rodada
    let resultado = "";

    if (escolhaJogador === "Pedra" && escolhaC === "Tesoura"){
        resultado = "Você ganhou! 😊";
    }
    else if (escolhaC === "Pedra" && escolhaJogador === "Tesoura"){
        resultado = "Você perdeu! 😔";
    }
    else if (escolhaC === "Papel" && escolhaJogador === "Pedra") {
       resultado = "Você perdeu! 😔";
    }
    else if (escolhaJogador === "Papel" && escolhaC === "Pedra"){
        resultado = "Você ganhou! 😊";
    }
    else if (escolhaJogador === "Tesoura" && escolhaC === "Papel") {
        resultado = "Você ganhou! 😊";
    }
    else if (escolhaC === "Tesoura" && escolhaJogador === "Papel") {
        resultado = "Você perdeu! 😔";
    }
    
    else{
        resultado = "Empate! 😅";
    }
    document.getElementById("Resultado").textContent = resultado;

    // Vou criar uma variavel soma para contar as vezes que o jogador ganhou, porém para ela permanecer no placar, vou ter que criar ela fora da função

    if (resultado === "Você ganhou! 😊"){
        somaJ += 1;
        document.getElementById("placarJogador").textContent = somaJ;
    }
    else if (resultado === "Você perdeu! 😔"){
        somaC += 1;
        document.getElementById("placarComputador").textContent = somaC;
    }
}