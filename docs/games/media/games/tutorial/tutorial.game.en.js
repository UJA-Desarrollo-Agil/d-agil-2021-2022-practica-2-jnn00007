// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {

    	inicio: new undum.SimpleSituation(
        	"<h1>En casa</h1>\
        <img src='media/games/tutorial/calendario.png' class='float_right'>\
        <p>Era el día, era hoy. Tras meses de espera, el día\
        del gran partido tan esperado había llegado. Te acabas de levantar\
		de la cama aunque ya llevabas despierto varias horas por los nervios.</p>\
        \
        <p>Es hora de ponerse en marcha, había costado mucho conseguir las\
        entradas del partido y no podíamos llegar tarde. Podemos ir\
		<a href='./desayuno' class='once'>desayunar</a> para\
        tomar energía, a <a href='./amigos' class='once'>llamar a nuestros amigos</a> por si alguno se ha dormido,\
		o ir a <a href='mochila'>preparar la mochila</a> con todas las cosas y que no se nos olvide nada.</p></br>",
		{
				actions: {
					"desayuno": function(character, system, to) {
						system.setQuality("hambriento", 0);
				system.write(
				"<h1>Desayuno</h1>\
				<p>Que bien que sienta una buena tostada con jamón y aceite\
				para empezar con fuerza el día.\
				<center><img src='media/games/tutorial/tostada.png' class='float-left'></center>\
				</p></br>")},
				
				"amigos": "<h1>¿A quien quieres llamar?</h1>\
				\
				<p>Puedes <a href='./juande' class='once'>llamar a Juande</a> o bien\
				puedes <a href='./pedro' class='once'>llamar a Pedro</a>\
				</p></br>",
				
				"pedro":"<h1>Llamando a Pedro</h1>\
				<img src='media/games/tutorial/pedro.png' class='float_left'>\
				<p>Pedro me lo coge.</p>\
				\
				<p>Hola Juan buenos días, estoy super emocionado por el partido, !!!no he podido dormir en toda la noche!!!\
				Por cierto, me acercaré a casa de Juande a ver si se ha quedado dormido.</p>\
				\
				<p>Vayamos ahora si a <a href='mochila'>preparar la mochila</a></p></br>",

				"juande":"<h1>Llamando a Juande</h1>\
				<img src='media/games/tutorial/juande.png' class='float_right'>\
				<p>¡¡¡JUANDE NO ME CONSTESTA!!!</p></br>"
				
            	}
        	}
  	),


	ultrasur: new undum.SimpleSituation(
		"<h1>LOS ULTRA SUR</h1>\
		<p>Finalmente decidimos ir a ver a los ultra sur del Real Madrid, así que ponemos rumbo\
		a la plaza del Sagrado Corazón por donde pasaría el autobus.</p>\
		\
		<p>Y allí estaban, aquello era alucinante, una marea de personas vestidas de blanco\
		con vengalas y animando a el equipo. Aquello supuso una subida de adrenalina impresionante\
		, con los pelos de punta y los nervios a flor de piel. Estabamos super motivados.\</p></br>\
		<center><img src='media/games/tutorial/ultrasur.png' class='float-left'></center>\
		<p>Vamos, es hora de ir al <a href='entradapartido'> santiago bernabeu</a> el partido va a comenzar.</p>",
		
		
		{
		enter: function(character, system, to) {
					system.setQuality("motivado", 1);
					system.setQuality("hambriento", 1)
				}
		}
	),

	comerbocata: new undum.SimpleSituation(
		"<h1>Bocata antes de entrar</h1>\
		<p>Finalmente decidimos dejar de lado a los ultra sur del Real Madrid ya que\
		la plaza del Sagrado Corazón donde estaban ellos estaba muy lejos.</p>\
		\
		<p>Así que, preferimos comernos los bocadillos que mi madre nos hizo para no llegar hambrientos al partido\
		aunque si un poco desmotivados por no ver a la afición\</p></br>\
		<center><img src='media/games/tutorial/bocadillos.png' class='float-left'></center>\
		<p>Vamos, es hora de ir al <a href='entradapartido'> santiago bernabeu</a> el partido va a comenzar.</p>",
		{
		enter: function(character, system, to) {
					system.setQuality("motivado", 0);
					system.setQuality("hambriento", 0)
				}
		}
	),


	mochila: new undum.SimpleSituation(
		"<p>Agarras tu mochila del Real Madrid\
		 y comienzas a buscar por casa todo lo que necesitas.\
		 Esperemos cogerlo todo o tendremos problemas durante el día.\
		 \
		 Necesitas llevarte<a href='./bocadillo' class='once'> tu bocadillo</a>, <a href='./buscaentradas' class='once'>tus entradas\
		 </a> y tu <a href='./bufanda'\
		 class='once'>bufanda</a></p></br>",
		{
			actions: {
				"bocadillo": function(character, system,to) {
                		system.setQuality("bocadillo", 1);
						
				system.write( 
				"<p>Por suerte mi madre me los había preparado la noche de antes\
				 y ya los tenía listos para llevarmelos\
				 \
				 ¡Tengo a la mejor madre del mundo!</p></br>")},

				"bufanda": function(character, system, to) 
				{
                		system.setQuality("bufanda", 1);
				system.write(
				"<p>Vas corriendo a tu habitación a por la bufanda\
				que tienes colgada de la pared con unas chinchetas\
				, era imposible que se me olvidara mi bufanda favorita.\
				Ahora podemos recoger a mis amigos y <a href='madrid'>viajar a madrid</a></p></br>")},

				"buscaentradas": "<p>Nooo!!! Nooo!!!, esto no me puede estar pasando.</p>\
				\
				<p>Las entradas no están por ninguna parte, estabas seguro de que\
				las habías dejado encima de la mesa la noche de antes.\
				<center><img src='media/games/tutorial/preocupacion.png' class='float-left'></center></p>\
				\
				<p>¿Donde puedo ir a mirar a ver si están?</p>\
				\
				<p>Mirar en el <a href='./armario' class='once'>armario</a>\
				o buscar en el <a href='./coche' class='once'>\
				coche</a></p></br>",

				"armario": "<p>Vas al armario lo mas rápido que puedes\
				pero nada, despues de tirar toda tu ropa por el suelo y destrozarlo\
				sigues sin encontrarlas. Una sudor fría recorre todo tu cuerpo..., ¡aunque aun podemos mirar en el coche!</p></br>",

				"coche": function(character, system, to) {
                		system.setQuality("entradas", 1);
				system.write(
				"<p>Abres la puerta del coche y de repente...\
				¡¡Ahí estaban!!, me las había olvidado la noche de antes\
				encima de la guantera del coche.</p>\
				<p>Que felicidad, ahora si estamos listos para salir hacia Madrid.\
				<center> <a href='madrid'>viajar a madrid</a>.</center></p></br>")}
			}
		}
	),

	madrid: new undum.SimpleSituation(
		"<h1> LLEGADA A MADRID</h1>\
		<p>Ya estabamos en Madrid, todo estaba abarrotado de gente y de policias por todos lados.\
		Aún quedan 1 hora para que comience el partido, ¿Qué podríamos hacer antes?</p>\
		\
		<p>Podríamos ir a ver a los <a href='ultrasur'>ultra sur\
		</a> animando la llegada del autobus del Real Madrid al campo o\
		<a href='comerbocata'> comernos los bocadillos\
		</a> que nos hizo mi madre</p>\
		<center><img src='media/games/tutorial/duda.png' class='float-left'></center>\</br>"
	),
	
	
	entradapartido: new undum.SimpleSituation(
		"",
		{
		heading: "REAL MADRID - PSG",
		enter :function(character, system, to) {
				system.write("<center><img src='media/games/tutorial/bernabeu.png' class='float-left'></center></br>");

				if ( character.qualities.motivado == 0 ) {
					system.setQuality("motivado", 1)
				}

				if (character.qualities.entradas == 0) {
					
          				system.write("<p>Nos disponemos a entrar al estadio\
						por la puerta 14 de este, pero... un segundo...</p>\
						\
						<p>¡¡LAS ENTRADAS!! </p>\
						<p>Esto no puede estar pasando, con los nervios de esta mañana se me olvido\
						coger las entradas del partido.</p>\
						<p> Lo acabo de arruinar todo, el día estaba siendo perfecto hasta este momento.\
						Mis amigos me miran con rabia pero no podemos hacer nada..., nos acabamos de perder\
						el partido de nuestra vida por un despite.</p>\
						<p>Solo nos queda volver a casa decepcionados y tristes</p>\
						<img src='media/games/tutorial/cochevuelta.png' class='float-left'>\
						<img src='media/games/tutorial/decepcion.png' class='float-right'></br>"
					
					
					);
        			} else {
          				system.write("<p>Nos disponemos a entrar al estadio\
						por la puerta 14 de este, pero... un segundo...</p>\
						\
						<p>¡¡LAS ENTRADAS!! </p>\
						<p>Despues de buscarlas por toda la mochila recuerdo que esta mañana se las deje a Pedro.</p>\
						<p> Gracias a dios Pedro saca las entradas y podemos ver el partido.</p>\
						<img src='media/games/tutorial/nosotrosbernabeu.png' class='float-left'>\
						<p>¡¡¡¡¡3-1 para el Real Madrid, estamos clasificados para cuartos!!!!!</p>\
						<img src='media/games/tutorial/cochevuelta.png' class='float-left'>\
						<img src='media/games/tutorial/alegria.png' class='float-right'></br>");
					
					}
				}
			}
		
	),
} 

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "inicio";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {

	bocadillo: new undum.OnOffQuality("bocadillo",{
	priority:"0001", 
	group:'mochila',
	onDisplay:"&#10003;"}),

	entradas: new undum.OnOffQuality("entradas",{
	priority:"0002", 
	group:'mochila',
	onDisplay:"&#10003;"
	}),

	bufanda: new undum.OnOffQuality("Bufanda",{
	priority:"0003", 
	group:'mochila',
	onDisplay:"&#10003;"}),
		
	motivado: new undum.YesNoQuality("Motivado",{
	priority:"0001",
	group:'estado',
	yesDisplay:"Sí",
	noDisplay:"No"}),
	
	hambriento: new undum.YesNoQuality("Hambriento",{
	priority:"0002",
	group:'estado',
	yesDisplay:"Sí",
	noDisplay:"No"}),
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {

    mochila: new undum.QualityGroup('Macuto', {priority:"0001"}),
    estado: new undum.QualityGroup('Estado físico', {priority:"0002"}),
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {

	character.qualities.bocadillo = 0;
    character.qualities.entradas = 0;
    character.qualities.bufanda = 0;
   	character.qualities.motivado = 0;
   	character.qualities.hambriento = 1;
};