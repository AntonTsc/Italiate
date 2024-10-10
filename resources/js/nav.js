function mostrarBarraLateral(){
    document.querySelector(".barraLateral").style.display = "flex";
}

function ocultarBarraLateral(){
    document.querySelector(".barraLateral").style.display = "none";
}


//Dark y Light Mode
//Defino
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')
const logoSrc = document.querySelector(".logo img");
//Funcion que habilita modo oscuro
const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    //Guardo el estado 'active' en localStorage para la proxima vez se cargue la preferencia
    localStorage.setItem('darkmode', 'active');
    logoSrc.src = "/resources/images/logo/logo-white.png";
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    logoSrc.src = "/resources/images/logo/logo.png";
}

if(darkmode === "active") enableDarkMode()


themeSwitch.addEventListener("click", ()=>{
    darkmode = localStorage.getItem('darkmode')
    darkmode!== "active" ? enableDarkMode() : disableDarkMode()
})