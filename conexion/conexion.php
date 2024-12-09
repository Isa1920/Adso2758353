<?php
$servername = "localhost";
$username = "Root"; // Reemplaza con tu usuario
$password = ""; // Reemplaza con tu contraseña
$dbname = "inventario"; // Reemplaza con el nombre de tu base de datos

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Error de conexión: " . $conn->connect_error);
   
}
?>

