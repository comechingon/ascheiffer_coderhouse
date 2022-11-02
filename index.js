
//Primera entrega


let marcaVehiculo = prompt("Ingrese la marca de su vehículo")
let modeloVehiculo = prompt("Ingrese el modelo de su vehículo")
let cantidadkilometros = parseInt(prompt("Ingrese los kilómetros de su vehículo"))
let combustible = prompt("Ingrese tipo de combustible")
let anioVehiculo = parseInt(prompt("Ingrese el Año de su vehículo"))
let email = prompt("Ingrese su e-mail")

let anioActual = 2022



if (anioVehiculo == anioActual || cantidadkilometros <= 10000) {
    alert("Su vehículo está en garantía de fábrica. Le recomandamos ir al Concesionario Oficial");
    
} /*else { 
    alert("En las próximas 24hs le enviaremos un presupuesto con los trabajos a realizar a su casilla de correo");
}*/


anioVehiculo = 0
while (anioVehiculo < 2022) { 
console.log("En las próximas 24hs le enviaremos un presupuesto con los trabajos a realizar a su casilla de correo" + anioVehiculo);
anioVehiculo++;
}


/*let aceite = 2000
let filtros = 3000
let correa = 5000
let lavado = 1000
let encerado = 500

function calcularServiceBasico(aceite, filtros, correa) {

   return aceite + filtros + correa;
    
}
console.log calcularServiceBasico;

function calcularServicePremium(aceite, filtros, correa, lavado, encerado) { 

const premium = aceite + filtros + correa + lavado + encerado;
console.log(premium);

}*/

/*const formulario = document.getElementById("formulario")

 const inputNombre = document.createElement("input")

 formulario.append(inputNombre)*/



 //Segunda Entrega: Arrays, objetos, metodos.


 const productos = []

 class Producto{

    constructor(id, name, price) { 
       
         this.id = id
         this.name = name
         this.price = price
        
  }
    
 }

 const producto1 = new Producto(1, 'service basico', 10000)
 productos.push(producto1)
 const producto2 = new Producto(2, 'service completo', 15000)
 productos.push(producto2)
 const producto3 = new Producto(3, 'service premium', 25000)
 productos.push(producto3)
 const producto4 = new Producto(4, 'service extreme', 30000)
 productos.push(producto4)
 

 

console.log(productos)

//dom
const selectTag = document.getElementById('lista')

productos.forEach(producto=>{
    const optionTag = document.createElement('option')
    optionTag.innerText = '${producto.name}: $${producto.price}'
    selectTag.append(optionTag)
})


 

 










