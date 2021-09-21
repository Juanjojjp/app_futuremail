const formulario_login = document.getElementById('formulario_login');
const inputs = document.querySelectorAll('#formulario_login input');
user1 = localStorage.getItem('username')
user2 = localStorage.getItem('password')

function redirectional() {
	document.location.href="../into_mail/index_homepage.html"
}

formulario_login.addEventListener('submit', (e) => {
	e.preventDefault();
    if(document.getElementById('user').value == window.localStorage.getItem("username")  && document.getElementById('passw').value == window.localStorage.getItem("password")) {
        redirectional();
    }   
    else {
        document.getElementById('login_error').classList.add('login_error-activo');
    }
});
