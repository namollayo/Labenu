// # Exercício 2
// Declare e chame as funções abaixo:

// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function soma(num1, num2) {
    return num1 + num2
}

console.log(soma(34, 13));

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

const booleano = (num1, num2) => { return num1 >= num2 }

console.log(booleano(47, 13));

// c) Uma função que receba um número e imprima no console um boleano informando se o número é par ou não.

function par(num1) { 
    return num1 % 2 == 0 
}

console.log(par(3));

// d) Uma função que receba um valor de salário e retorne o valor com o desconto 10% referente ao INSS.  

function salarioLiquido(salarioBruto) { 
    return salarioBruto - (salarioBruto * 0.1)   
}

console.log(salarioLiquido(4300));