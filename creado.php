<!DOCTYPE html>
<html>

<head>
    <meta charset='utf-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <title>VALIDACION</title>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' media='screen' href='estilos.css'>
</head>

<body>
    <div>
        <img src="fig.gif" alt="Smiley face" height="350" width="420">

        <?php
        $cedula = isset($_POST["cedula"]) ? $_POST["cedula"] : null;
        $nombre = isset($_POST["nombres"]) ?  $_POST["nombres"] : null;
        $apelli = isset($_POST["apellidos"]) ?  $_POST["apellidos"] : null;
        $direci = isset($_POST["direccion"]) ?  $_POST["direccion"] : null;
        $fecha = isset($_POST["fechaNacimiento"]) ?  $_POST["fechaNacimiento"] : null;
        $correo = isset($_POST["correo"]) ?  $_POST["correo"] : null;

        echo "<p>Bienvenido, pasaste las validaciones!</p>";
        echo "<p>Cedula    : $cedula </p>";
        echo "<p>Nombre    : $nombre</p>";
        echo "<p>Apellido  : $apelli</p>";
        echo "<p>Direccion : $direci</p>";
        echo "<p>FechaNaci : $fecha</p>";
        echo "<p>Correo    : $correo</p>";
        ?>

    </div>

</body>

</html>