function validaContato(){
    
    const nome = document.getElementById('Nome');
    const email = document.getElementById('email');
    const telefone = document.getElementById('telefone');
    const mensagem = document.getElementById('mensagem');

    if(nome.value == "") {
        alert('nome nao informado');
        
        nome.focus();
        return false;
                
    }

    if(email.value =="" || email.value.indexOf('@')==-1 ||email.value.indexOf('.')==-1)
    {
        alert('informe um email válido');
        email.focus();
        return false;
    {
    }
}

    if(telefone.value == "") {
        alert('informe o telefone');

        telefone.focus();
        return false;
    }
    if(mensagem.value == ""){
        alert('digite sua mensagem')

        mensagem.focus();
        return false;
    }
    if (mensagem.value.length < 20 ){

        alert('É necessario preencher o campo mensagem com mais de 20 caracteres.')
        mensagem.focus();
        return false;
    }
    
}


 //mascara ER
 function mascara(o,f){
    v_obj = o
    v_fun= f

    setTimeout("execmascara()",1)
            
}
function execmascara(){
    v_obj.value = v_fun(v_obj.value)
}
function mtel(v){
    v=v.replace(/\D/g, ""); //remove tudo que nao é numero
    v=v.replace(/^(\d{2})(\d)/g, "($1) $2"); //coloca parenteses nos dois primeiros digitos
    v=v.replace(/(\d)(\d{4})$/, "$1-$2"); //coloca ifen entre o quarto e quinto digito

    return v;
}

function id( el ) {
    return document.getElementById( el );
}
window.onload = function(){
    id('telefone').onkeyup = function(){
        mascara (this, mtel);
    }
   
}



function validaCertidão(){



}