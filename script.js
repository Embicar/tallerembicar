
// =========================
// HORARIO DEL TALLER
// =========================

function actualizarHorario() {

    // Obtenemos la fecha y hora actual
    const ahora = new Date();

    const dia = ahora.getDay();

    const hora = ahora.getHours();

    const minutos = ahora.getMinutes();


    // Convertimos la hora actual a minutos

    const horaActual = (hora * 60) + minutos;


    // Horario del taller

    const apertura = 8 * 60;   // 08:00

    const cierre = 19 * 60;    // 19:00


    // Lunes a viernes

    const diaLaboral = dia >= 1 && dia <= 5;


    // ¿Está abierto?

    const estaAbierto =
        diaLaboral &&
        horaActual >= apertura &&
        horaActual < cierre;


    // Buscamos los elementos del HTML

    const estado = document.getElementById("estado-horario");

    const punto = document.getElementById("punto-horario");


    // Si está abierto

    if (estaAbierto) {

        estado.textContent = "ABIERTO AHORA";

        punto.classList.add("abierto");

        punto.classList.remove("cerrado");

    }

    // Si está cerrado

    else {

        estado.textContent = "CERRADO";

        punto.classList.add("cerrado");

        punto.classList.remove("abierto");

    }

}


// Ejecutar cuando se carga la página

actualizarHorario();


// Volver a comprobar cada minuto

setInterval(actualizarHorario, 60000);
