/*//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!*/

Number(edad);

const $botonTexto = document.querySelector("#Boton") 
$botonTexto.onclick = function() {
         const primerNombre = document.querySelector("#datoPrimerNombre").value; //Obtenemos los valores que el usuario introdujo y se los asignamos a respectivas variables.
         const segundoNombre = document.querySelector("#datoSegundoNombre").value;
         const apellido = document.querySelector("#datoApellido").value;
         const edad = document.querySelector("#datoEdad").value;
         Number(edad);
         document.querySelector("#texto").value = `Tu nombre es ${primerNombre} ${segundoNombre} ${apellido} y tenes ${edad} años`; 
         CambiarH1(primerNombre,segundoNombre,apellido); 
    return false
}

function CambiarH1 (primerNombre,segundoNombre,apellido) { //Funcion que cambia el valor de h1
            const textoH1 = document.getElementsByTagName('h1')[0] //no entiendo porque [0]
            textoH1.style.left = "30%";
     return textoH1.innerText=`Bienvenido/a ${primerNombre} ${segundoNombre} ${apellido}`
}


