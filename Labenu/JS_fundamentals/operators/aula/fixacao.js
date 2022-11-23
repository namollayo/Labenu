// Parte 1
console.log("Bom dia!");
let idadePessoal = Number(prompt("Quantos anos você tem?"));
let idadeAmigo = Number(prompt("Quantos anos seu melhor amigo tem?"));

console.log(
  "Sua idade é maior do que a do seu melhor amigo?",
  idadePessoal > idadeAmigo
);
let a = idadePessoal - idadeAmigo;

if (a > 0) {
  console.log("A diferença de idade entre vocês é:", a, "ano(s)");
} else {
  console.log("A diferença de idade entre vocês é:", -a, "ano(s)");
}
// "Math.abs()" também é uma função que pode ser usada para transformar o resultado
// em um Número Positivo.
