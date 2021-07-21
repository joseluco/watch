function relojTiempo() {
    const tiempo = new Date();
        /* tiempo toda todos los datos del constructor Date(), fecha, hora, segundos, dias, etc. Estan almacenados alli.
        Despues hay que tomarlos con los metodos del tiempo
        */
    
        // horas-minutos-segundos 
        /* al asignar valor a la variable uso operador ternario par evitar un if posterior y ahorrar linea de codigo para especificar los minutos y segudos de 0-9 y no pierda el estilo por faltar un numero
        en let hora 
        */
    let hora = tiempo.getHours()
    let minuto = (tiempo.getMinutes() < 10) ? `0${tiempo.getMinutes()}` : tiempo.getMinutes()
    let segundo = (tiempo.getSeconds() < 10) ? `0${tiempo.getSeconds()}` : tiempo.getSeconds()
    let ampm = (hora >= 12) ? "PM" : "AM"
    
    /* let hora 
    si son las 00 (12 de la noche) reemplaza a 12am.
    de horario PM resta 12 para dar la hora en numero hasta 12
    */
    if (hora == 0) {
    hora = 12
    } else if (hora > 12) {
    hora = `0${hora - 12}`
    } else {
    hora = `0${hora}`
    }
    
    // hora completa formada
    const horaReloj = `${hora}:${minuto}:${segundo}`
    
    // impresion del reloj
    document.querySelector(".hms").textContent = horaReloj
    document.querySelector(".ampm").textContent = ampm
    
    /* Dia de la semana, Dia del mes, Mes */
    const diaSemana = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miercoles",
    "Jueves",
    "Viernes",
    "Sabado"
    ]
    
    const diaMes = tiempo.getDate();
    
    const mes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
    ]
    
    // fecha entera 
    const fecha = `${diaSemana[tiempo.getDay()]}, ${diaMes} de ${mes[tiempo.getMonth()]}`
    
    document.querySelector(".calendario").textContent = fecha;
    }
    
    // ejecucion de la funcion y actualizacion cada un segundo
    setInterval(relojTiempo, 1000)