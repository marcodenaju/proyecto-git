import { comprarProducto } from "./carrito.js"


const userLogin = document.getElementById("userLogin")
const divProductos = document.getElementById("productos")

export let productosDisponibles = JSON.parse(localStorage.getItem("productos"))


document.addEventListener("DOMContentLoaded", () => {
    generarCardsProductos(productosDisponibles)
})

export const generarCardsProductos = (productos) => {
    divProductos.innerHTML = "";
  
    productos.forEach((producto) => {

    const { imagen, nombre, categoria, precio, id } = producto
     
      let card = document.createElement("div");
      card.className = "producto";
      card.innerHTML = `
      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="${imagen}" alt="Card image cap">
      <div class="card-body d-flex flex-column align-items-center justify-content-center">
        <h5 class="card-title text-center">${nombre}</h5>
        <p class="card-text text-center">Categoria: ${categoria}</p>
        <p class="card-text text-center">Precio: <b>$${precio}</b></p>
        <button id="btn${id}" class="btn btn-dark mt-2">Comprar</button>
      </div>
      </div>`;
  
      divProductos.appendChild(card);

      const btnComprar = document.getElementById(`btn${id}`)
      btnComprar.addEventListener("click", () => comprarProducto(id))
  
  
    });
  };


