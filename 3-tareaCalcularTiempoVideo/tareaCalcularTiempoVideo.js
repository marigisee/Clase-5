const cantidadVideos = document.querySelectorAll("div");
const arrayInput = document.querySelectorAll("input")
const $botonCalcular = document.querySelector("#botonCalcular");
let arrayTiempo = [0,0,0];//vector que va a almacenar los horarios
 
$botonCalcular.onclick = function() {
     let x = 0; //variable que cuenta los lugares dell arrayInput 
     for (let i=0; i<cantidadVideos.length;i++) {
             for (let c=0;c<arrayTiempo.length;c++) {
                 arrayTiempo[c] = arrayTiempo[c] + Number(arrayInput[x].value); //horas 0 
                 ++x;
             }  
     }
     arrayTiempo[2]=calcularTiempo(2,1);
     arrayTiempo[1]=calcularTiempo(1,0);
     let textoResultado = document.getElementById("textoResultado") 
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