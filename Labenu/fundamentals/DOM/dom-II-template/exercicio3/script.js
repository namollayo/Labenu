const alertShift = document.getElementById("mensagem")

const checaCaps = (event) => {
    if (event.shiftKey) { 
       alertShift.innerHTML = "ATENÇĀO: SEGURANDO SHIFT!"
     } else {
        alertShift.innerHTML = ""
     }
}

