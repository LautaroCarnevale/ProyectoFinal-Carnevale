//En este canal voy a crear las funciones de aceptar o negar la entrega de camiones.
let logsVerificados = [];
let logsDescargados = [];
let logsEliminados = [];
let errores = [];
let contador = 1;

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




function generarNumeroOrdenado() {
    return contador++;
}

function reiniciarContador() {
    contador = 1;
}

function agregarError(idunico, descripcion) {
    const nuevoError = new Error(idunico, descripcion);
    errores.push(nuevoError);
    crearErrores();
}




function crearErrores() {
    let divErrors = document.getElementById('divErrors');
    divErrors.textContent = "";

    reiniciarContador();

    for (let i = 0; i < errores.length; i++) {
        const error = errores[i];

        const div = document.createElement("div");
        div.className = "error-item";

        const spanIcon = document.createElement("span");
        spanIcon.className = "error-icon";
        spanIcon.textContent = generarNumeroOrdenado().toString();

        const spanDescription = document.createElement("span");
        spanDescription.className = "error-description";
        spanDescription.textContent = error.error;

        div.appendChild(spanIcon);
        div.appendChild(spanDescription);

        divErrors.appendChild(div);


    }
}




function losgErrorEliminadoMalEstado() {
    const indiceSeleccionado = selectorCamiones.selectedIndex;
    const verficarDatosCamion = camiones[indiceSeleccionado];
    let filtercamiones = camiones.filter((el) => el.estado == false)
    const asd2 = filtercamiones.map((el) => el.idunico)
    if (filtercamiones.length >= 1) {
        agregarError("3", `error: El/los camiones con el/los ID únicos ${asd2}, que habían sido verificados, no fueron eliminados del registro a pesar de encontrarse en mal estado.`);
    }
}

function logsErrorDeNoDescarga() {
    const indiceSeleccionado = selectorCamiones.selectedIndex;
    const verficarDatosCamion = camiones[indiceSeleccionado];
    let filtercamiones2 = camiones.filter((el) => el.descargado == false  && el.estado == true)
    const noDescarga = filtercamiones2.map((el) => el.idunico)

    if (filtercamiones2.length >= 1) {
        agregarError("4", `Se detectó que no descargaron los camiones con los identificadores únicos ${noDescarga}, los cuales se encontraban en buenas condiciones para ser descargados.`);
    }
}

botonTerminar.addEventListener('click', () => {
    logsErrorDeNoDescarga();
    losgErrorEliminadoMalEstado();
    let restoVerificadoYcamiones = 10 - logsVerificados.length;
    if (restoVerificadoYcamiones !== 0) {
        agregarError("1", `error: se detecto que no verificaste ${restoVerificadoYcamiones} camiones`);
    }
    eliminarParrafo();
    crearResumen();
    registroCamiones();
    for (let i = 0; i < errores.length; i++) {
        crearErrores();
    }

})