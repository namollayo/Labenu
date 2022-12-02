let minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";

// a) Remova o excesso de espaços no final da string;

console.log(minhaString.trim());

// b) exiba, em um console.log() a quantidade de caracteres da string, antes e depois da remoção dos espaços;

console.log(minhaString.length);
console.log(minhaString.trim().length);

// c) Substitua os traços ________ por “sticioso”.

minhaString = minhaString.replaceAll("________", "sticioso");

console.log(minhaString);