// Faça uma função
// que receba como parâmetros, login e senha.
// No corpo da função declare duas variáveis do tipo string
//  loginArmazenado e senhaArmazenada com lavores já pré estabelecidos.
//   Usaremos essas variáveis para verificar se são iguais às que estamos recebendo como parâmetro.
//   Retorne true se as duas variáveis forem verdadeiras.

const pratica3 = (loginDigitado, senhaDigitada) => {
  const loginArmazenado = "admin@gmail.com";
  const senhaArmazenada = "olamundo";

  return loginDigitado === loginArmazenado &&
         senhaDigitada === senhaArmazenada;
};

// Sucess

if (pratica3("admin@gmail.com", "olamundo") === true) {
  console.log("Login Efetuado com sucesso.");
} else {
  console.log("Falha no Login.");
}

// Fail

if (pratica3("admin@gmial.com", "olamundo") === true) {
  console.log("Login Efetuado com sucesso.");
} else {
  console.log("Falha no Login.");
}

// Interação com Usuario

const emailUsuario = prompt("E-mail");
const senhaUsuario = prompt("Senha");

if (pratica3(emailUsuario, senhaUsuario) === true) {
  console.log("Login Efetuado com sucesso.");
} else {
  console.log("Falha no Login.");
}
