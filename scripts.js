document.addEventListener('DOMContentLoaded', () => {
    const ruta = document.getElementById('ruta');
    const servicio = document.getElementById('servicio');
    const cantidad = document.getElementById('cantidad');
    const precio = document.getElementById('precio');
    const totalUS = document.getElementById('total-us');


    function updateTarifa() {
        const tarifaBase = parseFloat(ruta.value);
        const variacionServicio = parseFloat(servicio.value);
        const cantidadPasajes = parseInt(cantidad.value);

        if (isNaN(cantidadPasajes) || cantidadPasajes <= 0) {
            alert('La cantidad debe ser un número positivo.');
            return;
        }


        let tarifaFinal = tarifaBase + (tarifaBase * variacionServicio);
        if (cantidadPasajes >= 3) {
            tarifaFinal *= (cantidadPasajes - 1);
        } else {
            tarifaFinal *= cantidadPasajes;
        }


        precio.value = tarifaFinal.toFixed(2);
        totalUS.value = (tarifaFinal / 3.5).toFixed(2);

 
        precio.style.color = 'blue';
        totalUS.style.color = 'green';
    }


    document.getElementById('calcular').addEventListener('click', () => {
        const cantidadPasajes = parseInt(cantidad.value);

        if (!document.getElementById('fecha').value ||
            !document.getElementById('dni').value ||
            !document.getElementById('pasajero').value ||
            !cantidad.value ||
            isNaN(cantidadPasajes) || cantidadPasajes <= 0) {
            alert('Por favor, complete todos los campos correctamente y asegúrese de que la cantidad sea un número positivo.');
            return;
        }

        updateTarifa();
    });
});

