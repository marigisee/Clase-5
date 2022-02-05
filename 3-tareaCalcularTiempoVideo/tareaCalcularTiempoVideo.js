const cantidadVideos = document.querySelectorAll("div");
const arrayInput = document.querySelectorAll("input"); //En este array se almacenan todos los inputs existentes en el archivo HTML.
const $botonCalcular = document.querySelector("#boton-calcular");

let arrayTiempo = [0,0,0];// Este es un vector que almacena la cantidad de tiempo. 
                          // en arrayTiempo[0] = se guardan las horas ,
                             en arrayTiempo[1] = se guardan los minutos,
                             en arrayTiempo[2] = se guardan los segundos    
 
$botonCalcular.onclick = function() {
     let x = 0; // La variable que va a ir recorriendo el array arrayInput. 
     for (let i=0; i<cantidadVideos.length;i++) { //Recolectamos toda la información de la cantidad de videos a la que introducimos información
             for (let c=0;c<arrayTiempo.length;c++) {
                 arrayTiempo[c] = arrayTiempo[c] + Number(arrayInput[x].value); 
                 ++x;
             }  
     }

     arrayTiempo[2]=calcularTiempo(2,1);
     arrayTiempo[1]=calcularTiempo(1,0);
     let textoResultado = document.getElementById("texto-resultado") 
     textoResultado.innerText = `El tiempo total de los videos es de ${arrayTiempo[0]} horas, ${arrayTiempo[1]} minutos y ${arrayTiempo[2]} segundos  `
     return false
 }     


function calcularTiempo (valorMenor,valorMayor) {
     while (arrayTiempo[valorMenor]>=60) {
         ++arrayTiempo[valorMayor];
         arrayTiempo[valorMenor] = arrayTiempo[valorMenor]-60;
     }
     return arrayTiempo[valorMenor]
}