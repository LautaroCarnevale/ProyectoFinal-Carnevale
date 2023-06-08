//En este canal voy a crear las funciones de aceptar o negar la entrega de camiones.
let logsVerificados = [];
let logsDescargados = [];
let logsEliminados = [];
let errores = [];

const botonTerminar = document.getElementById('botonTerminarTanda');
const bodyID = document.getElementById('body2id');

function crearResumen() {
let terminarTanda = document.getElementById('terminarTanda');
terminarTanda.style.display = "block";
}
function eliminarParrafo() {
      let eliminar = document.getElementById("body2id");
      eliminar.parentNode.removeChild(eliminar);
      let tituloBienvenida = document.getElementById('titulo-bienvenida');
      tituloBienvenida.parentNode.removeChild(tituloBienvenida);
  }

  function registroCamiones() {
      camionesAceptadosLogs.innerHTML = logsVerificados.length;
      camionesEliminadosLogs.innerHTML = logsEliminados.length;
      camionesDescargadosLogs.innerHTML = logsDescargados.length;
  } 


  function camionesSinVerificar() {
      const restoVerificadoYcamiones = selectorCamiones.length -  logsVerificados.length;
       if (restoVerificadoYcamiones !== 0 ) {
          //aca poner el registro de error
       } 
  }





botonTerminar.addEventListener('click', () => {
      camionesSinVerificar()
      eliminarParrafo();
      crearResumen();
      registroCamiones();
})