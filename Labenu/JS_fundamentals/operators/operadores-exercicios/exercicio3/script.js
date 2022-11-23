//a) 5 é maior que 20 e também é menor que 2;

const a = 5 > 20 && 20 < 2;
console.log(a);

//b) 5 é igual a 5 ou é igual a “5”;

const b = 5 === 5 || "5";
console.log(b);

// c) negação de (vinte é maior que cinquenta)

const c = !(20 > 50);
console.log(c);

// d) negação de (vinte é maior que cinquenta OU cinquenta é maior que sessenta)

const d = !(20 > 50 || 50 > 60);
console.log(d);

// ### Parte 2

// **O funcionário Fulano de Silva, com CPF: 000.000.000-00, nasceu em 10/02/1990, reside em: Rua dos
//  bobos nº 0 e possui 2 filhos. Possui habilitação? Sim. Ocupa o cargo de vendedor, recebe um salário de 2.000,00 reais,
//  mais comissão de 10% sobre o total de vendas no mês e entrou na empresa em 2019.**

// Calcule o salário de Fulano da Silva levando em consideração os dados que se seguem:

// a) Auxílio creche por filho:  R$45,50

// b) Comissão de 10% sobre o total de vendas mensal

// c) Total de vendas dos meses de janeiro a junho:

//     - Janeiro: R$ 5.784,50
//     - Fevereiro: R$ 3.418,41
//     - Março: R$ 4.124,10
//     - Abril: R$ 1.874,00
//     - Maio: R$ 7.000,00
//     - Junho: R$ 9.450,00

// d)  Desconto do INSS 5% do salário

// Calcule:

const salarioFixo = 2000;
const auxilioCreche = 45.5 * 2;
const comissao = 0.1;
const inss = 0.05;
let jan = 5784.5;
let fev = 3418.41;
let mar = 4124.1;
let abr = 1874;
let mai = 7000;
let jun = 9450;

// 1) O salário fixo mais o auxílio creche

console.log("Salário + auxílio creche: R$", salarioFixo + auxilioCreche);

// 2) Quanto Fulano de Silva receberá de comissão em janeiro.

console.log(
  "Fulano de Silva receberá",
  "R$" + jan * comissao,
  "de comissão em janeiro."
);
console.log(
  "Em janeiro Fulano Silva receberá no total sem desconto: RS$",
  salarioFixo + jan * comissao + auxilioCreche
);

// 3) Quanto Fulano de Silva será descontado em janeiro pelo INSS ( o valor a ser calculado deve levar em consideração o salário + porcentagem de vendas.)

let descontoINSS = (salarioFixo + jan * comissao) * inss;
console.log("Desconto de INSS em Janeiro: R$" + descontoINSS);

// 4) Imprima no console o cálculo do salário de todos os meses com acréscimos e descontos.

let salarioComissaoTotal =
  jan * comissao +
  fev * comissao +
  mar * comissao +
  abr * comissao +
  mai * comissao +
  jun * comissao +
  salarioFixo * 6;

let descontoTotal = salarioComissaoTotal * inss;
let res = salarioComissaoTotal - descontoTotal + 6 * auxilioCreche;

console.log("Salário de todos os meses com benefícios e descontos: R$" + res);

// 5) A média do salário em  seis meses (de janeiro a junho), levando em consideração as comissões e auxílio.

console.log(res / 6);
