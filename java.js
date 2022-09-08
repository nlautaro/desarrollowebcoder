let carrito=JSON.parse(localStorage.getItem("carrito"))||[];
let lista=document.getElementById("milista");

renderizarProductos();

function renderizarProductos() {
    for (const producto of productos) {
        lista.innerHTML+=`<li data-aos="flip-left" class="col-sm-3 list-group-item">
        <img src=${producto.foto} width="250" height="290">
        <h4> Producto: ${producto.nombre}</h4>
        <h5> $ ${producto.precio} </h5>
        <button class='btn btn-success' id='btn${producto.id}'>Agregar al carro</button>
        </li>`;
    }

    //eventos

    productos.forEach(producto => {
        //Evento para cada boton
        document.getElementById(`btn${producto.id}`).addEventListener('click', function() {
            agregarAlCarrito(producto);
        });
    });
}

function agregarAlCarrito(productoNuevo) {
    carrito.push(productoNuevo);
    console.log(carrito);
    Swal.fire(
        productoNuevo.nombre,
        'Ha sido añadido al carro!',
        'success'
    );
    document.getElementById("tablabody").innerHTML+=`
    <tr data-aos="fade-left">
        <td>${productoNuevo.id}</td>
        <td>${productoNuevo.nombre}</td>
        <td>${productoNuevo.precio}</td>
    </tr>`;
    localStorage.setItem("carrito",JSON.stringify(carrito));
}



// GET API´S

function obtenerDatos(){
    const URLGET="https://api.itbook.store/1.0/new";
    fetch(URLGET)
    .then(resultado => resultado.json())
    .then(libros => {
        console.log(libros);
    })
}

obtenerDatos();
