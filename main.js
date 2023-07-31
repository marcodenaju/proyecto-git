// nombre = "Nahuel";

// frase = `soy ${nombre} 

// y estoy concatenando`;

// alert(frase);

// ===================


let nombre = prompt("Bienvenido a la web de nuestra gráfica, ingrese su nombre para empezar a seleccionar nuestros productos.");

alert("Hola" + " " + nombre + ", presione ok para continuar");

let sticker = prompt("Ingrese '1' para sticker simple, '2' para sticker dorado, '3' para sticker plateado")

switch (sticker) {
    case "1":
        alert("Ha seleccionado sticker simple");
        break;

    case "2":
        alert("Ha seleccionado sticker dorado");
        break;

    case "3":
        alert("Ha seleccionado sticker plateado");
        break;

    default:
        alert("Producto no reconocido");
        break;
}


let cantidad = parseInt(prompt("Ingrese cantidad de stickers. Compra mínima: 10 unidades"));

if (cantidad <10) {
    alert("Seleccione más de 10 unidades")
}

else if (cantidad >10) {
alert("Excelete! Seleccione ok para seguir comprando")
}

let entrada = prompt("Ingrese SI para solictar envío o NO para retirar por nuestro local");

while (entrada != "ESC") {
    switch (entrada) {
        case "SI":
            alert("Ha seleccionado la opción envío");
            break;

        case "NO":
            alert("Ha seleccionado retirar por nuestro local");
            break;

        default:
            alert ("Seleccione una opción correta");
            break;
        }
        

    entrada = prompt("Gracias por su compra. Ingrese ESC para salir");
}
