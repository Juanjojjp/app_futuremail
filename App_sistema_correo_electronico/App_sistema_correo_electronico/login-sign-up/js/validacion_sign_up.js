
const formulario_sign_up = document.getElementById('formulario_sign_up');
const inputs = document.querySelectorAll('#formulario_sign_up input');

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    last_name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	username: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
}

const campos = {
	name: false,
	last_name: false,
    username: false,
	password: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {

		case "name":
			validarCampo(expresiones.name, e.target, 'name');
		break;	

        case "last_name":
        	validarCampo(expresiones.last_name, e.target, 'last_name');
        break;

        case "username":
			validarCampo(expresiones.username, e.target, 'username');
		break;

		case "password":
			validarCampo(expresiones.password, e.target, 'password');
		break;
	}
}

const validarCampo = (expresiones, input, campo) => {
	if(expresiones.test(input.value)){
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

	if(campos.name && campos.last_name && campos.username && campos.password){
		redirectional();

	} 
	
	else {
		document.getElementById('sign_up_error').classList.add('sign_up_error-activo');
	}
});

