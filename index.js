const limpiando = document.querySelector("#botonLimpiado")
const buscar = document.querySelector("#buscador")
const checkbox = document.querySelectorAll(".checkboxes")



const filtrarlimpado = () => {
    buscar.value = " "


for (let check of checkbox) {
    console.log (check.checked)
    check.checked = false
    }

}

limpiando.onclick = () => {
    filtrarlimpado()
}


console.log (checkbox)