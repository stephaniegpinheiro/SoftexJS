//Exe.01: Interface básica. Crie uma interface Person que tem as propriedades name(string) e age(number).
//Crie uma função sayHello que aceita um parâmetro do tipo Person e retorna uma string dizendo "Olá, [nome]!Você tem [idade] anos. ".

//Uma interface carrega um objeto.
interface IPerson {
    name: string;
    age: number;
}

//Função que tem um parâmetro do tipo interface
function sayHello(user: IPerson) {
    return `Olá, ${user.name}! Você tem ${user.age} anos.`
}

//Primeira forma de fazer: criar um objeto com os parâmetros da interface e colocar ele como valor do 
//parâmetro quando for usar a função sayHello().
let pessoa:IPerson = {
    name: "Stephanie",
    age : 34
}

console.log(sayHello(pessoa));

//Ou pode utilizar chamando a função sayHello() e passar os valores dentro da chamada da função, de forma direta.
//Como interface é um objeto, ao passar o parâmetro, você coloca eles como objeto.
console.log(sayHello({name: "Rémi", age: 30}));

