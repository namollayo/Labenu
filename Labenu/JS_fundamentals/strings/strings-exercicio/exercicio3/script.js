//Crie a const para a frase aqui
// a) Crie uma const no seu código para guardar a frase (com aspas e tudo);

const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase);

// b) Crie uma nova string a partir da primeira, trocando verde por rosa, e azul por laranja;

const fraseAlterada = frase
                        .replaceAll("verde", "rosa")
                        .replaceAll("azul", "laranja")

console.log(frase)
console.log(fraseAlterada)

// c) Verifique se a nova string inclui verde, e se inclui laranja.

console.log(
    fraseAlterada.includes("verde"),
    fraseAlterada.includes("laranja")
)
// EXTRA: tente fazer o “mas não deixe o gato sair” ficar em maiúsculo, assim como o “BOAS VINDAS”

// fraseAlterada.slice(75,102).toUpperCase()

console.log(fraseAlterada.slice(0,74)+fraseAlterada.slice(75,102).toUpperCase());