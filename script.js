$(document).ready(function () {
    const parkedCars = [];

    // Cargar los datos desde un archivo JSON usando AJAX
    $.getJSON('vehicles.json', function (data) {
        // Guardar los datos cargados en parkedCars
        data.forEach(function (car) {
            parkedCars.push(car);
        });

        // Mostrar los autos que ya están estacionados
        displayParkedCars();
    });

    // Array de tipos de vehículos
    const carTypes = ["Auto", "Moto", "Camioneta", "Bicicleta"];

    // Llenar el select con los tipos de vehículos
    carTypes.forEach(function (type) {
        $('#car-select').append(`<option value="${type}">${type}</option>`);
    });

    // Evento cuando el botón de "Estacionar" es presionado
    $('#park-button').on('click', function () {
        const license = $('#license-input').val().toUpperCase();
        const carType = $('#car-select').val();
        
        // Validar si el input de patente no está vacío
        if (license === '') {
            alert('Por favor, ingresa la patente del vehículo.');
            return;
        }

        // Agregar el auto estacionado al array
        const car = {
            license: license,
            type: carType
        };

        parkedCars.push(car);

        // Mostrar los autos estacionados
        displayParkedCars();

        // Limpiar el input
        $('#license-input').val('');
    });

    // Función para mostrar los autos estacionados
    function displayParkedCars() {
        // Limpiar la lista anterior
        $('#parked-cars').empty();
        
        // Mostrar cada auto estacionado
        parkedCars.forEach(function (car, index) {
            $('#parked-cars').append(`<div>Auto ${index + 1}: Patente ${car.license}, Tipo ${car.type}</div>`);
        });

        // Actualizar el contador de autos estacionados
        $('#car-count').text(parkedCars.length);
    }
});
