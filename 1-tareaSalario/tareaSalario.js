
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>


document.querySelector("#dato").value // valor salario mensual
Number(document.querySelector("#dato").value) 
const $botonIngreso = document.querySelector('#botonSubmit') //seleccion del botón
$botonIngreso.onclick = function() { //descripción de lo que va a ocurrir cuando se apreta el botón 
     const salarioAnual = Number(document.querySelector("#dato").value);
     const salarioMensual = calcularSalario(salarioAnual);
     document.querySelector('#resultado').value = "$" + salarioMensual; 
     return false
    }  
function calcularSalario (salarioAnual){
    return salarioAnual/12
}