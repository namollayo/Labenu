const lista = document.getElementById('lista');

const novoItem = document.createElement('li');
novoItem.innerHTML = 'Item 0'

lista.insertAdjacentElement('afterbegin', novoItem);

const ultimoItem = document.createElement('li');
const texto = document.createTextNode('Item 5');
ultimoItem.appendChild(texto);

lista.appendChild(ultimoItem);

