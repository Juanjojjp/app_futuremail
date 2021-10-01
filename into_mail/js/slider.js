/* Inicio del codigo para el aside, y ver el mini juego o pasar a la musica  */
var btnNext = document.getElementById('control-next'),
    btnPrev = document.getElementById('control-prev');

/* Pasar musica */
btnNext.addEventListener('click', function(){
	document.getElementById("slider_miniJuego").style.visibility = "hidden";
	document.getElementById("stats_01").style.visibility = "hidden";
	document.getElementById("stats_02").style.visibility = "hidden";
	document.getElementById("empezar_guerra").style.visibility = "hidden";
	document.getElementById("slider_musica").style.visibility = "visible";
	document.getElementById("name_1").style.visibility='hidden';
	document.getElementById("name_2").style.visibility='hidden';
	document.getElementById("eleccion_1").style.visibility = "hidden";
	document.getElementById("eleccion_2").style.visibility = "hidden";

	btnNext.style.visibility = "hidden";
	btnPrev.style.visibility = "visible";
});

/* Regresar a mini juego */
btnPrev.addEventListener('click', function(e){
    document.getElementById("slider_miniJuego").style.visibility = "visible";
	document.getElementById("slider_musica").style.visibility = "hidden";
	document.getElementById("name_1").style.visibility='visible';
	document.getElementById("name_2").style.visibility='visible';
	document.getElementById("eleccion_1").style.visibility = "visible";
	document.getElementById("eleccion_2").style.visibility = "visible";

	btnNext.style.visibility = "visible";
	btnPrev.style.visibility = "hidden";
});


/* Inicio del codigo del mini juego */

/* Declaraciones */
let personaje1,personaje2;
let name1,name2;
var escoger_personaje = document.querySelector('#eleccion_1 ');
	escoger_personaje2 = document.querySelector('#eleccion_2 ');
/* Imagenes del inicio del */
window.onload = inicio;
function inicio(){
	personaje1  = document.getElementById("avatar_1");
	personaje2 = document.getElementById("avatar_2");
  	traerDatos1(personaje1,104);
  	traerDatos1(personaje2,104);
}
function traerDatos1(contenedor,id){
	fetch(`https://rickandmortyapi.com/api/character/${id}`)
	.then(response => response.json())
   	.then(data => {
  	contenedor.src = data.image; 
 })
}

/* Llamada a la api para la imagen y el nombre del primer jugador */
escoger_personaje.addEventListener('click', function(){
	personaje1 = document.getElementById("avatar_1");
    name1 = document.getElementById("name_1");
	especie1 = document.getElementById("especie_user1");
	if(escoger_personaje.value==''){
		document.getElementById("name_1").innerHTML = "---";
		traerDatos1(personaje1,104);
	}
	/* Personajes Benevolos */
	if(escoger_personaje.value=='Rick_Sanchez'){
		traerDatos(personaje1,name1,1,especie1);
	}
	if(escoger_personaje.value=='Armothy'){
		traerDatos(personaje1,name1,25,especie1);
	}
	if(escoger_personaje.value=='Phoenixperson'){
		traerDatos(personaje1,name1,592,especie1);
	}
	if(escoger_personaje.value=='Mr_Meeseeks'){
		traerDatos(personaje1,name1,242,especie1);
	}
	/* Personajes  Malvados*/
	if(escoger_personaje.value=='Reggie'){
		traerDatos(personaje1,name1,663,especie1);
	}
	if(escoger_personaje.value=='Rat_Boss'){
		traerDatos(personaje1,name1,276,especie1);
	}
	if(escoger_personaje.value=='Toxic_Rick'){
		traerDatos(personaje1,name1,361,especie1);
	}
	if(escoger_personaje.value=='Worldender'){
		traerDatos(personaje1,name1,382,especie1);
	}
});

/* Llamada a la api para la imagen y el nombre del segundo jugador */
escoger_personaje2.addEventListener('click', function(){
	personaje2 = document.getElementById("avatar_2");
    name2 = document.getElementById("name_2");
	especie2 = document.getElementById("especie_user2");
	if(escoger_personaje2.value==''){
		document.getElementById("name_2").innerHTML = "---";
		traerDatos1(personaje2,104);
	}
	/* Personajes Benevolos */
	if(escoger_personaje2.value=='Rick_Sanchez'){
		traerDatos(personaje2,name2,1,especie2);
	}
	if(escoger_personaje2.value=='Armothy'){
		traerDatos(personaje2,name2,25,especie2);
	}
	if(escoger_personaje2.value=='Phoenixperson'){
		traerDatos(personaje2,name2,592,especie2);
	}
	if(escoger_personaje2.value=='Mr_Meeseeks'){
		traerDatos(personaje2,name2,242,especie2);
	}
	/* Personajes  Malvados*/
	if(escoger_personaje2.value=='Reggie'){
		traerDatos(personaje2,name2,663,especie2);
	}
	if(escoger_personaje2.value=='Rat_Boss'){
		traerDatos(personaje2,name2,276,especie2);
	}
	if(escoger_personaje2.value=='Toxic_Rick'){
		traerDatos(personaje2,name2,361,especie2);
	}
	if(escoger_personaje2.value=='Worldender'){
		traerDatos(personaje2,name2,382,especie2);
	}
});

/* Interaccion con la api */
function traerDatos(contenedor,nombre,id,tipo){
  	fetch(`https://rickandmortyapi.com/api/character/${id}`)
  	.then(response => response.json())
 	.then(data => {
		contenedor.src = data.image; 
    	nombre.innerHTML = data.name;
		tipo.innerHTML = data.species;
   })
}
