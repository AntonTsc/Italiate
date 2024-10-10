//Hacer que los inputs tengan un limite de caracteres, y que por ejemplo en el textarea, que tiene un max de 300 caracteres, te ponga mientras vayas escribiendo cuantos caracteres pusiste, y si superas los 300 salga en rojo

document.getElementById("botonEnviar").addEventListener('click', function(){
    //Recoge los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const asunto = document.getElementById('asunto').value;
    const descripcion = document.getElementById('descripcion').value;
    //Se meten todos los datos en un array
    const datos = [nombre, email, telefono, asunto, descripcion];
    
    let link = "formulario-mensaje.html?nombre=" + datos[0] + "&email=" + datos[1] + "&telefono=" + datos[2] + "&asunto=" + datos[3] + "&descripcion=" + datos[4];

    //Verifica si los campos están vacíos
    if(datos[0] === '' || datos[1] === '' | datos[2] === '' | datos[3] === '' | datos[4] === ''){
        alert('Por favor, rellene todos los campos.');
    } else {
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

        //Verifica que los datos no sean 'null', y si cumple ese requisito, ejecuta la función
        (validarEmail(email) != null && validarTel(telefono) != null) && openWindow(link);
    }
});

//Función que abre la ventana al enviar el formulario.
function openWindow(link){
    let ventana = window.open(link, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=600,height=500");
}

