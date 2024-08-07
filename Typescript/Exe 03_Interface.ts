//Exercício 03: Interface com parâmetro opcional.
//Crie uma interface Task com as propriedades title(string) e completed(boolean, opcional). Em seguida, crie a função
//taskStatus que aceita um parâmetro do tipo Task e retorna uma mensagem indicando SE a tarefa foi concluída ou não.

//Crie um objeto task1 que siga todas as diretrizes da interface Task.
// Crie outro objeto task2 e este não deve receber o valor do parâmetro opcional.
//Utilize a função taskStatus duas vezes, para testar cada condição.

//Criando a interface Task
interface Task {
    title: string;
    completed?: boolean;
}

//Criando a função taskStatus com parâmetro do tipo Task e retornando as mensagens sobre os status das tarefas.
function taskStatus(task: Task) :string {
    if(task.completed === true) {
        return `The "${task.title}" task has been completed.`
    } else if(task.completed === false) {
        return `The "${task.title}" task has not been completed.`
    } else {
        return `The status of the "${task.title}" task was not reported.`
    }
}

//Criando os dois objetos, task1 e task2 do tipo Task.
const task1: Task = {
    title: "Study JavaScript",
    completed: true,
}

const task2: Task = {
    title: "Create portfolio",
}

//Utilizando a função taskStatus e imprimindo o retorno em um console.log.
console.log(taskStatus(task1));
console.log(taskStatus(task2));