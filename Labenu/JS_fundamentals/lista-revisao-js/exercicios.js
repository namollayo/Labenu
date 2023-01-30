// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length
}


// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort((numMenor, numMaior) => numMenor - numMaior)
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    return array.filter((elemento)=> elemento %  2 == 0)
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    return array.filter((elemento) => elemento %  2 == 0)
                // .map((elemento) => elemento*elemento)
                .map((elemento)=> Math.pow(elemento, 2))
  
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    // let test = 0;
    
    // array.forEach((elemento) => {
    //   if (test < elemento) {
    //     test = elemento;
    //   }

    // });

    // return test

    // tambem é possível realizar usando .sort() e puxando o indice do primeiro/ultimo numero 
let maiorNumero = 0

    for (let i = 0; i < array.length; i++) {
        
        if(array[i] > maiorNumero){
            maiorNumero = array[i]
        }  
    } return maiorNumero
}


// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNum
    let menorNum
    if (num1 > num2) {
        maiorNum = num1
        menorNum = num2
    } else { maiorNum = num2
             menorNum = num1
    }
    const object = {maiorNumero:maiorNum, maiorDivisivelPorMenor: (maiorNum % menorNum === 0), diferenca: maiorNum - menorNum  }    
    return object
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let nNumerosPares = []
    for (let i = 0; nNumerosPares.length < n ; i++) { //
        if(i % 2 == 0)
        nNumerosPares.push(i)
    }
//  OU
// for (let i = 0; nNumerosPares.lenght < n; i += 2){ nNumerosPares.push(i) }
    return nNumerosPares
}
// Ao ler o enunciado imaginei que já existia um array em questão e fiz da seguinte maneira 
//entregando os primeiros elementos pares em ordem crescente
// {  let nNumerosPares
// arrayOrdem = array.sort(function (a, b){return a - b})
// nNumerosPares = arrayOrdem.filter((element)=> element % 2 == 0) 
//  return nNumerosPares }

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
   let triangulo
    if (ladoA === ladoB && ladoB === ladoC) {
    triangulo = `Equilátero`
   } else if (ladoA !== ladoB && ladoB !== ladoC && ladoC !== ladoA){
    triangulo = `Escaleno`
   } else {
    triangulo = `Isósceles`
   }
        return triangulo
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    let arrayOrdenado = array.sort((a,b) => b - a)
    let arrayFinal = []
    arrayFinal.push(arrayOrdenado[1])
    arrayFinal.push(arrayOrdenado[arrayOrdenado.length - 2])
    return arrayFinal
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
         filme ={
         nome: 'O Diabo Veste Prada',
         ano: 2006,
         diretor: 'David Frankel',
         atores: ['Meryl Streep', 'Anne Hathaway', 'Emily Blunt', 'Stanley Tucci']
      };
      return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por ${filme.atores.join(", ")}.`
     }


// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    let pessoaAnonimizada = {
        ...pessoa, nome: "ANÔNIMO"
    }
    return pessoaAnonimizada
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
    let pessoaAutorizada = pessoas.filter((elemento)=> elemento.idade >= 15 && elemento.idade <= 60 && elemento.altura > 1.5)
    return pessoaAutorizada
}


// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
    let pessoaNaoAutorizada = pessoas.filter((elemento)=> elemento.idade < 15 || elemento.idade > 60 || elemento.altura < 1.5)
    return pessoaNaoAutorizada
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    contas.forEach((element) => {
        let totalCompras = element.compras.reduce((Accumulator, comprasTotal) => Accumulator + comprasTotal, 0)
        Math.abs(totalCompras)
        element.saldoTotal -= totalCompras 
        element.compras.length = 0
     });
         return contas
 }

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    let consultasAlfabeticas
    consultasAlfabeticas = consultas.sort((a, b) => { if (a.nome < b.nome) {
    return -1
  } else if (a.nome > b.nome){
    return 1
  } else {
    return 0
  }
})
    return consultasAlfabeticas

}

// EXERCÍCIO 15B
// function retornaArrayOrdenadoPorData(consultas) {
//     let consultasOrdemDatas
    
//     consultasOrdemDatas = consultas.sort((a, b) =>{
//         const splitConsultasA = a.dataDaConsulta.split("/");
//         const diaA = splitConsultasA[0];
//         const mesA = splitConsultasA[1];
//         const anoA = splitConsultasA[2];

//         const splitConsultasB = b.dataDaConsulta.split("/");
//         const diaB = splitConsultasB[0];
//         const mesB = splitConsultasB[1];
//         const anoB = splitConsultasB[2];
        

       
//         if(anoB > anoA)
//         return -1
        
//         if(mesB > mesA) 
//         return -1
        

//         if(diaB > diaA)
//         return -1
        
    
//  }
    
//         )
    
//     return consultasOrdemDatas
// }
function retornaArrayOrdenadoPorData(consultas) {
    
    copiaConsultas = consultas;

    consultas.forEach(pessoa => {
        let dataConsultaSplitted = pessoa.dataDaConsulta.split('/');
        let dataFormat = dataConsultaSplitted[2] + ',' + dataConsultaSplitted[1] + ',' + dataConsultaSplitted[0];
        pessoa.dataDaConsulta = new Date(dataFormat);
    });

    copiaConsultas.sort(function(a, b) {
        return a.dataDaConsulta.getTime() - b.dataDaConsulta.getTime()
    });

    copiaConsultas.forEach(pessoa => {
        pessoa.dataDaConsulta = dataDaConsultaFormatada(pessoa.dataDaConsulta);
    });

    return copiaConsultas;
}

function dataDaConsultaFormatada(data) {
    return retornaDiaFormatado(data) + "/" + retornaMesFormatado(data) + "/" + data.getFullYear();;
}

function retornaDiaFormatado(data) {
    let dia = data.getDate().toString();
    return dia.length == 1
    ? "0" + dia
    : dia
}

function retornaMesFormatado(data) {
    let mes = (data.getMonth() + 1).toString();
    return mes.length == 1
    ? "0" + mes
    : mes
}