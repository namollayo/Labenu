// # Exercício 3


// a)Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, x e divisão).

function soma(num1, num2) {
    return num1 + num2
}

function subtracao(num1, num2) {
    return num1 - num2
}

function multiplicacao(num1, num2) {
    return num1 * num2
}

function divisao(num1, num2) {
    return num1 / num2
}

console.log(
    `Soma: ${soma(1, 2)}\nSubtração: ${subtracao(4, 2)}
Multiplicação: ${multiplicacao(2, 2)}\nDivisão: ${divisao(1, 2)}\n`)

// b) Em seguida, fora das funções, receba do usuário dois números e armazene em variáveis.

const numb1 = Number(prompt("Insira um número."))
const numb2 = Number(prompt("Insira mais um número."))

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

console.log(
    `Soma: ${soma(numb1, numb2)}\nSubtração: ${subtracao(numb1, numb2)}
Multiplicação: ${multiplicacao(numb1, numb2)}\nDivisão: ${divisao(numb1, numb2).toFixed(2)}\n`)

// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

const finalSoma = soma(numb1, numb2)
const finalSubtracao = subtracao(numb1, numb2)
const finalMultiplicacao = multiplicacao(numb1, numb2)
const finalDivisao = divisao(numb1, numb2)

console.log(
    `Soma: ${finalSoma}\nSubtração: ${finalSubtracao}
Multiplicação: ${finalMultiplicacao}\nDivisão: ${finalDivisao.toFixed(2)}`)