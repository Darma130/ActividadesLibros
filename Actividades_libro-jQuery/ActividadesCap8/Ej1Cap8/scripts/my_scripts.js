
$(document).ready(function(){

    $.ajax({
        url: "finishers.xml", //cargamos el archivo finishers
        cache: false,
        dataType: "xml",
        success: function(xml) {
        }
    });

	getTime(); // funcion para obtener el tiempo transcurrido
    
    //instanciamos la funcion para obtener el tiempo transcurrido
	function getTime(){
        var a_p = "";
        var d = new Date(); //creacion de un objeto tipo Date para manejo del tiempo en fecha
        var curr_hour = d.getHours(); //almacenamos la hora
        
        (curr_hour < 12) ? a_p = "AM" : a_p = "PM";
        (curr_hour == 0) ? curr_hour = 12 : curr_hour = curr_hour;
        (curr_hour > 12) ? curr_hour = curr_hour - 12 : curr_hour = curr_hour;
        
        var curr_min = d.getMinutes().toString();
        var curr_sec = d.getSeconds().toString();
        
        if (curr_min.length == 1) { curr_min = "0" + curr_min; }
        if (curr_sec.length == 1) { curr_sec = "0" + curr_sec; } 
        
        $('#updatedTime').html(curr_hour + ":" + curr_min + ":" + curr_sec + " " + a_p );
    }
});
