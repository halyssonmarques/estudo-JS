'use strict';

const display = document.getElementById('display');
const numero = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => operador 

const calcular = () => {
    if (operacaoPendente()) {
        const numeroAtual = display.textContent;
        novoNumero = true;
        if (operador == '+') {
            AtualizarDisplay(numeroAnterior + numeroAtual);
        }
    }
}

const AtualizarDisplay = (texto) => {
    if (novoNumero) {
        display.textContent = texto;
        novoNumero = false;
    } else {
        display.textContent += texto;
    }
}

const inserirNumero = (evento) => AtualizarDisplay(evento.target.textContent);
numero.forEach(numero => numero.addEventListener('click', inserirNumero));


const selecionarOperador = (evento) => {
    if (!novoNumero) {
        calcular
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFlorat(display.textContent);
        console.log(operador);
    }    
}
operadores.forEach (numero => numero.addEventListener('click',selecionarOperador));