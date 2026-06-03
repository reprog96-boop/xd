function calcular() {
    let ip = document.getElementById("ip").value;
    let mascara = parseInt(document.getElementById("mascara").value);

    let nombreSubred1 = document.getElementById("nombre-subred-1").value;
    let hostsSubred1 = parseInt(document.getElementById("hosts-subred-1").value);

    let nombreSubred2 = document.getElementById("nombre-subred-2").value;
    let hostsSubred2 = parseInt(document.getElementById("hosts-subred-2").value);

    let nombreSubred3 = document.getElementById("nombre-subred-3").value;
    let hostsSubred3 = parseInt(document.getElementById("hosts-subred-3").value);

    /*map los recorre y split los divide la direccion*/
    let partesIP = ip.split(".").map(Number);

    const subredes = [
        { nombre: nombreSubred1, hosts: hostsSubred1 },
        { nombre: nombreSubred2, hosts: hostsSubred2 },
        { nombre: nombreSubred3, hosts: hostsSubred3 }
    ];
    subredes.sort((a, b) => b.hosts-a.hosts);
}             
