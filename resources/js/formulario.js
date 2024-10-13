//Hacer que los inputs tengan un limite de caracteres, y que por ejemplo en el textarea, que tiene un max de 300 caracteres, te ponga mientras vayas escribiendo cuantos caracteres pusiste, y si superas los 300 salga en rojo
console.log(document.getElementById('nombre').value);
document.getElementById("botonEnviar").addEventListener('click', function(){
    //Recoge los datos del formulario
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const telefono = document.getElementById('telefono');
    const asunto = document.getElementById('asunto');
    const descripcion = document.getElementById('descripcion');
    //Se meten todos los datos en un array
    const datos = [nombre, email, telefono, asunto, descripcion];
    
    let link = "formulario-mensaje.html?nombre=" + datos[0].value + "&email=" + datos[1].value + "&telefono=" + datos[2].value + "&asunto=" + datos[3].value + "&descripcion=" + datos[4].value;

    //Verifica si los campos están vacíos
    let correcto = 0;
    datos.forEach(dato => {
        
        if(dato.value === ''){
            dato.style.borderColor = "red";
        } else {
            dato.style.borderColor = "green";
            correcto++;
        }
    })
    //Verificar que los datos (email y telefono) cumplan los requisitos (regex)
    const validarEmail = (email) => {
        return String(email).toLowerCase().match(
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        );
    };

    const validarTel = (telefono) => {
        return String(telefono).match(
            /^\+?[1-9]\d{1,14}$/
        );
    };

    if (validarEmail(email.value) == null){
        email.style.borderColor = 'red';
        correcto = 0;
    } else if (validarTel(telefono.value) == null){
        telefono.style.borderColor = 'red';
        correcto = 0;
    }

    if (correcto == 5){
        openWindow(link);
    }else {
        alert('Por favor, rellene todos los campos.');

    }
});

//Función que abre la ventana al enviar el formulario.
function openWindow(link){
    let ventana = window.open(link, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=650,height=600");
}

