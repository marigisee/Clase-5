
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

const $botonIngreso = document.querySelector('#boton-submit') //seleccion del botón
$botonIngreso.onclick = function() { //descripción de lo que va a ocurrir cuando se apreta el botón 
     const salarioAnual = Number(document.querySelector("#dato").value);
     const salarioMensual = calcularSalario(salarioAnual);
     document.querySelector('#resultado').value = "$" + salarioMensual; 
     return false
    }  
function calcularSalario (salarioAnual){
    const numero = 12;
    return salarioAnual/numero;
}