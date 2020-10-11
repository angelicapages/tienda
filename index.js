
//QUERYSELECTORS
const limpiando = document.querySelector("#botonLimpiado")
const buscar = document.querySelector("#buscador")
const checkbox = document.querySelectorAll(".checkboxes")
const cerrarMenuHamburguesa = document.querySelector(".cierre-menu-hamburguesa")
const abrirMenuHamburguesa = document.querySelector(".abrir-menu-hamburguesa")
const overlay = document.querySelector("#overlay")
const menuHamburguesa = document.querySelector("#menu-hamburguesa")
const hidden = document.querySelector(".hidden")
const comprar = document.querySelector(".comprar-carrito")
const checkout = document.querySelector("#menu-hamburguesa2")
const overlay2 =document.querySelector("#overlay2")
const seguirComprando =document.querySelector(".seguir-comprando")


//BOTON LIMPIADO

const filtrarlimpiado = () => {
    buscar.value = " "
    for (let check of checkbox) {
        console.log(check.checked)
        check.checked = false
    }

}

limpiando.onclick = () => {
    filtrarlimpiado()
}

// CERRAR Y ABRIR EL MENU HAMBURGUESA

abrirMenuHamburguesa.onclick = () => {
    menuHamburguesa.classList.remove("hidden")
    overlay.classList.remove("hidden")
}

cerrarMenuHamburguesa.onclick = () => {
    menuHamburguesa.classList.add("hidden")
    overlay.classList.add("hidden")
}

// ABRIR Y CERRAR EL MENU DE CONTADOR DE CARRITO

comprar.onclick = () => {
    checkout.classList.remove("hidden")
    overlay2.classList.remove("hidden")
}

seguirComprando.onclick = () => {
    checkout.classList.add("hidden")
    overlay2.classList.add("hidden")
}