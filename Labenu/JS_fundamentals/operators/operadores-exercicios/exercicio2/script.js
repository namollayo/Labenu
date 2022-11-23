const num1 = Number(prompt("Insira um primeiro número."));
const num2 = Number(prompt("Insira um segundo número."));

console.log("Primeiro número:", num1, "Segundo número:", num2);

console.log("O primeiro número é maior que segundo?", num1 > num2);
console.log("O primeiro número é igual ao segundo?", num1 === num2);
console.log("O primeiro número é divisível pelo segundo?", num1 % num2 == 0);
console.log("O segundo numero é divisível pelo primeiro?", num2 % num1 == 0);
