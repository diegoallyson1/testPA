function adicionarUsuario(){

    var campoNome = document.querySelector('#nome').value;
    var campoCpf = document.querySelector('#cpf').value;
    var campoRua = document.querySelector('#rua').value;
    var campoNumero = document.querySelector('#numero').value;
    var campoBairro = document.querySelector('#bairro').value;
    var campoComplemento = document.querySelector('#complemento').value;
    var campoEstado = document.querySelector('#estado').value;
    var campoCidade = document.querySelector('#cidade').value;
    var campoCelular = document.querySelector('#celular').value;
    var campoEmail = document.querySelector('#email').value;

    
    
    listarUsuariosNaTela(campoNome, campoCpf, campoRua, campoNumero, campoBairro, campoComplemento, campoEstado, campoCidade, campoCelular, campoEmail)

    
    var usuario = ['campoNome' + 'campoCpf' + 'campoRua' + 'campoNumero' + 'campoBairro' + 'campoComplemento' + 'campoEstado' + 'campoCidade' + 'campoCelular' +'campoEmail']
   

     
}

function listarUsuariosNaTela(campoNome, campoCpf, campoRua, campoNumero, campoBairro, campoComplemento, campoEstado, campoCidade,campoCelular, campoEmail){

    var listaUsuario = document.querySelector('#listaUsuario')
    var elementoUsuario = "Nome: " + campoNome + ("\n","<br>") + "CPF: " + campoCpf + ("\n","<br>") + "Rua: " + campoRua + ("\n","<br>") + "Numero: " + campoNumero + ("\n","<br>") + "Bairro: " + campoBairro + ("\n","<br>") + "Complemento: " + campoComplemento + ("\n","<br>") + "Estado: " + campoEstado + ("\n","<br>") + "Cidade: " + campoCidade + ("\n","<br>")  + "Celular: " + campoCelular + ("\n","<br>")  +  "Email: " + campoEmail + ("\n","<br>") + ("\n","<br>") +("\n","<br>") 
    listaUsuario.innerHTML = listaUsuario.innerHTML + elementoUsuario

    
}

