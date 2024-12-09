<?php
session_start();

include('../include/conexion.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $correo = $_POST["correo"];
    $clave = $_POST["clave"];

    $stmt = $conn->prepare("SELECT u.correo, u.clave, r.nombre AS rol FROM usuarios u JOIN rol r ON u.idrol = r.idrol WHERE u.correo = ?");
    $stmt->bind_param("s", $correo);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();

        // Verificar la contraseña
        if ($clave === $row['clave']) {
            // Inicio de sesión exitoso
            $_SESSION['usuario_rol'] = $row['rol'];

            if ($row['rol'] === 'Administrador') {
                header("Location: ../template/operador.php"); // Ruta para el panel de administrador
            } elseif ($row['rol'] === 'Cobrador') {
                header("Location: ../template/operador_cobrador.php"); // Ruta para el panel de empleado
            }
            exit();
        } else {
            // Contraseña incorrecta
            $_SESSION['mensaje_error'] = "Credenciales incorrectas";
            header("Location: ../template/inicio_sesion.php"); // Redirige de nuevo a la página de inicio de sesión
            exit();
        }
    } else {
        // Usuario no encontrado
        $_SESSION['mensaje_error'] = "Usuario no encontrado laura";
        header("Location: ../template/inicio_sesion.php"); // Redirige de nuevo a la página de inicio de sesión
        exit();
    }

}

$conn->close();
?>