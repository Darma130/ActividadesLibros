$(document).ready(function(){

    //variables auxiliares que usamos para interactuar con cada parte de la cara del mounstruo
    var headclix = 0, eyeclix = 0, noseclix = 0, mouthclix = 0;

    //ejecutamos las 3 funciojnes creadas al final de este script para animar los lightning
    lightning_one(4000);
    lightning_two(5000);
    lightning_three(7000);


    $("#head").click(function() {
        if (headclix < 9) { //cuenta la cantidad de clicks que se hacen sobre este elemento hasta 9
            $(this).animate({left:"-=367px"},500); //con este metodo animamos el elemento para que se
            //muueva -367px a la izquierda cada que ocurra un click sobre el elemento hasta 9 veces
            headclix += 1;
        }
        else {
            $(this).animate({left:"0px"},500); //reiniciamos la ubicacion del elemento en 0 px
            headclix = 0; //reiniciamos la variable apenas terminen los 9 clicks (en el 10mo click)
        }
    });

    $("#eyes").click(function() {
        if (eyeclix < 9) { //cuenta la cantidad de clicks que se hacen sobre este elemento hasta 9
            $(this).animate({left:"-=367px"},500); //con este metodo animamos el elemento para que se
            //muueva -367px a la izquierda cada que ocurra un click sobre el elemento hasta 9 veces
            eyeclix += 1;
        }
        else {
            $(this).animate({left:"0px"},500); //reiniciamos la ubicacion del elemento en 0 px
            eyeclix = 0; //reiniciamos la variable apenas terminen los 9 clicks (en el 10mo click)
        }
    });

    $("#nose").click(function() {
        if (noseclix < 9) { //cuenta la cantidad de clicks que se hacen sobre este elemento hasta 9
            $(this).animate({left:"-=367px"},500); //con este metodo animamos el elemento para que se
            //muueva -367px a la izquierda cada que ocurra un click sobre el elemento hasta 9 veces
            noseclix += 1;
        }
        else {
            $(this).animate({left:"0px"},500); //reiniciamos la ubicacion del elemento en 0 px
            noseclix = 0; //reiniciamos la variable apenas terminen los 9 clicks (en el 10mo click)
        }
    });

    $("#mouth").click(function() {
        if (mouthclix < 9) { //cuenta la cantidad de clicks que se hacen sobre este elemento hasta 9
            $(this).animate({left:"-=367px"},500); //con este metodo animamos el elemento para que se
            //muueva -367px a la izquierda cada que ocurra un click sobre el elemento hasta 9 veces
            mouthclix += 1;
        }
        else {
            $(this).animate({left:"0px"},500); //reiniciamos la ubicacion del elemento en 0 px   
            mouthclix = 0; //reiniciamos la variable apenas terminen los 9 clicks (en el 10mo click)
        }
    });

});//end doc.onready function

//funciones para generar efectos con los lightning

function lightning_one(t) {
    $("#container #lightning1").fadeIn(250).fadeOut(250);
    setTimeout("lightning_one()",t); //con esto especificamos cuanto tiempo va a durar la funcion ejecutandose
};
function lightning_two(t) {
    $("#container #lightning2").fadeIn("fast").fadeOut("fast");
    setTimeout("lightning_two()",t); //con esto especificamos cuanto tiempo va a durar la funcion ejecutandose
}
function lightning_three(t) {
    $("#container #lightning3").fadeIn("fast").fadeOut("fast");
    setTimeout("lightning_three()",t); //con esto especificamos cuanto tiempo va a durar la funcion ejecutandose
}
