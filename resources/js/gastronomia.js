document.addEventListener('DOMContentLoaded', function() {

    // Seleccionar el modal y su contenido
    const modal = document.getElementById('modal');
    const modalBody = document.getElementById('modal-body');
    const closeBtn = document.querySelector('.close');

    // Botones
    const boton_pasta = document.getElementById("contenedor_tallarines");
    const boton_pizza = document.getElementById("contenedor_pizzas");
    const boton_quesos = document.getElementById("contenedor_quesos");
    const boton_arroz = document.getElementById("contenedor_arroz");
    const boton_embutidos = document.getElementById("contenedor_Embutidos");
    const boton_postres = document.getElementById("contenedor_Postres");

    // Función para abrir el modal y mostrar el contenido
    function abrirModal(contenido) {
        modal.style.display = 'block';  // Mostrar el modal
        document.getElementsByTagName("html")[0].style.overflow = "hidden";
        modalBody.innerHTML = contenido;  // Insertar contenido en el modal
    }

    // Añadir eventos para cada botón que abren el modal con el contenido adecuado
    boton_pasta.addEventListener('click', function() {
        abrirModal(`
            <html>
            <style> 
            p {
            padding: 20px 15px 0 25px;
            text-align: justify;
            font-size: 18px;
              top: 0;
            max-height: 70%;
             margin-right: 10px;
             overflow: auto;
            }
             iframe {
            display: block;
            margin: 20px auto; /* Margen arriba y abajo */
        }

        video {
            margin: 10px;
        }
            h1{
             font-family: "Pacifico";
                color: #2c3e50;
               }


            </style>
           <h2>Pastas</h2>
            <h1>PENNE</h1>
            <p>
                La penne es un tipo de pasta italiana con forma de tubo, caracterizada por sus extremos en corte diagonal,
                lo que le otorga un aspecto distintivo. Su textura estriada en el exterior permite que las salsas se adhieran mejor, 
                realzando así el sabor de los platillos.
                <br> 
                
                La penne se utiliza en una amplia variedad de recetas, desde ensaladas frías hasta platos al horno, como la famosa 
                pasta al forno. También combina bien con salsas de tomate, pesto y cremosas, siendo versátil en su uso. 
                Es una opción popular en la cocina mediterránea y se disfruta en todo el mundo.
            </p>
            
            <div class="video"></div><iframe width="660" height="415" src="https://www.youtube.com/embed/yISyAmI5FBM?si=dCgST7HKnk_VP_MH" title="YouTube video player"
                 frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
                 allowfullscreen></iframe>  </div><br>
            <h1>LASAGNA</h1>
            <p>
                La lasagna es un plato tradicional italiano que consiste en capas de pasta ancha y plana intercaladas con diversos 
                ingredientes como carne, verduras, queso y salsas.
                <br> 
                Se elabora típicamente en un recipiente hondo y se cocina al horno, permitiendo que los sabores se mezclen y se intensifiquen.
                <br> 
                Las versiones más comunes incluyen la lasagna alla bolognese, que combina carne de res y salsa de tomate, 
                y la lasagna vegetariana, que utiliza verduras como espinacas y calabacines. Este plato es ideal para ocasiones 
                especiales y reuniones familiares, ofreciendo una opción abundante y reconfortante que se puede preparar con antelación.

            </p>
             <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/FJJMgPXCNYs?si=gMbw_06jKO4Ay5JB" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
             referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             </div>
            </html>
           
        `);
    });
    boton_pizza.addEventListener('click', function() {
        abrirModal(`
                <html>
            <style> 
            p {
            padding: 20px 15px 0 25px;
            text-align: justify;
            font-size: 18px;
              top: 0;
            max-height: 70%;
             margin-right: 10px;
             overflow: auto;
            }
             iframe {
            display: block;
            margin: 20px auto; /* Margen arriba y abajo */
        }

        video {
            margin: 10px;
        }
            h1{
             font-family: "Pacifico";
                color: #2c3e50;
               }


            </style>
            <h2>Pizzas</h2>
            <h1>PIZZA MARGHERITA</h1>
            <p>
                La pizza Margherita es un clásico de la cocina italiana, elaborada con una base de masa fina y crujiente, salsa de tomate, 
                mozzarella fresca, albahaca y un chorrito de aceite de oliva. Es un símbolo de la gastronomía napolitana y se caracteriza por su sencillez, 
                realzando la calidad de los ingredientes.
            </p>
            <br>
            <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/lDCxRKtRwXw?si=BitLjTnGpzWl6X9L" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h1>PIZZA PEPPERONI</h1>
            <p>
                La pizza pepperoni es muy popular en los Estados Unidos, aunque su origen es italiano. Se prepara con salsa de tomate, 
                mozzarella y rodajas de pepperoni, un embutido picante. Su sabor intenso la convierte en una favorita en pizzerías de todo el mundo.
            </p>

            <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Ih8H0cSQsgA?si=fh4llNgwiLLiqjYT" title="YouTube video player" frameborder="0" allow="accelerometer;
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe>
            </div>

            </html>
        `);
    });
    
    boton_quesos.addEventListener('click', function() {
        abrirModal(`
               <style> 
            p {
            padding: 20px 15px 0 25px;
            text-align: justify;
            font-size: 18px;
              top: 0;
            max-height: 70%;
             margin-right: 10px;
             overflow: auto;
            }
             iframe {
            display: block;
            margin: 20px auto; /* Margen arriba y abajo */
        }

        video {
            margin: 10px;
        }
            h1{
             font-family: "Pacifico";
                color: #2c3e50;
               }


            </style>
            
            <h2>Quesos</h2>
            <h1>QUESO PARMESANO</h1>
            <p>
                El queso parmesano es un queso duro italiano, conocido por su sabor fuerte y salado. Se utiliza comúnmente en la cocina para 
                rallar sobre pastas, risottos y ensaladas. Su proceso de envejecimiento puede durar hasta 24 meses, lo que intensifica su 
                sabor.
            </p>
            <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Se2TnDd9eVc?si=YlStIXYCv9mmsBmz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h1>QUESO MOZZARELLA</h1>
            <p>
                La mozzarella es un queso fresco, suave y elástico, originario de Italia. Se elabora tradicionalmente con leche de búfala 
                y es un ingrediente esencial en la pizza y las ensaladas Caprese, proporcionando una textura cremosa y un sabor ligero.

            </p>
            <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/z6lC4_vhvmc?si=mdBBu8K346yBaftr" title="YouTube video player" frameborder="0" allow="accelerometer;
             autoplay; clipboard-write; encrypted-media; gyroscope;
             picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             </div>
        `);
    });
    
    boton_arroz.addEventListener('click', function() {
        abrirModal(`
               <style> 
               h1{
                font-family: "Pacifico";
                color: #2c3e50;
               }
            p {
            padding: 20px 15px 0 25px;
            text-align: justify;
            font-size: 18px;
              top: 0;
            max-height: 70%;
             margin-right: 10px;
             overflow: auto;
            }
             iframe {
            display: block;
            margin: 20px auto; /* Margen arriba y abajo */
        }

        video {
            margin: 10px;
        }


            </style>

            <h2>Arroces</h2>
            <h1>RISOTTO</h1>
            <p>
                El risotto es un plato italiano a base de arroz, caracterizado por su textura cremosa. Se cocina lentamente con caldo, 
                permitiendo que el arroz absorba los sabores. Los ingredientes comunes incluyen setas, mariscos y verduras, siendo un plato 
                versátil y reconfortante.
            </p>
            <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4OPGm0suyHA?si=oIFL93MTG-yyG1cv" title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write;
             encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
             </div>

            <h1>ARROZ AL NERO DI SEPPIA</h1>
            <p>
                Este plato de arroz negro se prepara con tinta de calamar, lo que le otorga un color y sabor únicos. Se combina 
                a menudo con mariscos y se sirve como un elegante plato principal en muchas regiones costeras de Italia.
            </p>
            <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/7bQkYlRa2ro?si=_zDW_hyBvqOeATbq" title="YouTube video player" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; 
            encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

        `);
    });
    
    boton_embutidos.addEventListener('click', function() {
        abrirModal(`
               <style> 
               h1{
                font-family: "Pacifico";
                color: #2c3e50;
               }
            p {
            padding: 20px 15px 0 25px;
            text-align: justify;
            font-size: 18px;
              top: 0;
            max-height: 70%;
             margin-right: 10px;
             overflow: auto;
            }
             iframe {
            display: block;
            margin: 20px auto; /* Margen arriba y abajo */
        }

        video {
            margin: 10px;
        }


            </style>

            <h2>Embutidos</h2>
            <h1>PROSCIUTTO</h1>
            <p>
                El prosciutto es un jamón curado italiano, conocido por su sabor suave y salado. Se sirve generalmente en lonchas finas, 
                acompañado de melón o como parte de un antipasto. Su proceso de curación puede durar entre 9 meses y 2 años, intensificando su sabor.
            </p>
            <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/csAqfFfhm3I?si=MxvYEP17NqkmXoDF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; 
            clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            <h1>SALAME</h1>
            <p>
                El salame es un embutido seco, que se elabora con carne de cerdo y especias. Es popular en aperitivos y se puede encontrar 
                en muchas variedades, desde suave hasta picante, siendo un ingrediente común en tablas de quesos y embutidos.
            </p>
            <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/0YNWddJgP5I?si=LmWpYluHVQfvmEpr" title="YouTube video player" frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>

        `);
    });
    
    boton_postres.addEventListener('click', function() {
        abrirModal(`
               <style> 
            p {
            padding: 20px 15px 0 25px;
            text-align: justify;
            font-size: 18px;
              top: 0;
            max-height: 70%;
             margin-right: 10px;
             overflow: auto;
            }
             iframe {
            display: block;
            margin: 20px auto; /* Margen arriba y abajo */
        }
             h1{
                font-family: "Pacifico";
                color: #2c3e50;
               }

        video {
            margin: 10px;
        }


            </style>

            <h2>Postres</h2>
            <h1>TIRAMISÚ</h1>
            <p>
                El tiramisú es un postre italiano a base de capas de bizcochos empapados en café, mascarpone y cacao en polvo. Es conocido por su 
                textura cremosa y su intenso sabor a café, siendo uno de los postres más populares de Italia.
            </p> 
            <div class="video">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/qy7dGoBukkc?si=rYCIP6tVoQmEO_kU" title="YouTube video player" frameborder="0"
             allow="accelerometer; autoplay; clipboard-write;
             encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
            
             <h1>PANNA COTTA </h1>

            <p>
           La panna cotta es un postre italiano que consiste en una crema cocida, normalmente hecha con nata y gelatina. Se sirve generalmente 
                con salsa de frutas o caramelo, ofreciendo una textura suave y un sabor delicado. Es muy apreciada por su simplicidad y elegancia.
                 </p>
                <div class="video">
                 <iframe width="560" height="315" src="https://www.youtube.com/embed/Gns0gBcUX9I?si=jMzJGf4AIEr3OVxb" title="YouTube video player" frameborder="0" 
                 allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                </div>
        `);
    });

    // Cerrar el modal al hacer clic en la "X"
    closeBtn.addEventListener('click', function() {
        document.getElementsByTagName("html")[0].style.overflow = "auto";
        modal.style.display = 'none';  // Ocultar el modal
    });

    // Cerrar el modal al hacer clic fuera de la ventana del modal
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            document.getElementsByTagName("html")[0].style.overflow = "auto";
            modal.style.display = 'none';  // Ocultar el modal si se hace clic fuera
        }
    });
});






 
  