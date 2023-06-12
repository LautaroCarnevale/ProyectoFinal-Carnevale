// alert('Hola, lo que encontrarás aquí es una simulación de un control de acceso en un puerto. Tu tarea consistirá en verificar los camiones, eliminando aquellos que no cumplan con los requisitos establecidos (que se detallarán en el proyecto final como un boton). También tendrás la opción de autorizar su descarga en caso de ser necesario, recuerda que los silos tienen un limite')
// function alerRol() {
//     swal({
//         title: 'Se ha detectado la presencia una tanda de camiones adicionales esperando en nuestra área de acceso. Por favor, ve y ayúdalos a obtener acceso, al terminar, toca el boton de terminar tanda y veras un resumen de tu trabajo',
//         icon: 'warning',    
//     });
// }
// alerRol();
let camiones = [];
let requisitos = false;

//genera un numero aleotrio entre el 0 y el 18(en el codigo y contexto si la humedad supera 15% no puede igresar )
function generarNumero() {
  return Math.floor(Math.random() * 19);
}

const selectorCamiones = document.querySelector('#camionesEspera')

document.addEventListener('DOMContentLoaded', () => {
  fetch('./camiones.json')
    .then(response => response.json())
    .then(camionesData => {
      camionesData.forEach(producto => {
        camiones.push(producto);
      });
      popularDropDown();

    })
    .catch(error => {
      console.error('Error al cargar el archivo JSON:', error);
    });
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
  const datosCamion = camiones.find((camion) => camion.idunico === parseInt(numerDeCamion));
  if (datosCamion) {
    datosDeRegistro.innerHTML = `<div class="datos-de-registro">
  <p><span class="datos-de-registro-nombre">Id único por camión:</span> <span class="datos-de-registro-valor">${datosCamion.idunico}</span></p>
  <p><span class="datos-de-registro-nombre">Fecha de ingreso:</span> <span class="datos-de-registro-valor">${datosCamion.fecha}</span></p>
  <hr>
  <p><span class="datos-de-registro-nombre">Datos del Chofer:</span></p>
  <hr>
  <p><span class="datos-de-registro-nombre">Nombre:</span> <span class="datos-de-registro-valor">${datosCamion.identificacion.nombre}</span></p>
  <p><span class="datos-de-registro-nombre">Apellido:</span> <span class="datos-de-registro-valor">${datosCamion.identificacion.apellido}</span></p>
  <p><span class="datos-de-registro-nombre">Dni:</span> <span class="datos-de-registro-valor">${datosCamion.identificacion.dni}</span></p>
  <p><span class="datos-de-registro-nombre">Nacionalidad:</span> <span class="datos-de-registro-valor">${datosCamion.identificacion.nacionalidad}</span></p>
  <p><span class="datos-de-registro-nombre">Sexo: </span><span class="datos-de-registro-valor">${datosCamion.identificacion.sexo}</span></p>
  <hr>
  <p><span class="datos-de-registro-nombre">Datos de la carga:</span></p>
  <hr>
  <p><span class="datos-de-registro-nombre">Humedad:</span> <span class="datos-de-registro-valor">${datosCamion.datoscarga.humaedad}%</span></p>
  <p><span class="datos-de-registro-nombre">Bichos:</span> <span class="datos-de-registro-valor">${datosCamion.datoscarga.bichos}%</span></p>
  <p><span class="datos-de-registro-nombre">Insecticida:</span> <span class="datos-de-registro-valor">${datosCamion.datoscarga.insecticida}%</span></p>
  <p><span class="datos-de-registro-nombre">Impurezas:</span> <span class="datos-de-registro-valor">${datosCamion.datoscarga.impurezas}%</span></p>
  <hr>
  <p><span class="datos-de-registro-nombre">Marca del camión:</span> <span class="datos-de-registro-valor">${datosCamion.marca}</span></p>
  <p><span class="datos-de-registro-nombre">Patente: </span><span class="datos-de-registro-valor">${datosCamion.patente}</span></p>
  <p><span class="datos-de-registro-nombre">Cereal: </span><span class="datos-de-registro-valor">${datosCamion.carga}</span></p>
  <p><span class="datos-de-registro-nombre">Peso: </span><span class="datos-de-registro-valor datos-de-registro-peso">${datosCamion.peso}Kg</span></p>
</div>`;
  }
}


//boton de verificar
const botonVerificar = document.getElementById('boton-verificar')


// escucha los click del boton verificar y si le da click verifica que los camiones sean correctos.
botonVerificar.addEventListener('click', () => {


  const indiceSeleccionado = selectorCamiones.selectedIndex;
  const verficarDatosCamion = camiones[indiceSeleccionado];



  const consolaVerificar = document.getElementById('consola-verificar')
  let verificarDatosDeConsola = true;
  let mensajesDeError = [];

  function verificarNacionalidad() {
    if (verficarDatosCamion.identificacion.nacionalidad !== 'Argentina') {
      mensajesDeError.push(`❌ | Parece que hay un problema con la nacionalidad de la persona en cuestión. De acuerdo con los datos proporcionados, no es de Argentina, sino de ${verficarDatosCamion.identificacion.nacionalidad}. En este caso, lo más recomendable sería rechazarle la entrada.`);
      verificarDatosDeConsola = false;
      verficarDatosCamion.estado = false;
    }
  }

  function verificarHumedad() {
    if (verficarDatosCamion.datoscarga.humaedad > 16) {
      mensajesDeError.push(`❌ | Parece que hay un problema con la humedad del la carga, supera el 16%, lo cual no se permite como dicen los requisitos.`);
      verificarDatosDeConsola = false;
      verficarDatosCamion.estado = false;
    }
  }
  function verificarBichos() {
    if (verficarDatosCamion.datoscarga.bichos > 16) {
      mensajesDeError.push(`❌ | Parece que hay un problema con la cantidad de bichos del la carga, supera el 16%, lo cual no se permite como dicen los requisitos.`);
      verificarDatosDeConsola = false;
      verficarDatosCamion.estado = false;
    }
  }
  function verificarInsecticida() {
    if (verficarDatosCamion.datoscarga.insecticida > 16) {
      mensajesDeError.push(`❌ | Parece que hay un problema con la cantidad de insecticida del la carga, supera el 16%, lo cual no se permite como dicen los requisitos.`);
      verificarDatosDeConsola = false;
      verficarDatosCamion.estado = false;
    }
  }
  function verificarImpurezas() {
    if (verficarDatosCamion.datoscarga.impurezas > 16) {
      mensajesDeError.push(`❌ | Parece que hay un problema con la cantidad de impurezas que hay en la carga, supera el 16%, lo cual no se permite como dicen los requisitos.`);
      verificarDatosDeConsola = false;
      verficarDatosCamion.estado = false;
    }
  }
  function verificarPeso() {
    if (verficarDatosCamion.peso > 30000) {
      mensajesDeError.push(`❌ | Parece que hay un problema con el peso del camión. Según los datos proporcionados, el vehículo ha superado el límite de 30000 kg y tiene un peso de ${verficarDatosCamion.peso} kg. En este caso, lo más recomendable sería rechazar la entrada del camión.`);
      verificarDatosDeConsola = false;
      verficarDatosCamion.estado = false;
    }
  }

  verificarNacionalidad();
  verificarHumedad();
  verificarBichos();
  verificarInsecticida();
  verificarImpurezas();
  verificarPeso();

  if (verificarDatosDeConsola) {
    consolaVerificar.innerHTML = `✅| Todo está en orden`;
    setTimeout(function () {
      consolaVerificar.innerHTML = "";
    }, 2000);

  } else {
    consolaVerificar.innerHTML = mensajesDeError.join(`<br>`);
  }


  if (verficarDatosCamion.verificado === false) {

    logsVerificados.push(logsVerificados.length);
    verficarDatosCamion.verificado = true;
  }




});


function deleteItemlocal() {

  let miSelect = document.getElementById("camionesEspera");
  let valorSeleccionado = parseInt(miSelect.value);

  camiones = camiones.filter((camion) => {
    if (camion.idunico === valorSeleccionado && camion.eliminado === false) {
      logsEliminados.push(logsEliminados.length);
      camion.eliminado = true;
    }
    return camion.idunico !== valorSeleccionado;
  });
}


function logsErrorEliminacion() {
  let miSelect = document.getElementById("camionesEspera");
  let valorSeleccionado = parseInt(miSelect.value);
  const indiceSeleccionado = selectorCamiones.selectedIndex;
  const verficarDatosCamion = camiones[indiceSeleccionado];
  if (verficarDatosCamion.estado == true) {
    agregarError("0", `Se detectó que eliminaste el camión con el identificador único ${valorSeleccionado}, el cual se encontraba en óptimas condiciones.`);
  }
}





// saca del html la selecion que este en el select en ese momento
function removeDropDown() {
  const indiceSeleccionado = selectorCamiones.selectedIndex;
  selectorCamiones.options[indiceSeleccionado].remove();
}

//boton para ejecutar la eliminaciones del localSotrage y del html
const botonEliminar = document.getElementById('boton-eliminar');

botonEliminar.addEventListener('click', () => {
  logsErrorEliminacion();
  const consolaEliminar = document.getElementById('consola-eliminar');
  consolaEliminar.innerHTML = '✅| Se eliminó correctamente el camión de la lista de espera.';
  setTimeout(function () {
    consolaEliminar.innerHTML = "";
  }, 3500);
  deleteItemlocal();
  removeDropDown();
});




const botonRequisitos = document.getElementById('boton-Requisitos')
const agregarRequsito = document.getElementById('agregarRequisito')
const datosDeRegistro = document.getElementById('datosDeRegistro')

function animacionRequisitos() {
  const divRequisitosID = document.getElementById('divRequisitosID');
  const datosDeRegistro = document.getElementById('datosDeRegistro');

  if (requisitos === false) {
    divRequisitosID.classList.remove('slide-right', 'slide-left2');
    datosDeRegistro.classList.remove('slide-left', 'slide-right2');

    divRequisitosID.classList.add('slide-right');
    datosDeRegistro.classList.add('slide-left');

    requisitos = true;
  } else if (requisitos === true) {
    divRequisitosID.classList.remove('slide-right', 'slide-left2');
    datosDeRegistro.classList.remove('slide-left', 'slide-right2');

    divRequisitosID.classList.add('slide-left2');
    datosDeRegistro.classList.add('slide-right2');

    requisitos = false;
  }
}


botonRequisitos.addEventListener('click', () => {
  animacionRequisitos();
})

























