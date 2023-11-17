// Botón para Subir Arriba
// -------------------------------

// Busca un elemento con el ID "arriba" y lo almacena en la variable "arriba", quiere decir que lo guarda en la memoria de la compu.
const arriba = document.querySelector("#arriba")
// Agrega un "escuchador de eventos" que espera a que hagas clic en el botón.
arriba.addEventListener("click", () => {
    // Hace que la ventana (nuestra pág) se desplace a la posición vertical 0, nos lleva al inicio de la página.
    window.scrollTo(0, 0);
});

// Busca nuevamente el elemento con el ID "arriba" y lo almacena en la variable "buttonUp".
buttonUp = document.getElementById("arriba");

// Agrega una función que se ejecuta cada vez que ocurre un desplazamiento (scroll) en la página.
window.onscroll = function() {
    // Obtiene la cantidad de desplazamiento vertical de la página y lo almacena en la variable "scroll".
    var scroll = document.documentElement.scrollTop;

    // Si el desplazamiento es mayor a 500 píxeles...
    if (scroll > 500) {
        // Cambia el tamaño (escala) del botón para que haga el efecto de aparecer al llegar a los 500px.
        buttonUp.style.transform = "scale(1)";
    } else if (scroll < 500) {
        // Si el desplazamiento es menor a 500 píxeles, cambia el tamaño del botón para hacerlo pequeño e invisible.
        buttonUp.style.transform = "scale(0)";
    }
}
