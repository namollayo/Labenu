

let name = document.getElementById("nome")

// console.log(name.value);

const address = document.getElementById("endereco")

// console.log(address.value);

// const email = document.getElementById("email").value

const email = document.getElementById("email")

// console.log(email);

const cadastro = {
    nome: name.value,
    endereco: address.value,
    email: email.value
}

console.log(cadastro);

const toClean = () => {
    name.value = ""
    address.value = ""
    email.value = ""
}