//Atividade 2: Encontrar o produto por id

const produtos = [
    {id: 1, nome: "Camisa"},
    {id: 2, nome: "Calça"},
    {id: 3, nome: "Sandálias"}
];

function findProductById (id) {
    const usuarioCorrespondente = produtos.find((produto) => produto.id == id);

    if(!usuarioCorrespondente) {
        return `Produto não encontrado no Banco de dados.`
    }

    return usuarioCorrespondente;
}

console.log(findProductById(6));