/* Inicio del codigo para abrir y cerrar el popup  */
/* Declaracion de variables */
var empezar = document.getElementById('empezar_guerra'),
	pagina_inicial = document.getElementById("pagina-inicial-batalla"),
	cerrarPopupBatalla = document.getElementById('cerrar-popup-batalla');

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
    setTimeout(cambioJuego,4000);
});
function cambioJuego() {
	document.getElementById("pagina-inicial-batalla").style.visibility = "hidden";
	document.getElementById("pagina-principal-batalla").style.visibility = "visible";
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


