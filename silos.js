

let todoOk = true;
let siloSoja = [];
let siloMaiz = [];
let siloSorgo = [];
let sumaSoja = 0;
let sumaMaiz = 0;
let sumaSorgo = 0;

const selectorCamiones2 = document.querySelector('#camionesEspera')


// elimina los datos del peso del localSotrage
function elimiarDatosDelPeso() {
    const indiceSeleccionado = selectorCamiones.selectedIndex;
    const camionSeleccionado = camiones[indiceSeleccionado];
    camionSeleccionado.peso = 0;
    mostrarDatosDeCamion();
}

//obtiene los datos del select le saca el peso verifica que no supere al silo y lo muestra
function agregarDatosASilos() {
    const indiceSeleccionado = selectorCamiones.selectedIndex;
    const verficarDatosCamion = camiones[indiceSeleccionado];
    if (verficarDatosCamion.carga == 'soja') {
        const limiteRestante = 90000 - sumaSoja;
        if (verficarDatosCamion.peso <= limiteRestante) {
            siloSoja.push(verficarDatosCamion.peso);

            sumaSoja = 0;
            for (let i = 0; i < siloSoja.length; i++) {
                sumaSoja += siloSoja[i];
            }

            cargaSiloSoja.innerHTML = sumaSoja;
            elimiarDatosDelPeso();
            if (verficarDatosCamion.descargado === false) {

                logsDescargados.push(logsDescargados.length);
                verficarDatosCamion.descargado = true;
            }
            todoOk = true;
        } else {
            todoOk = false;
        }
    } else if (verficarDatosCamion.carga == 'maiz') {
        const limiteRestante = 90000 - sumaMaiz;
        if (verficarDatosCamion.peso <= limiteRestante) {
            siloMaiz.push(verficarDatosCamion.peso);

            sumaMaiz = 0;
            for (let i = 0; i < siloMaiz.length; i++) {
                sumaMaiz += siloMaiz[i];
            }

            cargaSiloMaiz.innerHTML = sumaMaiz;
            elimiarDatosDelPeso();
            if (verficarDatosCamion.descargado === false) {

                logsDescargados.push(logsDescargados.length);
                verficarDatosCamion.descargado = true;
            }
            todoOk = true;
        } else {
            todoOk = false;
        }
    } else if (verficarDatosCamion.carga == 'sorgo') {
        const limiteRestante = 90000 - sumaSorgo;
        if (verficarDatosCamion.peso <= limiteRestante) {
            siloSorgo.push(verficarDatosCamion.peso);

            sumaSorgo = 0;
            for (let i = 0; i < siloSorgo.length; i++) {
                sumaSorgo += siloSorgo[i];
            }

            cargaSiloSorgo.innerHTML = sumaSorgo;
            elimiarDatosDelPeso();
            if (verficarDatosCamion.descargado === false) {

                logsDescargados.push(logsDescargados.length);
                verficarDatosCamion.descargado = true;
            }
            todoOk = true;
        } else {
            todoOk = false;
        }
    } else {
        alert('algo anda mal')
        todoOk = false;
    }
}

//Muestra en la consola(del html) si todo fue correcto o no
function mostrarConsolaDescargar() {
    const consolaDescargar = document.getElementById('consola-descargar')
    if (todoOk) {
        consolaDescargar.innerHTML = ('✅| Camión descargado correctamente')
        setTimeout(function () {
            consolaDescargar.innerHTML = "";
        }, 2000);
    } else {
        consolaDescargar.innerHTML = ('❌ | El silo está lleno, rechaza al camión.')
        setTimeout(function () {
            consolaDescargar.innerHTML = "";
        }, 2500);
    }

}

function logsErrorDescarga() {
    let miSelect = document.getElementById("camionesEspera");
    let valorSeleccionado = parseInt(miSelect.value);
    const indiceSeleccionado = selectorCamiones.selectedIndex;
    const verficarDatosCamion = camiones[indiceSeleccionado];
    if (verficarDatosCamion.estado == false) {
      agregarError("0", `Se detectó que descargaste el camión con el identificador único ${valorSeleccionado}, el cual se encontraba en malas condiciones para ser descargado.`);
    }
  }



//llamar al boton
const botonDescargar = document.getElementById('boton-descargar')
botonDescargar.addEventListener('click', () => {
    agregarDatosASilos();
    mostrarConsolaDescargar();
    logsErrorDescarga(); 
    logsErrorDeNoDescarga();
});

