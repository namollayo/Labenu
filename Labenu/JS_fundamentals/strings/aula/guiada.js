// Crie um programa que deve imprimir a mensagem:
// A cor favorita de pessoa é cor;

// Vamos fazer o programa duas vezes. 
// Na primeira, com concatenação, e a segunda com Template Strings.

const name = prompt("Qual o seu nome?")
const color = prompt ("Qual sua cor favorita?")

// Contatenação
console.log("A cor favorita de " + name + " é " + color );

// Template String

console.log(`A cor favorita de ${name} é ${color}`);


// Agora, vamos alterar a forma com que o texto aparece.
// Altere a primeira string para que a pessoa também envie sua citação favorita.
// Essa citação deve ser impressa entre aspas.
// Altere a segunda string que criamos, para que seja impressa dessa forma 
//(utilizando apenas um console.log):

const quote = prompt ("Qual sua citação favorita?")

console.log("A cor favorita de " + name + " é " + color +" e sua citação favorita é " + "\""+quote+"\"" );
console.log(`Nome: ${name} 
Cor Favorita: ${color} 
Citação favorita: "${quote}"`);

// Vamos alterar a forma de nossa exibição de strings agora.
// Faça com que o nome da pessoa sempre seja exibido em letras maiúsculas;
// Exiba no console quantos caracteres tem o nome da pessoa.
// Cheque se o nome da pessoa possui a letra A

const nameFinal = name.toUpperCase()

console.log(`Nome: ${nameFinal} 
Nº de caraceres: ${nameFinal.length} 
Possui "A"?: "${nameFinal.includes ("A")}"`);




