

function guardarDatos() {
    window.localStorage.setItem("name", document.getElementById('name').value);
    window.localStorage.setItem("last_name", document.getElementById('last_name').value);
    window.localStorage.setItem("username", document.getElementById('username').value);
    window.localStorage.setItem("password", document.getElementById('password').value);
}


document.getElementById("create_account").addEventListener("click", guardarDatos);


