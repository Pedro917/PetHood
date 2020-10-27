$('#whatsapp').mask('(00)00000-0000');

function validacaoForm(){
    var validado = 10;
    if(validado == 10){
        return alert("Redirecionando...");
    }else{
        return alert("Dados incorretos");
    }
    
}

function confirmaCadastro() {
    var form = document.getElementById('formulario');
    var nome = form.name.value;
    var wpp =  form.whatsapp.value;
    alert(`O perfil foi criado pelo dono ${nome} com whatsapp de numero ${wpp} `);
    setTimeout(validacaoForm(), 5000);
    
}