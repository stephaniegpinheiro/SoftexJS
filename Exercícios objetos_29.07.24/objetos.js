//Exemplo da aula_29.07.2024:

const pessoa = {
    nome: "João",
    idade: 30,

    saudacao: function() {
        return `Olá, o meu nome é ${this.nome} e eu tenho ${this.idade} anos.`
    }
};

console.log(pessoa);
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa.saudacao());

//Exercício 02: Crie um objeto carro com as seguintes propriedades: marca, modelo e ano.  
//Acesse e imprima cada uma dessas propriedades no console através da notação de ponto.

const carro = {
    marca: "BYD",
    modelo: "XPTO",
    ano: 2024,

    descricaoCarro: function() {
        return `O carro ${this.modelo} foi fabricado pela empresa ${this.marca} no ano de ${this.ano}.`
    }
};

console.log(carro.marca);
console.log(carro.ano);
console.log(carro.descricaoCarro());

//Exercício 03: Crie um objeto chamado livro com as propriedades: titulo, autor e anoPublicacao.
//Acesse e imprima cada uma dessas propriedades no console através da notação de ponto.

const livro = {
    titulo: "Cartas de um diabo ao seu aprendiz",
    autor: "C.S Lewis",
    anoPublicacao: 1942,

    lendoLivro: function() {
        return `Você está lendo o livro ${this.titulo} do autor ${this.autor}.`
    }
};

console.log(livro.titulo);
console.log(livro.autor);
console.log(livro.anoPublicacao);
console.log(livro.lendoLivro());




