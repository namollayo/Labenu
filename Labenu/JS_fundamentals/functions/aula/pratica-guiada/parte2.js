function praticaPart2(num) {
  return `o número ${num} é par? ${num % 2 === 0}.
    Somado com 10 o resultado é ${num + 10} e multiplicado por ele mesmo é ${num * num}.`;
}

console.log(praticaPart2(15));

// Clean + constante + Prompt

function pratica2Part2(num) {
  const verifica = num % 2 === 0;
  const soma = num + 10;
  const multiplica = num * num;
  return `o número ${num} é par? ${num % 2 === 0}.
    Somado com 10 o resultado é ${num + 10} e multiplicado por ele mesmo é ${num * num}.`;
}

const numInformada = Number(prompt("Insira um número"));
console.log(pratica2Part2(numInformada));
