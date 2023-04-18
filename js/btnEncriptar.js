(function () {
    const encriptado = document.querySelector('.btn__Encriptar');
    const desencriptado = document.querySelector('.btn__Desencriptar');
    const copiar = document.querySelector('.btn__Copiar');

    encriptado.addEventListener('click', () => {
        ajaxInfo;
    });

    desencriptado.addEventListener('click', () => {
        alert('hola');
    });

    copiar.addEventListener('click', () => {
        alert('hola');
    });
})();

function ajaxInfo() {
    var resultado = document.getElementById("informacion");

    var xmlhttp;

    if (window.XMLHttpRequest) {

        xmlhttp = new XMLHttpRequest();

    } else {

        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

            var datos = JSON.parse(xmlhttp.responseText);

            console.log(datos);

            if (resultado.innerHTML == "") {

                for (var i in datos) {

                    resultado.innerHTML += i + ": " + datos[i] + "<br/>";

                }

            }

        }
    }
    xmlhttp.open("GET", "", true);

    xmlhttp.send();

}

/*
function ajax_get_json() {

    var resultado = document.getElementById("info");El id info se lo asignamos a la variable resultado

    var xmlhttp;

    if (window.XMLHttpRequest) {/*Cuando es los nagevadores modernos(google chrome)

        xmlhttp = new XMLHttpRequest();

    } else {Si son navegadores antiguos explore 5

        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");

    }


    xmlhttp.onreadystatechange = function () {


        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {

           

            var datos = JSON.parse(xmlhttp.responseText);

           

            console.log(datos);/*Imprimir en consola

            if (resultado.innerHTML == "") {

                for (var i in datos) {

                    resultado.innerHTML += i + ": " + datos[i] + "<br/>";

                }

            }

        }
    }
    xmlhttp.open("GET", "datos.json", true);

    xmlhttp.send();

}
*/