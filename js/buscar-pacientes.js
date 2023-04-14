let buscarPacientes = document.querySelector("#buscar-pacientes");

buscarPacientes.addEventListener("click", function(){
    let xhr = new XMLHttpRequest();

    xhr.open("GET", "https://raw.githubusercontent.com/loresgarcia/Pacientes-API/master/pacientes.json");

    xhr.addEventListener("load", function(){
        let erroAjax = document.querySelector("#erro-ajax");
        if(xhr.status == 200) {
        erroAjax.classList.add("invisivel");
        let resposta = xhr.responseText;
        let pacientes = JSON.parse(resposta);
        
        pacientes.forEach( function(paciente) {
            adicionaPacienteNaTabela(paciente);
            
        });

       }else{   
          erroAjax.classList.remove("invisivel");
       }

    });

    xhr.send();

});
