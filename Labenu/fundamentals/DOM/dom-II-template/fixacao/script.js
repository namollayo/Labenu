
const list = document.getElementById("lista")

const insereItem =(event) => {
    event.preventDefault()
    const newItem = document.createElement("li"); 
    const myInput = document.getElementById("meu-input").value; 
    newItem.innerHTML = myInput
    list.appendChild(newItem)
    // outra forma no lugar de appendChild 
    // list.insertAdjacentElement("beforeend", newItem) 
}

