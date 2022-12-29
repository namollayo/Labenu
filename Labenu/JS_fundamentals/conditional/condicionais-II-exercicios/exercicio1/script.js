
// 1. Utilizando ifs aninhados
function evenOrOdd(num) {
    let answer
    if (num % 2 === 0 ) {
        if (num % 3 === 0) {
            answer = "número divisível por 2 e 3";
        } else {
            answer = "número divisível apenas por 2 "
        }
    } else if (num % 3 === 0) {
        answer = "número é divisível apenas por 3"

    } else {
        answer = "número não divisível por 2 nem 3";
    }
    return answer
}

console.log(evenOrOdd(Number(prompt("Insira um número"))))

// 2. Utilizando um operador lógico para unir duas operações relacionais

function evenOrOdd2(num) {
  let answer;
  if (num % 2 === 0 && num % 3 === 0) {
    answer = "número divisível por 2 e 3";
  } else if (num % 2 === 0 || num % 3 === 0) {
    answer = "número divisível por 2 ou 3 ";
  } else {
    answer = "número não divisível por 2 nem 3";
  }
  return answer;
}

console.log(evenOrOdd2(Number(prompt("Insira um número"))))
