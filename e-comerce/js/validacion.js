const nombre = document.getElementById("name")
const pass = document.getElementById("password")
const form = document.getElementById("form")
let parrafo = document.getElementById("warnings")


form.addEventListener("submit",e=>{
    e.preventDefault()
    let warnings = ""
    let entrar= false
    parrafo=innerHTML=""
    if(nombre.value.length <6){
        warnings += `El nombre no es valido <br>`
        entrar = true
    }
    if(pass.value.length < 8){
        warnings += `La contraseña no es valida <br>`
        entrar = true
    }

    if(entrar){
        parrafo.innerHTML = warnings
    }
})