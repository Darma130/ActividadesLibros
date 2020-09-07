$(document).ready(function(){

	//(manejamos el control de los clicks hechos por el usuario en cada parte de la cara con este arreglo)
	var clix = [0,0,0,0]; // head,eyes,nose,mouth 
	
	var distance = 367; //definicion del ancho de cada imagen para realizar el corrimiento
	var num_monsters = 10; //cantidad de mounstruos existentes en cada imagen

	var int1, int2, int3; //con estas tres variables recordamos los tiempos en los que el exporador 
	//puede reiniciar los elementos de nuevo
	
	//usamos esta funcion para alacenar en cada variable la ejecucion de las 3 funciones
	function runLightning(){
		int1 = setInterval( function() {
					lightning_one();
				}, 	
				4000
			);
		
		int2 = setInterval( function() {
					lightning_two();
				}, 	
				5000
			);
		int3 = setInterval( function() {
					lightning_three();
				}, 	
				7000
			);
	}
	
	function stopMe()
	{
	   window.clearInterval(int1);
	   window.clearInterval(int2);
	   window.clearInterval(int3);

	}

	//instancia de las funciones para manejo de efectos de los lightning
	function lightning_one(){
		$("#container #lightning1").fadeIn(250).fadeOut(250);
	};
	
	function lightning_two(){
		$("#container #lightning2").fadeIn("fast").fadeOut("fast");
	};
	
	function lightning_three(){
		$("#container #lightning3").fadeIn("fast").fadeOut("fast");
	};

	//manejo del objeto ventana y metodos onblur (dejar de ver primero la ventana del explorador)
	//y onfocus (ver la ventana del explorador de primero)
	window.onblur = stopMe;
	window.onfocus = runLightning;
	runLightning(); //ejecutamos la funcion apenas se abra la pagina

	//eventos que permiten la ejecucion de la funcion moveMe por cada parte de la cara del mounstruo
	$("#head").click( function(){
		moveMe(0, this)
	});//end click function
	
	$("#eyes").click( function(){
		moveMe(1, this)
	} );//end click function
	
	$("#nose").click( function(){
		moveMe(2, this)
	});//end click function
	
	$("#mouth").click( function(){
		moveMe(3, this)
	});//end click function

	//esta funcion recibe, como primer parametro, la posicion del arreglo clix con el que contamos
	//la cantidad de clicks que se hacen en cada parte de la cara para ejecutar el movimiento de 0 a 8
	//y en ese momento, en el click 9, reiniciar la posicion de la imagen
	//el segundo parametro es el objeto (parte de la cara del mounstruo) que se va a manipular
	function moveMe(i, obj){
		
		if (clix[i] < 9){
			$(obj).animate({left:"-=367px"},500);
			clix[i] = clix[i]+1;
		}else{
			clix[i] = 0;
			$(obj).animate({left:"0px"},500);
		}
	}
	
	$("#btnRandom").click( randomize ); //ejecutamos la funcion randomize con el evento click 
	
	$("#btnReset").click( reset ); //ejecutamos la funcion de renicio del mounstro con el evento de click
	
	//funcion para generar numero aleatorio
	function getRandom(num){
		var my_random_num = Math.floor(Math.random()*num);
		return my_random_num;
	}
	
	//instanciamos la funcion que genera el mounstruo aleatorio
	function randomize(){
		$(".face").each(function(index){
			var target_position = parseInt( (getRandom(num_monsters) + clix[index]) % num_monsters); 
			var current_position = clix[index] ;
			
			clix[index] = target_position;
			
			if( target_position > current_position ) {
				var move_to = (target_position - (current_position % distance) ) * distance; 
				$(this).animate({left:"-="+move_to+"px"},500);
			}else if( target_position < current_position ){
				var move_to = ( (current_position % distance) - target_position) * distance; 
				$(this).animate({left:"+="+move_to+"px"},500);
			}else{
				// They are the same - Don't move it.
			}
		});
	};

	//instanciamos la funcion para reiniciar el mounstruo a la cara inicial
	function reset(){
		$(".face").each(function(index){
			var move_to = clix[index] * distance;
			clix[index] = 0;
			$(this).animate({left:"+="+move_to+"px"},500);
		});
	}

});//end doc.onready function
