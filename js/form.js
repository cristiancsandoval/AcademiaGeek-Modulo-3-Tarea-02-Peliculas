//Almacenamiento de valores en localstorage
document.addEventListener('DOMContentLoaded', function(){
    obtenerValor();
    }
);

function capturarDatos(){
    
    let nombre = document.getElementById('inputNombre').value;
    let apellido = document.getElementById('inputApellido').value;
    let telefono = document.getElementById('inputTelefono').value;
    let direccion = document.getElementById('inputDireccion').value;
    let observaciones = document.getElementById('inputObservaciones').value;

    let datos={
        nomb: nombre,
        apel: apellido,
        tel: telefono,
        dir: direccion,
        obs: observaciones
    }

    localStorage.setItem('Datos', JSON.stringify(datos));

}

function obtenerValor(){

    let extraccion = localStorage.getItem('Datos');

}