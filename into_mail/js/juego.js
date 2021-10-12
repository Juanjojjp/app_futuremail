/* Inicio del codigo para abrir y cerrar el popup  */
/* Declaracion de variables */
var empezar = document.getElementById('empezar_guerra'),
	pagina_inicial = document.getElementById("pagina-inicial-batalla"),
	cerrarPopupBatalla = document.getElementById('cerrar-popup-batalla'),

	escoger_personaje = document.querySelector('#eleccion_1 '),
	escoger_personaje2 = document.querySelector('#eleccion_2 ');

/* Abrir popup */
empezar.addEventListener('click', function(){
    document.getElementById("slider_miniJuego").style.visibility = "hidden";
	document.getElementById("stats_01").style.visibility = "hidden";
	document.getElementById("stats_02").style.visibility = "hidden";
	document.getElementById("empezar_guerra").style.visibility = "hidden";
	document.getElementById("name_1").style.visibility='hidden';
	document.getElementById("name_2").style.visibility='hidden';
	document.getElementById("eleccion_1").style.visibility = "hidden";
	document.getElementById("eleccion_2").style.visibility = "hidden";
	document.getElementById("slider_musica").style.visibility = "hidden";
    document.getElementById("control-next").style.visibility = "hidden";

    document.getElementById("rival_1").src = document.getElementById("avatar_1").src;
    document.getElementById("rival_2").src = document.getElementById("avatar_2").src;
	document.getElementById("rival_01").src = document.getElementById("avatar_1").src;
    document.getElementById("rival_02").src = document.getElementById("avatar_2").src;

	document.getElementById("pagina-inicial-batalla").style.visibility = "visible";
    setTimeout(cambioJuego,3000);
	Inicio()
});
function cambioJuego() {
	document.getElementById("pagina-inicial-batalla").style.visibility = "hidden";
	document.getElementById("pagina-principal-batalla").style.visibility = "visible";

	document.getElementById("habilidad_batlla_1").src = document.getElementById("habilidad_1").src;
	document.getElementById("habilidad_batlla_2").src = document.getElementById("habilidad_2").src;
	document.getElementById("habilidad_batlla_3").src = document.getElementById("habilidad_3").src;
	document.getElementById("habilidad_batlla_01").src = document.getElementById("habilidad_01").src;
	document.getElementById("habilidad_batlla_02").src = document.getElementById("habilidad_02").src;
	document.getElementById("habilidad_batlla_03").src = document.getElementById("habilidad_03").src;

	
}

/* Cerrar popup */
cerrarPopupBatalla.addEventListener('click', function(){
	document.getElementById("pagina-principal-batalla").style.visibility = "hidden";
	
	document.getElementById("slider_miniJuego").style.visibility = "visible";
	document.getElementById("control-next").style.visibility = "visible";
	document.getElementById("eleccion_1").style.visibility = "visible";
	document.getElementById("eleccion_2").style.visibility = "visible";
	document.getElementById("name_1").style.visibility='visible';
	document.getElementById("name_2").style.visibility='visible';
	document.getElementById("stats_01").style.visibility = "visible";
	document.getElementById("stats_02").style.visibility = "visible";
	document.getElementById("empezar_guerra").style.visibility = "visible";
});


/* ----------------------------------------------------------------------------------------------------------------- */
/* Inicio del Juego */
/* ----------------------------------------------------------------------------------------------------------------- */


/* 
	Escudo = 20 -26

		Golpes nivel 2
	Simple = 7 - 12
	Fuerte = 13 - 18
	Especial = 10 - 14

		Golpes nivel 3
	Simple = 9 - 14
	Fuerte = 15 - 20
	Especial = 12 - 16

		Golpes nivel 4
	Simple = 11 - 16
	Fuerte = 17 - 22
	Especial = 14 - 18
*/


/* Declaracion de variables */
	/* Vida jugador 1 */
var vidaJugador1 = document.getElementById("vidaJugador1"),
	vidaJugador01 = document.getElementById("vidaJugador01"),
	barraVidaJugador1 = document.getElementById("vida_jugador_1"),
	/* Mana/Estamina jugador 1 */
	manaJugador1 = document.getElementById("manaJugador1"),
	barraManaJugador1 = document.getElementById("mana_jugador_1"),
	/* Escudo jugador 1 */
	escudoJugador1 = document.getElementById("escudoJugador1"),
	barraEscudoJugador1 = document.getElementById("escudo_jugador_1"),
	/* Vida jugador 2 */
	vidaJugador2 = document.getElementById("vidaJugador2"),
	vidaJugador02 = document.getElementById("vidaJugador02"),
	barraVidaJugador2 = document.getElementById("vida_jugador_2"),
	/* Mana/Estamina jugador 2 */
	manaJugador2 = document.getElementById("manaJugador2"),
	barraManaJugador2 = document.getElementById("mana_jugador_2"),
	/* Escudo jugador 2 */
	escudoJugador2 = document.getElementById("escudoJugador2"),
	barraEscudoJugador2 = document.getElementById("escudo_jugador_2");

var Habilidad_1 = document.getElementById("habilidad_batlla_1"),
	Habilidad_2 = document.getElementById("habilidad_batlla_2"),
	Habilidad_3 = document.getElementById("habilidad_batlla_3"),
	Habilidad_01 = document.getElementById("habilidad_batlla_01"),
	Habilidad_02 = document.getElementById("habilidad_batlla_02"),
	Habilidad_03 = document.getElementById("habilidad_batlla_03");


function batalla1 (extra1, vida2, mana1, min1, max1, min2, max2, min3, max3) {
	extra1 = extra1;
	vida2 = vida2;
	escudo = 0;
	mana1 = mana1;
	min1 = min1;
	max1 = max1;
	min2 = min2;
	max2 = max2;
	min3 = min3;
	max3 = max3;

	Habilidad_1.addEventListener('click', function(){
		if (extra1 == 1) {
			extra1 = Math.round(Math.random()*(max1-min1)+min1);
			escudo += extra1;
			escudoJugador1.innerHTML = escudo;
			barraEscudoJugador1.value = escudo;
			alert("jugador 1 obtuvo de escudo: "+extra1);
		}
		else {
			hab1 = Math.round(Math.random()*(max1-min1)+min1);
			vida2 -= hab1;
			vidaJugador2.innerHTML = vida2;
			barraVidaJugador2.value = vida2;
			alert("jugador 1 lanzo un golpe de: "+hab1);
			if (vida2 <= 0) {
				alert("ah muerto el jugador 2")
			}
		}
	});
	Habilidad_2.addEventListener('click', function(){
		if (extra1 == 2) {
			extra1 = Math.round(Math.random()*(max2-min2)+min2);
			escudo += extra1;
			escudoJugador1.innerHTML = escudo;
			barraEscudoJugador1.value = escudo;
			alert("jugador 1 obtuvo de escudo: "+extra1);
		}
		else {
			hab2 = Math.round(Math.random()*(max2-min2)+min2);
			vida2 -= hab2;
			vidaJugador2.innerHTML = vida2;
			barraVidaJugador2.value = vida2;
			alert("jugador 1 lanzo un golpe de: "+hab2);
			if (vida2 <= 0) {
				alert("ah muerto el jugador 2")
			}
		}
	});
	Habilidad_3.addEventListener('click', function(){
		if (extra1 == 3) {
			extra1 = Math.round(Math.random()*(max3-min3)+min3);
			escudo += extra1;
			escudoJugador1.innerHTML = escudo;
			barraEscudoJugador1.value = escudo;
			alert("jugador 1 obtuvo de escudo: "+extra1);
		}
		else {
			hab3 = Math.round(Math.random()*(max3-min3)+min3);
			vida2 -= hab3;
			vidaJugador2.innerHTML = vida2;
			barraVidaJugador2.value = vida2;
			alert("jugador 1 lanzo un golpe de: "+hab3);
			if (vida2 <= 0) {
				alert("ah muerto el jugador 2")
			}
		}
	});
}

function batalla2 (extra2, vida1, mana2, min01, max01, min02, max02, min03, max03) {
	extra2 = extra2;
	vida1 = vida1;
	escudo = 0;
	mana2 = mana2;
	min01 = min01;
	max01 = max01;
	min02 = min02;
	max02 = max02;
	min03 = min03;
	max03 = max03;
	
	Habilidad_01.addEventListener('click', function(){
		if (extra2 == 1) {
			extra2 = Math.round(Math.random()*(max01-min01)+min01);
			escudo += extra2;
			escudoJugador2.innerHTML = escudo;
			barraEscudoJugador2.value = escudo;
			alert("jugador 1 obtuvo de escudo: "+extra2);
		}
		else {
			hab1 = Math.round(Math.random()*(max01-min01)+min01);
			vida1 -= hab1;
			vidaJugador1.innerHTML = vida1;
			barraVidaJugador1.value = vida1;
			alert("jugador 1 lanzo un golpe de: "+hab1);
			if (vida1 <= 0) {
				alert("ah muerto el jugador 1")
			}
		}
	});
	Habilidad_02.addEventListener('click', function(){
		if (extra2 == 2) {
			extra2 = Math.round(Math.random()*(max02-min02)+min02);
			escudo += extra2;
			escudoJugador2.innerHTML = escudo;
			barraEscudoJugador2.value = escudo;
			alert("jugador 1 obtuvo de escudo: "+extra2);
		}
		else {
			hab2 = Math.round(Math.random()*(max02-min02)+min02);
			vida1 -= hab2;
			vidaJugador1.innerHTML = vida1;
			barraVidaJugador1.value = vida1;
			alert("jugador 1 lanzo un golpe de: "+hab2);
			if (vida1 <= 0) {
				alert("ah muerto el jugador 1")
			}
		}
	});
	Habilidad_03.addEventListener('click', function(){
		if (extra2 == 3) {
			extra2 = Math.round(Math.random()*(max03-min03)+min03);
			escudo += extra2;
			escudoJugador2.innerHTML = escudo;
			barraEscudoJugador2.value = escudo;
			alert("jugador 1 obtuvo de escudo: "+extra2);
		
		}
		else {
			hab3 = Math.round(Math.random()*(max03-min03)+min03);
			vida1 -= hab3;
			vidaJugador1.innerHTML = vida1;
			barraVidaJugador1.value = vida1;
			alert("jugador 1 lanzo un golpe de: "+hab3);
			if (vida1 <= 0) {
				alert("ah muerto el jugador 1")
			}
		}
	});
}

function Inicio (){
	/* ---------- Jugador numero 1 ---------- */
	/* Personajes Benevolos */
	if(escoger_personaje.value=='Rick_Sanchez'){
		vidaJugador1.innerHTML = 120;
		vidaJugador01.innerHTML = "/120";
		barraVidaJugador1.setAttribute("max", "120");
		barraVidaJugador1.value = "120";
		batalla1(2, validarStats2(), 100, 14, 18, 20, 26, 14, 18);
	}
	if(escoger_personaje.value=='Armothy'){
		vidaJugador1.innerHTML = 120;
		vidaJugador01.innerHTML = "/120";
		barraVidaJugador1.setAttribute("max", "120");
		barraVidaJugador1.value = "120";
		batalla1(0, validarStats2(), 100, 11, 16, 17, 22, 11, 16);
	}
	if(escoger_personaje.value=='Phoenixperson'){
		vidaJugador1.innerHTML = 160;
		vidaJugador01.innerHTML = "/160";
		barraVidaJugador1.setAttribute("max", "160");
		barraVidaJugador1.value = "160";
		batalla1(2, validarStats2(), 100, 9, 14, 20, 26, 10, 14);
	}
	if(escoger_personaje.value=='Mr_Meeseeks'){
		vidaJugador1.innerHTML = 160;
		vidaJugador01.innerHTML = "/160";
		barraVidaJugador1.setAttribute("max", "160");
		barraVidaJugador1.value = "160";
		batalla1(2, validarStats2(), 100, 9, 14, 20, 26, 9, 14);
	}
	/* Personajes  Malvados*/
	if(escoger_personaje.value=='Reggie'){
		vidaJugador1.innerHTML = 120;
		vidaJugador01.innerHTML = "/120";
		barraVidaJugador1.setAttribute("max", "120");
		barraVidaJugador1.value = "120";
		batalla1(2, validarStats2(), 100, 15, 20, 20, 26, 12, 16);
	}
	if(escoger_personaje.value=='Rat_Boss'){
		vidaJugador1.innerHTML = 200;
		vidaJugador01.innerHTML = "/200";
		barraVidaJugador1.setAttribute("max", "200");
		barraVidaJugador1.value = "200";
		batalla1(3, validarStats2(), 100, 9, 14, 15, 20, 20, 26);
	}
	if(escoger_personaje.value=='Toxic_Rick'){
		vidaJugador1.innerHTML = 120;
		vidaJugador01.innerHTML = "/120";
		barraVidaJugador1.setAttribute("max", "120");
		barraVidaJugador1.value = "120";
		batalla1(2, validarStats2(), 100, 14, 18, 20, 26, 14, 18);
	}
	if(escoger_personaje.value=='Worldender'){
		vidaJugador1.innerHTML = 160;
		vidaJugador01.innerHTML = "/160";
		barraVidaJugador1.setAttribute("max", "160");
		barraVidaJugador1.value = "160";
		batalla1(0, validarStats2(), 100, 9, 14, 15, 20, 10, 14);
	}
	/* ---------- Jugador numero 2 ---------- */
	/* Personajes Benevolos */
	if(escoger_personaje2.value=='Rick_Sanchez'){
		vidaJugador2.innerHTML = 120;
		vidaJugador02.innerHTML = "/120";
		barraVidaJugador2.setAttribute("max", "120");
		barraVidaJugador2.value = "120";
		batalla2(2, validarStats1(), 100, 14, 18, 20, 26, 14, 18);
	}
	if(escoger_personaje2.value=='Armothy'){
		vidaJugador2.innerHTML = 120;
		vidaJugador02.innerHTML = "/120";
		barraVidaJugador2.setAttribute("max", "120");
		barraVidaJugador2.value = "120";
		batalla2(0, validarStats1(), 100, 11, 16, 17, 22, 11, 16);
	}
	if(escoger_personaje2.value=='Phoenixperson'){
		vidaJugador2.innerHTML = 160;
		vidaJugador02.innerHTML = "/160";
		barraVidaJugador2.setAttribute("max", "160");
		barraVidaJugador2.value = "160";
		batalla2(2, validarStats1(), 100, 9, 14, 20, 26, 10, 14);
	}
	if(escoger_personaje2.value=='Mr_Meeseeks'){
		vidaJugador2.innerHTML = 160;
		vidaJugador02.innerHTML = "/160";
		barraVidaJugador2.setAttribute("max", "160");
		barraVidaJugador2.value = "160";
		batalla2(2, validarStats1(), 100, 9, 14, 20, 26, 9, 14);
	}
	/* Personajes  Malvados*/
	if(escoger_personaje2.value=='Reggie'){
		vidaJugador2.innerHTML = 120;
		vidaJugador02.innerHTML = "/120";
		barraVidaJugador2.setAttribute("max", "120");
		barraVidaJugador2.value = "120";
		batalla2(2, validarStats1(), 100, 15, 20, 20, 26, 12, 16);
	}
	if(escoger_personaje2.value=='Rat_Boss'){
		vidaJugador2.innerHTML = 200;
		vidaJugador02.innerHTML = "/200";
		barraVidaJugador2.setAttribute("max", "200");
		barraVidaJugador2.value = "200";
		batalla2(3, validarStats1(), 100, 9, 14, 15, 20, 20, 26);
	}
	if(escoger_personaje2.value=='Toxic_Rick'){
		vidaJugador2.innerHTML = 120;
		vidaJugador02.innerHTML = "/120";
		barraVidaJugador2.setAttribute("max", "120");
		barraVidaJugador2.value = "120";
		batalla2(2, validarStats1(), 100, 14, 18, 20, 26, 14, 18);
	}
	if(escoger_personaje2.value=='Worldender'){
		vidaJugador2.innerHTML = 160;
		vidaJugador02.innerHTML = "/160";
		barraVidaJugador2.setAttribute("max", "160");
		barraVidaJugador2.value = "160";
		batalla2(0, validarStats1(), 100, 9, 14, 15, 20, 10, 14);
	}
}

function validarStats1 () {
	if (escoger_personaje.value=='Rick_Sanchez') {
		vidaP1 = 120
	}
	if (escoger_personaje.value=='Armothy') {
		vidaP1 = 120
	}
	if (escoger_personaje.value=='Phoenixperson') {
		vidaP1 = 160
	}
	if (escoger_personaje.value=='Mr_Meeseeks') {
		vidaP1 = 160
	}
	/* ----------------------------------------------------------------------- */
	if (escoger_personaje.value=='Reggie') {
		vidaP1 = 120
	}
	if (escoger_personaje.value=='Rat_Boss') {
		vidaP1 = 200
	}
	if (escoger_personaje.value=='Toxic_Rick') {
		vidaP1 = 120
	}
	if (escoger_personaje.value=='Worldender') {
		vidaP1 = 160
	}
	return vidaP1
}

function validarStats2 () {
	if (escoger_personaje2.value=='Rick_Sanchez') {
		vidaP2 = 120
	}
	if (escoger_personaje2.value=='Armothy') {
		vidaP2 = 120
	}
	if (escoger_personaje2.value=='Phoenixperson') {
		vidaP2 = 160
	}
	if (escoger_personaje2.value=='Mr_Meeseeks') {
		vidaP2 = 160
	}
	/* ----------------------------------------------------------------------- */
	if (escoger_personaje2.value=='Reggie') {
		vidaP2 = 120
	}
	if (escoger_personaje2.value=='Rat_Boss') {
		vidaP2 = 200
	}
	if (escoger_personaje2.value=='Toxic_Rick') {
		vidaP2 = 120
	}
	if (escoger_personaje2.value=='Worldender') {
		vidaP2 = 160
	}
	return vidaP2
}
