function agregarProductos() {
    let rowProductos = $("#row-productos");
    rowProductos.html("")
    indumentaria.forEach(producto => {
        /*let rowProductos = document.getElementById("row-productos");*/
        /*let div = document.createElement("div")*/
        rowProductos.append(`
        <div class = "col-lg-4 col-sm-12 col-12 mt-3">
         <div class="card">
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
        /*div.classList = "col-lg-4 col-sm-12 col-12 mt-3"
        div.innerHTML = `
            <div class="card">
                <img src=${producto.imagen} class="card-img-top" alt="COLALESS CON PUNTILLA">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <a href="404.html" class="btn btn-outline-danger">$${producto.precio}</a>
                </div>
            </div>`
        rowProductos.appendChild(div)*/
    })
}

agregarProductos();

function productosFiltrados(array) {
    let rowProductos = $("#row-productos");
    rowProductos.html("")
    array.forEach(producto => {
        /*let rowProductos = document.getElementById("row-productos");*/
        /*let div = document.createElement("div")*/
        rowProductos.append(`
        <div class = "col-lg-4 col-sm-12 col-12 mt-3">
          <div class="card">
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
        /*div.classList = "col-lg-4 col-sm-12 col-12 mt-3"
        div.innerHTML = `
            <div class="card">
                <img src=${producto.imagen} class="card-img-top" alt="COLALESS CON PUNTILLA">
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <a href="404.html" class="btn btn-outline-danger">$${producto.precio}</a>
                </div>
            </div>`
        rowProductos.appendChild(div)*/
    })
}



/* ORDENAMIENTO DE MENOR A MAYOR SEGUN PRECIOS */

/*let btnMenorPrecio = document.getElementById("menorP")
let btnMenorPrecio = $("#menorP");
btnMenorPrecio.addEventListener("click", ordenarMenorPrecio)*/
$("#menorP").on('click', ordenarMenorPrecio);


function ordenarMenorPrecio() {
    /*let rowProductos = document.getElementById("row-productos");*/
    let rowProductos = $("#row-productos");
    rowProductos.innerHTML = "";

    var ordenarMenorPrecio = indumentaria.sort((a, b) => a.precio - b.precio);

    sessionStorage.setItem(productosFiltrados(ordenarMenorPrecio));

}


/* ORDENAMIENTO DE MAYOR A MENOR SEGUN PRECIOS */

/*let btnMayorPrecio = document.getElementById("mayorP")*/
/*let btnMayorPrecio = $("#mayorP");
btnMayorPrecio.addEventListener("click", ordernarMayorPrecio)*/
$("#mayorP").on('click', ordenarMayorPrecio);

function ordenarMayorPrecio() {

    /*let rowProductos = document.getElementById("row-productos");*/
    let rowProductos = $("#row-productos");
    rowProductos.innerHTML = "";

    let ordenarMayorPrecio = indumentaria.sort((a, b) => b.precio - a.precio);


    sessionStorage.setItem(productosFiltrados(ordenarMayorPrecio));


}

$(function() {
    //Declaramos la url que vamos a usar para el GET
    const URLGET = "https://jsonplaceholder.typicode.com/posts"

    //Escuachamos el click del boton suscribe
    $("#suscribe").click(() => {
        $.post(URLGET, (respuesta, estado) => {
            if (estado == "success") {
                console.log(respuesta);
                alert("Su email " + $("#correo").val() + " se ha suscripto exitosamente");
            }
        });
    });
});