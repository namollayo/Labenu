const filme = {
	nome: "Auto da Compadecida", 
	ano: 2000, 
	elenco: [
		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
		"Virginia Cavendish"
		], 
	transmissoesHoje: [
		{canal: "Telecine", horario: "21h"}, 
		{canal: "Canal Brasil", horario: "19h"}, 
		{canal: "Globo", horario: "14h"}
		]
};

// respostas aqui ⬇️

// a) Qual o código para imprimir o nome do **primeiro** ator/atriz?

console.log(filme.elenco[0]);

// b) Qual o código para imprimir o nome do **último** ator/atriz?

const ultimoAtor = filme.elenco.length - 1
console.log(filme.elenco[ultimoAtor]);

// c) Qual o código para exibir o array com **todas** as transmissões de hoje?

//console.log(filme.transmissoesHoje);
console.log("Todas as tramissões de Auto da Compadecida hoje:");
console.table(filme.transmissoesHoje)

// d) Qual o código para exibir o **horário** de transmissão do filme no `Canal Brasil`?

console.log("Transmissão no Canal Brasil:", filme.transmissoesHoje[1].horario);
//		Ou
console.table(filme.transmissoesHoje[1]);