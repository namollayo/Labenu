// <!-- # Exercício 2

// Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

const arrayNum = [ 15, 58, 18, 47, 13, 56 ]
const arrayString = ["Jean","Venti", "Diluc", "Lisa", "Barbara"]
const arrayMisto = [true, 19, 57, "Julia", false, "Anna", 48, "Danny"]

console.log("Array 1:",arrayNum);
console.log("Array 2:",arrayString);
console.log("Array 3:",arrayMisto)

// - Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão);

console.log(arrayNum.length);
console.log(arrayString.length);
console.log(arrayMisto.length);

// - Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;

console.log(arrayNum[0]);
console.log(arrayString[1]);
console.log(arrayMisto[2]);

// - Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false.  -->

console.log(arrayNum.includes(47));
console.log(arrayMisto.includes(47));