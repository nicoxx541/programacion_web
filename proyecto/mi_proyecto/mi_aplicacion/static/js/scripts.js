// Iniciar seccion 
// scripts.js

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Validar si el campo de correo electrónico está vacío o no es válido
        if (email.trim() === "" || !validateEmail(email)) {
            errorMessage.textContent = "nicolashernandezdelarosa@gmail.com";
            errorMessage.style.color = "red";
            return false;
        }

        // Validar si el campo de contraseña está vacío
        if (password.trim() === "") {
            errorMessage.textContent = "Asuna541";
            errorMessage.style.color = "red";
            return false;
        }

        // Limpiar el mensaje de error si ambos campos son válidos
        errorMessage.textContent = "";
        // Aquí podrías añadir la lógica para enviar el formulario si es necesario
        return true;
    });
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


// Función para validar el formato del correo electrónico
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}


document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const loginMessage = document.getElementById('loginMessage');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Aquí puedes realizar una validación simple (simulada) para verificar si el usuario está registrado
        if (email === "usuario@example.com" && password === "contraseña123") {
            loginMessage.textContent = "Inicio de sesión exitoso. Usuario registrado.";
            loginMessage.style.color = "green";
        } else {
            loginMessage.textContent = "Credenciales incorrectas. Usuario no registrado.";
            loginMessage.style.color = "red";
        }
    });
});

    
// Registrarse
function validateForm() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var remember = document.getElementById("remember").checked;

    // Verifica si algún campo está vacío
    if (username == "" || email == "" || password == "" || confirmPassword == "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    // Verifica si las contraseñas coinciden
    if (password != confirmPassword) {
        alert("Las contraseñas no coinciden.");
        return false;
    }

    // Verifica si el nombre de usuario tiene al menos 3 caracteres
    if (username.length < 3) {
        document.getElementById("usernameError").style.display = "block";
        return false;
    } else {
        document.getElementById("usernameError").style.display = "none";
    }

    // Verifica si el correo electrónico es válido
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        document.getElementById("emailError").style.display = "block";
        return false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    // Verifica si la contraseña tiene al menos 8 caracteres
    if (password.length < 8) {
        document.getElementById("passwordError").style.display = "block";
        return false;
    } else {
        document.getElementById("passwordError").style.display = "none";
    }

    // Si llega aquí, la validación es exitosa
    return true;
}
// navegador
document.addEventListener("DOMContentLoaded", function() {
    fetch("nav.html")
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        });
});
// contacto
function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    // Validar que los campos no estén vacíos
    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor completa todos los campos.");
        return false;
    }

    // Validar el formato del email usando una expresión regular simple
    var regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!regexEmail.test(email)) {
        alert("Por favor ingresa un email válido.");
        return false;
    }

    // Si todos los campos son válidos, permitir el envío del formulario
    return true;
}
/*api*/
document.addEventListener("DOMContentLoaded", function() {
    fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then(data => {
            const characters = data.results.slice(0, 3);
            let content = '';
            characters.forEach(character => {
                content += `
                    <div class="character-card">
                        <img src="${character.image}" alt="${character.name}">
                        <div class="card-body">
                            <h5 class="card-title">${character.name}</h5>
                            <p class="card-text">${character.species}</p>
                        </div>
                    </div>
                `;
            });

            document.getElementById('character-container').innerHTML = content;
        })
        .catch(error => {
            console.error('Error al obtener los datos de la API:', error);
        });
});
