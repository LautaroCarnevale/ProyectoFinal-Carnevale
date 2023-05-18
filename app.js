//ya se que esto no es parte de las condiciones de lo que piden pero queda lindo.
// function alerRol() {
//     swal({
//         title: 'Se han detectado camiones adicionales esperando en nuestra área de acceso',
//         icon: 'warning',
//     });
// }
// alerRol();


let camiones = [];
const selectorCamiones = document.querySelector('#camionesEspera')

camiones.push(new Camion(1, "11/05/2023", { nombre: "Jhon", apellido: "Martinez", dni: "43.657.332", nacionalidad: "Argentina", sexo: "M" }, "scania", "DEF-7567", "soja", 27500));
camiones.push(new Camion(2, "11/05/2023", { nombre: "Juan", apellido: "González", dni: "23.584.672", nacionalidad: "Peru", sexo: "M", }, "Mercedes-Benz", "HSA-8427", "maiz", 39300));
camiones.push(new Camion(3, "11/05/2023", { nombre: "Miguel", apellido: "Torres", dni: "83.321.484", nacionalidad: "Argentina", sexo: "M" }, "Volvo", "ASD-3298", "sorgo", 28990));
camiones.push(new Camion(4, "11/05/2023", { nombre: "Luis", apellido: "Hernandez", dni: "22.785.652", nacionalidad: "Argentina", sexo: "M" }, "Iveco", "DGA-1778", "soja", 25785));
camiones.push(new Camion(5, "11/05/2023", { nombre: "Sofia", apellido: "Martinez", dni: "32.483.874", nacionalidad: "Argentina", sexo: "F" }, "scania", "KSF-9032", "soja", 30173));
camiones.push(new Camion(6, "11/05/2023", { nombre: "Maria", apellido: "Rodriguez", dni: "39.634.332", nacionalidad: "Argentina", sexo: "F" }, "Iveco", "HJE-4890", "maiz", 27900));
camiones.push(new Camion(7, "11/05/2023", { nombre: "Carlos", apellido: "Ramirez", dni: "13.237.234", nacionalidad: "Argentina", sexo: "M" }, "Mercedes-Benz", "JER-2783", "sorgo", 31360));


localStorage.setItem('camiones', JSON.stringify(camiones));

document.addEventListener('DOMContentLoaded', () => {
    camiones = JSON.parse(localStorage.getItem('camiones'));
    popularDropDown();
});

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
  <p><span class="datos-de-registro-nombre">Peso: </span><span class="datos-de-registro-valor">${datosCamion.peso}Kg</span></p>
</div>`;
}


const botonVerificar = document.getElementById('boton-verificar')

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
        consolaVerificar.innerHTML = `✅| Todo esta en orden`;
        setTimeout(function() {
            consolaVerificar.innerHTML = "";
          }, 2000);
    } else {
        consolaVerificar.innerHTML = mensajesDeError.join(`<br>`);
    }
});





function deleteItemlocal() {
    //saca el dato que este en el select
    let miSelect = document.getElementById("camionesEspera");
    let todosLosCamiones = JSON.parse(localStorage.getItem("camiones"));
    let valorSeleccionado = parseInt(miSelect.value) + 1;
    todosLosCamiones = todosLosCamiones.filter((camion) => camion.idunico !== valorSeleccionado);
    localStorage.setItem("camiones", JSON.stringify(todosLosCamiones));
}


function removeDropDown() {
    const indiceSeleccionado = selectorCamiones.selectedIndex;
    selectorCamiones.options[indiceSeleccionado].remove();
}



const botonEliminar = document.getElementById('boton-eliminar');

botonEliminar.addEventListener('click', () => {
    deleteItemlocal();
    removeDropDown();
    const consolaEliminar = document.getElementById('consola-eliminar');
    consolaEliminar.innerHTML = '✅| Se elimino correctamente el camion de la lista de espera.';
    setTimeout(function() {
        consolaEliminar.innerHTML = "";
      }, 2000);

});

























