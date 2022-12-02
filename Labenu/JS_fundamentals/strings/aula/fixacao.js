const nomeDoUsuario = prompt("Nome:")
const emailDoUsuario = prompt("E-mail:")
const caracteresUsuario = nomeDoUsuario.length

let frase = `O ${emailDoUsuario} foi cadastro com sucesso. Boas vindas ${nomeDoUsuario}! Seu nome possui ${caracteresUsuario} caracteres.`
console.log(frase);

//a)

frase = frase.replaceAll("r", "x")
frase = frase.replaceAll("R", "X")

console.log(frase);

//b)

console.log(frase.includes("@"));