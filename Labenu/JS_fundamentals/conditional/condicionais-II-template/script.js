//if aninhados

let idadeDependente;

// idadeDependente >= 13
// idadeDependente <= 17

if (idadeDependente >= 13) {
  if (idadeDependente <= 17) {
    console.log("Pode ter o cartão de dependente");
  } else {
    console.log("O limite de idade é 17 anos");
  }
} else {
  console.log(
    "Para ter o cartão é necessário que o dependente tenha entre 13 e 17 anos.\nConsulte outras possibilidades do Labank"
  );
}

// usando operadores lógicos

if (idadeDependente >= 13 && idadeDependente <= 17) {
  console.log("Pode ter o cartão de dependente");
} else {
  console.log(
    "Para ter o cartão é necessário que o dependente tenha entre 13 e 17 anos.\nConsulte outras possibilidades do Labank"
  );
}

// switch-case

let escolhaUsuario = Number(
  prompt("Digite um número de 1 a 4 para escolher o cartão")
);
let cartao

switch (escolhaUsuario) {
  case 1:
    cartao = "Fácil";
    break;
  case 2:
    cartao = "Black";
    break;
  case 3:
    cartao = "Platinum";
    break;
  case 4:
    cartao = "Master Gold";
    break;
  default:
    cartao = "Escolha uma da opções disponiveis."
    break;
}

console.log("Cartão", cartao);

// ternário

let chuva;

chuva ? console.log("Leva sombrinha") : console.log("Não precisa da sombrinha");

idadeDependente === 13
  ? console.log("pode ter cartão")
  : console.log("consulte outras opções");
