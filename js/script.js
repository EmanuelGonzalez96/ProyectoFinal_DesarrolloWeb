function agregarProductos() {
    let rowProductos = $("#row-productos");
    rowProductos.html("")
    indumentaria.forEach(producto => {
        rowProductos.append(`
        <div class = "col-lg-4 col-sm-12 col-12 mt-3">
         <div class="card" category=${producto.categoria}>
          <img src=${producto.imagen} class="card-img-top" alt="COLALESS CON PUNTILLA">
           <div class="card-body">
             <h5 class="card-title">${producto.nombre}</h5>
             <button id="btnSlideToggle" class="btn btn-outline-danger">$${producto.precio}</button>
                <div id="caja-prueba">
                  <button class="btn btn-danger">Agregar al carrito</button>
                  <button class="btn btn-danger">Agregar a favoritos</button>
                </div>
            </div>
         </div>
        </div> `);
    })
}


function productosFiltrados(array) {
    let rowProductos = $("#row-productos");
    rowProductos.html("")
    array.forEach(producto => {
        rowProductos.append(`
        <div class = "col-lg-4 col-sm-12 col-12 mt-3">
          <div class="card" category=${producto.categoria}>
            <img src=${producto.imagen} class="card-img-top" alt="COLALESS CON PUNTILLA">
            <div class="card-body">
              <h5 class="card-title">${producto.nombre}</h5>
              <button id="btnSlideToggle" class="btn btn-outline-danger">$${producto.precio}</button>
                <div id="caja-prueba">
                  <button class="btn btn-danger">Agregar al carrito</button>
                  <button class="btn btn-danger">Agregar a favoritos</button>
                </div>
            </div>
          </div>
        </div> `);
    })
}

agregarProductos();


/* ORDENAMIENTO DE MENOR A MAYOR SEGUN PRECIOS */

function ordenarMenorPrecio() {
    let rowProductos = $("#row-productos");
    rowProductos.innerHTML = "";
    var ordenarMenorPrecio = indumentaria.sort((a, b) => a.precio - b.precio);
    productosFiltrados(ordenarMenorPrecio);
    sessionStorage.setItem("menorPrecio", ordenarMenorPrecio);
}

$("#menorP").on('click', ordenarMenorPrecio);


/* ORDENAMIENTO DE MAYOR A MENOR SEGUN PRECIOS */

function ordenarMayorPrecio() {
    let rowProductos = $("#row-productos");
    rowProductos.innerHTML = "";
    let ordenarMayorPrecio = indumentaria.sort((a, b) => b.precio - a.precio);
    productosFiltrados(ordenarMayorPrecio);
    sessionStorage.setItem("mayorPrecio", ordenarMayorPrecio);
}

$("#mayorP").on('click', ordenarMayorPrecio);


/* NEWSLETTER */

$(function() {
    //Declaramos la url que vamos a usar para el GET
    const URLGET = "https://jsonplaceholder.typicode.com/posts"

    //Escuchamos el click del boton suscribe
    $("#suscribe").click(() => {
        $.post(URLGET, (respuesta, estado) => {
            if (estado == "success") {
                console.log(respuesta);
                alert("Su email " + $("#correo").val() + " se ha suscripto exitosamente");
            }
        });
    });
});


/* TIPO DE PRODUCTO */

// AGREGANDO CLASE ACTIVE AL PRIMER ENLACE
$('.category_list .category_item[category="all"]').addClass('ct_item-active');

// FILTRANDO PRODUCTOS
$('.category_item').click(function() {
    var catProduct = $(this).attr('category');
    console.log(catProduct);

    // AGREGANDO CLASE ACTIVE AL ENLACE SELECCIONADO
    $('.category_item').removeClass('ct_item-active');
    $(this).addClass('ct_item-active');

    // OCULTANDO PRODUCTOS
    $('.card').hide();

    // MOSTRANDO PRODUCTOS
    $('.card[category="' + catProduct + '"]').show();

});

// MOSTRANDO TODOS LOS PRODUCTOS 
$('.category_item[category="all"]').click(function() {
    $('.card').show();
});