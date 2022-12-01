// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

sacolao = []

// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```
const uva = {
    produto: "Uva",
    preco: 4.99,
    disponibilidade: true
}
const maca = {
    produto: "Maçã",
    preco: 2.50,
    disponibilidade: false
}
const pera = {
    produto: "Pera",
    preco: 6.20,
    disponibilidade: true
}


// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**

sacolao.push(uva, maca, pera)

// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**

console.log(sacolao);