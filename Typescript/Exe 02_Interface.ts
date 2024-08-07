//Exe02: Interface básica
//Crie uma interface Rectangle que tem as propriedades width(number) e heigth(number).
//Crie uma função getArea que aceita um parâmetro do tipo Rectangle e retorna um número que é a área de um retângulo.
//Use a notação de ponto para navegar dentro dos atributos do parâmetro do tipo Rectangle.

interface IRectangle {
    width: number;
    heigth: number;
} 

function getArea(values: IRectangle) {
    return `O valor da área do retângulo é: ${values.width * values.heigth}.`
}

console.log(getArea({width: 30, heigth: 50}));