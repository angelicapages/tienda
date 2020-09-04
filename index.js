const limpiando = document.querySelector ("#botonLimpiado")
const buscar = document.querySelector ("#buscador")
limpiando.onclick = () => {
    filtrarlimpado()
}

const filtrarlimpado = () => {
    buscar.value = " "
}