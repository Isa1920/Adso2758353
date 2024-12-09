document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    
    // Datos de ejemplo para la autenticación
    const validUsername = 'laura';
    const validPassword = '123456';

  // aca se llama la ide del usuario y la contraseña
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    if (username === validUsername && password === validPassword) {
        // Si es correcto, redirige a otra página
        window.location.href = 'administrador.html';
    } else {
        // Si es incorrecto, muestra un mensaje de error
        alert('Usuario o contraseña incorrectos.');
    }
});
document.getElementById(registerform)?.addEventListener("submit",function(event){
    event.preventDefault();
    //simular registro//
    const fullName =
    Document.getElementById(fullName).value;
    const email=
    document.getElementById(email).value;
    const password=
    Document.getElementById(password).value;

    alert('¡registro exitoso!\nbienvenido,$fullname');
    
});




