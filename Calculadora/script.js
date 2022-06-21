/**
 * Calculadora simples com Javascript
 */

//Faço a seleção dos elementos utilizando a classe atríbuida
const resultado = document.querySelector(' .result ');
const confirmar = document.querySelector(' .igual ');

//Esta função insere no display da calculador o caracter pressionado
function insert(valor) {
	//Propriedade innerHTML permite maniplular tudo que estiver estre as tags do elemento
	resultado.innerHTML += valor;
}

//Esta função limpa o display da calculadora
function clean() {
	//Propriedade innerHTML permite maniplular tudo que estiver estre as tags do elemento
	resultado.innerHTML = ' ';
}

//Esta função apaga caracter por caracter
function backspace() {
	//Faz a chegagem se o contéudo de texto existe no elemento
	if (resultado.textContent) {
		//Atríbuo o conteúdo a uma variável auxiliar
		let result = resultado.innerHTML;
		//Utiliza a função substring para remover 1 caracter
		resultado.innerHTML = result.substring(0, result.length - 1);
	}
}

//Esta função realiza o cálculo
function confirma() {
	//Checa se existe contéudo a ser calculado
	if (resultado.textContent != 'Erro') {
		/*
            Utiliza a função eval para efetuar o cálculo.
            A funcão eval executa uma string que contenha um código válido
            neste caso uma operação matemática
        */
		resultado.innerHTML = eval(resultado.innerHTML);
	}
}
