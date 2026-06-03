<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Calculadora IP</title>
    <link rel="stylesheet" href="DISEÑO.css">
</head>
<body>
    <h1>CALCULADORA IP</h1>
    <div class="formulario">
        <label for="ip">Ingresa IP:</label>
        <input type="text" id="ip" name="direccion-ip" placeholder="Ejemplo: 192.168.1.1">
        <label for="mascara">Ingresa Máscara:</label>
        <input type="text" id="mascara" name="mascara-ip" placeholder="Ejemplo:/25">
        <button type="button" onclick="calcular()">Calcular Subredes</button>
    </div>
    <hr>
    <h2>Subredes Necesarias</h2>
    <div class="subred">
   <label>Nombre de subred 1:</label>
     <input type="text" id="nombre-subred-1" placeholder="Nombre">
    <label>Hosts:</label>
      <input type="number" id="hosts-subred-1" placeholder="Ejemplo 50">
    </div>
    <div class="subred-grupo">
    <label>Nombre de subred 2:</label>
    <input type="text" id="nombre-subred-2" placeholder="Nombre">
    <label>Hosts:</label>
    <input type="number" id="hosts-subred-2" placeholder="Ejemplo 50">
    </div>
    <div class="subred-grupo">
    <label>Nombre de subred 3:</label>
    <input type="text" id="nombre-subred-3" placeholder="Nombre">
   <label>Hosts:</label>
   <input type="number" id="hosts-subred-3" placeholder="Ejemplo 50">
    </div>
    <div id="resultado"></div>
    <script src="SCRIPT.js"></script>
</body>
</html>
