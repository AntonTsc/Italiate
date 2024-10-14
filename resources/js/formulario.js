// Se añade un EventListener al botón para que, al hacerle click, ejecute una función
document.getElementById("botonEnviar").addEventListener('click', function(){
    // Recoge los datos de los campos del formulario
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const asunto = document.getElementById('asunto');
    const descripcion = document.getElementById('descripcion');

    // Se meten todos los datos recogidos en un array
    const datos = [nombre, email, telefono, asunto, descripcion];
    
    // Se crea un enlace con los valores de los campos del formulario
    let link = "formulario-mensaje.html?nombre=" + datos[0].value + "&email=" + datos[1].value + "&telefono=" + datos[2].value + "&asunto=" + datos[3].value + "&descripcion=" + datos[4].value;

    // Verificación para ver si los campos están vacíos
    let correcto = 0;
    // Recorre cada campo del array para verificar si está vacío
    datos.forEach(dato => {
        // Si el campo está vacío, el borde se pone rojo
        if(dato.value === ''){
            dato.style.borderColor = "red";
        } else {
            // Si el campo tiene contenido, el borde se pone verde
            dato.style.borderColor = "green";
            correcto++;
        }
    })
    // Validación del formato del correo electrónico utilizando regex
    const validarEmail = (email) => {
        return String(email).toLowerCase().match(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ // Patrón para emails
        );
    };

    // Validación del formato del número de teléfono utilizando regex
    const validarTel = (telefono) => {
        return String(telefono).match(
            /^\+?[1-9]\d{0,2}(?:\s?\d{2,3}){3,5}$/ // Patrón para números de teléfonos
        );
    };

    // Si el email o el teléfono no cumplen con el formato correcto, pone el borde en rojo y marca el formulario como incorrecto
    if (validarEmail(email.value) == null){
        email.style.borderColor = 'red';
        correcto = 0;
    }
    if (validarTel(telefono.value) == null){
        telefono.style.borderColor = 'red';
        correcto = 0;
    }

    // Si todos los campos son válidos, se abre una nueva ventana
    if (correcto == 5){
        openWindow(link);
    } else {
        // Si no se validaron todos los campos, se muestra una alerta
        alert('Por favor, rellene todos los campos.');

    }
});

// Función que abre una nueva ventana con el enlace creado en el formulario
function openWindow(link){
    let ventana = window.open(link, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=650,height=600");
}

