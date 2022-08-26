class Producto {
    constructor(id, nombre, precio, foto) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.foto = foto;
    }
}

class ElementoCarrito {
    constructor(producto, cantidad) {
        this.producto = producto;
        this.cantidad = cantidad;
    }
}


// ARRAYS
const productos = [];
const elementosCarrito = [];

const contenedorProductos = 
    document.getElementById('contenedor-productos').getElementsByClassName('row');

const rowContenedorProductos = contenedorProductos[0];

const contenedorCarritoCompras = document.querySelector("#items")

//FUNCIONES

cargarProductos();
cargarCarrito();
dibujarCarrito();
dibujarCatalogoProductos();

 function cargarProductos() {
    productos.push(new Producto(1, 'Buzo 1', 65, './http://d3ugyf2ht6aenh.cloudfront.net/stores/001/490/877/products/b1-removebg-preview1-ae7c4bec9f2d25c3c216562767238890-640-0.png'));
    productos.push(new Producto(2, 'Buzo 2', 60, './http://d3ugyf2ht6aenh.cloudfront.net/stores/001/490/877/products/b1-removebg-preview1-ae7c4bec9f2d25c3c216562767238890-640-0.png'));
    productos.push(new Producto(3, 'Buzo 3', 60, './http://d3ugyf2ht6aenh.cloudfront.net/stores/001/490/877/products/b1-removebg-preview1-ae7c4bec9f2d25c3c216562767238890-640-0.png'));
    productos.push(new Producto(4, 'Buzo 4', 60, './http://d3ugyf2ht6aenh.cloudfront.net/stores/001/490/877/products/b1-removebg-preview1-ae7c4bec9f2d25c3c216562767238890-640-0.pngg'));
    productos.push(new Producto(5, 'Pantalon 1', 45, './http://d3ugyf2ht6aenh.cloudfront.net/stores/001/490/877/products/b1-removebg-preview1-ae7c4bec9f2d25c3c216562767238890-640-0.png'));
    productos.push(new Producto(6, 'Pantalon 2', 45, './http://d3ugyf2ht6aenh.cloudfront.net/stores/001/490/877/products/b1-removebg-preview1-ae7c4bec9f2d25c3c216562767238890-640-0.png'));
}

function cargarCarrito() {
    let elementoCarrito = new ElementoCarrito(
        new Producto(1, 'Buzo 1', 10000, './img/muffin.jpg'),
        1
    );

    elementosCarrito.push(elementoCarrito);
}

function dibujarCarrito() {
    let renglonesCarrito = '';

    elementosCarrito.forEach(
        (elemento) => {
            renglonesCarrito+=`
                <tr>
                    <td>${elemento.producto.id}</td>
                    <td>${elemento.producto.nombre}</td>
                    <td>${elemento.cantidad}</td>
                    <td>$ ${elemento.producto.precio}</td>
                </tr>
            `;
        }
    );

    contenedorCarritoCompras.innerHTML = renglonesCarrito;

}

function crearCard(producto) {
    // BOTON
    let botonAgregar = document.createElement("button");
    botonAgregar.className = "btn btn-success";
    botonAgregar.innerText = "Agregar al carrito";

    // CUERPO DE LA CARD
    let cuerpoCarta = document.createElement("div");
    cuerpoCarta.className = "card-body";
    cuerpoCarta.innerHTML = `
        <h5>${producto.nombre}</h5>
        <p>$ ${producto.precio} ARS</p>
    `;
    cuerpoCarta.append(botonAgregar);

    // IMAGEN 
    let imagen = document.createElement("img");
    imagen.src = producto.foto;
    imagen.className = "card-img-top";
    imagen.alt = producto.nombre;

    // CARD
    let carta = document.createElement("div");
    carta.className = "card";
    carta.append(imagen);
    carta.append(cuerpoCarta);

    // CONTENEDOR CARD
    let contenedorCarta = document.createElement("div");
    contenedorCarta.className = "col-xs-6 col-sm-4 col-md-3";
    contenedorCarta.append(carta);



    botonAgregar.onclick = () => {

        let elementoCarrito = new ElementoCarrito(producto, 1);
        elementosCarrito.push(elementoCarrito);

        dibujarCarrito();A

    } 
    
    return contenedorCarta;

}

function dibujarCatalogoProductos() {
    rowContenedorProductos.innerHTML = "";

    productos.forEach(
        (producto) => {
            let contenedorCarta = crearCard(producto);
            rowContenedorProductos.append(contenedorCarta);
        }
    );

}



