/**
 * Cronômetro simples
 */

//Declarrando as variáveis
var sec=0
var min=0
var hr=0

//Variável para controle do cronômetro
var interval

//Esta funcão inicia a contagem
function start(){
    //Inicia o cronômetro
    watch()
    //Utiliza a função setInterval para a cada 10 milisegundos executar
    //a função do cronômetro
    interval= setInterval(watch,10)
}

//Pausa
function pause(){
    clearInterval(interval)
}

//Para e restaura o cronômetro para o valor inicial
function stop(){
    clearInterval(interval)
    sec=0
    min=0
    window.alert("Você parou em: "+document.getElementById('watch').innerText)
    document.getElementById('watch').innerText='00:00:00'

}

//Esta função faz a formatação dos dígito do cronômetro
function twoDigits(digit){
    if(digit<10){
        return('0'+digit)
    }else{
        return(digit)
    }
}

//Função do cronômetro
function watch(){
    /*
        Por causa da função setInterval, a cada 10 milisegundos essa função será executada
        ou seja, a variável sec será incrementa a cada execução, é feita a checagem quando
        atinge 60 segundos, incrementa a variável min e assim por diante.    
    */    
    sec++
    if(sec==60){
        min++
        sec=0
        if(min==60){
            min=0
            hr++
        }
    }
    //Seleciona o elemento que irá mostrar o cronômetro e atualiza
    document.getElementById('watch').innerText=twoDigits(hr)+':'+twoDigits(min)+':'+twoDigits(sec)
}