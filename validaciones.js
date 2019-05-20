function validarCedula() {
    var cad = document.getElementById("cedula").value;
    var total = 0;
    var longitud = cad.length;
    if (cad !== "" && longitud === 10) {
        for (i = 0; i < longitud - 1; i++) {
            if (i % 2 === 0) {
                var aux = cad.charAt(i) * 2;
                if (aux > 9) aux -= 9;
                total += aux;
            } else {
                total += parseInt(cad.charAt(i)); // parseInt o concatenará en lugar de sumar
            }
        }
        total = total % 10 ? 10 - total % 10 : 0;
        var aux = cad.charAt(9);
        if (cad.charAt(9) == total) {
            document.getElementById("chCedula").checked = true;
        } else {
            document.getElementById("chCedula").checked = false;
        }

    } else {
        document.getElementById("chCedula").checked = false;
    }
}

function soloNumeros(e, cad) {
    var key = window.Event ? e.which : e.keyCode
    return ((key >= 48) && (key <= 57) && (cad.length + 1 <= 10) || (key == 8))
}

function soloLetras(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " áéíóúabcdefghijklmnñopqrstuvwxyz";
    especiales = "8-37-39-46";

    tecla_especial = false
    for (var i in especiales) {
        if (key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }
    if (letras.indexOf(tecla) == -1 && !tecla_especial) {
        return false;
    }
}

function dosNombres(txt, id) {
    palabras = txt.split(' ');
    if (palabras.length == 2) {
        p1 = palabras[0].trim();
        p2 = palabras[1].trim();
        if (p1 != '' && p2.length >= 3) {
            document.getElementById(id).checked = true;
        } else {
            document.getElementById(id).checked = false;
        }
    } else {
        document.getElementById(id).checked = false;
    }
}

function telefonoVal(txt, id) {
    if (txt.length >= 10) {
        document.getElementById(id).checked = true;
    } else {
        document.getElementById(id).checked = false;
    }
}

function validarFecha(fecha, id) {
    if (fecha.length == 10) {
        f = fecha.split('/');
        var Anio = f[2]
        var Mes = f[1]
        var Dia = f[0]
        var VFecha = new Date(Anio, Mes, Dia);
        if ((VFecha.getFullYear() == Anio) && (VFecha.getMonth() == Mes) && (VFecha.getDate() == Dia)) {
            document.getElementById(id).checked = true;
        }
        else {
            document.getElementById(id).checked = false;
        }
    } else {
        document.getElementById(id).checked = false;
    }
}

function fecha10(txt, e) {
    var key = window.Event ? e.which : e.keyCode
    if (txt.length >= 10) {
        if (key != 8) {
            return false;
        } else {
            return true;
        }
    } else {
        return true;
    }
}

function valDir(txt, id) {
    if (txt.length >= 4) {
        document.getElementById(id).checked = true;
    } else {
        document.getElementById(id).checked = false;
    }
}


