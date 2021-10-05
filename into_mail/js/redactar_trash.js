/* Inicio del codigo para abrir y cerrar el popup  */
/* Declaracion de variables */
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

/* Abrir popup */
btnAbrirPopup.addEventListener('click', function(){
	document.getElementsByClassName("input-redactar")[0].value = "";
	document.getElementById("titulo_estado_actual").style.visibility = "hidden";
	document.getElementById("contenido_principal").style.visibility = "hidden";

	document.getElementById("contenido_mensaje1").style.visibility = "hidden";
	document.getElementById("contenido_mensaje2").style.visibility = "hidden";
	document.getElementById("empezar_guerra").style.opacity = "0";

	overlay.classList.add('active');
	popup.classList.add('active');
});

/* Cerrar popup */
btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
	document.getElementById("contenido_principal").style.visibility = "visible";
	document.getElementById("titulo_estado_actual").style.visibility = "visible";
	document.getElementById("empezar_guerra").style.opacity = "1";
});
