let fruits = ["apple", "banana", "orange"];

/*

//Método push(): insere um elemento no final do array.
fruits.push("kiwi");
console.log(fruits);

//Método pop(): retira um elemento no fim do array.
fruits.pop();
console.log(fruits);

//Método unshift(): insere um elemento no início do array.
fruits.unshift("strawberry");
console.log(fruits);

//Método shift(): retira um elemento no início do array.
fruits.shift();
console.log(fruits);

*/

//Método indexOf(): verifica qual é o index do elemento pesquisado.
console.log(fruits.indexOf("banana"));

//Método includes(): verifica se determinado elemento existe dentro de um array.
console.log(fruits.includes("kiwi"));

//Método map(): recebe uma função callback que interage com cada elemento e a cada elemento ele executa a função.
let numbers = [1, 2, 3, 4];
let squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);

//Método filter(): recebe uma função callback que interage com cada elemento do array e executa essa função.
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers);

//Método find(): recebe uma função callback 
const produtos = [
    {id: 1, nome: "camisa"},
    {id: 2, nome: "calça"},
    {id: 3, nome: "sandálias"}
];

function encontrarProdutoPorId(id) {
    const produtoEncontrado = produtos.find((produto) => produto.id == id);
          
    if(!produtoEncontrado) {
        return `Produto não encontrado no Banco de dados.`
    }

    return produtoEncontrado;
}

console.log(encontrarProdutoPorId(2));