// Obtiene la cadena de consulta de la URL, quita el primer carácter '?', y divide en partes usando '&'
var partesGet = window.location.search.substr(1).split("&");

// Crea un array
var GET = [];

// Itera sobre cada parte de la cadena de consulta
for (var i = 0; i < partesGet.length; i++) {
    // Divide la parte actual en un array usando '=' como separador
    var dato = partesGet[i].split("=");

    // Decodifica el nombre y el valor del parámetro y los almacena en el objeto GET
    // El nombre se utiliza como clave y el valor como su valor correspondiente
    GET[decodeURIComponent(dato[0])] = decodeURIComponent(dato[1]);
}

document.getElementById('nombre').innerHTML = GET['nombre'];
document.getElementById('email').innerHTML = GET['email'];
document.getElementById('telefono').innerHTML = GET['telefono'];
document.getElementById('asunto').innerHTML = GET['asunto'];
document.getElementById('descripcion').innerHTML = GET['descripcion'];

//Cierra la ventana al darle al boton "Cerrar"
document.getElementById("botonCerrar").addEventListener('click', function(){
    window.close();
});

// Comprobar el estado del modo oscuro guardado en localStorage
let darkmode = localStorage.getItem('darkmode');

// Función que habilita el modo oscuro
const enableDarkMode = () => {
    document.body.classList.add('darkmode');
}

// Función que deshabilita el modo oscuro
const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
}

// Al cargar la página, aplica el tema guardado en localStorage
if (darkmode === 'active') {
    enableDarkMode();
} else {
    disableDarkMode();
}