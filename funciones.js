const num1Input = document.getElementById('num1');
const operacionSelect = document.getElementById('operacion');
const num2Input = document.getElementById('num2');
const calcularButton = document.getElementById('calcular');
const resultadoP = document.getElementById('resultado');


calcularButton.addEventListener('click', calcular);


function calcular() {
    const num1 = parseFloat(num1Input.value);
    const operacion = operacionSelect.value;
    const num2 = parseFloat(num2Input.value);
    let resultado;

    switch (operacion) {
        case '+':
            resultado = num1 + num2;
            break;
        case '-':
            resultado = num1 - num2;
            break;
        case '*':
            resultado = num1 * num2;
            break;
        case '/':
            resultado = num1 / num2;
            break;
        default:
            resultado = 'Operación no válida';
    }

    
    resultadoP.textContent = `Resultado: ${resultado}`;

    
    const datos = {
        num1,
        operacion,
        num2,
        resultado
    };
    localStorage.setItem('calculadora', JSON.stringify(datos));
}

const datosStorage = localStorage.getItem('calculadora');
if (datosStorage) {
    const datos = JSON.parse(datosStorage);
    num1Input.value = datos.num1;
    operacionSelect.value = datos.operacion;
    num2Input.value = datos.num2;
    resultadoP.textContent = `Resultado: ${datos.resultado}`;
}