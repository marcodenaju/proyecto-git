// let nombre = prompt("¡Bienvenido a la sección de stickers!\nIngrese su nombre para empezar a seleccionar nuestros productos:");
// alert(`Hola ${nombre}, presione OK para continuar`);

// const productos = [
//   { id: 1, nombre: 'Sticker Simple', precio: 100 },
//   { id: 2, nombre: 'Sticker Especial', precio: 150 },
//   { id: 3, nombre: 'Sticker Premium', precio: 200 },
//   { id: 4, nombre: 'Sticker Especial Premium', precio: 250 }
// ];

// let productosDisponibles = 'Productos disponibles:\n\n';
// productos.forEach(producto => {
//   productosDisponibles += `${producto.id}: ${producto.nombre} - $${producto.precio}\n`;
// });
// alert(productosDisponibles);

// let seleccion;
// let productoSeleccionado;

// do {
//   seleccion = parseInt(prompt('Seleccione el número del producto que desee comprar:'));
//   productoSeleccionado = productos.find(producto => producto.id === seleccion);

//   if (!productoSeleccionado) {
//     alert('Producto no válido. Por favor, seleccione un producto válido.');
//   }
// } while (!productoSeleccionado);

// let cantidad;
// do {
//   cantidad = parseInt(prompt(`Seleccione la cantidad de unidades (mínimo 10) para ${productoSeleccionado.nombre}:`));
// } while (cantidad < 10);

// const costoTotal = productoSeleccionado.precio * cantidad;
// alert(`Resumen de la compra:\n\nProducto: ${productoSeleccionado.nombre}\nCantidad: ${cantidad} unidades\nCosto total: $${costoTotal}`);

// let entrada;

// do {
//   entrada = prompt("Ingrese SI para solicitar envío o NO para retirar por nuestro local");

//   switch (entrada) {
//     case "SI":
//       alert("Ha seleccionado la opción envío");
//       break;

//     case "NO":
//       alert("Ha seleccionado retirar por nuestro local");
//       break;

//     default:
//       alert("Seleccione una opción correcta");
//       break;
//   }
// } while (entrada !== "SI" && entrada !== "NO");

// alert("¡Gracias por su compra!");


const shopContent = document.getElementById("shopContent");
const verCarrito = document.getElementById("verCarrito");
const modalContainer = document.getElementById("modal-container");


const productos = [
  { id: 1, nombre: "sticker simple", precio: 200, img: "https://mipegatina.club/wp-content/uploads/2022/12/Blanco_5.png" },
  { id: 2, nombre: "sticker transparente", precio: 300, img: "https://mipegatina.club/wp-content/uploads/2022/12/Transparente_3.png" },
  { id: 3, nombre: "sticker holo", precio: 400, img: "https://mipegatina.club/wp-content/uploads/2022/11/HoloTrama_2.png" },
  { id: 4, nombre: "sticker glitter", precio: 500, img: "https://mipegatina.club/wp-content/uploads/2022/11/HoloGlitter_3.png" },
];

let carrito = [];

productos.forEach((producto) => {
  let content = document.createElement("div");
  content.className = "card";
  content.innerHTML = `
    <img src="${producto.img}">
    <h3>${producto.nombre}</h3>
    <p class="price">${producto.precio} $</p>
    <hr />
  `;

  shopContent.append(content);

  let comprar = document.createElement("button")
  comprar.innerText = "comprar";
  comprar.className = "comprar";

  content.append(comprar);

  comprar.addEventListener("click", () =>{
    carrito.push({
      id: producto.id,
      img: producto,
      nombre: producto.nombre,
      precio: producto.precio,
    })
  })

});

verCarrito.addEventListener("click", () => {
  modalContainer.innerHTML = "";
  modalContainer.style.display = "flex";
  const modalHeader = document.createElement("div");
  modalHeader.className = "modal-header"
  modalHeader.innerHTML = `
  <h1 class="modal-header-title">Carrito.</h1>
  `;
  modalContainer.append(modalHeader);

  const modalbutton = document.createElement("h1");
  modalbutton.innerText = "x";
  modalbutton.className = "modal-header-button"

  modalbutton.addEventListener("click", () => {
    modalContainer.style.display = "none";
  })

  modalHeader.append(modalbutton);

  carrito.forEach((producto) => {
    let carritoContent = document.createElement("div");
    carrito.className = "modal-content";
    carrito.innerHTML = `
    <img src="${producto.img}'>
    <h3>${producto.nombre}</h3>
    <p>${producto.precio} $</p>
    `;

    modalContainer.append(carritoContent);
  });

  const total = carrito.reduce((acc, el) => acc + el.precio, 0);

  const totalCompra = document.createElement("div")
  totalCompra.className = "total-content"
  totalCompra.innerHTML = `total a pagar: ${total} $`;
  modalContainer.append(totalCompra);
});