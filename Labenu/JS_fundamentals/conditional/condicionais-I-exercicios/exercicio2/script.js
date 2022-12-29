let idade = Number(prompt("Quantos anos você tem?"));
const MAIOR_DE_IDADE = 18;

let ensinoMedio = prompt("Possui ensino médio?");
ensinoMedio.trim().toLowerCase();
if (ensinoMedio === "sim") {
  ensinoMedio = true;
} else {
  ensinoMedio = false;
}

let ensinoSuperior = prompt("Está cursando ensino superior?");
ensinoSuperior.trim().toLowerCase();
if (ensinoSuperior === "sim") {
  ensinoSuperior = true;
} else {
  ensinoSuperior = false;
}

const isensinoSuperior = (idade, ensinoMedio, ensinoSuperior) => {
  let phrase;
  if (idade < MAIOR_DE_IDADE) {
    phrase = "Você ainda é menor de idade";
  } else {
    phrase = "Você já é maior de idade";
  }
  if (!ensinoMedio) {
    phrase = phrase + ", mas ainda não conseguiu completar seu Ensino Médio.";
  } else {
    phrase = phrase + " e já completou o Ensino Médio, Parabéns!";

    if (ensinoSuperior) {
      phrase =
        phrase +
        " Eita, já está no Ensino Superior? Isso é ótimo, mas a parte difícil é sair dele!";
    } else {
      phrase =
        phrase +
        " Você ainda não faz um Ensino Superior? Ou será que já está com o diploma na parede?";
    }
  }
  return phrase;
};

// function maiorDeIdade(idade) {
//     return idade > MAIOR_DE_IDADE;
// }

// function retornaMaiorDeIdade(idade) {
//     let phrase;
//     if (maiorDeIdade(idade)) {
//         phrase = "Você já é maior de idade";
//       } else {
//         phrase = "Você ainda é menor de idade.";
//       }
//     return phrase;
// }

// function retornaEnsinoMedio(ensinoMedio, idade, phrase) {
//     if (!ensinoMedio && !maiorDeIdade(idade)) {
//         phrase = phrase + "";
//       } else if (!ensinoMedio) {
//         phrase = phrase + ", mas ainda não conseguiu completar seu Ensino Médio.";
//       } else {
//         phrase = phrase + " e já completou o Ensino Médio, Parabéns!";
//       }
//     return phrase;
// }

// function retornaEnsinoSuperior(ensinoMedio, idade, ensinoSuperior, phrase) {
//     if ((!ensinoMedio && !maiorDeIdade(idade)) || !ensinoMedio) {
//         phrase = phrase + "";
//       } else if (ensinoSuperior && ensinoMedio) {
//         phrase = phrase + " Eita, já está no Ensino Superior? Isso é ótimo, mas a parte difícil é sair dele!";
//       } else {
//         phrase = phrase + " Você ainda não faz um Ensino Superior? Ou será que já está com o diploma na parede?";
//       }
//     return phrase;
// }

// const isInCollege2 = (idade, ensinoMedio, ensinoSuperior) => {
//     let phrase;
//     phrase = retornaMaiorDeIdade(idade);
//     phrase = retornaEnsinoMedio(ensinoMedio, idade, phrase);
//     phrase = retornaEnsinoSuperior(ensinoMedio, idade, ensinoSuperior, phrase);
//     return phrase;
// }

console.log(isensinoSuperior(idade, ensinoMedio, ensinoSuperior));
