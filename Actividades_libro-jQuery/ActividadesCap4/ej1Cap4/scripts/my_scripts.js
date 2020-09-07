$(document).ready(function(){
 
var v = false;
var $f, $m; //estos tipos de variable (con el signo precedente $) se usan para almacenar datos que son retornados
//por metodos de jQuery
 
	//funcion que se genera cuando ocurre el evento de click
	$("button#vegOn").click(function(){ 
 		if (v == false){
		 
			//con estas funciones .parent() se dice que se acceda al padre de este elemento, y cuando hay varios,
			//como en este caso, se dice que se obtiene la informacion del padre siguiente en el arbol jerarquico
			//con detach() se obtiene la informacion de ese padre y se puede almacenar en una variable para usarse 
			//posteriormente, porque se elimina en ese momento
			$f = $(".fish").parent().parent().detach(); 

			//con replaceWith() hacemos tomamos todos los elementos con la clase .hamburguer y se reemplazan por
			//lo que dice en el argumento de este metodo 
			//(NOTA: este metodo no se puede usar mas de una en un mismo momento)
			$(".hamburger").replaceWith("<li class='portobello'><em>Portobello Mushroom</em></li>"); 
			$(".portobello").parent().parent().addClass("veg_leaf"); //añadimos esa clase que es una imagen
	
			//con este metodo .after se realiza una accion similar a replqaceRith, sino que en este caso se
			//añade la informacion que se indica en el argumento despues de los elementos de la clase en mencion
			//en este caso la clase ".meat"
			$(".meat").after("<li class='tofu'><em>Tofu</em></li>"); 

			//despues de añadir lo anterior, almacenamos los elementos de la clase .meat a la variable aux.
			//para luego de esto eliminar la clase con .detach()
			$m = $(".meat").detach();
			$(".tofu").parent().parent().addClass("veg_leaf");
		
			v = true;
    	}// end if
  });//end veg button

	$("button#restoreMe").click(function(){
	
		if (v == true){

			//eliminamos la clase veg_leaf (imagen de hoja) de los elementos con la clase .portobello
			$(".portobello").parent().parent().removeClass("veg_leaf");
			//reemplazamos esa clase por la clase hamburguer 
			$(".portobello").replaceWith("<li class='hamburger'>Ha-mburger</li>");

			$(".menu_entrees li").first().before($f);
		
			$(".tofu").parent().parent().removeClass("veg_leaf");
			$(".tofu").each( function(i){
				$(this).after($m[i]);
			});//end each
			$(".tofu").remove();
			v = false;
		}//end if
	});//end restoreMe button
});//end doc ready