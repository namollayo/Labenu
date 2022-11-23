function praticaFixacao(nome, anoNascimento, anoAtual) {
  const maiorIdade = anoAtual - anoNascimento >= 18;

  return `${nome} é maior de idade? ${maiorIdade}`;
}

console.log(praticaFixacao("Julia", 1996, 2022));

console.log(praticaFixacao("Miguel", 2010, 2022));

const nomeUsuario = prompt("Qual seu nome?");
const idadeUsuario = Number(prompt("Que ano você nasceu?"));
const ano = Number(prompt("Em que ano estamos?"));

console.log(praticaFixacao(nomeUsuario, idadeUsuario, ano));
