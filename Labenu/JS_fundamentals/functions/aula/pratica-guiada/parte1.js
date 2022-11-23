// Pratica Guiada

function pratica1Normal(nome) {
  console.log(`Olá ${nome}`);
}

const pratica1Arrow = (nome) => {
  console.log(`Olá ${nome}`);
};

pratica1Normal("Julia");
pratica1Arrow("Giovanna");

pratica1Normal("Anna");
pratica1Arrow("Joana");

// Return no lugar de console.log

const praticaComReturn = (nome) => {
  return `Olá ${nome}`;
};

console.log(praticaComReturn("Maria"));

// Exercicio 2 

function pratica2(nome) {
    console.log(`Olá ${nome}`);
}

pratica2("Fernanda")
pratica2("Rafaela")
pratica2("Amanda")

const pratica2ExpressaoDeFuncao = function (nome){
    return `Olá ${nome}`
}

console.log(pratica2ExpressaoDeFuncao("Laura"));
console.log(pratica2ExpressaoDeFuncao("Luisa"));
console.log(pratica2ExpressaoDeFuncao("Marina"));