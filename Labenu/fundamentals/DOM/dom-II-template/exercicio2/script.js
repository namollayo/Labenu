const passwordInput = document.getElementById('password');
const darkMode = document.querySelector(".light");
const buttonSenha = document.getElementById("senha");
const buttonModo = document.getElementById("modo");

const escondeSenha = (event) => {
    event.preventDefault();
    if (passwordInput.getAttribute("type") !== "password") {
      passwordInput.setAttribute("type", "password");
      buttonSenha.innerHTML = "mostrar senha";
    } else {
      passwordInput.setAttribute("type", "text");
      buttonSenha.innerHTML = "esconder senha";
    }
}

const changeDarkMode = (event) => {
    event.preventDefault()
    if (darkMode === document.querySelector(".light")) {
        darkMode.classList.remove("light")
        darkMode.classList.add("dark")
        buttonModo.innerHTML = "Light Mode"
    } else {
        darkMode.classList.remove("dark")
        darkMode.classList.add("light")
        buttonModo.innerHTML = "Dark Mode"
    }
}