const email = document.getElementById("email")
const password = document.getElementById("password")
const confirmar_password = document.getElementById("confirmar_password")
const form = document.getElementById("form")
const input = document.getElementById("input")

form.addEventListener("submit", e=>{
    e.preventDefault() 
    let warnings = ""
    let entrar = false

    if(password.value.length < 2){
        alert("La contraseña es demasiado corta")
        entrar = true
    }

    if(entrar)
     parrafo.innerHTML = warnings

     window.location = "Pagina_yeiber.html"
})
