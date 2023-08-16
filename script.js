const bg = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

let load = 0;
/*Esta función ejecutará la función blurring cada 30 milisegundos, lo que creará el efecto de transición gradual*/
let int = setInterval(blurring, 30);

function blurring() {
    load++;

    /*
        Si el valor de load supera 99 (es decir, la carga está completa o casi completa), se detiene el intervalo llamando a 
        clearInterval(int) para detener la ejecución de la función blurring
    */

    if (load > 99) {
        clearInterval(int);
    }

    loadText.innerHTML = `${load}%`;
    /* 
        Actualiza el contenido HTML del elemento con la clase "loading-text" para mostrar el porcentaje de carga actual, 
        utilizando el valor de la variable load.
    */

    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}


/*
    scale que toma un número y lo en un rango de entrada a un rango de salida. Esta función se utiliza para controlar la opacidad 
    y el desenfoque en función del progreso de carga.
*/

const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}