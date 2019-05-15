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

function soloNumeros(e) {
    var key = window.Event ? e.which : e.keyCode
    var ced = document.getElementById("cedula").value;
    if (key >= 48 && key <= 57 && ced.length <= 9 || key == 8) {
        return true;
    } else {
        return false;
    }
}

function estas() {
    alert('estas tipiand')
}
