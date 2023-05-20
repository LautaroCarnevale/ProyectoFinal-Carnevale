//ya se que esto no es parte de las condiciones de lo que piden pero queda lindo.
alert('Hola, lo que encontrarás aquí es una simulación de un control de acceso en un puerto. Tu tarea consistirá en verificar los camiones, eliminando aquellos que no cumplan con los requisitos establecidos (que se detallarán en el proyecto final como un boton). También tendrás la opción de autorizar su descarga en caso de ser necesario, recuerda que los silos tienen un limite')
function alerRol() {
    swal({
        title: 'Se ha detectado la presencia de camiones adicionales esperando en nuestra área de acceso. Por favor, ve y ayúdalos a obtener acceso.',
        icon: 'warning',
    });
}
alerRol();


//puseha los camiones a un array y de ahi los manda al localSotrage
let camiones = [];

const selectorCamiones = document.querySelector('#camionesEspera')
camiones.push(new Camion(1, "22/05/2023", { nombre: "Jhon", apellido: "Martinez", dni: "43.657.332", nacionalidad: "Argentina", sexo: "M" }, "scania", "DEF-7567", "soja", 27500));
camiones.push(new Camion(2, "22/05/2023", { nombre: "Juan", apellido: "González", dni: "23.584.672", nacionalidad: "Peru", sexo: "M", }, "Mercedes-Benz", "HSA-8427", "maiz", 39300));
camiones.push(new Camion(3, "22/05/2023", { nombre: "Miguel", apellido: "Torres", dni: "83.321.484", nacionalidad: "Argentina", sexo: "M" }, "Volvo", "ASD-3298", "sorgo", 28990));
camiones.push(new Camion(4, "22/05/2023", { nombre: "Luis", apellido: "Hernandez", dni: "22.785.652", nacionalidad: "Argentina", sexo: "M" }, "Iveco", "DGA-1778", "soja", 25785));
camiones.push(new Camion(5, "22/05/2023", { nombre: "Sofia", apellido: "Martinez", dni: "32.483.874", nacionalidad: "Argentina", sexo: "F" }, "scania", "KSF-9032", "soja", 30173));
camiones.push(new Camion(6, "22/05/2023", { nombre: "Maria", apellido: "Rodriguez", dni: "39.634.332", nacionalidad: "Argentina", sexo: "F" }, "Iveco", "HJE-4890", "maiz", 27900));
camiones.push(new Camion(7, "22/05/2023", { nombre: "Carlos", apellido: "Ramirez", dni: "13.237.234", nacionalidad: "Argentina", sexo: "M" }, "Mercedes-Benz", "JER-2783", "sorgo", 31360));


camiones.push(new Camion(8, "22/05/2023", { nombre: "Alejandro", apellido: "Lopez", dni: "43.232.742", nacionalidad: "Argentina", sexo: "M" }, "Mercedes-Benz", "DHR-4626", "sorgo", 20360));
camiones.push(new Camion(9, "22/05/2023", { nombre: "Santiago", apellido: "Castro", dni: "64.732.723", nacionalidad: "Argentina", sexo: "M" }, "Iveco", "SAH-6323", "maiz", 25660));
camiones.push(new Camion(10, "22/05/2023", { nombre: "Valentina", apellido: "Martinez", dni: "76.352.733", nacionalidad: "Argentina", sexo: "F" }, "Iveco", "GWH-5257", "soja", 27790));
camiones.push(new Camion(11, "22/05/2023", { nombre: "Gabriel", apellido: "Sanchez", dni: "35.853.754", nacionalidad: "Aregentina", sexo: "M" }, "Volvo", "AGS-2746", "soja", 29060));
camiones.push(new Camion(12, "22/05/2023", { nombre: "Camila", apellido: "Fernandez", dni: "56.341.451", nacionalidad: "Brasil", sexo: "F" }, "Volvo", "JSE-7522", "maiz", 28860));





localStorage.setItem('camiones', JSON.stringify(camiones));

document.addEventListener('DOMContentLoaded', () => {
    camiones = JSON.parse(localStorage.getItem('camiones'));
    popularDropDown();
});


//manda los datos de los camiones a un DropDown
function popularDropDown() {
    camiones.forEach((Camion) => {
        const option = document.createElement('option');
        option.textContent = `camion ${Camion.idunico}: Nombre Completo: ${Camion.identificacion.nombre} ${Camion.identificacion.apellido}, Carga: ${Camion.carga}...`
        option.value = camiones.indexOf(Camion);
        selectorCamiones.appendChild(option);
    })
    mostrarDatosDeCamion();
}

selectorCamiones.addEventListener('change', mostrarDatosDeCamion);

//muestra los datos del camion en el html
function mostrarDatosDeCamion() {
    const numerDeCamion = selectorCamiones.value;
    const datosCamion = camiones[numerDeCamion];
    datosDeRegistro.innerHTML = `<div class="datos-de-registro">
  <p><span class="datos-de-registro-nombre">Id único por camión:</span> <span class="datos-de-registro-valor">${datosCamion.idunico}</span></p>
  <p><span class="datos-de-registro-nombre">Fecha de ingreso:</span> <span class="datos-de-registro-valor">${datosCamion.fecha}</span></p>
  <p><span class="datos-de-registro-nombre">Datos del Chofer:</span></p>
  <hr>
  <p><span class="datos-de-registro-nombre">Nombre:</span> <span class="datos-de-registro-valor">${datosCamion.identificacion.nombre}</span></p>
  <p><span class="datos-de-registro-nombre">Apellido:</span> <span class="datos-de-registro-valor">${datosCamion.identificacion.apellido}</span></p>
  <p><span class="datos-de-registro-nombre">Dni:</span> <span class="datos-de-registro-valor">${datosCamion.identificacion.dni}</span></p>
  <p><span class="datos-de-registro-nombre">Nacionalidad:</span> <span class="datos-de-registro-valor">${datosCamion.identificacion.nacionalidad}</span></p>
  <p><span class="datos-de-registro-nombre">Sexo: </span><span class="datos-de-registro-valor">${datosCamion.identificacion.sexo}</span></p>
  <hr>
  <p><span class="datos-de-registro-nombre">Marca del camión:</span> <span class="datos-de-registro-valor">${datosCamion.marca}</span></p>
  <p><span class="datos-de-registro-nombre">Patente: </span><span class="datos-de-registro-valor">${datosCamion.patente}</span></p>
  <p><span class="datos-de-registro-nombre">Cereal: </span><span class="datos-de-registro-valor">${datosCamion.carga}</span></p>
  <p><span class="datos-de-registro-nombre">Peso: </span><span class="datos-de-registro-valor datos-de-registro-peso">${datosCamion.peso}Kg</span></p>
</div>`;
}


//boton de verificar
const botonVerificar = document.getElementById('boton-verificar')

// escucha los click del boton verificar y si le da click verifica que los camiones sean correctos.
botonVerificar.addEventListener('click', () => {
    const numerDeCamion = selectorCamiones.value;
    const verficarDatosCamion = camiones[numerDeCamion];

    const consolaVerificar = document.getElementById('consola-verificar')
    let verificarDatosDeConsola = true;
    let mensajesDeError = [];

    function verificarNacionalidad() {
        if (verficarDatosCamion.identificacion.nacionalidad !== 'Argentina') {
            mensajesDeError.push(`❌ | Parece que hay un problema con la nacionalidad de la persona en cuestión. De acuerdo con los datos proporcionados, no es de Argentina, sino de ${verficarDatosCamion.identificacion.nacionalidad}. En este caso, lo más recomendable sería rechazarle la entrada.`);
            verificarDatosDeConsola = false;
        }
    }

    function verificarPeso() {
        if (verficarDatosCamion.peso > 30000) {
            mensajesDeError.push(`❌ | Parece que hay un problema con el peso del camión. Según los datos proporcionados, el vehículo ha superado el límite de 30000 kg y tiene un peso de ${verficarDatosCamion.peso} kg. En este caso, lo más recomendable sería rechazar la entrada del camión.`);
            verificarDatosDeConsola = false;
        }
    }

    verificarNacionalidad();
    verificarPeso();

    if (verificarDatosDeConsola) {
        consolaVerificar.innerHTML = `✅| Todo está en orden`;
        setTimeout(function() {
            consolaVerificar.innerHTML = "";
          }, 2000);
    } else {
        consolaVerificar.innerHTML = mensajesDeError.join(`<br>`);
    }
});




// "borra" del localSotrage al la seleccion que este en ese momento en el select 
function deleteItemlocal() {
    let miSelect = document.getElementById("camionesEspera");
    let todosLosCamiones = JSON.parse(localStorage.getItem("camiones"));
    let valorSeleccionado = parseInt(miSelect.value) + 1;
    todosLosCamiones = todosLosCamiones.filter((camion) => camion.idunico !== valorSeleccionado);
    localStorage.setItem("camiones", JSON.stringify(todosLosCamiones));
}

// saca del html la selecion que este en el select en ese momento
function removeDropDown() {
    const indiceSeleccionado = selectorCamiones.selectedIndex;
    selectorCamiones.options[indiceSeleccionado].remove();
}


//boton para ejecutar la eliminaciones del localSotrage y del html
const botonEliminar = document.getElementById('boton-eliminar');

botonEliminar.addEventListener('click', () => {
    deleteItemlocal();
    removeDropDown();
    const consolaEliminar = document.getElementById('consola-eliminar');
    consolaEliminar.innerHTML = '✅| Se eliminó correctamente el camión de la lista de espera.';
    setTimeout(function() {
        consolaEliminar.innerHTML = "";
      }, 3500);

});

























