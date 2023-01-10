const buttonAdd = document.getElementById('container');


const adicionaItem = (event) => {
    event.preventDefault();
    const newItem = document.createElement('article');
    buttonAdd.appendChild(newItem)
    newItem.classList.add("item")
    newItem.setAttribute("onclick", "removeItem(event)")
    
}

removeItem = (event) => {
    event.target.remove()
}