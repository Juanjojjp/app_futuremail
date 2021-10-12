/* Script para validar los stats */
var escoger_personaje = document.querySelector('#eleccion_1 ');
    escoger_personaje2 = document.querySelector('#eleccion_2 ');

function restablecerStats () {
    document.getElementById("fuerza1").style.background = 'none';
    document.getElementById("fuerza2").style.background = 'none';
    document.getElementById("fuerza3").style.background = 'none';
    document.getElementById("fuerza4").style.background = 'none';
    document.getElementById("vida1").style.background = 'none';
    document.getElementById("vida2").style.background = 'none';
    document.getElementById("vida3").style.background = 'none';
    document.getElementById("vida4").style.background = 'none';
    document.getElementById("inteligencia1").style.background = 'none';
    document.getElementById("inteligencia2").style.background = 'none';
    document.getElementById("inteligencia3").style.background = 'none';
    document.getElementById("inteligencia4").style.background = 'none';
}
function restablecerStats2 () {
    document.getElementById("fuerza1_2").style.background = 'none';
    document.getElementById("fuerza2_2").style.background = 'none';
    document.getElementById("fuerza3_2").style.background = 'none';
    document.getElementById("fuerza4_2").style.background = 'none';
    document.getElementById("vida1_2").style.background = 'none';
    document.getElementById("vida2_2").style.background = 'none';
    document.getElementById("vida3_2").style.background = 'none';
    document.getElementById("vida4_2").style.background = 'none';
    document.getElementById("inteligencia1_2").style.background = 'none';
    document.getElementById("inteligencia2_2").style.background = 'none';
    document.getElementById("inteligencia3_2").style.background = 'none';
    document.getElementById("inteligencia4_2").style.background = 'none';

}

/* Muestra los stats #1 segun el personaje */
escoger_personaje.addEventListener('click', function(){ 
    if(escoger_personaje.value==''){
        document.getElementById('stats_01').style.visibility = 'hidden';
    }
    /* Personajes Benevolos */
    if(escoger_personaje.value=='Rick_Sanchez'){
        /* Restablecer los stats a 0 */
        document.getElementById('stats_01').style.visibility = 'visible';
        restablecerStats();                                      
        /* Fuerza del personaje */
        document.getElementById("fuerza1").style.background = 'red';
        /* Vida del personaje */
        document.getElementById("vida1").style.background = 'green'; 
        document.getElementById("vida2").style.background = 'green'; 
        /* Inteligencia o magia del personaje */
        document.getElementById("inteligencia1").style.background = 'blue';
        document.getElementById("inteligencia2").style.background = 'blue';
        document.getElementById("inteligencia3").style.background = 'blue';
        document.getElementById("inteligencia4").style.background = 'blue';

        /* Inicio de las habilidades del personaje */
        /* Habilidad 1 */
        document.getElementById("habilidad_1").src = "images/icono_habilidad_magia.png";
        document.getElementById("name_habilidad_1").innerHTML = "habilidad1 rick";
        document.getElementById("personaje_habilidad_1").innerHTML = "Rick Sanchez";
        document.getElementById("tipo_habilidad_1").innerHTML = "Cientifica";
        document.getElementById("descripcion_habilidad_1").innerHTML = "aca va la descripcion de la primera habilidad de Rick Sanchez";
        /* Habilidad 2 */
        document.getElementById("habilidad_2").src = "images/icono_habilidad_escudo.png";
        document.getElementById("name_habilidad_2").innerHTML = "habilidad2 rick";
        document.getElementById("personaje_habilidad_2").innerHTML = "Rick Sanchez";
        document.getElementById("tipo_habilidad_2").innerHTML = "Proteccion";
        document.getElementById("descripcion_habilidad_2").innerHTML = "aca va la descripcion de la segunda habilidad de Rick Sanchez";
        /* Habilidad 3 */
        document.getElementById("habilidad_3").src = "images/icono_habilidad_magia.png";
        document.getElementById("name_habilidad_3").innerHTML = "habilidad3 rick";
        document.getElementById("personaje_habilidad_3").innerHTML = "Rick Sanchez";
        document.getElementById("tipo_habilidad_3").innerHTML = "Cientifica";
        document.getElementById("descripcion_habilidad_3").innerHTML = "aca va la descripcion de la tercera habilidad de Rick Sanchez";
    }
    if(escoger_personaje.value=='Armothy'){
        /* Restablecer los stats a 0 */
        document.getElementById('stats_01').style.visibility = 'visible';
        restablecerStats(); 
        /* Fuerza del personaje */
        document.getElementById("fuerza1").style.background = 'red';
        document.getElementById("fuerza2").style.background = 'red';
        document.getElementById("fuerza3").style.background = 'red';
        document.getElementById("fuerza4").style.background = 'red';
        /* Vida del personaje */
        document.getElementById("vida1").style.background = 'green'; 
        document.getElementById("vida2").style.background = 'green'; 
        /* Inteligencia o magia del personaje */
        document.getElementById("inteligencia1").style.background = 'blue';

        /* Inicio de las habilidades del personaje */
        /* Habilidad 1 */
        document.getElementById("habilidad_1").src = "images/icono_habilidad_espada.png";
        document.getElementById("name_habilidad_1").innerHTML = "habilidad1 armothy";
        document.getElementById("personaje_habilidad_1").innerHTML = "Armothy";
        document.getElementById("tipo_habilidad_1").innerHTML = "Golpe simple";
        document.getElementById("descripcion_habilidad_1").innerHTML = "aca va la descripcion de la primera habilidad de Armothy";
        /* Habilidad 2 */
        document.getElementById("habilidad_2").src = "images/icono_habilidad_espadas.png";
        document.getElementById("name_habilidad_2").innerHTML = "habilidad2 armothy";
        document.getElementById("personaje_habilidad_2").innerHTML = "Armothy";
        document.getElementById("tipo_habilidad_2").innerHTML = "Golpe potente";
        document.getElementById("descripcion_habilidad_2").innerHTML = "aca va la descripcion de la segunda habilidad de Armothy";
        /* Habilidad 3 */
        document.getElementById("habilidad_3").src = "images/icono_habilidad_espada.png";
        document.getElementById("name_habilidad_3").innerHTML = "habilidad3 armothy";
        document.getElementById("personaje_habilidad_3").innerHTML = "Armothy";
        document.getElementById("tipo_habilidad_3").innerHTML = "Golpe simple";
        document.getElementById("descripcion_habilidad_3").innerHTML = "aca va la descripcion de la tercera habilidad de Armothy";
    }
    if(escoger_personaje.value=='Phoenixperson'){
        /* Restablecer los stats a 0 */
        document.getElementById('stats_01').style.visibility = 'visible';
        restablecerStats();                                
        /* Fuerza del personaje */
        document.getElementById("fuerza1").style.background = 'red';
        document.getElementById("fuerza2").style.background = 'red';
        document.getElementById("fuerza3").style.background = 'red';
        /* Vida del personaje */
        document.getElementById("vida1").style.background = 'green'; 
        document.getElementById("vida2").style.background = 'green';
        document.getElementById("vida3").style.background = 'green'; 
        /* Inteligencia o magia del personaje */
        document.getElementById("inteligencia1").style.background = 'blue';
        document.getElementById("inteligencia2").style.background = 'blue';

        /* Inicio de las habilidades del personaje */
        /* Habilidad 1 */
        document.getElementById("habilidad_1").src = "images/icono_habilidad_espada.png";
        document.getElementById("name_habilidad_1").innerHTML = "habilidad1 phoenixperson";
        document.getElementById("personaje_habilidad_1").innerHTML = "Phoenixperson";
        document.getElementById("tipo_habilidad_1").innerHTML = "Golpe simple";
        document.getElementById("descripcion_habilidad_1").innerHTML = "aca va la descripcion de la primera habilidad de Phoenixperson";
        /* Habilidad 2 */
        document.getElementById("habilidad_2").src = "images/icono_habilidad_escudo.png";
        document.getElementById("name_habilidad_2").innerHTML = "habilidad2 phoenixperson";
        document.getElementById("personaje_habilidad_2").innerHTML = "Phoenixperson";
        document.getElementById("tipo_habilidad_2").innerHTML = "Proteccion";
        document.getElementById("descripcion_habilidad_2").innerHTML = "aca va la descripcion de la segunda habilidad de Phoenixperson";
        /* Habilidad 3 */
        document.getElementById("habilidad_3").src = "images/icono_habilidad_magia.png";
        document.getElementById("name_habilidad_3").innerHTML = "habilidad3 phoenixperson";
        document.getElementById("personaje_habilidad_3").innerHTML = "Phoenixperson";
        document.getElementById("tipo_habilidad_3").innerHTML = "Cientifica";
        document.getElementById("descripcion_habilidad_3").innerHTML = "aca va la descripcion de la tercera habilidad de Phoenixperson";
    }
    if(escoger_personaje.value=='Mr_Meeseeks'){
        /* Restablecer los stats a 0 */
        document.getElementById('stats_01').style.visibility = 'visible';
        restablecerStats();
        /* Fuerza del personaje */
        document.getElementById("fuerza1").style.background = 'red';
        document.getElementById("fuerza2").style.background = 'red';
        document.getElementById("fuerza3").style.background = 'red';
        /* Vida del personaje */
        document.getElementById("vida1").style.background = 'green'; 
        document.getElementById("vida2").style.background = 'green'; 
        document.getElementById("vida3").style.background = 'green';
        /* Inteligencia o magia del personaje */
        document.getElementById("inteligencia1").style.background = 'blue';

        /* Inicio de las habilidades del personaje */
        /* Habilidad 1 */
        document.getElementById("habilidad_1").src = "images/icono_habilidad_espada.png";
        document.getElementById("name_habilidad_1").innerHTML = "habilidad1 mr Meeseeks";
        document.getElementById("personaje_habilidad_1").innerHTML = "Mr Meeseeks";
        document.getElementById("tipo_habilidad_1").innerHTML = "Golpe simple";
        document.getElementById("descripcion_habilidad_1").innerHTML = "aca va la descripcion de la primera habilidad de Mr Meeseeks";
        /* Habilidad 2 */
        document.getElementById("habilidad_2").src = "images/icono_habilidad_escudo.png";
        document.getElementById("name_habilidad_2").innerHTML = "habilidad2 mr Meeseeks";
        document.getElementById("personaje_habilidad_2").innerHTML = "Mr Meeseeks";
        document.getElementById("tipo_habilidad_2").innerHTML = "Proteccion";
        document.getElementById("descripcion_habilidad_2").innerHTML = "aca va la descripcion de la segunda habilidad de Mr Meeseeks";
        /* Habilidad 3 */
        document.getElementById("habilidad_3").src = "images/icono_habilidad_espada.png";
        document.getElementById("name_habilidad_3").innerHTML = "habilidad3 mr Meeseeks";
        document.getElementById("personaje_habilidad_3").innerHTML = "Mr Meeseeks";
        document.getElementById("tipo_habilidad_3").innerHTML = "Golpe simple";
        document.getElementById("descripcion_habilidad_3").innerHTML = "aca va la descripcion de la tercera habilidad de Mr Meeseeks";
    }
    /* Personajes  Malvados*/
    if(escoger_personaje.value=='Reggie'){
        /* Restablecer los stats a 0 */
        document.getElementById('stats_01').style.visibility = 'visible';
        restablecerStats();
        /* Fuerza del personaje */
        document.getElementById("fuerza1").style.background = 'red';
        document.getElementById("fuerza2").style.background = 'red';
        document.getElementById("fuerza3").style.background = 'red';
        /* Vida del personaje */
        document.getElementById("vida1").style.background = 'green'; 
        document.getElementById("vida2").style.background = 'green'; 
        /* Inteligencia o magia del personaje */
        document.getElementById("inteligencia1").style.background = 'blue';
        document.getElementById("inteligencia2").style.background = 'blue';
        document.getElementById("inteligencia3").style.background = 'blue';

        /* Inicio de las habilidades del personaje */
        /* Habilidad 1 */
        document.getElementById("habilidad_1").src = "images/icono_habilidad_espadas.png";
        document.getElementById("name_habilidad_1").innerHTML = "habilidad1 Reggie";
        document.getElementById("personaje_habilidad_1").innerHTML = "Reggie";
        document.getElementById("tipo_habilidad_1").innerHTML = "Golpe potente";
        document.getElementById("descripcion_habilidad_1").innerHTML = "aca va la descripcion de la primera habilidad de Reggie";
        /* Habilidad 2 */
        document.getElementById("habilidad_2").src = "images/icono_habilidad_escudo.png";
        document.getElementById("name_habilidad_2").innerHTML = "habilidad2 Reggie";
        document.getElementById("personaje_habilidad_2").innerHTML = "Reggie";
        document.getElementById("tipo_habilidad_2").innerHTML = "Proteccion";
        document.getElementById("descripcion_habilidad_2").innerHTML = "aca va la descripcion de la segunda habilidad de Reggie";
        /* Habilidad 3 */
        document.getElementById("habilidad_3").src = "images/icono_habilidad_magia.png";
        document.getElementById("name_habilidad_3").innerHTML = "habilidad3 Reggie";
        document.getElementById("personaje_habilidad_3").innerHTML = "Reggie";
        document.getElementById("tipo_habilidad_3").innerHTML = "Magica";
        document.getElementById("descripcion_habilidad_3").innerHTML = "aca va la descripcion de la tercera habilidad de Reggie";
    }
    if(escoger_personaje.value=='Rat_Boss'){
        /* Restablecer los stats a 0 */
        document.getElementById('stats_01').style.visibility = 'visible';
        restablecerStats();
        /* Fuerza del personaje */
        document.getElementById("fuerza1").style.background = 'red';
        document.getElementById("fuerza2").style.background = 'red';
        document.getElementById("fuerza3").style.background = 'red';
        /* Vida del personaje */
        document.getElementById("vida1").style.background = 'green'; 
        document.getElementById("vida2").style.background = 'green';
        document.getElementById("vida3").style.background = 'green'; 
        document.getElementById("vida4").style.background = 'green'; 
        /* Inteligencia o magia del personaje */
        document.getElementById("inteligencia1").style.background = 'blue';

        /* Inicio de las habilidades del personaje */
        /* Habilidad 1 */
        document.getElementById("habilidad_1").src = "images/icono_habilidad_espada.png";
        document.getElementById("name_habilidad_1").innerHTML = "habilidad1 Rat Boss";
        document.getElementById("personaje_habilidad_1").innerHTML = "Rat Boss";
        document.getElementById("tipo_habilidad_1").innerHTML = "Golpe simple";
        document.getElementById("descripcion_habilidad_1").innerHTML = "aca va la descripcion de la primera habilidad de Rat Boss";
        /* Habilidad 2 */
        document.getElementById("habilidad_2").src = "images/icono_habilidad_espadas.png";
        document.getElementById("name_habilidad_2").innerHTML = "habilidad2 Rat Boss";
        document.getElementById("personaje_habilidad_2").innerHTML = "Rat Boss";
        document.getElementById("tipo_habilidad_2").innerHTML = "Golpe potente";
        document.getElementById("descripcion_habilidad_2").innerHTML = "aca va la descripcion de la segunda habilidad de Rat Boss";
        /* Habilidad 3 */
        document.getElementById("habilidad_3").src = "images/icono_habilidad_escudo.png";
        document.getElementById("name_habilidad_3").innerHTML = "habilidad3 Rat Boss";
        document.getElementById("personaje_habilidad_3").innerHTML = "Rat Boss";
        document.getElementById("tipo_habilidad_3").innerHTML = "Proteccion";
        document.getElementById("descripcion_habilidad_3").innerHTML = "aca va la descripcion de la tercera habilidad de Rat Boss";
    }
    if(escoger_personaje.value=='Toxic_Rick'){
        /* Restablecer los stats a 0 */
        document.getElementById('stats_01').style.visibility = 'visible';
        restablecerStats();
        /* Fuerza del personaje */
        document.getElementById("fuerza1").style.background = 'red';
        /* Vida del personaje */
        document.getElementById("vida1").style.background = 'green'; 
        document.getElementById("vida2").style.background = 'green'; 
        /* Inteligencia o magia del personaje */
        document.getElementById("inteligencia1").style.background = 'blue';
        document.getElementById("inteligencia2").style.background = 'blue';
        document.getElementById("inteligencia3").style.background = 'blue';
        document.getElementById("inteligencia4").style.background = 'blue';

        /* Inicio de las habilidades del personaje */
        /* Habilidad 1 */
        document.getElementById("habilidad_1").src = "images/icono_habilidad_magia.png";
        document.getElementById("name_habilidad_1").innerHTML = "habilidad1 Toxic Rick";
        document.getElementById("personaje_habilidad_1").innerHTML = "Toxic Rick";
        document.getElementById("tipo_habilidad_1").innerHTML = "Cientifica";
        document.getElementById("descripcion_habilidad_1").innerHTML = "aca va la descripcion de la primera habilidad de Toxic Rick";
        /* Habilidad 2 */
        document.getElementById("habilidad_2").src = "images/icono_habilidad_escudo.png";
        document.getElementById("name_habilidad_2").innerHTML = "habilidad2 Toxic Rick";
        document.getElementById("personaje_habilidad_2").innerHTML = "Toxic Rick";
        document.getElementById("tipo_habilidad_2").innerHTML = "Proteccion";
        document.getElementById("descripcion_habilidad_2").innerHTML = "aca va la descripcion de la segunda habilidad de Toxic Rick";
        /* Habilidad 3 */
        document.getElementById("habilidad_3").src = "images/icono_habilidad_magia.png";
        document.getElementById("name_habilidad_3").innerHTML = "habilidad3 Toxic Rick";
        document.getElementById("personaje_habilidad_3").innerHTML = "Toxic Rick";
        document.getElementById("tipo_habilidad_3").innerHTML = "Cientifica";
        document.getElementById("descripcion_habilidad_3").innerHTML = "aca va la descripcion de la tercera habilidad de Toxic Rick";
    }
    if(escoger_personaje.value=='Worldender'){
        /* Restablecer los stats a 0 */
        document.getElementById('stats_01').style.visibility = 'visible';
        restablecerStats();
        /* Fuerza del personaje */
        document.getElementById("fuerza1").style.background = 'red';
        document.getElementById("fuerza2").style.background = 'red';
        document.getElementById("fuerza3").style.background = 'red';
        /* Vida del personaje */
        document.getElementById("vida1").style.background = 'green'; 
        document.getElementById("vida2").style.background = 'green'; 
        document.getElementById("vida3").style.background = 'green'; 
        /* Inteligencia o magia del personaje */
        document.getElementById("inteligencia1").style.background = 'blue';
        document.getElementById("inteligencia2").style.background = 'blue';

        /* Inicio de las habilidades del personaje */
        /* Habilidad 1 */
        document.getElementById("habilidad_1").src = "images/icono_habilidad_espada.png";
        document.getElementById("name_habilidad_1").innerHTML = "habilidad1 Worldender";
        document.getElementById("personaje_habilidad_1").innerHTML = "Worldender";
        document.getElementById("tipo_habilidad_1").innerHTML = "Golpe simple";
        document.getElementById("descripcion_habilidad_1").innerHTML = "aca va la descripcion de la primera habilidad de Worldender";
        /* Habilidad 2 */
        document.getElementById("habilidad_2").src = "images/icono_habilidad_espadas.png";
        document.getElementById("name_habilidad_2").innerHTML = "habilidad2 Worldender";
        document.getElementById("personaje_habilidad_2").innerHTML = "Worldender";
        document.getElementById("tipo_habilidad_2").innerHTML = "Golpe potente";
        document.getElementById("descripcion_habilidad_2").innerHTML = "aca va la descripcion de la segunda habilidad de Worldender";
        /* Habilidad 3 */
        document.getElementById("habilidad_3").src = "images/icono_habilidad_magia.png";
        document.getElementById("name_habilidad_3").innerHTML = "habilidad3 Worldender";
        document.getElementById("personaje_habilidad_3").innerHTML = "Worldender";
        document.getElementById("tipo_habilidad_3").innerHTML = "Magica";
        document.getElementById("descripcion_habilidad_3").innerHTML = "aca va la descripcion de la tercera habilidad de Worldender";
    }
    if (escoger_personaje.value != '' && escoger_personaje2.value != ''){
        document.getElementById('empezar_guerra').style.visibility = 'visible';
    }
    if (escoger_personaje.value == '' || escoger_personaje2.value == ''){
        document.getElementById('empezar_guerra').style.visibility = 'hidden';
    }
});

/* Muestra los stats #2 segun el personaje  */
escoger_personaje2.addEventListener('click', function(){
    if(escoger_personaje2.value==''){
        document.getElementById('stats_02').style.visibility = 'hidden';  
    }
    /* Personajes Benevolos */
    if(escoger_personaje2.value=='Rick_Sanchez'){
        /* Restablecer los stats a 0 */
        document.getElementById('stats_02').style.visibility = 'visible';
        restablecerStats2();
        /* Fuerza del personaje */
        document.getElementById("fuerza1_2").style.background = 'red';
        /* Vida del personaje */
        document.getElementById("vida1_2").style.background = 'green'; 
        document.getElementById("vida2_2").style.background = 'green'; 
        /* Inteligencia o magia del personaje */
        document.getElementById("inteligencia1_2").style.background = 'blue';
        document.getElementById("inteligencia2_2").style.background = 'blue';
        document.getElementById("inteligencia3_2").style.background = 'blue';
        document.getElementById("inteligencia4_2").style.background = 'blue';

        /* Inicio de las habilidades del personaje */
        /* Habilidad 1 */
        document.getElementById("habilidad_01").src = "images/icono_habilidad_magia.png";
        document.getElementById("name_habilidad_01").innerHTML = "habilidad1 rick";
        document.getElementById("personaje_habilidad_01").innerHTML = "Rick Sanchez";
        document.getElementById("tipo_habilidad_01").innerHTML = "Cientifica";
        document.getElementById("descripcion_habilidad_01").innerHTML = "aca va la descripcion de la primera habilidad de Rick Sanchez";
        /* Habilidad 2 */
        document.getElementById("habilidad_02").src = "images/icono_habilidad_escudo.png";
        document.getElementById("name_habilidad_02").innerHTML = "habilidad2 rick";
        document.getElementById("personaje_habilidad_02").innerHTML = "Rick Sanchez";
        document.getElementById("tipo_habilidad_02").innerHTML = "Proteccion";
        document.getElementById("descripcion_habilidad_02").innerHTML = "aca va la descripcion de la segunda habilidad de Rick Sanchez";
        /* Habilidad 3 */
        document.getElementById("habilidad_03").src = "images/icono_habilidad_magia.png";
        document.getElementById("name_habilidad_03").innerHTML = "habilidad3 rick";
        document.getElementById("personaje_habilidad_03").innerHTML = "Rick Sanchez";
        document.getElementById("tipo_habilidad_03").innerHTML = "Cientifica";
        document.getElementById("descripcion_habilidad_03").innerHTML = "aca va la descripcion de la tercera habilidad de Rick Sanchez";
    }
    if(escoger_personaje2.value=='Armothy'){
        /* Restablecer los stats a 0 */
        document.getElementById('stats_02').style.visibility = 'visible';
        restablecerStats2();
        /* Fuerza del personaje */
        document.getElementById("fuerza1_2").style.background = 'red';
        document.getElementById("fuerza2_2").style.background = 'red';
        document.getElementById("fuerza3_2").style.background = 'red';
        document.getElementById("fuerza4_2").style.background = 'red';
        /* Vida del personaje */
        document.getElementById("vida1_2").style.background = 'green'; 
        document.getElementById("vida2_2").style.background = 'green'; 
        /* Inteligencia o magia del personaje */
        document.getElementById("inteligencia1_2").style.background = 'blue';

        /* Inicio de las habilidades del personaje */
        /* Habilidad 1 */
        document.getElementById("habilidad_01").src = "images/icono_habilidad_espada.png";
        document.getElementById("name_habilidad_01").innerHTML = "habilidad1 armothy";
        document.getElementById("personaje_habilidad_01").innerHTML = "Armothy";
        document.getElementById("tipo_habilidad_01").innerHTML = "Golpe simple";
        document.getElementById("descripcion_habilidad_01").innerHTML = "aca va la descripcion de la primera habilidad de Armothy";
        /* Habilidad 2 */
        document.getElementById("habilidad_02").src = "images/icono_habilidad_espadas.png";
        document.getElementById("name_habilidad_02").innerHTML = "habilidad2 armothy";
        document.getElementById("personaje_habilidad_02").innerHTML = "Armothy";
        document.getElementById("tipo_habilidad_02").innerHTML = "Golpe potente";
        document.getElementById("descripcion_habilidad_02").innerHTML = "aca va la descripcion de la segunda habilidad de Armothy";
        /* Habilidad 3 */
        document.getElementById("habilidad_03").src = "images/icono_habilidad_espada.png";
        document.getElementById("name_habilidad_03").innerHTML = "habilidad3 armothy";
        document.getElementById("personaje_habilidad_03").innerHTML = "Armothy";
        document.getElementById("tipo_habilidad_03").innerHTML = "Golpe simple";
        document.getElementById("descripcion_habilidad_03").innerHTML = "aca va la descripcion de la tercera habilidad de Armothy";
    }
    if(escoger_personaje2.value=='Phoenixperson'){
        /* Restablecer los stats a 0 */
        document.getElementById('stats_02').style.visibility = 'visible';
        restablecerStats2();
        /* Fuerza del personaje */
        document.getElementById("fuerza1_2").style.background = 'red';
        document.getElementById("fuerza2_2").style.background = 'red';
        document.getElementById("fuerza3_2").style.background = 'red';
        /* Vida del personaje */
        document.getElementById("vida1_2").style.background = 'green'; 
        document.getElementById("vida2_2").style.background = 'green'; 
        document.getElementById("vida3_2").style.background = 'green';
        /* Inteligencia o magia del personaje */
        document.getElementById("inteligencia1_2").style.background = 'blue';
        document.getElementById("inteligencia2_2").style.background = 'blue';

        /* Inicio de las habilidades del personaje */
        /* Habilidad 1 */
        document.getElementById("habilidad_01").src = "images/icono_habilidad_espada.png";
        document.getElementById("name_habilidad_01").innerHTML = "habilidad1 phoenixperson";
        document.getElementById("personaje_habilidad_01").innerHTML = "Phoenixperson";
        document.getElementById("tipo_habilidad_01").innerHTML = "Golpe simple";
        document.getElementById("descripcion_habilidad_01").innerHTML = "aca va la descripcion de la primera habilidad de Phoenixperson";
        /* Habilidad 2 */
        document.getElementById("habilidad_02").src = "images/icono_habilidad_escudo.png";
        document.getElementById("name_habilidad_02").innerHTML = "habilidad2 phoenixperson";
        document.getElementById("personaje_habilidad_02").innerHTML = "Phoenixperson";
        document.getElementById("tipo_habilidad_02").innerHTML = "Proteccion";
        document.getElementById("descripcion_habilidad_02").innerHTML = "aca va la descripcion de la segunda habilidad de Phoenixperson";
        /* Habilidad 3 */
        document.getElementById("habilidad_03").src = "images/icono_habilidad_magia.png";
        document.getElementById("name_habilidad_03").innerHTML = "habilidad3 phoenixperson";
        document.getElementById("personaje_habilidad_03").innerHTML = "Phoenixperson";
        document.getElementById("tipo_habilidad_03").innerHTML = "Cientifica";
        document.getElementById("descripcion_habilidad_03").innerHTML = "aca va la descripcion de la tercera habilidad de Phoenixperson";
    }
    if(escoger_personaje2.value=='Mr_Meeseeks'){
        /* Restablecer los stats a 0 */
        document.getElementById('stats_02').style.visibility = 'visible';
        restablecerStats2();
        /* Fuerza del personaje */
        document.getElementById("fuerza1_2").style.background = 'red';
        document.getElementById("fuerza2_2").style.background = 'red';
        document.getElementById("fuerza3_2").style.background = 'red';
        /* Vida del personaje */
        document.getElementById("vida1_2").style.background = 'green'; 
        document.getElementById("vida2_2").style.background = 'green'; 
        document.getElementById("vida3_2").style.background = 'green';
        /* Inteligencia o magia del personaje */
        document.getElementById("inteligencia1_2").style.background = 'blue';

        /* Inicio de las habilidades del personaje */
        /* Habilidad 1 */
        document.getElementById("habilidad_01").src = "images/icono_habilidad_espada.png";
        document.getElementById("name_habilidad_01").innerHTML = "habilidad1 mr Meeseeks";
        document.getElementById("personaje_habilidad_01").innerHTML = "Mr Meeseeks";
        document.getElementById("tipo_habilidad_01").innerHTML = "Golpe simple";
        document.getElementById("descripcion_habilidad_01").innerHTML = "aca va la descripcion de la primera habilidad de Mr Meeseeks";
        /* Habilidad 2 */
        document.getElementById("habilidad_02").src = "images/icono_habilidad_escudo.png";
        document.getElementById("name_habilidad_02").innerHTML = "habilidad2 mr Meeseeks";
        document.getElementById("personaje_habilidad_02").innerHTML = "Mr Meeseeks";
        document.getElementById("tipo_habilidad_02").innerHTML = "Proteccion";
        document.getElementById("descripcion_habilidad_02").innerHTML = "aca va la descripcion de la segunda habilidad de Mr Meeseeks";
        /* Habilidad 3 */
        document.getElementById("habilidad_03").src = "images/icono_habilidad_espada.png";
        document.getElementById("name_habilidad_03").innerHTML = "habilidad3 mr Meeseeks";
        document.getElementById("personaje_habilidad_03").innerHTML = "Mr Meeseeks";
        document.getElementById("tipo_habilidad_03").innerHTML = "Golpe simple";
        document.getElementById("descripcion_habilidad_03").innerHTML = "aca va la descripcion de la tercera habilidad de Mr Meeseeks";
    }
    /* Personajes  Malvados*/
    if(escoger_personaje2.value=='Reggie'){
        /* Restablecer los stats a 0 */
        document.getElementById('stats_02').style.visibility = 'visible';
        restablecerStats2();
        /* Fuerza del personaje */
        document.getElementById("fuerza1_2").style.background = 'red';
        document.getElementById("fuerza2_2").style.background = 'red';
        document.getElementById("fuerza3_2").style.background = 'red';
        /* Vida del personaje */
        document.getElementById("vida1_2").style.background = 'green'; 
        document.getElementById("vida2_2").style.background = 'green'; 
        /* Inteligencia o magia del personaje */
        document.getElementById("inteligencia1_2").style.background = 'blue';
        document.getElementById("inteligencia2_2").style.background = 'blue';
        document.getElementById("inteligencia3_2").style.background = 'blue';

        /* Inicio de las habilidades del personaje */
        /* Habilidad 1 */
        document.getElementById("habilidad_01").src = "images/icono_habilidad_espadas.png";
        document.getElementById("name_habilidad_01").innerHTML = "habilidad1 Reggie";
        document.getElementById("personaje_habilidad_01").innerHTML = "Reggie";
        document.getElementById("tipo_habilidad_01").innerHTML = "Golpe potente";
        document.getElementById("descripcion_habilidad_01").innerHTML = "aca va la descripcion de la primera habilidad de Reggie";
        /* Habilidad 2 */
        document.getElementById("habilidad_02").src = "images/icono_habilidad_escudo.png";
        document.getElementById("name_habilidad_02").innerHTML = "habilidad2 Reggie";
        document.getElementById("personaje_habilidad_02").innerHTML = "Reggie";
        document.getElementById("tipo_habilidad_02").innerHTML = "Proteccion";
        document.getElementById("descripcion_habilidad_02").innerHTML = "aca va la descripcion de la segunda habilidad de Reggie";
        /* Habilidad 3 */
        document.getElementById("habilidad_03").src = "images/icono_habilidad_magia.png";
        document.getElementById("name_habilidad_03").innerHTML = "habilidad3 Reggie";
        document.getElementById("personaje_habilidad_03").innerHTML = "Reggie";
        document.getElementById("tipo_habilidad_03").innerHTML = "Magica";
        document.getElementById("descripcion_habilidad_03").innerHTML = "aca va la descripcion de la tercera habilidad de Reggie";
    }
    if(escoger_personaje2.value=='Rat_Boss'){
        /* Restablecer los stats a 0 */
        document.getElementById('stats_02').style.visibility = 'visible';
        restablecerStats2();
        /* Fuerza del personaje */
        document.getElementById("fuerza1_2").style.background = 'red';
        document.getElementById("fuerza2_2").style.background = 'red';
        document.getElementById("fuerza3_2").style.background = 'red';
        /* Vida del personaje */
        document.getElementById("vida1_2").style.background = 'green'; 
        document.getElementById("vida2_2").style.background = 'green';
        document.getElementById("vida3_2").style.background = 'green'; 
        document.getElementById("vida4_2").style.background = 'green'; 
        /* Inteligencia o magia del personaje */
        document.getElementById("inteligencia1_2").style.background = 'blue';

        /* Inicio de las habilidades del personaje */
        /* Habilidad 1 */
        document.getElementById("habilidad_01").src = "images/icono_habilidad_espada.png";
        document.getElementById("name_habilidad_01").innerHTML = "habilidad1 Rat Boss";
        document.getElementById("personaje_habilidad_01").innerHTML = "Rat Boss";
        document.getElementById("tipo_habilidad_01").innerHTML = "Golpe simple";
        document.getElementById("descripcion_habilidad_01").innerHTML = "aca va la descripcion de la primera habilidad de Rat Boss";
        /* Habilidad 2 */
        document.getElementById("habilidad_02").src = "images/icono_habilidad_espadas.png";
        document.getElementById("name_habilidad_02").innerHTML = "habilidad2 Rat Boss";
        document.getElementById("personaje_habilidad_02").innerHTML = "Rat Boss";
        document.getElementById("tipo_habilidad_02").innerHTML = "Golpe potente";
        document.getElementById("descripcion_habilidad_02").innerHTML = "aca va la descripcion de la segunda habilidad de Rat Boss";
        /* Habilidad 3 */
        document.getElementById("habilidad_03").src = "images/icono_habilidad_escudo.png";
        document.getElementById("name_habilidad_03").innerHTML = "habilidad3 Rat Boss";
        document.getElementById("personaje_habilidad_03").innerHTML = "Rat Boss";
        document.getElementById("tipo_habilidad_03").innerHTML = "Proteccion";
        document.getElementById("descripcion_habilidad_03").innerHTML = "aca va la descripcion de la tercera habilidad de Rat Boss";
    }
    if(escoger_personaje2.value=='Toxic_Rick'){
        /* Restablecer los stats a 0 */
        document.getElementById('stats_02').style.visibility = 'visible';
        restablecerStats2();
        /* Fuerza del personaje */
        document.getElementById("fuerza1_2").style.background = 'red';
        /* Vida del personaje */
        document.getElementById("vida1_2").style.background = 'green'; 
        document.getElementById("vida2_2").style.background = 'green'; 
        /* Inteligencia o magia del personaje */
        document.getElementById("inteligencia1_2").style.background = 'blue';
        document.getElementById("inteligencia2_2").style.background = 'blue';
        document.getElementById("inteligencia3_2").style.background = 'blue';
        document.getElementById("inteligencia4_2").style.background = 'blue';

        /* Inicio de las habilidades del personaje */
        /* Habilidad 1 */
        document.getElementById("habilidad_01").src = "images/icono_habilidad_magia.png";
        document.getElementById("name_habilidad_01").innerHTML = "habilidad1 Toxic Rick";
        document.getElementById("personaje_habilidad_01").innerHTML = "Toxic Rick";
        document.getElementById("tipo_habilidad_01").innerHTML = "Cientifica";
        document.getElementById("descripcion_habilidad_01").innerHTML = "aca va la descripcion de la primera habilidad de Toxic Rick";
        /* Habilidad 2 */
        document.getElementById("habilidad_02").src = "images/icono_habilidad_escudo.png";
        document.getElementById("name_habilidad_02").innerHTML = "habilidad2 Toxic Rick";
        document.getElementById("personaje_habilidad_02").innerHTML = "Toxic Rick";
        document.getElementById("tipo_habilidad_02").innerHTML = "Proteccion";
        document.getElementById("descripcion_habilidad_02").innerHTML = "aca va la descripcion de la segunda habilidad de Toxic Rick";
        /* Habilidad 3 */
        document.getElementById("habilidad_03").src = "images/icono_habilidad_magia.png";
        document.getElementById("name_habilidad_03").innerHTML = "habilidad3 Toxic Rick";
        document.getElementById("personaje_habilidad_03").innerHTML = "Toxic Rick";
        document.getElementById("tipo_habilidad_03").innerHTML = "Cientifica";
        document.getElementById("descripcion_habilidad_03").innerHTML = "aca va la descripcion de la tercera habilidad de Toxic Rick";
    }
    if(escoger_personaje2.value=='Worldender'){
        /* Restablecer los stats a 0 */
        document.getElementById('stats_02').style.visibility = 'visible';
        restablecerStats2();
        /* Fuerza del personaje */
        document.getElementById("fuerza1_2").style.background = 'red';
        document.getElementById("fuerza2_2").style.background = 'red';
        document.getElementById("fuerza3_2").style.background = 'red';
        /* Vida del personaje */
        document.getElementById("vida1_2").style.background = 'green'; 
        document.getElementById("vida2_2").style.background = 'green'; 
        document.getElementById("vida3_2").style.background = 'green'; 
        /* Inteligencia o magia del personaje */
        document.getElementById("inteligencia1_2").style.background = 'blue';
        document.getElementById("inteligencia2_2").style.background = 'blue';

        /* Inicio de las habilidades del personaje */
        /* Habilidad 1 */
        document.getElementById("habilidad_01").src = "images/icono_habilidad_espada.png";
        document.getElementById("name_habilidad_01").innerHTML = "habilidad1 Worldender";
        document.getElementById("personaje_habilidad_01").innerHTML = "Worldender";
        document.getElementById("tipo_habilidad_01").innerHTML = "Golpe simple";
        document.getElementById("descripcion_habilidad_01").innerHTML = "aca va la descripcion de la primera habilidad de Worldender";
        /* Habilidad 2 */
        document.getElementById("habilidad_02").src = "images/icono_habilidad_espadas.png";
        document.getElementById("name_habilidad_02").innerHTML = "habilidad2 Worldender";
        document.getElementById("personaje_habilidad_02").innerHTML = "Worldender";
        document.getElementById("tipo_habilidad_02").innerHTML = "Golpe potente";
        document.getElementById("descripcion_habilidad_02").innerHTML = "aca va la descripcion de la segunda habilidad de Worldender";
        /* Habilidad 3 */
        document.getElementById("habilidad_03").src = "images/icono_habilidad_magia.png";
        document.getElementById("name_habilidad_03").innerHTML = "habilidad3 Worldender";
        document.getElementById("personaje_habilidad_03").innerHTML = "Worldender";
        document.getElementById("tipo_habilidad_03").innerHTML = "Magica";
        document.getElementById("descripcion_habilidad_03").innerHTML = "aca va la descripcion de la tercera habilidad de Worldender";
    }
    if (escoger_personaje.value != '' && escoger_personaje2.value != ''){
        document.getElementById('empezar_guerra').style.visibility = 'visible';
    }
    if (escoger_personaje.value == '' || escoger_personaje2.value == ''){
        document.getElementById('empezar_guerra').style.visibility = 'hidden';
    }
});
