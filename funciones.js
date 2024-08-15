const operaciones = ["Suma", "Resta", "Multiplicación", "División"];

        
function iniciarCalculadora() {
    
    const operacionSeleccionada = prompt(`Seleccione una operación: 
        ${operaciones.join("\n")}`);

   
    const indiceOperacion = operaciones.indexOf(operacionSeleccionada);

    if (indiceOperacion !== -1) {
        
        const num1 = parseFloat(prompt("Ingrese el primer número: "));
        const num2 = parseFloat(prompt("Ingrese el segundo número: "));

        
        const resultado = realizarOperacion(indiceOperacion, num1, num2);

        
        alert(`Resultado: ${resultado}`);
    } else {
        alert("Operación no valida");
    }
}


function realizarOperacion(indiceOperacion, num1, num2) {
    switch (indiceOperacion) {
        case 0:
            return num1 + num2;
        case 1:
            return num1 - num2;
        case 2:
            return num1 * num2;
        case 3:
            return num1 / num2;
        default:
            return "Operación no valida";
    }
}


function buscarEnArray(arr, valor) {
    return arr.indexOf(valor);
}


function filtrarArray(arr, predicado) {
    return arr.filter(predicado);
}