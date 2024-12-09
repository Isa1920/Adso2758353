<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>login html </title>
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div class="container">
        
        <form action="../config/procesar_login.php" method="POST">
        <h1 class="titulo">Bienvenidos</h1>
            <?php if (isset($_SESSION['mensaje_error'])): ?>
                <div class="mensaje-error"><?php echo $_SESSION['mensaje_error']; ?></div>
            <?php unset($_SESSION['mensaje_error']); endif; ?>
    <div class="login" > 
        <form id="formulario"  onsubmit="return validarformulario"(); > 
            <label for="username"></label>
            <p><input type="text" id="username" name="usuario" required="usuario" placeholder="usuario"></p>
            <p><label for="password"></label></p>
            <p><input type="password" id="password" name="password" required="contraseña" placeholder="contraseña">  </p>
           <button type= "submit" >enviar</button>
           
           
         
          

        
         </form>  
            
    </div>
    <script src="login.js"></script>   
</body>
</html>