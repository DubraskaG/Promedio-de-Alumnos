//crear un array para los nombres
let nombresAlmn = ['Alex', 'Daniel', 'Andrea', 'Dubraska'];


//una matriz para sus habilidades
let habilidades = [
    [80, 75, 90], //Alex
    [65, 55, 60], //Daniel
    [80, 70, 70], //Andrea
    [85, 90, 80] //Dubraska
];

function calcularProm(habilidades){
    let promedios = [];

    for (let i=0;i<habilidades.length;i++){
        let fila = habilidades[i];
        let suma = fila.reduce((total,habilidad)=>total+habilidad,0);
        promedios[i] = suma/fila.length;
        
       /* Array.reduce((acumulador, elementoActual) =>{
            //lógica para combinar el acumulador con el elemento actual
        }, valorInicial)*/

    }
    
    return promedios;
}

function evaluarAptitud (nombresAlmn,promedios) {

    for (let i=0;i<habilidades.length;i++) {
        if (promedios[i] >= 70) {
            console.log('El alumno ' + nombresAlmn[i] + ' Supera el promedio con: ' + promedios[i]);
        }
        else {
            console.log('El alumno ' + nombresAlmn[i] + ' No supera el promedio con: ' + promedios[i]);
        }
    }
}

let promedios = calcularProm(habilidades);
evaluarAptitud(nombresAlmn,promedios);