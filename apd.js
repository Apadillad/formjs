// 1. Creación de las opciones del select "isla"
let selectIsla = document.querySelector('#isla');

let islas = [
    {nombre: "El Hierro", isla: "H"},
    {nombre: "La Gomera", isla: "G"},
];

islas.forEach(isla => {
    let option = document.createElement('option');
    option.text = isla.nombre;
    option.value = isla.isla;
    selectIsla.add(option);
});

// 2. Creación de las opciones del select "municipio"
let selectMunicipio = document.querySelector('#municipio');

let municipios = [
    {nombre: "El pinar", isla: "H"},
    {nombre: "Frontera", isla: "H"},
    {nombre: "Valverde", isla: "H"},
    {nombre: "Agulo", isla: "G"},
    {nombre: "Alajeró", isla: "G"},
    {nombre: "Hermigua", isla: "G"},
    {nombre: "San Sebastián de la Gomera", isla: "G"},
    {nombre: "Valle Gran Rey", isla: "G"},
    {nombre: "Vallehermoso", isla: "G"},
];

municipios.forEach(municipio => {
    let option = document.createElement('option');
    option.text = municipio.nombre;
    option.value = municipio.isla;
    selectMunicipio.add(option);
});


// 3. Contenido de todos los campos en blanco
let campos = document.querySelectorAll(".form-control");
campos.forEach(element => {
    element.setAttribute("value", "");
});

// 4. Deseleccionar los checkbox
let checkbox = document.querySelectorAll("form-check");
checkbox.forEach(element => {
    element.removeAttribute("checked");
});

// 5. Ocultar y mostrar objeto id "tarjeta_credito"
// Funciones para ocultar y mostrar el objeto
function ocultarTarjeta() {
    document.getElementById("tarjeta_credito").style.display = 'none';
}

function mostrarTarjeta() {
    document.getElementById("tarjeta_credito").style.display = 'block';
}
// Listeners para ejecutar las funciones
document.getElementById("paypal").addEventListener('click', ocultarTarjeta);
document.getElementById("credit").addEventListener('click', mostrarTarjeta);
document.getElementById("debit").addEventListener('click', mostrarTarjeta);

// 6. Ocultar los municipios de la isla no seleccionada

function ocultarMunicipios() {
    let islaSeleccionada = selectIsla.value;
    if (islaSeleccionada === "") {
        for (let i = 0; i < selectMunicipio.length; i++) {
            selectMunicipio.options[i].style.display = "block";
        }
    } else {
        for (let i = 0; i < selectMunicipio.options.length; i++) {
            let municipio = selectMunicipio.options[i];

            if (municipio.value === islaSeleccionada) {
                municipio.style.display = "block";
            } else {
                municipio.style.display = "none";
            }
        }
    }
}

selectIsla.addEventListener('change', ocultarMunicipios);