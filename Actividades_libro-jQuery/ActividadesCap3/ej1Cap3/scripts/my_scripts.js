$(document).ready(function() {
    $(".guess_box").click(checkForCode); //llamamos la funcion checkForCode que se ejecuta internamente con esete evento
    
    //llamamos al evento hover (este evento se activa a partir del posicionamiento del mouse sobre un elemento)
    $(".guess_box").hover (

        function() {
            //añadimos la accion que se realiza cuando el mouse se pone encima del elemento
            $(this).addClass("my_hover");
        },
        function() {
            //añadimos la accion que se realiza cuando el mouse se sale del elemento
            $(this).removeClass("my_hover");
        }
    );
        
    //creamos una funcion que genere un numero aleatorio y reciba un parametro que indique el valor maximo (n-1)
    function getRandom(num) {
        var my_num = Math.floor(Math.random()*num);
        return my_num;
    }

    //creamos una fncion que usa ese numero aleatorio para asignar un nuevo id a alguno de los divs (imagenes de la pagina)
    var hideCode = function() {
        var numRand = getRandom(4); //en este caso la funcion va a retornar un numero aleatorio entre 0 y 3
        $(".guess_box").each(function(index, value) { //funcion callback por referencia
            if(numRand === index) { //con esto elegimos a cual de los 4 elementos le asignamos el id de descuento 
                $(this).append("<span id='has_discount'></span>");
                return false;
            }
        });
    }

    //llamamos la funcion hideCode
    hideCode();

    function checkForCode() { //declaramos la funcion checkForCode
        //$(".guess_box p").remove(); //borramos el elemento p que previamente se pudo haber generado al hacer click
        
        var discount; //variable con la que se trabaja la impresion o no del descuento


        if($.contains(this, document.getElementById("has_discount"))) //con esto verificamos si el elemento que genero el evento es el mismo que tiene el id has_discount
        {
            var my_num = getRandom(100); //generamos el numero entre 0 y 99, que hace parte del codigo de descuento
            discount = "<p>Your Code: CODE" + my_num + "</p>";
        } else{
            discount = "<p>Sorry, no discount this time!</p>";
        }

        //generamos un numero aleatorio entre 5 y 10 e imprimimos el valor generado en una alert
        /*var discount = Math.floor((Math.random()*5) + 5);
        var discount_msg = "<p>Your Discount is "+ discount + "%</p>";*/
        //alert(discount_msg);
        //$(".guess_box").append(discount_msg); //imprimimos el mensaje en cada div
        
        $(this).append(discount); //usamos this para identificar el elemento especifico que generó el evento de click en este caso
        
        $(".guess_box").each( function() { //el metodo each crea un arreglo con cada elemento de la clase .guess_box y ejecuta la funcion interna con cada elemento
            
            //con esto verificamos si el elemento que genero el evento es el mismo que tiene el ID has_discount y en caso tal añadimos estilo con la clase discount
            if($.contains(this, document.getElementById("has_discount"))) 
            {
                $(this).addClass("discount");
            } else {
                $(this).addClass("no_discount");
            }


            $(this).unbind(); //el metodo unbind sirve para eliminar eventos generados previamente, en este caso eliminamos todos los eventos
        });

        $("#result").append(discount); //imprimimos en pantalla el mensaje generado (descuento o no descuento)

    } //fin de la funcion
});//fin de la funcion que hace clickeables los divs