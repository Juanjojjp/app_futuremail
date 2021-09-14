
const formulario_sign_up = document.getElementById('formulario_recover');
const inputs = document.querySelectorAll('#formulario_recover input');

const expresiones = {
	gmail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
    username: false,
	correo_recuperacion: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
        case "username":
			validarCampo(expresiones.gamil, e.target, 'username');
		break;

		case "correo_recuperacion":
			validarCampo(expresiones.gamil, e.target, 'correo_recuperacion');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

function redirectional() {
	document.location.href="index_login.html"
}

formulario_sign_up.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.username && campos.correo_recuperacion){
		redirectional();

	} 
	
	else {
		document.getElementById('recover_error').classList.add('recover_error-activo');
	}
});

