let puntosUsuario = 0;
let puntosPc = 0;

let contenedorPuntosUsuario = document.querySelector("#puntosJugador");
let contenedorPuntosPc = document.querySelector("#puntosComputadora");
let elejiTuArma = document.querySelector("#elijeArma");
let eleccion = document.querySelector("#eleccion");
let contenedorEleccionUsuario = document.querySelector("#eleccionJugador");
let contenedorEleccionPc = document.querySelector("#eleccionComputadora");
let ganasteUnPunto = document.querySelector ("#ganasteUnPunto");
let perdisteUnPunto = document.querySelector ("#perdisteUnPunto");
let empatePunto = document.querySelector ("#empate");
let reiniciar = document.querySelector ("#reiniciar");

let botonesArmas = document.querySelectorAll(".arma");
botonesArmas.forEach(boton => {
    boton.addEventListener("click", iniciarTurno);
});


function iniciarTurno(e) {
    let eleccionUsuario = e.currentTarget.id;
    let eleccionPc = Math.floor(Math.random()*3);
    

    if (eleccionPc === 0) {
        eleccionPc = "piedra";
    } else if (eleccionPc === 1) {
        eleccionPc = "papel";
    } else if (eleccionPc === 2) {
        eleccionPc = "tijera";
    }


    if (
        (eleccionUsuario === "piedra" && eleccionPc === "tijera") ||
        (eleccionUsuario === "papel" && eleccionPc === "piedra") ||
        (eleccionUsuario === "tijera"&& eleccionPc === "papel")
    ) {
        ganaUsuario();       
    } else if (
        (eleccionPc === "piedra" && eleccionUsuario === "tijera") ||
        (eleccionPc === "papel" && eleccionUsuario === "piedra") ||
        (eleccionPc === "tijera"&& eleccionUsuario === "papel")
    ){
        ganaPc();
    } else {
        empate();
    }
    eleccion.classList.remove("disabled");
    contenedorEleccionUsuario.innerText = eleccionUsuario;
    contenedorEleccionPc.innerText = eleccionPc;

    if (puntosUsuario === 5 || puntosPc ===5) {
        elejiTuArma.classList.add("disabled");
        reiniciar.classList.remove("disabled");
        reiniciar.addEventListener ("click", reiniciarJuego);
        }
    }



function ganaUsuario() {
    puntosUsuario++;
    contenedorPuntosUsuario.innerText = puntosUsuario;
    ganasteUnPunto.classList.remove("disabled");
    perdisteUnPunto.classList.add("disabled");
    empatePunto.classList.add("disabled");
}
function ganaPc() {
    puntosPc++;
    contenedorPuntosPc.innerText = puntosPc;
    perdisteUnPunto.classList.remove("disabled");   
    ganasteUnPunto.classList.add("disabled");
    empatePunto.classList.add("disabled");
}
function empate() {
    perdisteUnPunto.classList.add("disabled");
    ganasteUnPunto.classList.add("disabled");
    empatePunto.classList.remove("disabled");
}
function reiniciarJuego() {
    elejiTuArma.classList.remove("disabled");
    reiniciar.classList.add("disabled");
    eleccion.classList.add("disabled");

    puntosUsuario = 0;
    puntosPc = 0;
    
    contenedorPuntosUsuario.innerText = puntosUsuario;
    contenedorPuntosPc.innerText = puntosPc;
}