//En este canal voy a crear las funciones de aceptar o negar la entrega de camiones.

const botonTerminar = document.getElementById('botonTerminarTanda');
const bodyID = document.getElementById('body2id');



function crearResumen() {
let main = document.getElementById('main');
let nuevoDiv = document.createElement("div");
nuevoDiv.className = "body3-resumenTanda";
nuevoDiv.textContent = "test";
main.appendChild(nuevoDiv);
}

function eliminarParrafo() {
      let eliminar = document.getElementById("body2id");
      eliminar.parentNode.removeChild(eliminar);
  }


botonTerminar.addEventListener('click', () => {
      eliminarParrafo()
      crearResumen()   
})