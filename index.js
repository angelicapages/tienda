
//QUERYSELECTORS
const limpiando = document.querySelector("#botonLimpiado")
const filtroBusqueda = document.querySelector("#buscador")
const checkboxes = document.querySelectorAll(".checkboxes")
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
const tarjetas = document.querySelectorAll(".tarjeta")
const categorias = document.querySelectorAll(".categoria")
const cantidadDeProductos = document.querySelector("#cantidad-de-productos")

console.log(cantidadDeProductos)

//BOTON LIMPIADO

const filtrarlimpiado = () => {
    filtroBusqueda.value = " "
    for (let check of checkboxes) {
        check.checked = false
    }

}

limpiando.onclick = () => {
    filtrarlimpiado()
}

//FILTROS

// Pasa filtros TODOS

const pasaFiltrosTodos = (card) => {

    if (pasaFiltrosCheckBox(card) && pasaFiltrosInput(card) && pasaFiltrosCategoria(card)) {
        cambiarCantidadDeProductosMostrados()
        return true
    }
    else {
        return false
    }
}

//Checkboxes PUNTAJE

const hayAlgunCheckBoxChequeado = () => {
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {

            return true
        }
    }

    return false
}

const compararCheckBoxChequeado = (card) => {
    for (let checkbox of checkboxes) {
        if (checkbox.checked) {
            if (checkbox.value === card.dataset.puntaje) {

                return true
            }
        }
    }
    return false
}

const pasaFiltrosCheckBox = (card) => {
    if (hayAlgunCheckBoxChequeado()) {
        if (compararCheckBoxChequeado(card)) {

            return true
        }
        else {
            return false
        }
    }
    else {
        return true
    }
}

const filtrarTarjetasPorCheckbox = () => {
    for (let card of tarjetas) {
        if (pasaFiltrosCheckBox(card) && pasaFiltrosTodos(card)) {
            mostrarTarjeta(card)
        }
        else {
            ocultarTarjeta(card)
        }
    }
}

//checkboxes CATEGORÍA

const hayAlgunaCategoriaChequeada = () => {
    for (let categoria of categorias) {
        if (categoria.checked) {

            return true
        }
    }

    return false
}

const compararCategoriaChequeada = (card) => {
    for (let categoria of categorias) {
        if (categoria.checked) {
            if (categoria.value === card.dataset.categoria) {

                return true
            }
        }
    }
    return false
}

const pasaFiltrosCategoria = (card) => {
    if (hayAlgunaCategoriaChequeada()) {
        if (compararCategoriaChequeada(card)) {

            return true
        }
        else {
            return false
        }
    }
    else {
        return true
    }
}

const filtrarTarjetasPorCategoria = () => {
    for (let card of tarjetas) {
        if (pasaFiltrosCategoria(card) && pasaFiltrosTodos(card)) {
            mostrarTarjeta(card)
        }
        else {
            ocultarTarjeta(card)
        }
    }
}

//Escrito en el input

const hayAlgoEscritoEnElInput = () => {
    if (filtroBusqueda.value) {
        return true
    }
    else {
        return false
    }
}

const compararInputConTarjeta = (card) => {
    if (card.dataset.nombre.includes(filtroBusqueda.value.toLowerCase())) {
        return true
    }
    else {
        return false
    }
}

const pasaFiltrosInput = (card) => {
    if (hayAlgoEscritoEnElInput()) {
        if (compararInputConTarjeta(card)) {
            return true
        }
        else {
            return false
        }
    }
    else {
        return true
    }
}

const filtrarTarjetasPorInput = () => {
    for (let card of tarjetas) {
        if (pasaFiltrosInput(card) && pasaFiltrosTodos(card)) {
            mostrarTarjeta(card)
        }
        else {
            ocultarTarjeta(card)
        }
    }
}

//Cambios de estilado

const ocultarTarjeta = (card) => {
    return card.classList.add("hidden")
}

const mostrarTarjeta = (card) => {
    return card.classList.remove("hidden")
}


//ON INPUT

for (let checkbox of checkboxes) {
    checkbox.oninput = () => {
        filtrarTarjetasPorCheckbox()

    }
}

filtroBusqueda.oninput = () => {
    filtrarTarjetasPorInput()


}

for (let categoria of categorias) {
    categoria.oninput = () => {
        filtrarTarjetasPorCategoria()

    }
}

//MOSTRAR CANTIDAD DE PRODUCTOS SELECCIONADOS

const cambiarCantidadDeProductosMostrados = () => {
    const tarjetasOcultas = document.querySelectorAll(".tarjeta.hidden")
    console.log(tarjetasOcultas.length)
    let cantidad = 12 - tarjetasOcultas.length
        cantidadDeProductos.textContent = "Mostrando" + " " + cantidad + " " + "de 12 productos"

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

//Establezco el precio
let subtotalCompra = Number(subtotal.dataset.precio)

//Cada vez que alguno de los inputs de las opciones de pago es seleccionado, se ejecutará el calculo total
for (let opcion of formasDePago) {
    opcion.oninput = () => {
        calculototal()
    }
}


//cargoTarjeta, donde se hace la cuenta individual
let precioRecargo

const cargoTarjeta = () => {
    precioRecargo = subtotalCompra * 0.1
    recargo.textContent = precioRecargo
    return precioRecargo
}

//precioEnvio, donde se hace la cuenta individual
let precioEnvio

const cargoEnvio = () => {
    precioEnvio = 50
    envio.textContent = precioEnvio
    return precioEnvio
}

//agregoDescuento, donde se hace la cuenta individual
let precioDescuento

const agregoDescuento = () => {
    precioDescuento = -subtotalCompra * 0.1
    descuento.textContent = precioDescuento
    return precioDescuento
}

//Se calcula todo el resultado y se acutalizan los precios de cada input
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
