/*Fechas precios por fecha*/

var fechaJunio = 500;
var primerSemanaFebrero = 1000;
var segundaQuincenaFebrero = 1500;


/*Precio Hotel prueba*/

var precioHotelPoland = 11800;

/*Precio por habitacion*/ 

var precioporHabitacion = 11800; 

var result = $('#result-p');
var step1 = $('#step1');
var step2 = $('#step2');
var step3 = $('#step3');
var step4 = $('#step4');
var step5 = $('#step5');
var step6 = $('#step6');
var step7 = $('#step7');

$(document).ready(function () {
    $('.btn-help').click(function(){
        result.toggle(1000);
    })

    $('.btn1').click(function(){
        step1.hide();

    })

    $('.btn1').click(function(){
        step2.show(5000);

    })

    $('.btn-send').click(function(){
        step2.hide(5000);

    })

  
    $('.btn-send').click(function(){
        step3.show(5000);

    })

    $('.boton1-bi').click(function(){
        step3.hide(5000);

    })


    $('.boton1-bi').click(function(){
        step4.show();

    })

    $('.btn1-r').click(function(){
        step4.hide();

    })

    $('.btn1-r').click(function(){
        step5.show();

    })

    $('.btn-send2').click(function(){
        step5.hide();

    })

    $('.btn-send2').click(function(){
        step6.show();

    })
    
    $('.btn-ctz1').click(function(){
        step6.hide();

    })

    $('.btn-ctz1').click(function(){
        step7.show();

    })
        
        

});

document.querySelector('.btn-send').addEventListener('click', traerDatos());

function traerDatos(){
    
    const xhttp = new XMLHttpRequest();

    xhttp.open('GET', 'js/data.json', true);

    xhttp.send();
    
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status ==200){
            
        let data = JSON.parse(this.responseText);
        //console.log(data);
        
        let res = document.querySelector('#hotel1');
        res.innerHTML = '';

        for(let item of data){
            //console.log(item.location);
            res.innerHTML += `
            <img class="hotel1-img" src="${item.img}" alt="hotel1"/>
            <div class="contenedor-hoteles-textos">
            <h4 class="nombre-hotel">${item.name}</h4>
            <h4 class="ubicacion-hotel"><img class="location-hotel" src="images/location-hotel.svg" alt="location"/>${item.location}</h4>
            <p class="descripcion-hotel">${item.description}</p>
            <p class="price-hotel">${item.precio}<span class="texto-night-light"> / night</span></p>
            <img class="stars-fav" src="images/stars-hotel.svg" alt="heart"/>
            <p class="stars-hotel">${item.rate}</p>

            `
            
        }

            
        }


       

        }
    }



/*sumar un presupuesto parcial con el precio del hotel + precio de la fecha*/ 

document.getElementsByClassName("btn1-r").onclick =function (){
    var precioTotalConFecha = document.getElementsByClassName("btn1-r").value;
    if (precioTotalConFecha== 1){
    var precioParcial1 = precioHotelPoland + fechaJunio; 
        console.log=(precioParcial1);
    }
    if (precioTotalConFecha== 2){
        var precioParcial2 = precioHotelPoland + primerSemanaFebrero; 
            console.log=(precioParcial2);
    }

    else if (precioTotalConFecha== 3){
        var precioParcial3 = precioHotelPoland + primerSemanaFebrero; 
            console.log=(precioParcial3);
    }


    

}


/* variables que contienen el precio parcial */

var precioParcial1
var precioParcial2
var precioParcial3


/*seleccionar cantidad de habitaciones y sumar 11800 por habitacion
document.getElementById("roomSelect").onclick =function (){
    var precioParcialporHabitacion = document.getElementById("roomSelect").value;
    for (let sumar of precioParcialporHabitacion ){
        if precioParcialporHabitacion  
    }
    */
   document.getElementById("roomSelect").onclick =function (){
        var cantidadHabitaciones = document.getElementById("roomSelect").value;
      
        switch(cantidadHabitaciones) {
          case "1":
            var precioTotalCantHabitaciones = precioHotelPoland;
           console.log=(precioTotalCantHabitaciones);
          break;
          case "2":
            var precioTotalCantHabitaciones2 = precioHotelPoland*2;
            console.log=(precioTotalCantHabitaciones2);
          break;
          case "3":
            var precioTotalCantHabitaciones3 = precioHotelPoland*3;
            console.log=(precioTotalCantHabitaciones3);
          break;
          default:
          console.log= "No more available rooms"
        }


        
      }
   

/*presupuesto total:  precio de hotel + fecha seleccionada + cantidad de habitaciones elegidas

var elementsTotalPrice = document.querySelectorAll("precio-total");
console.log(elementsTotalPrice);
elementsTotalPrice.forEach(x => {
    x.innerHTML = parseInt(precioParcial1) + parseInt(precioTotalCantHabitacione);
}

*/


