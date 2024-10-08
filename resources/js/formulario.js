//Mostrar los datos del formulario por pantalla y poner un mensaje de como "gracias por contactarnos" y un boton para volver a la pagina de inicio, y si puede ser que cierre la ventana emergente.

document.getElementById("botonEnviar").addEventListener('click', function(){
    //Recoge los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const asunto = document.getElementById('asunto').value;
    const descripcion = document.getElementById('descripcion').value;

    //Verifica si los campos están vacíos
    if(nombre === '' || email === '' | asunto === '' | descripcion === ''){
        alert('Por favor, rellene todos los campos.');
    } else {
        //Si están rellenos, se ejecuta la función
        openWindow();
    }
});

//Función que abre la ventana al enviar el formulario.
function openWindow(){
    let ventana = window.open("formulario-mensaje.html", "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=500,left=500,width=400,height=400");
}


/* Para centrar el pop up */

// const popupCenter = ({url, title, w, h}) => {
//     // Fixes dual-screen position                             Most browsers      Firefox
//     const dualScreenLeft = window.screenLeft !==  undefined ? window.screenLeft : window.screenX;
//     const dualScreenTop = window.screenTop !==  undefined   ? window.screenTop  : window.screenY;

//     const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width;
//     const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height;

//     const systemZoom = width / window.screen.availWidth;
//     const left = (width - w) / 2 / systemZoom + dualScreenLeft
//     const top = (height - h) / 2 / systemZoom + dualScreenTop
//     const newWindow = window.open(url, title, 
//       `
//       scrollbars=yes,
//       width=${w / systemZoom}, 
//       height=${h / systemZoom}, 
//       top=${top}, 
//       left=${left}
//       `
//     )

//     if (window.focus) newWindow.focus();
// }