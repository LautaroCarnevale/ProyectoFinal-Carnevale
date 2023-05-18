
let todoOk = true;

let siloSoja = [];
let siloMaiz = [];
let siloSorgo = [];
let sumaSoja = 0;
let sumaMaiz = 0;
let sumaSorgo = 0;
const selectorCamiones2 = document.querySelector('#camionesEspera')

function obtenerDatosDelPeso() {
    let miSelect = document.getElementById("camionesEspera");
    let todosLosCamiones = JSON.parse(localStorage.getItem("camiones"));
    let valorSeleccionado = parseInt(miSelect.value);
    const verficarDatosCamion = camiones[valorSeleccionado];
    console.log(verficarDatosCamion.peso)
}

function obtenerDatosDeLaCarga() {
    let miSelect = document.getElementById("camionesEspera");
    let todosLosCamiones = JSON.parse(localStorage.getItem("camiones"));
    let valorSeleccionado = parseInt(miSelect.value);
    const verficarDatosCamion = camiones[valorSeleccionado];
    console.log(verficarDatosCamion.carga)
}

function removePeso() {

}


function elimiarDatosDelPeso() {
    // Obtiene el valor seleccionado del select
    let miSelect = document.getElementById("camionesEspera");
    let valorSeleccionado = parseInt(miSelect.value) + 1;
    let todosLosCamiones = JSON.parse(localStorage.getItem("camiones"));

    todosLosCamiones.forEach((camion) => {
        if (camion.idunico === valorSeleccionado) {
            camion.peso = 0;
        }
    });
    localStorage.setItem("camiones", JSON.stringify(todosLosCamiones));
    agregarDatosASilos();
    mostrarConsolaDescargar();
    removePeso();
}


function agregarDatosASilos() {
    let miSelect = document.getElementById("camionesEspera");
    let valorSeleccionado = parseInt(miSelect.value);
    const verficarDatosCamion = camiones[valorSeleccionado];


    if (verficarDatosCamion.carga == 'soja' && siloSoja < 90000) {
        siloSoja.push(verficarDatosCamion.peso);

        for (let i = 0; i < siloSoja.length; i++) {
            sumaSoja += siloSoja[i];
        }
        
        cargaSiloSoja.innerHTML = (sumaSoja);

    } else if (verficarDatosCamion.carga == 'maiz' && siloMaiz < 90000) {
        siloMaiz.push(verficarDatosCamion.peso);

        for (let i = 0; i < siloMaiz.length; i++) {
            sumaMaiz += siloMaiz[i];
        }

        cargaSiloMaiz.innerHTML = (sumaMaiz);

    } else if (verficarDatosCamion.carga == 'sorgo' && siloSorgo < 90000) {
        siloSorgo.push(verficarDatosCamion.peso);

        for (let i = 0; i < siloSorgo.length; i++) {
            sumaSorgo += siloSorgo[i];
        }

        cargaSiloSorgo.innerHTML = (sumaSorgo);
    } else {
        todoOk = false;
    }
}


function mostrarConsolaDescargar() {
    const consolaDescargar = document.getElementById('consola-descargar')
    if (todoOk) {
        consolaDescargar.innerHTML = ('✅| Camion descargado correctamente')
        setTimeout(function() {
            consolaDescargar.innerHTML = "";
          }, 2000);
    } else {
        consolaDescargar.innerHTML = ('X| algo paso che')
    }

}



const botonDescargar = document.getElementById('boton-descargar')

botonDescargar.addEventListener('click', () => {
    elimiarDatosDelPeso();
});

