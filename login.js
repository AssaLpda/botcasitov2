// Definimos un usuario y contraseña válidos para la autenticación
const validUsername = "admin";  // Cambia este valor si es necesario
const validPassword = "12345";  // Cambia este valor si es necesario

// Función para validar el login
function validateLogin(event) {
    event.preventDefault();  // Evitar que el formulario se envíe de manera predeterminada

    // Obtener los valores ingresados por el usuario
    const username = document.getElementById('userName').value;
    const password = document.getElementById('pwd').value;
    const errorMsg = document.getElementById('errorMsg');

    // Verificar si el usuario y la contraseña son correctos
    if (username === validUsername && password === validPassword) {
        alert("Login exitoso! Redirigiendo al bot...");
        // Redirigir a la página del bot
        window.location.href = "index.html";  // Cambia "bot.html" por la ruta correcta de tu página del bot
    } else {
        // Mostrar el mensaje de error si las credenciales no son correctas
        errorMsg.style.display = 'block';
    }
}

