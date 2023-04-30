
/* 
1-  llega el camion al puerto.
2- saca un turno 
3- va al la casilla a registrar su camion(le piden el turno si no es correcto no entra)
4- le piden todos los datos del camion y del conductor: 1. se agrega automaticamente su numero de turno.
                            2. Datos de destinatario y destino.
                            3. Datos del chofer(nombre completo, dni,  cuit, nacionalidad) .
                            4. Fecha de hoy.
                            5. modelo del camion.
                            6. patente del camion.
                            7. Grano/especie(si tiene humedad, vichos plagucida fumigante).
                            8. Peso neto del grano(kg).

5- poder agregar,sacar y modificar un dado ya ingresado.
6- poder buscar un dato o su nombre.                       	


7- requisitos del camion(con su carga) y conductor: 1. que conincida el destinatario y destino con el registro ya enviado del puerto anteriormente
                            2. que los datos del chofer sean correctos(vrificar que sea de argentina, que ponga correctamente el cuit y dni).
                            3. Verificar al fecha de hoy 
                            4. Verificar modelo del camion.
                            5. verificar la patente del camion.
                            6. verificar que el grano/especie sean correctos en ese puesto(si tiene humedad, vichos plagucida fumigante).
                            7. El peso, si el peso neto es mayor a 30000(kg) no dejarlo descargar el cereal.

8- Si logro registrar su camion en la bases de datos del puerto dejarlo pasar y darle un horario de descarga mas un registro de todos los datos ingresados.
*/

// function ingresarCamiones () {
//     const imputUsuario = 
// }




alert('Esto es una simulación de registro de camiones y sus conductores en un puerto de carga y descarga de granos, como maíz, soja, sorgo, etc.')
alert('Bienvenidos al puerto. Primero, tienes que sacar un turno.')
// turno = prompt('Coloque su nombre y su turno se gurdara')

let turnoActual = 0;
let entregaTurno = -1;
let turnoNuevo = false;

do {
    function crearTurno() {
        turnoActual++;
        return turnoActual;
    }

    let nuevoTurno = crearTurno();
    nombreTurno = prompt('Ingrese un nombre al cual quiere registrar su turno...')

    alert(`Su número de turno ha sido registrado a nombre de ${nombreTurno} y su número de turno es ${nuevoTurno}.`);

    alert('Bienvenido a la Casilla de Control de Acceso. Por favor, ingrese su número de turno para ingresar. Si el número es correcto, se le permitirá el acceso. De lo contrario, deberá sacar otro turno.');
    entregaTurno = parseInt(prompt('Ingrese su número de turno:'));

    if (entregaTurno === nuevoTurno) {
        alert('✅ | El ingreso al registro de camiones ha sido correcto. Por favor, registre su camión. 🚚');
        turnoNuevo = false;

        const puerto = [];

        let fecha = prompt('Ingrese la fecha de hoy');
        let nombreCompleto = prompt('Ingrese su nombre completo');
        let modelo = prompt('Ingrese el modelo de su camion');
        let patenteLogs = prompt('Ingrese la patente de su camion');
        let cereal = prompt('Ingrese el grano/cereal');
        let pesoNeto = Number(prompt('Ingrese el peso neto'));

        puerto.push(new camion(nuevoTurno, fecha, nombreCompleto, modelo, patenteLogs, cereal, pesoNeto));


        /*
        opciones a elegir:
        1 - Mostrar todos los datos ingresados.
        2 - Agregar un requisito y su dato.
        3 - Modificar un dato o su nombre ya ingresado.
        4 - Sacar un dato o su nombre ya ingresado.
        5 - Buscar un dato por su nombre.
        */

        const eleccion = Number(prompt('Ingrese el número del apartado que desea elegir: \n' +
            '1 - Mostrar todos los datos cargados \n' +
            '2 - Agregar un requisito y su respectivo dato \n' +
            '3 - Modificar un dato o su nombre ya ingresado \n' +
            '4 - Eliminar un dato o su nombre ya ingresado \n' +
            '5 - Buscar un dato por su nombre'));

        switch (eleccion) {
            case 1:
                alert(`Registro:           
         N° de turno: ${nuevoTurno}, resgitrado por ${nombreTurno}.
         Datos del chofer: 
         =============================
         - Nombre completo:${nombreCompleto}.
         - DNI:
         - CUIT:
         - Nacionalidad:
         =============================
         Fecha: ${fecha}.
         Modelo del camion: ${modelo}.
         Patente del camion: ${patenteLogs}.
         Grano/especie: ${cereal}.
         Peso neto (en kg): ${pesoNeto}.`);
                break;

            case 2:

                break;

            case 3:

                break;
            case 4:

                break;
            case 5:

                break;
            default:
                alert('no ingreso ningun numero por favor intentalo de nuevo.')
                break;
        }








    } else {
        alert('❌ | El número de turno ingresado NO coincide con el número ya registrado. Por favor, saque otro turno.');
        turnoNuevo = true;
    }
} while (turnoNuevo);















