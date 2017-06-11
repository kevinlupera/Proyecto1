<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html lang="es">
    <head>
        <?php include("codigos/meta.php")?>
        <title></title>
    </head>
    <body>
        <script src="funciones/funciones.js" type="text/javascript"></script>
        <?php include("codigos/header.php")?>
        <?php include("codigos/nav.php")?>
        <div class="contenedor">
            <section class="reporte-dia">
                <h2>Reporte del Día</h2>
                <a class="enlacesDOM" onmouseover="adicionar(1)" href="#">Agregar un reporte</a>
                </br>    
                <button type="button" onclick="quitarRepor()">Quitar un reporte</button>
                <button type="button" onclick="aparecerRepor()">Mostrar el reporte</button>
                <button type="button" onclick="ocultarRepor()">Ocultar el reporte</button>
                <button type="button" onclick="resetRepor()">Resetear el reporte</button>
                <div id="cntReporteDia">
                    <p></p>
                </div>                        
            </section>
            <section class="reporte-mensual">
                <h2>Reporte del Mensual</h2>
            </section>
            <section class="reporte-anual">
                <h2>Reporte del Anual</h2>
            </section>
        </div>
        
        <?php include("codigos/footer.php")?>
    </body>
</html>