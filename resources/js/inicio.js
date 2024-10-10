//Defino las variables de las slides, su indice y su intervalo
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;
//Cuando todos los slides se cargan se inicializan
document.addEventListener("DOMContentLoaded", initializeSlider);
//Funcion que inicializa los slides y se dan 10 segundos a cada imagen antes de pasar automaticamente
function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 10000);
    }
}
//Verifica si el indice ha superado el numero de slides o si es negativo
function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }
//Recorre todas las imagenes y les quita la clase para que se oculten y despues les vuelvo a dar la clase segun el valor del index para que no salgan mas de una a la vez
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}
//Cuando pasan de imagen para el intervalo para que no se pase automaticamente y cambia a la diapositiva anterior.
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}
//Cuando pasan de imagen para el intervalo para que no se pase automaticamente y cambia a la diapositiva siguiente.
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}