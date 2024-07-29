//Exemplo 1: Declarando variáveis e imprimindo os seus valores. 

const fullName:string = "Captain Hook";
const fullAge:number = 25;

console.log(fullAge);
console.log(fullName);

//Exemplo 2: Criar uma função que calcule a soma de dois números.

function calcularSoma (num1: number, num2: number) :number {
    return num1 + num2;
}

console.log(calcularSoma(4,6));

//Exemplo 3:

function contarCaracteres(mensagem: string) :number {
    return mensagem.length
}

console.log(contarCaracteres("Stephanie")); 

//Exemplo 4:

function verificarSinal (num: number) :string {
    if(num === 0) {
        return `O número é igual a 0.`
    } else if(num > 0) {
        return `${num} é um número positivo.`
    } else {
        return `${num} é um número negativo.`
    }
};

console.log(verificarSinal(-7));