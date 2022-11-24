function salvar() {
    let idUser = document.getElementById('nome').innerHTML;
    let genero = document.getElementById('estilo').innerHTML;
    console.log("Salvar usuario " + idUser);
        let user = {'idUser': idUser, 'genero' : genero};
        console.log(user);
        var xhttp = new XMLHttpRequest();
        xhttp.open("POST","http://localhost:8001/usuarios",true);
        xhttp.setRequestHeader(
            'Content-type', 'application/json');
        xhttp.onreadystatechange = function () {
            if(this.readyState == 4 && this.status == 200)
                console.log("salvo");
        }
        xhttp.send(JSON.stringify(user));
    }