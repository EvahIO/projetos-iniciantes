/**
 * Todo app com Javascript
 */

'use strict';

//Variável auxiliar para manipulação dos dados
let banco = [];

//Set e Get para salvar em localStorage as tarefas
const getBanco = () => JSON.parse(localStorage.getItem ('todoList')) ?? [];
const setBanco = (banco) => localStorage.setItem ('todoList', JSON.stringify(banco));

//Esta função cria o elemento html com a tarefa
const criarItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('todo__item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
    `;
    document.getElementById('todoList').appendChild(item);
}

//Impede que ao atualizar a tela as tarefas sejam duplicas
const limparTarefas = () => {
    const todoList = document.getElementById('todoList');
    while (todoList.firstChild) {
        todoList.removeChild(todoList.lastChild);
    }
}

//Toda atulização de tela, limpa a tela e recria os items
//Experimente comentar a função limparTarefas para ver o que acontece
const atualizarTela = () => {
    limparTarefas();
    const banco = getBanco(); 
    banco.forEach ( (item, indice) => criarItem (item.tarefa, item.status, indice));
}

//Insere uma nova tarefa no banco e atuliza a tela 
const inserirItem = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;
    if (tecla === 'Enter'){
        const banco = getBanco();
        banco.push ({'tarefa': texto, 'status': ''});
        setBanco(banco);
        atualizarTela();
        evento.target.value = '';
    }
}

//Remove um item do banco e atualiza a tela
const removerItem = (indice) => {
    const banco = getBanco();
    banco.splice (indice, 1);
    setBanco(banco);
    atualizarTela();
}

//Atualiza uma tarefa no banco
const atualizarItem = (indice) => {
    const banco = getBanco();
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    setBanco(banco);
    atualizarTela();
}

//Função para atulizar uma terefa para concluída ou remover, dependendo 
//de qual botão foi clicado
const clickItem = (evento) => {
    const elemento = evento.target;
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        removerItem (indice);
    }else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem (indice);
    }
}

//Seleciona o elemento que recebe o texto da tarefa e chama afunção de inserir no 
//banco quando enter e pressioando
document.getElementById('newItem').addEventListener('keypress', inserirItem);

//Seleciona o elemeneto de lista e chama a função de clique
document.getElementById('todoList').addEventListener('click', clickItem);

atualizarTela();