<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html lang="es">
    <head>
        <title></title>
        
        <?php include("codigos/meta.php")?>

    </head>
    <body class="inicio">
        <?php include("codigos/header.php")?>
        <?php include("codigos/nav.php")?>

        <section id='contenedor'>
            <section class="uno">
                <div class="principal">
                    <h2><i>"Consigue los mejores productos al menor costo"</i></h2>
                    <img src="" alt=""/>
                </div>
            </section>
            <section class="dos">
                <div class="secundaria">
                    <p></p>
                    <img src="" alt=""/>
                </div>
            </section>
        </section>
        <aside id='barraLateral'>
            <h3>Registrate</h3>
            <form method="post" action="" onsubmit="return validacionFormularioRegistro()">
                <label for="nombreUsuario">Nombre de usuario:</label><br/>
                <input type="text" name="nombreUsuario" id="campoUsuario"/><br/>
                <label for="correo"> E-mail:</label><br/>
                <input type="email" name="correo" id="campoEmail"><br/>
                <label for="claveUsuario">Contraseña de usuario:</label><br/>
                <input type="password" name="claveUsuario" id="campoContrasenia"><br/>
                <label for="claveUsuario">Confirmar contraseña:</label><br/>
                <input type="password" name="claveUsuario" id="campoContrasenia2"><br/>
                <label for="radio">Genero:</label><br/>
                <input type="radio" name="genero" value="hombre"><label>Masculino</label><br/>
                <input type="radio" name="genero" value="mujer"><label>Femenino</label><br/>
                <input type="radio" name="genero" value="otro"><label>Otro</label><br/>
                <label for="fechaNacimiento">Fecha de Nacimiento:</label><br/>
                <input type="date" name="fechaNacimiento" min="1930-01-01" max="2002-12-31" id="campoFechaNac"><br/>
                <input type="submit" value="Registrar" name="botonRegistrar">
                <input type="reset" value="Limpiar">
            </form>
        </aside>
        <script src="funciones/funciones.js" type="text/javascript">
            
        </script>
        <?php include("codigos/footer.php")?>
    </body>
</html>
