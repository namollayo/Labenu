// # Exercício 3

// Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays,
//chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais;

const arrayNum = [15, 58, 18, 47, 13, 56];
const arrayString = ["Jean", "Venti", "Diluc", "Lisa", "Barbara"];
const arrayMisto = [true, 19, 57, "Julia", false, "Anna", 48, "Danny"];

const arrayNumCopia = arrayNum.slice();
const arrayStringCopia = arrayString.slice();
const arrayMistoCopia = arrayMisto.slice();

// - Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;

arrayNumCopia.unshift(25);

console.log(arrayNum);
console.log(arrayNumCopia);

// - Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;

arrayStringCopia.pop();

console.log(arrayString);
console.log(arrayStringCopia);

// - Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;

arrayMistoCopia.splice(1, 1);

console.log(arrayMisto);
console.log(arrayMistoCopia);
