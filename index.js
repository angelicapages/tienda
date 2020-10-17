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
const vaciar = document.querySelector(".vaciar-carrito")
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
const subtotalCarrito = document.querySelector(".subtotal-carrito")
const precioDeCadaProductoCarrito = document.querySelectorAll(".precioCarritoProducto")
const advertenciaCarrito = document.querySelector("#advertencia-carrito")
const vaciarCarrito = document.querySelector(".vaciar-carrito-seguro")
const cancelarVaciar = document.querySelector(".cancelar-vaciar")
let verComoGrilla = document.querySelector("#boton-vercomo-grilla")
let verComoLista = document.querySelector("#boton-vercomo-lista")
const productoTodo = document.querySelector("#producto-todo")
const textoDescripcion = document.querySelectorAll(".texto-producto")
let descripcionProducto = document.querySelectorAll(".descripcion-producto-tarjeta")
let imagenesProductoLista = document.querySelectorAll(".imagen-de-producto")


//BOTON LIMPIADO

const filtrarlimpiado = () => {
    filtroBusqueda.value = " "
    for (let check of checkboxes) {
        check.checked = false
    }
    for (let categoria of categorias) {
        categoria.checked = false
    }
    for (let card of tarjetas) {
        card.classList.remove("hidden")
    }
    cambiarCantidadDeProductosMostrados()
}

limpiando.onclick = () => {
    filtrarlimpiado()
}

//FILTROS

// Pasa filtros TODOS

const pasaFiltrosTodos = (card) => {

    if (pasaFiltrosCheckBox(card) && pasaFiltrosInput(card) && pasaFiltrosCategoria(card)) {

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
        cambiarCantidadDeProductosMostrados()
    }
}

filtroBusqueda.oninput = () => {
    filtrarTarjetasPorInput()
    cambiarCantidadDeProductosMostrados()

}

for (let categoria of categorias) {
    categoria.oninput = () => {
        filtrarTarjetasPorCategoria()
        cambiarCantidadDeProductosMostrados()
    }
}

//MOSTRAR CANTIDAD DE PRODUCTOS SELECCIONADOS

const cambiarCantidadDeProductosMostrados = () => {
    const tarjetasOcultas = document.querySelectorAll(".tarjeta.hidden")
    let cantidad = 12 - tarjetasOcultas.length
    cantidadDeProductos.textContent = "Mostrando" + " " + cantidad + " " + "de 12 productos"
}

//VER COMO GRILLA

const cambiandoVerComo = (verComo) => {
    if (verComo == false) {
        productoTodo.classList.remove("productos")
        productoTodo.classList.add("producto-lista")
        for (let imagenLista of imagenesProductoLista) {
            imagenLista.classList.remove("imagen-de-productos")
        }
        for (let texto of textoDescripcion) {
            texto.classList.remove("hidden")
            texto.classList.add("texto-producto")
        }
    }
    else if (verComo == true) {
        productoTodo.classList.remove("producto-lista")
        productoTodo.classList.add("productos")
        for (let imagenLista of imagenesProductoLista) {
            imagenLista.classList.add("imagen-de-productos")
        }

        for (let texto of textoDescripcion) {
            texto.classList.add("hidden")
            texto.classList.remove("texto-producto")
        }
    }
}

verComoGrilla.onclick = () => {

    let verComo = verComoGrilla
    verComo = true
    cambiandoVerComo(verComo)
    return verComo
}

verComoLista.onclick = () => {
    let verComo = verComoGrilla
    verComo = false
    cambiandoVerComo(verComo)
    return verComo
}

let verComo = verComoGrilla
verComo = true
cambiandoVerComo(verComo = true)
//MOSTRAR EN CARRITO EL SUBTOTAL


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

//ABRIR Y CERRAR VACIAR EL CARRITO

vaciar.onclick = () => {
    advertenciaCarrito.classList.remove("hidden")
    overlay2.classList.remove("hidden")
}

cancelarVaciar.onclick = () => {
    advertenciaCarrito.classList.add("hidden")
    overlay2.classList.add("hidden")

}

vaciarCarrito.onclick = () => {
    advertenciaCarrito.classList.add("hidden")
    overlay2.classList.add("hidden")
    overlay.classList.add("hidden")
    menuHamburguesa.classList.add("hidden")
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
