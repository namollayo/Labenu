// Esquenta
const array = [15, "banana", false];
const primeiroElemento = array[0];
const segundoElemento = array[1];
const terceiroElemento = array[2];
const elemento1 = typeof primeiroElemento;
const elemento2 = typeof segundoElemento;
const elemento3 = typeof terceiroElemento;
console.log(`Elemento 1: ${primeiroElemento} tipo: ${elemento1} 
Elemento 2: ${segundoElemento} tipo: ${elemento2}    
Elemento 3: ${terceiroElemento} tipo: ${elemento3} `);

// Pratica Guiada

// Vamos criar alguns arrays, e refletir a respeito.
// Crie um array com 3 itens do tipo String

const arrayDeStrings = ["Miko", "Ei", "Kokomi"];
console.log("Array de Strings:", arrayDeStrings);
console.table(arrayDeStrings);

// Crie um array com 3 itens do tipo Number

const arrayDeNumbers = [15, 84, 47];
console.log("Array Números:", arrayDeNumbers);
console.table(arrayDeNumbers);

// Crie um array com uma String, um número e um booleano;

const arrayMisto = ["Jean", 90, true];
console.log("Array Misto:", arrayMisto);
console.table(arrayMisto);

const char = "Jean";
const lvl = 90;
const statusAtual = true;

const arrayMisto2 = [char, lvl, statusAtual];
console.log("Array Misto 2:", arrayMisto2);
console.table(arrayMisto2);

// Crie um array com apenas um valor. Um número.

const arrayUnico = [47];
console.log("Array Unico:", arrayUnico);

// Crie um array sem nenhum valor dentro.

const arrayVazio = [];
console.log("Array Vazio:", arrayVazio);

// Vamos tentar acessar índices específicos dos arrays da última prática.
// Cheque o length do primeiro array. O que acontece se tentarmos acessar o índice 3 deste array?

console.log(arrayDeStrings.length);
console.log(arrayDeStrings[3]); // Undefined

// Verifique se o terceiro array inclui cada um dos itens;

console.log(arrayMisto.includes("Jean"));
console.log(arrayMisto.includes(lvl));
console.log(arrayMisto.includes(89));
console.log(arrayMisto.includes(true));

// No quarto array, imprima o valor do único item. Observe qual o seu índice, e imprima seu tamanho.

arrayUnico;
console.log(arrayUnico[0]);
console.table(arrayUnico);
console.log("Index de 47:", arrayUnico.indexOf(47));
arrayUnico.length;

// Crie uma cópia do primeiro array, utilizando a atribuição com sinal de igual.

const novoArrayCopia = arrayDeStrings;
console.log("Array Original:", arrayDeStrings);
console.log("Copia:", novoArrayCopia);

// Faça push() de uma nova string no array copiado

novoArrayCopia.push("Gorou");

// Imprima os dois arrays. Há diferença?

console.log("Array Original:");
console.table(arrayDeStrings);
console.log("Array Copia:");
console.table(novoArrayCopia);

// Quando se faz um push, dessa maneira, faz com que eles dois recebam o push, visto que eles se referenciaram
// ! Para fazer definir valor ("Array1 = Array2"), para que eles nao sigam se referenciando é necessario que faça
// Array1 = Array2.slice()

// Como podemos ajustar?

console.log("Correção da Copia:");
arrayDeStrings.pop();
const copiaArraydeStrings = arrayDeStrings.slice();
copiaArraydeStrings.push("Gorou");
console.table(copiaArraydeStrings);

// Com o array copiado corretamente, remova os itens dos índices 2 e 3 do array copiado.

copiaArraydeStrings.splice(2, 2);
console.table(copiaArraydeStrings);
