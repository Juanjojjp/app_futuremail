/* Inicio del codigo para abrir y cerrar los popup  */
/* Declaracion de variables */
var abrirPopupHabilidad_1 = document.getElementById('abrir-popup-habilidad_1'),
	overlayHabilidad_1 = document.getElementById('overlay-habilidad_1'),
	popupHabilidad_1 = document.getElementById('popup-habilidad_1'),
	cerrarPopupHabilidad_1 = document.getElementById('cerrar-popup-habilidad_1'),

    abrirPopupHabilidad_2 = document.getElementById('abrir-popup-habilidad_2'),
	overlayHabilidad_2 = document.getElementById('overlay-habilidad_2'),
	popupHabilidad_2 = document.getElementById('popup-habilidad_2'),
	cerrarPopupHabilidad_2 = document.getElementById('cerrar-popup-habilidad_2'),

    abrirPopupHabilidad_3 = document.getElementById('abrir-popup-habilidad_3'),
	overlayHabilidad_3 = document.getElementById('overlay-habilidad_3'),
	popupHabilidad_3 = document.getElementById('popup-habilidad_3'),
	cerrarPopupHabilidad_3 = document.getElementById('cerrar-popup-habilidad_3'),
    /* ----------------------------------------------------------------------- */
    abrirPopupHabilidad_01 = document.getElementById('abrir-popup-habilidad_01'),
	overlayHabilidad_01 = document.getElementById('overlay-habilidad_01'),
	popupHabilidad_01 = document.getElementById('popup-habilidad_01'),
	cerrarPopupHabilidad_01 = document.getElementById('cerrar-popup-habilidad_01'),

    abrirPopupHabilidad_02 = document.getElementById('abrir-popup-habilidad_02'),
	overlayHabilidad_02 = document.getElementById('overlay-habilidad_02'),
	popupHabilidad_02 = document.getElementById('popup-habilidad_02'),
	cerrarPopupHabilidad_02 = document.getElementById('cerrar-popup-habilidad_02'),

    abrirPopupHabilidad_03 = document.getElementById('abrir-popup-habilidad_03'),
	overlayHabilidad_03 = document.getElementById('overlay-habilidad_03'),
	popupHabilidad_03 = document.getElementById('popup-habilidad_03'),
	cerrarPopupHabilidad_03 = document.getElementById('cerrar-popup-habilidad_03');

/* Inicio del codigo para abrir y cerrar el popup  */
/* Abrir popup 1 */
abrirPopupHabilidad_1.addEventListener('click', function(){
    document.getElementById("control-next").style.visibility = "hidden";
    document.getElementById("eleccion_1").style.visibility = "hidden";
    document.getElementById("eleccion_2").style.visibility = "hidden";
    document.getElementById("stats_02").style.opacity = "0";
	document.getElementById("stats_01").style.visibility = "hidden";

	overlayHabilidad_1.classList.add('active');
	popupHabilidad_1.classList.add('active');
});
/* Cerrar popup 1 */
cerrarPopupHabilidad_1.addEventListener('click', function(e){
	e.preventDefault();
	overlayHabilidad_1.classList.remove('active');
	popupHabilidad_1.classList.remove('active');
    document.getElementById("control-next").style.visibility = "visible";
    document.getElementById("eleccion_1").style.visibility = "visible";
	document.getElementById("eleccion_2").style.visibility = "visible";
    document.getElementById("stats_02").style.opacity = "1";
	document.getElementById("stats_01").style.visibility = "visible";
});


/* Abrir popup 2 */
abrirPopupHabilidad_2.addEventListener('click', function(){
    document.getElementById("control-next").style.visibility = "hidden";
    document.getElementById("eleccion_1").style.visibility = "hidden";
    document.getElementById("eleccion_2").style.visibility = "hidden";
    document.getElementById("stats_02").style.opacity = "0";
	document.getElementById("stats_01").style.visibility = "hidden";

	overlayHabilidad_2.classList.add('active');
	popupHabilidad_2.classList.add('active');
});
/* Cerrar popup 2 */
cerrarPopupHabilidad_2.addEventListener('click', function(e){
	e.preventDefault();
	overlayHabilidad_2.classList.remove('active');
	popupHabilidad_2.classList.remove('active');
    document.getElementById("control-next").style.visibility = "visible";
    document.getElementById("eleccion_1").style.visibility = "visible";
	document.getElementById("eleccion_2").style.visibility = "visible";
    document.getElementById("stats_02").style.opacity = "1";
	document.getElementById("stats_01").style.visibility = "visible";
});


/* Abrir popup 3 */
abrirPopupHabilidad_3.addEventListener('click', function(){
    document.getElementById("control-next").style.visibility = "hidden";
    document.getElementById("eleccion_1").style.visibility = "hidden";
    document.getElementById("eleccion_2").style.visibility = "hidden";
    document.getElementById("stats_02").style.opacity = "0";
	document.getElementById("stats_01").style.visibility = "hidden";

	overlayHabilidad_3.classList.add('active');
	popupHabilidad_3.classList.add('active');
});
/* Cerrar popup 3 */
cerrarPopupHabilidad_3.addEventListener('click', function(e){
	e.preventDefault();
	overlayHabilidad_3.classList.remove('active');
	popupHabilidad_3.classList.remove('active');
    document.getElementById("control-next").style.visibility = "visible";
    document.getElementById("eleccion_1").style.visibility = "visible";
	document.getElementById("eleccion_2").style.visibility = "visible";
    document.getElementById("stats_02").style.opacity = "1";
	document.getElementById("stats_01").style.visibility = "visible";
});


/*----------------------------------------------------------------------------------------------------------------*/


/* Inicio del codigo para abrir y cerrar el popup  */
/* Abrir popup 01 */
abrirPopupHabilidad_01.addEventListener('click', function(){
    document.getElementById("control-next").style.visibility = "hidden";
    document.getElementById("eleccion_1").style.visibility = "hidden";
    document.getElementById("eleccion_2").style.visibility = "hidden";
    document.getElementById("stats_01").style.opacity = "0";
	document.getElementById("stats_02").style.visibility = "hidden";

	overlayHabilidad_01.classList.add('active');
	popupHabilidad_01.classList.add('active');
});
/* Cerrar popup 01 */
cerrarPopupHabilidad_01.addEventListener('click', function(e){
	e.preventDefault();
	overlayHabilidad_01.classList.remove('active');
	popupHabilidad_01.classList.remove('active');
    document.getElementById("control-next").style.visibility = "visible";
    document.getElementById("eleccion_1").style.visibility = "visible";
	document.getElementById("eleccion_2").style.visibility = "visible";
    document.getElementById("stats_01").style.opacity = "1";
	document.getElementById("stats_02").style.visibility = "visible";
});


/* Abrir popup 02 */
abrirPopupHabilidad_02.addEventListener('click', function(){
    document.getElementById("control-next").style.visibility = "hidden";
    document.getElementById("eleccion_1").style.visibility = "hidden";
    document.getElementById("eleccion_2").style.visibility = "hidden";
    document.getElementById("stats_01").style.opacity = "0";
	document.getElementById("stats_02").style.visibility = "hidden";

	overlayHabilidad_02.classList.add('active');
	popupHabilidad_02.classList.add('active');
});
/* Cerrar popup 02 */
cerrarPopupHabilidad_02.addEventListener('click', function(e){
	e.preventDefault();
	overlayHabilidad_02.classList.remove('active');
	popupHabilidad_02.classList.remove('active');
    document.getElementById("control-next").style.visibility = "visible";
    document.getElementById("eleccion_1").style.visibility = "visible";
	document.getElementById("eleccion_2").style.visibility = "visible";
    document.getElementById("stats_01").style.opacity = "1";
	document.getElementById("stats_02").style.visibility = "visible";
});


/* Abrir popup 03 */
abrirPopupHabilidad_03.addEventListener('click', function(){
    document.getElementById("control-next").style.visibility = "hidden";
    document.getElementById("eleccion_1").style.visibility = "hidden";
    document.getElementById("eleccion_2").style.visibility = "hidden";
    document.getElementById("stats_01").style.opacity = "0";
	document.getElementById("stats_02").style.visibility = "hidden";

	overlayHabilidad_03.classList.add('active');
	popupHabilidad_03.classList.add('active');
});
/* Cerrar popup 03 */
cerrarPopupHabilidad_03.addEventListener('click', function(e){
	e.preventDefault();
	overlayHabilidad_03.classList.remove('active');
	popupHabilidad_03.classList.remove('active');
    document.getElementById("control-next").style.visibility = "visible";
    document.getElementById("eleccion_1").style.visibility = "visible";
	document.getElementById("eleccion_2").style.visibility = "visible";
    document.getElementById("stats_01").style.opacity = "1";
	document.getElementById("stats_02").style.visibility = "visible";
});
