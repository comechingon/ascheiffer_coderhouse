
let marcaVehiculo = prompt("Ingrese la marca de su vehículo")
let modeloVehiculo = prompt("Ingrese el modelo de su vehículo")
let cantidadkilometros = parseInt(prompt("Ingrese los kilómetros de su vehículo"))
let combustible = prompt("Ingrese tipo de combustible")
let anioVehiculo = parseInt(prompt("Ingrese el Año de su vehículo"))
let email = prompt("Ingrese su e-mail")

let anioActual = 2022



if (anioVehiculo == anioActual || cantidadkilometros <= 10000) {
    alert("Su vehículo está en garantía de fábrica. Le recomandamos ir al Concesionario Oficial");
    
} else { 
    alert("En las próximas 24hs le enviaremos un presupuesto con los trabajos a realizar a su casilla de correo");
}


anioVehiculo = 0
while (anioVehiculo < 2022) { 
console.log("En las próximas 24hs le enviaremos un presupuesto con los trabajos a realizar a su casilla de correo" + anioVehiculo);
anioVehiculo++;
}


let aceite = 2000
let filtros = 3000
let correa = 5000
let lavado = 1000
let encerado = 500

function calcularServiceBasico(aceite, filtros, correa) {

    const basico = aceite + filtros + correa;
    console.log(basico);
}

function calcularServicePremium(aceite, filtros, correa, lavado, encerado) { 

const premium = aceite + filtros + correa + lavado + encerado;
console.log(premium);

}











