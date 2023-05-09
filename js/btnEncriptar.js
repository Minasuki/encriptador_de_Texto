(function () {
    const encriptado = document.querySelector('.btn__Encriptar');
    const desencriptado = document.querySelector('.btn__Desencriptar');
    const copiar = document.querySelector('.btn__Copiar');

    encriptado.addEventListener('click', () => {
        ajaxInfo(true);
    });

    desencriptado.addEventListener('click', () => {
        ajaxInfo(false);
    });

    copiar.addEventListener('click', () => {
        copiarAlPortapapeles();
    });
})();

function ajaxInfo(boleano) {
    let xmlhttp;
    if (window.XMLHttpRequest) {
        xmlhttp = new XMLHttpRequest();
    } else {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            switch (boleano) {
                case true:
                    encriptar();
                    break;
                case false:
                    desencriptar();
                    break;
            }
        }
    }
    xmlhttp.open("GET", "", true);
    xmlhttp.send();
}

function copiarAlPortapapeles() {
    let text = document.getElementById("info");
    navigator.clipboard.writeText(text.textContent);
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
}

function encriptar() {
    let resultado = document.getElementById("info");

    let datosDelTextarea = document.getElementById("tex").value;
    const arr = datosDelTextarea.split('');

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === 'a') {
            arr[index] = 'ai';
        }
        if (arr[index] === 'e') {
            arr[index] = 'enter';
        }
        if (arr[index] === 'i') {
            arr[index] = 'imes';
        }
        if (arr[index] === 'o') {
            arr[index] = 'ober';
        }
        if (arr[index] === 'u') {
            arr[index] = 'ufat';
        }
    }
    resultado.innerHTML = '';
    resultado.innerHTML = arr.join('');
}

function desencriptar() {
    let resultado = document.getElementById("info");

    let datosDelTextarea = document.getElementById("tex").value;
    const arr = datosDelTextarea.split('');

    for (let index = 0; index < arr.length; index++) {
        if (arr[index] === 'a' && arr[index + 1] === 'i') {
            delete (arr[index + 1]);

        }
        if (arr[index] === 'e' && arr[index + 1] === 'n' && arr[index + 2] === 't'
            && arr[index + 3] === 'e' && arr[index + 4] === 'r') {
            delete (arr[index + 1]);
            delete (arr[index + 2]);
            delete (arr[index + 3]);
            delete (arr[index + 4]);
        }
        if (arr[index] === 'i' && arr[index + 1] === 'm' && arr[index + 2] === 'e'
            && arr[index + 3] === 's') {
            delete (arr[index + 1]);
            delete (arr[index + 2]);
            delete (arr[index + 3]);
        }
        if (arr[index] === 'o' && arr[index + 1] === 'b' && arr[index + 2] === 'e'
            && arr[index + 3] === 'r') {
            delete (arr[index + 1]);
            delete (arr[index + 2]);
            delete (arr[index + 3]);
        }
        if (arr[index] === 'u' && arr[index + 1] === 'f' && arr[index + 2] === 'a'
            && arr[index + 3] === 't') {
            delete (arr[index + 1]);
            delete (arr[index + 2]);
            delete (arr[index + 3]);
        }
    }
    resultado.innerHTML = '';
    resultado.innerHTML = arr.join('');
}