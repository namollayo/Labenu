const pValue = document.getElementById("paragrafo")
console.log(pValue.innerHTML);

let inputElement = document.getElementById("texto")

function changeInput () {
    console.log(inputElement.value);
}

const changeP = () => {
    pValue.innerHTML = inputElement.value
    console.log("valor de P:", pValue.innerHTML);
}