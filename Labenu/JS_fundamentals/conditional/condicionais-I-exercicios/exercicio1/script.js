// const num = 32132132//seu numero aqui
const num = Number(prompt("Give me a number."))

function isEven(num) {
    let phrase 
    if(num % 2 === 0) {
        phrase = "The number is Even.";
    } else {
        phrase = "The number is Odd."
    }
    return phrase
}

console.log(isEven(num))