//En este canal voy a crear las funciones de aceptar o negar la entrega de camiones.

const botonTerminar = document.getElementById('botonTerminarTanda');
const bodyID = document.getElementById('body2id');





function crearResumen() {
let main = document.getElementById('main');
let terminarTanda = document.getElementById('terminarTanda');

terminarTanda.style.display = "block";

}

function eliminarParrafo() {
      let eliminar = document.getElementById("body2id");
      eliminar.parentNode.removeChild(eliminar);
      let tituloBienvenida = document.getElementById('titulo-bienvenida');
      tituloBienvenida.parentNode.removeChild(tituloBienvenida)
  }


botonTerminar.addEventListener('click', () => {
      eliminarParrafo()
      crearResumen()   
})