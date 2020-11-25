footer

responsive celular

tarjetas columna

animacion carrito

carrito basura debe ser boton, clickeable 

maquetado carrito inputs 

ver como sobran cosas

Querida Angie, 

Hiciste un gran trabajo. Desde que ingresamos a tu web se nota que pusiste esfuerzo, que te esmeraste en seguir el diseño propuesto y seguir las funcionalidades solicitadas.  

Ire comentando tu trabajo de acuerdo a las consignas propuestas, y al final dejare algunos comentarios sueltos sobre tu codigo en general. Como siempre, la idea es darte las herramientas para que tu trabajo quede mejor aun. 

### Accesibilidad

En general tu sitio es accesible. Utilizas correctamente las etiquetas semanticas, por lo que un lector de pantalla puede orientarse facilmente en tu web, aunque noto algunos divs de mas. Usas bien las etiquetas aria y los atributos "alt" en las imagenes. Ocasionalmente usas divs donde deberia haber botones, como en los tachos de basura del carrito: si queremos que el usuario pueda hacer click alli y que haya un focus, debe ser un boton. 

### Filtros y búsqueda

Tus filtros funcionan a la perfeccion, asi como la funcion que cuenta los productos mostrados. 

No esta lograda la presentacion de las tarjetas como grilla / lista, aunque por lo que veo creo que fue mas falta de tiempo que otra cosa, porque la funcionalidad en JS esta lograda. Falta sentarte en CSS y ver como dejarlo bien. De todos modos creo que hay mucho codigo extra en tus funciones de grilla / lista que no es necesario. 

En esta funcion estas creando una variable como un boton de tu HTML, luego cambias esa variable por un true, luego llamas a una funcion con ese parametro y luego lo retornas. Tu codigo funcionaria igual si lo dejas asi (recorda que no es necesario retornar en un onclick)

```js
verComoGrilla.onclick = () => {
    verComo = true
    cambiandoVerComo(verComo)
}
```

### Carrito

Tu carrito esta muy bien! La maqueta esta muy prolija y siguiendo muy bien las pautas. Con respecto al funcionamiento, todo ok. Se apreciaria alguna animacion en su aparicion, hoy por hoy aparece muy de golpe. 

### Checkout

Falta atencion al maquetado aqui, se ve todo mas desprolijo que el resto de tu web. Por ejemplo nota que el placeholder de tu email no llega a verse entero, y eso es porque le falta width al input. Los tamaños y distancias tampoco respetan tan bien el modelo como en el resto de tu sitio. 

Un detalle molesto es que el signo "$" del total desaparece cuando tu sitio empieza a hacer los calculos de tarjeta de credito, envio, etc.  Podemos agregarle un signo $ aqui:

```js
    total.textContent = '$' + totalTodo
```

### Misc 

Tu HTML esta muy bien en general, al igual que tu CSS. Se aprecia un marcado avance desde el TP anterior. El aspecto visual de tu web es excelente, especialmente en los lugares donde se nota que te esmeraste en que quedara igual al modelo. 

Entiendo que el tiempo no estuvo de tu lado, pero eventualmente valdria la pena que te sentaras a acomodar el responsive. Tu web es absolutamente innavegable desde un celular, y muchisima gente va a ver tu web usandolo. Esta bueno darles una muestra de lo que podes hacer cuando no tenes una fecha de entrega persiguiendote, especialmente si queres agregar este trabajo a un portfolio. 

Menciono la calidad de tu css, prolijo, claro, bien hecho. Se nota muchisimo tu avance y aprendizaje aqui. Lo mismo ocurre con tu Javascript: mas alla de los detalles que te menciono, lo veo muy bien hecho, ordenado, prolijo, con poquisimos errores y con un evidente esfuerzo involucrado.  

### Nota 

Veo relativamente pocos problemas en tu TP, lo que no funcionó se nota que fue por falta de tiempo, y sí veo muchas cosas muy bien resueltas. Tu codigo es prolijo y correcto, y con atencion al detalle. 

Con respecto a los restantes factores de evaluación: 
❌ No cumplido
✔️ Puede mejorar
✅ Cumplido

✅ Respeta la consigna.
✅ Estructura correcta de documento HTML.
✅ Respeta el diseño dado.
✔️ Respeta el funcionamiento.
❌ Responsive funciona correctamente.
✅ Buena estructura de proyecto.
✅ Código bien indentado.
✅ Comentarios que permiten mejorar la legibilidad del código.
✅ Uso correcto de etiquetas semánticas.
✅ Buenos nombres de clases.
✅ Buenos nombres de funciones y variables.
✅ Reutilización de estilos.
✅  Funciones pequeñas.
✅ Commits con mensajes adecuados.
✔️ Cumple con las condiciones de accesibilidad avanzada.

NOTA FINAL: 8
