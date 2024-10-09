/* FILTRO */

// Obtengo todos los botones que se usaran como filtro
const filtros = document.querySelectorAll('.filtros li button');

// Obtengo las cartas que se filtraran
const cartas = document.querySelectorAll('.cartas li');


filtros.forEach(btn => {
  // Por cada boton añado un listener para que actue cuando clicamos
  btn.addEventListener('click', () => {


      // Oculto todas las cartas
      cartas.forEach((li) => {
          li.style.display= "none";
      });

      // Muestro solo las cartas que coincidan con el filtro
      // El filtro actua mandando el contenido del id del boton pulsado
      // y esta id se busca en las cartas que tengan una clase con el mismo nombre
      // ejemplo: Al pulsar el bonton "Todo" (con id "todo"), obtendra las cartas que tenga la clase con el mismo nombre que la id del boton, es decir, se guardaran en la constante "ciudades" solo las cartas que tengan la clase "todo"
      const ciudades = document.querySelectorAll(`.${btn.id}`);
      ciudades.forEach((li) => {
          li.style.display= "block";
      });

      // Quito el estilo selected de todos los botones
      filtros.forEach((button) => {
          button.classList.remove("selected");
      });

      // Añado el estilo selected al boton pulsado
      btn.classList.add("selected");

  });
});

/* MODAL */

// Obtengo el modal
const modal = document.getElementById("modal");

// obtengo todos los botones que quiero que puedan abrir el modal
const btnModal = document.querySelectorAll(".btnModal");

// Obtengo el span con la que voy a cerrar el modal
const cerrarModal = document.getElementsByClassName("cerrarModal")[0];

/*
cuando se clica cualquiera de los botones con la clase 'btnModal' me abre el modal
*/
btnModal.forEach(btn => {
  // Obtener el botón especifico que se ha clicado
  btn.addEventListener('click', () => {

    // obtengo el contenedor abuelo
    var contenedor = event.target.closest('.contenido');

    // Dentro del contenedor abuelo, seleccionamos el label
    document.querySelector(".modalHeader").innerHTML = contenedor.querySelector('h2').textContent;

    // Dentro del contenedor abuelo, seleccionamos el label
    document.querySelector(".modalTexto").innerHTML = contenedor.querySelector('p').innerHTML;

    modal.style.display = "block";
    document.getElementsByTagName("html")[0].style.overflow = "hidden";
  });
});

// cuando se clicka el span se cierra el modal
cerrarModal.onclick = function() {
  document.getElementsByTagName("html")[0].style.overflow = "auto";
  modal.style.display = "none";
}

// cuando se clicka fuera del contenido del modal se cierra el modal
window.onclick = function(event) {
  if (event.target == modal) {
    document.getElementsByTagName("html")[0].style.overflow = "auto";
    modal.style.display = "none";
  }
}