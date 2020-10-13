
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
const overlay2 = document.querySelector("#overlay2")
const seguirComprando = document.querySelector(".seguir-comprando")
const subtotal = document.querySelector("#subtotal")
const recargo = document.querySelector("#recargo")
const descuento = document.querySelector("#descuento")
const envio = document.querySelector("#envio")
const total = document.querySelector("#total")
const formasDePago = document.querySelectorAll(".formasDePago")
const efectivo = document.querySelector("#efectivo")
const credito = document.querySelector("#credito")
const envioSiNo = document.querySelector("#envioChecked")
const tarjetaDescuento = document.querySelector("#descuentoChecked")

console.log
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

//CALCULOS DE PRECIO EN CARRITO
let subtotalCompra = Number(subtotal.dataset.precio)

console.log(subtotalCompra)

for (let opcion of formasDePago) {
    opcion.oninput = () => {
        calculototal()
    }
}

let precioRecargo

const cargoTarjeta = () => {
    precioRecargo = subtotalCompra * 0.1
    recargo.textContent = precioRecargo
    return precioRecargo
}

let precioEnvio

const cargoEnvio = () => {
    precioEnvio = 50
    envio.textContent = precioEnvio
    return precioEnvio
}

let precioDescuento

const agregoDescuento = () => {
    precioDescuento = -subtotalCompra * 0.1
    descuento.textContent = precioDescuento
    return precioDescuento
}

const calculototal = () => {
    if (credito.checked) {
        precioRecargo = cargoTarjeta()
    } else {
        precioRecargo = 0
        recargo.textContent = precioRecargo
    }

    if (envioSiNo.checked) {
        precioEnvio = cargoEnvio()

    } else {
        precioEnvio = 0
        envio.textContent = precioEnvio

    }

    if (tarjetaDescuento.checked) {
        precioDescuento = agregoDescuento()
    } else {
        precioDescuento = 0
        descuento.textContent = precioDescuento
    }

    let totalTodo = subtotalCompra + precioEnvio + precioRecargo + precioDescuento
    total.textContent = totalTodo
    return totalTodo
}