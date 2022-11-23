console.log("-Operadores-");
// Operadores Aritméticos

let saldo
 saldo = 15 + 22.40
 console.log("Total:", saldo);
 saldo = saldo - 12.34
 console.log("Total:", saldo);
 saldo = saldo/3
 console.log("Total:", saldo);
 saldo = saldo * 3.42
 console.log("Total:", saldo);
let resto
resto = saldo % 3
saldo = (saldo-resto)/3 
resto = resto.toFixed(2)

console.log(` Saldo nas 3 contas: ${saldo} \n
Valor para o chiclete: ${resto}
`);

// Operadores Relacionais
// Igual e Diferente === !==

let res = 5 === 5;
console.log("a:",res);

res = 5 !== 5;
console.log("b:",res);

res = 5 !== "5";
console.log("c:",res);

res = "5" === "cinco"
console.log("d:",res);

res = typeof 5 === typeof 20;
console.log("e:",res);

res = typeof "5" === typeof "cinco";
console.log("f:",res);