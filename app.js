alert("Bienvenido al mercado, primero necesito que crees una cuenta.");

let usuario;
let contraseña;


// Crer una cuenta
usuario = prompt("ingrese un usuario");
//Inicio de sesion
if (usuario != "") {
    contraseña = prompt("ingrese una contraseña");
    if (contraseña != "") {
        alert('Ingresaste los datos de registro correctamente, ahora ingrese a su cuenta, iniciando sesión.');

        if (usuario == prompt("Ingrese su usuario")) {
            alert("Tu usuario es correcto, ahora ingresa la contraseña.");

            if (contraseña == prompt("ingrese su contraseña")) {
                alert("El usuario y contraseña son correctos, bienvenido al mercado!");

                //mercado
                alert('Elige productos que deseas comprar y te diremos cuanto es el total...' + '\n' +
                    'Manzana: $50' + '\n' +
                    'Pollo: $450' + '\n' +
                    'Pan: $100' + '\n' +
                    'Queso: $150' + '\n' +
                    'Arroz: $90' + '\n' +
                    'Atun: $100' + '\n' +
                    'Papel: $110');
                //productos
                let manzana = 50;
                let pollo = 450;
                let pan = 100;
                let queso = 150;
                let arroz = 90;
                let atun = 100;
                let papel = 110;
                let total = 0;
                let resultado = 0;
                let seguirComprando;
                let continuar = 's';

                while (seguirComprando != 'n') {
                    let totalProducto = Number(prompt("¿cuantos prductos deseas comprar? el maximo es 7"));
                    if (totalProducto <= 7) {
                        for (let i = 1; i <= totalProducto; i++) {
                            let producto = prompt('Ingrese sus productos' + '\n' +
                            'Manzana: $50' + '\n' +
                            'Pollo: $450' + '\n' +
                            'Pan: $100' + '\n' +
                            'Queso: $150' + '\n' +
                            'Arroz: $90' + '\n' +
                            'Atun: $100' + '\n' +
                            'Papel: $110');
                            switch (producto) {
                                case 'manzana':
                                    total = total + manzana;
                                    break;
                                case 'pollo':
                                    total = total + pollo;
                                    break;
                                case 'pan':
                                    total = total + pan;
                                    break;
                                case 'queso':
                                    total = total + queso;
                                    break;
                                case 'arroz':
                                    total = total + arroz;
                                    break;
                                case 'atun':
                                    total = total + atun;
                                    break;
                                case 'papel':
                                    total = total + papel;
                                    break;
                                default:
    
                                alert('Ingresó un producto que no está registrado en la lista');
                            }
                        } 
    
                        resultado = total
                        alert('El total es de: $' + resultado);
                        seguirComprando = prompt('¿queres seguir comprando? s/n');
                    } else {
                        alert('Solo tenmos 7 productos diferentes')
                    }
                }
            } else {
                alert("La es contraseña es incorrecta.");
            }
        } else {
            alert("El usuario es incorrecto.");
        }
    } else {
        alert("No ingresaste una contraseña, lamentablemente no vamos a poder registrarte.");
    }
} else {
    alert("No ingresaste un usuario, lamentablemente no vamos a poder registrarte.");
}
