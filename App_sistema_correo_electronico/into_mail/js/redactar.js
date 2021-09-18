
var btnAbrirPopup = document.getElementById('btn-abrir-popup'),
	overlay = document.getElementById('overlay'),
	popup = document.getElementById('popup'),
	btnCerrarPopup = document.getElementById('btn-cerrar-popup');

btnAbrirPopup.addEventListener('click', function(){
	document.getElementsByClassName("input_redactar")[0].value = "";
	document.getElementById("contenido_mensaje").style.visibility = "hidden";
	document.getElementById("titulo_estado_actual").style.visibility = "hidden";
	document.getElementById("contenido_bandeja_entrada").style.visibility = "hidden";
	overlay.classList.add('active');
	popup.classList.add('active');
});

btnCerrarPopup.addEventListener('click', function(e){
	e.preventDefault();
	overlay.classList.remove('active');
	popup.classList.remove('active');
	document.getElementById("contenido_bandeja_entrada").style.visibility = "visible";
	document.getElementById("titulo_estado_actual").style.visibility = "visible";
});
