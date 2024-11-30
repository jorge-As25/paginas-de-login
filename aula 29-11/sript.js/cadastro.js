function logar(event) {

    event.preventDefault();


 
    var senha = document.getElementById("senha").value;

    if (senha === "jorge"){
        Swal.fire({
            title: 'login realizado!',
            text: 'bem vindo!',
            icon: 'sucess',
            confirmButtomText: 'OK'
        }).then(() => {
            setTimeout(() => {
              location.href="../index.html/pagina.html";
            }, 100);
        });
      
    } else {
        alert("senha inválidos");
    }
}