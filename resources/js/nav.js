function mostrarBarraLateral(){
    document.querySelector(".barraLateral").style.display = "flex";
}

function ocultarBarraLateral(){
    document.querySelector(".barraLateral").style.display = "none";
}


//Dark y Light Mode
let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkMode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'active')
}

const disableDarkMode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', null)
}

if(darkmode === "active") enableDarkMode()


themeSwitch.addEventListener("click", ()=>{
    darkmode = localStorage.getItem('darkmode')
    darkmode!== "active" ? enableDarkMode() : disableDarkMode()
})