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
const instagramSrc = document.querySelector(".instagram");
const twitterSrc = document.querySelector(".twitter");
//Funcion que habilita modo oscuro
const enableDarkMode = () => {
    document.body.classList.add('darkmode');
    //Guardo el estado 'active' en localStorage para la proxima vez se cargue la preferencia
    localStorage.setItem('darkmode', 'active');
    logoSrc.src = "/resources/images/logo/logo-white.png";
    instagramSrc.src = "/resources/images/svg/instagram_dark.svg";
    twitterSrc.src = "/resources/images/svg/x_dark.svg";
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode');
    localStorage.setItem('darkmode', null);
    logoSrc.src = "/resources/images/logo/logo.png";
    instagramSrc.src = "/resources/images/svg/instagram.svg";
    twitterSrc.src = "/resources/images/svg/x.svg";
}

if(darkmode === "active") enableDarkMode()


themeSwitch.addEventListener("click", ()=>{
    darkmode = localStorage.getItem('darkmode')
    darkmode!== "active" ? enableDarkMode() : disableDarkMode()
})