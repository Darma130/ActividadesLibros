$(document).ready(function(){

    var used_cards = new Array(); //creamos el nuevo arreglo donde almacenamos las cartas usadas

    //instanciamos un objeto card (constructor del objeto)
    function card(name, suit, value) {
        this.name = name;
        this.suit = suit;
        this.value = value;
    }

    //creamos un arreglo de objetos tipo card creados usando el constructor anterior
    var deck = [
        new card('Ace', 'Hearts',11),
		new card('Two', 'Hearts',2),
		new card('Three', 'Hearts',3),
		new card('Four', 'Hearts',4),
		new card('Five', 'Hearts',5),
		new card('Six', 'Hearts',6),
		new card('Seven', 'Hearts',7),
		new card('Eight', 'Hearts',8),
		new card('Nine', 'Hearts',9),
		new card('Ten', 'Hearts',10),
		new card('Jack', 'Hearts',10),
		new card('Queen', 'Hearts',10),
		new card('King', 'Hearts',10),
		new card('Ace', 'Diamonds',11),
		new card('Two', 'Diamonds',2),
		new card('Three', 'Diamonds',3),
		new card('Four', 'Diamonds',4),
		new card('Five', 'Diamonds',5),
		new card('Six', 'Diamonds',6),
		new card('Seven', 'Diamonds',7),
		new card('Eight', 'Diamonds',8),
		new card('Nine', 'Diamonds',9),
		new card('Ten', 'Diamonds',10),
		new card('Jack', 'Diamonds',10),
		new card('Queen', 'Diamonds',10),
		new card('King', 'Diamonds',10),
		new card('Ace', 'Clubs',11),
		new card('Two', 'Clubs',2),
		new card('Three', 'Clubs',3),
		new card('Four', 'Clubs',4),
		new card('Five', 'Clubs',5),
		new card('Six', 'Clubs',6),
		new card('Seven', 'Clubs',7),
		new card('Eight', 'Clubs',8),
		new card('Nine', 'Clubs',9),
		new card('Ten', 'Clubs',10),
		new card('Jack', 'Clubs',10),
		new card('Queen', 'Clubs',10),
		new card('King', 'Clubs',10),
		new card('Ace', 'Spades',11),
		new card('Two', 'Spades',2),
		new card('Three', 'Spades',3),
		new card('Four', 'Spades',4),
		new card('Five', 'Spades',5),
		new card('Six', 'Spades',6),
		new card('Seven', 'Spades',7),
		new card('Eight', 'Spades',8),
		new card('Nine', 'Spades',9),
		new card('Ten', 'Spades',10),
		new card('Jack', 'Spades',10),
		new card('Queen', 'Spades',10),
		new card('King', 'Spades',10)
    ];

    //instancciamos un nuevo objeto hand para la mano
    var hand = {
        cards: new Array(), //aqui añadimos cada obeto card que tenga el usuario
        current_total: 0,

        sumCardTotal: function() {
            this.current_total = 0;
            for(var i=0; i<this.cards.length;i++) { //obtenemos la sumatoria de cartas que tiene el usuario
                var c = this.cards[i];
                this.current_total += c.value;
            }
            //de esta forma accedemos al elemento con id en mencion de html para que se agregue el texto puesto alli
            $("#hdrTotal").html("Total: " + this.current_total);
            
            //añadimos condicionales para veriicar qué mano tiene el jugador (si ya hizo 21 o perdio)
            if(this.current_total > 21) { //si se cumple esto pierde
                $("#btnStick").trigger("click");
                $("#imgResult").attr('src','images/x2.png');
                $("#hdrResult").html("BUST!")
                               .attr('class', 'lose');
            } else if(this.current_total == 21) { //si se cumple esto hace blackjack
                $("#btnStick").trigger("click");
                $("#imgResult").attr('src','images/check.png');
                $("#hdrResult").html("BlackJack!")
                               .attr('class', 'win');
            } else if(this.current_total <= 21 && this.cards.length == 5) { //se verifica si ya llego a 5 cartas y no ha hecho 21
                $("#btnStick").trigger("click");
                $("#imgResult").attr('src','images/check.png');
                $("#hdrResult").html("BlackJack - 5 card trick!")
                               .attr('class', 'win');
            } else {
                //Continuna jugando
            }
        }       

    };
    
    //funcion del dealer
    function deal() {
        for(var i = 0; i<2; i++) {
            hit(); //ejecutamos 2 veces la funcion hit, que se crea mas abajo
        }  
    }

    //funcion para generar numero aleatorio
    function getRandom(num) {
        var my_num = Math.floor(Math.random()*num); //generamos un numero aleatorio con un rango entre 0 y el num-1 dado por el usuaro
        return my_num;
    }

    //creacion de la funcion hit()
    function hit() {
        var good_card = false; //variable a tener en cuenta para el ciclo do while
        do {
            var index = getRandom(52); //obtenemos un numero aleatorio entre 0 y 51
            if (!$.inArray(index, used_cards)> -1) { //con esto verificamos que la carta obtenida aleatoriamente (index) no este repetida
                good_card = true; //no esta repetida la carta, poreso se pone true
                var c = deck[index]; //almacenamos la carta obtenida de la baraja
                used_cards[used_cards.length] = index; //añadimos el numero correspondiente a la carta usada
                hand.cards[hand.cards.length] = c; //añadimos la carta obtenida a la mano del jugador
               
                var $d = $("<div>");
                $d.addClass("current_hand").appendTo("#my_hand");

                $("<img>").appendTo($d)
                          .attr('src','images/cards/' + c.suit + '/' + c.name + '.jpg')
                          .fadeOut('slow')
                          .fadeIn('slow');
            }
        } while (!good_card); //repetimos el proceso hasta que encuentre una carta correcta
        good_card = false;
        hand.sumCardTotal(); //finalizando la funcion, ejecutamos este metodo, del objeto hand, para verificar el juego del usuario
    }

    $("#btnDeal").click(function() {
        deal();
        $(this).toggle(); //muestra o quita la imagen inicial, que ejecuta este evento
        $("#btnHit").toggle(); //muestra o quita la imagen de este elemento
        $("#btnStick").toggle(); //muestra o quita la imagen del duende
    });

    //USO DE BTNHIT
    $("#btnHit").click( function(){
		hit();
    });
    
    //funcion para finalizar el juego (cambia de estado los elementos de los botones de control)
    function end(){
		$("#btnHit").toggle();
		$("#btnStick").toggle();
		$("#btnRestart").toggle();
	}

    $("#btnStick").click( function() {
        $("#hdrResult").html('Stick!')
                       .attr('class', 'win'); //ponemos este mensaje en pantalla y añadimos la clase win, en este elemento
        $("result").toggle();
        end();
    });
    //boton de reinicio
    $("#btnRestart").click( function() {
        //reiniciamos todos los elementos
        $("#result").toggle();
        $(this).toggle();
        $("#my_hand").empty();
        $("#hdrResult").html('');
        $("#imgResult").attr('src','images/check.png');

        used_cards.length = 0;
        hand.cards.length = 0;
        hand.current_total = 0;

        $("#btnDeal").toggle()
                     .trigger('click'); //simulamos el click del elemento
    });

});