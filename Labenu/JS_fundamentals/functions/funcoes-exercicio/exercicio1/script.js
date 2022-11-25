//  a) Declare uma função que imprima `Olá, [SEU NOME]!`. Chame esta função.

function nomePessoal(nome) {
  return `Olá, ${nome}!`;
}

const nameGabi = nomePessoal("Gabi");
console.log(nameGabi);

// b) Declare uma função que receba um número como parâmetro imprima no console a tabuada do dele. Chame esta função várias vezes com números diferentes.

let multiplicador = 0;

function tabuada(num) {
  if (multiplicador <= 9) {
    multiplicador++;
    let res = num * multiplicador;
    console.log(` ${num} * ${multiplicador} = ${res}`);
    return tabuada(num);
  } else {
    return "Fim da tabuada.";
  }
}

console.log(tabuada(9));

// c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou __arrow functions__

console.log(multiplicador); // É preciso zerar o valor do multiplicador (let), 
                            // porque ele foi alterado dentro da função anterior.
multiplicador = 0;

const tabuadaArrow = (num) => {
  if (multiplicador <= 9) {
    multiplicador++;
    let res = num * multiplicador;
    console.log(` ${num} * ${multiplicador} = ${res}`);
    return tabuadaArrow(num);
  } else {
    return "Fim da tabuada.";
  }
};

console.log(tabuadaArrow(13));
