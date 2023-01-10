const frutas = ["laranja", "limão", "uva"];

const fruit1 = document.getElementById("fruta-1").innerHTML = frutas[0]
const fruit2 = document.getElementById("fruta-2").innerHTML = frutas[1]
const fruit3 = document.getElementById("fruta-3").innerHTML = frutas[2]


function inputAdd() {
    let fruitInput = document.getElementById("fruit").value
    console.log(fruitInput);
}

// const addFruit = () => {
//     let inputAdd = document.getElementById("fruit").value
//     frutas.push(inputAdd)
//     console.log(frutas)
//     document.getElementById("fruta-4").innerHTML = frutas[frutas.length-1]
// }

const addFruit = () => {
    let inputAdd = document.getElementById("fruit").value
    frutas.push(inputAdd)
    document.getElementById("fruta-4").innerHTML = frutas[3]
    if(frutas.length > 4) { 
        addLi()
     }
    console.log(frutas)
}

const addLi = () => {
    document.getElementById("lista-de-frutas")
    .innerHTML += `<li id='fruta-${frutas.length-1}'> ${frutas[frutas.length-1]} </li>`
}
