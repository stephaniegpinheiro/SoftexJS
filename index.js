// Exercício 01:

const numInteiros = [1, 2, 3, 4, 5];
console.log(numInteiros);

// Exercício 02:

const numReais = [5.5, 4.3, 3.4, 2.9];
console.log(numReais.reverse());

// Exercício 03:

const frutas = ["Banana", "Laranja", "Maçã", "Morango", "Uva"];

for(let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// Exercício 04 Classificação de Medalhas em competições:
// Você precisa escrever uma função medalhaDeAcordoComPosicao que recebe 
// um número representando a posição de um competidor em uma competição e retorna a medalha correspondente.
// As medalhas são atribuídas conforme a posição:

const posicoes = ["Ouro", "Prata", "Bronze", "Nada"];

function medalhaDeAcordoComPosicao (numero) {
    if(numero === 1) {
        console.log(`Medalha de ${posicoes[0]}.`);
    } else if (numero === 2) {
        console.log(`Medalha de ${posicoes[1]}.`);
    } else if(numero === 3) {
        console.log(`Medalha de ${posicoes[2]}.`);
    } else {
        console.log(posicoes[3]);
    }
}

medalhaDeAcordoComPosicao(1);
medalhaDeAcordoComPosicao(2);
medalhaDeAcordoComPosicao(3);
medalhaDeAcordoComPosicao(4);







