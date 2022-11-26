// 1. Crie um novo array. Ele deve possuir apenas números, e estes números não devem seguir nenhuma ordem específica. Por enquanto, não vamos imprimir o array.

const novoArrayF = [3, 47, 2, 13, 84, 65];

// 2. Depois disso, crie uma cópia deste array utilizando o método slice().

const arrayCopiaF = novoArrayF.slice();

// 3. No array copiado:

// Remova o último item

arrayCopiaF.pop();

// Em seguida adicione o número 6 no fim do   array.

arrayCopiaF.push(6);

// Depois, remova o número que está no índice 2 array.

arrayCopiaF.splice(2, 1);

// Por fim, imprima os dois arrays.

console.log("Array Original:", novoArrayF);
console.table(novoArrayF);

console.log("Array Copiado:", arrayCopiaF);
console.table(arrayCopiaF);
