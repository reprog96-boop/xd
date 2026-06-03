
function cidrAMascara(cidr) {
    let octetos = [];
    let bitsRestantes = cidr;

    for (let i = 0; i < 4; i++) {
        if (bitsRestantes >= 8) {
            octetos.push(255);
            bitsRestantes -= 8;
        } else if (bitsRestantes > 0) {
            octetos.push(256 - Math.pow(2, 8 - bitsRestantes));
            bitsRestantes = 0;
        } else {
            octetos.push(0);
        }
    }
    return octetos.join(".");
}


function calcular() {
    let ip      = document.getElementById("ip").value;
    let mascara = parseInt(document.getElementById("mascara").value);

    let nombreSubred1 = document.getElementById("nombre-subred-1").value;
    let hostsSubred1  = parseInt(document.getElementById("hosts-subred-1").value);
    let nombreSubred2 = document.getElementById("nombre-subred-2").value;
    let hostsSubred2  = parseInt(document.getElementById("hosts-subred-2").value);
    let nombreSubred3 = document.getElementById("nombre-subred-3").value;
    let hostsSubred3  = parseInt(document.getElementById("hosts-subred-3").value);

    // split divide la IP, map la convierte a números
    let partesIP = ip.split(".").map(Number);
    let ipActual = [...partesIP];

    const subredes = [
        { nombre: nombreSubred1, hosts: hostsSubred1 },
        { nombre: nombreSubred2, hosts: hostsSubred2 },
        { nombre: nombreSubred3, hosts: hostsSubred3 }
    ];

    
    subredes.sort((a, b) => b.hosts - a.hosts);

    const resultados = [];

    
    for (let i = 0; i < subredes.length; i++) {
        let hostsNecesarios = subredes[i].hosts;

    
        let bitsHost = 1;
        while (Math.pow(2, bitsHost) - 2 < hostsNecesarios) {
            bitsHost++;
        }

        let cidrSubred   = 32 - bitsHost;
        let totalIPs     = Math.pow(2, bitsHost);  
        let hostsValidos = totalIPs - 2;             
        let mascSubred   = cidrAMascara(cidrSubred);

        let dirRed    = [...ipActual];
        let primero   = [...ipActual];
        primero[3]   += 1;

        let broadcast   = [...ipActual];
        broadcast[3]   += totalIPs - 1;

        let ultimo   = [...broadcast];
        ultimo[3]   -= 1;

        resultados.push({
            nombre:    subredes[i].nombre,
            red:       dirRed.join("."),
            cidr:      cidrSubred,
            mascara:   mascSubred,
            primero:   primero.join("."),
            ultimo:    ultimo.join("."),
            broadcast: broadcast.join("."),
            hosts:     hostsValidos
        });

        
        ipActual[3] += totalIPs;

        
        for (let j = 3; j > 0; j--) {
            if (ipActual[j] >= 256) {
                ipActual[j]    -= 256;
                ipActual[j - 1] += 1;
            }
        }
    }

    mostrarResultados(resultados);
}


function mostrarResultados(resultados) {
    let html = "<table border='1'><thead><tr>"
             + "<th>Subred</th><th>Dir. Red</th><th>CIDR</th><th>Máscara</th>"
             + "<th>Primer Host</th><th>Último Host</th><th>Broadcast</th><th>Hosts válidos</th>"
             + "</tr></thead><tbody>";

    
    for (let i = 0; i < resultados.length; i++) {
        let r = resultados[i];
        html += "<tr>"
              + "<td>" + r.nombre    + "</td>"
              + "<td>" + r.red       + "</td>"
              + "<td>/" + r.cidr     + "</td>"
              + "<td>" + r.mascara   + "</td>"
              + "<td>" + r.primero   + "</td>"
              + "<td>" + r.ultimo    + "</td>"
              + "<td>" + r.broadcast + "</td>"
              + "<td>" + r.hosts     + "</td>"
              + "</tr>";
    }

    html += "</tbody></table>";
    document.getElementById("resultado").innerHTML = html;
}
