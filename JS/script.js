const form = document.getElementById('form-contato');

if (form.addEventListener){
    form.addEventListener("submit", validaContato)
}else if (form.attachEvent){
    form.attachEvent("onsubmit", validaContato);
}
function validaContato(evt){
    
const nome = document.getElementById('Nome')
const email = document.getElementById('email')
const telefone = document.getElementById('telefone')
const mensagem = document.getElementById('mensagem')
const contErro = ("")


    if(nome.value == "") {
       
        nome.style.border = "2px solid red";
        nome.focus();
        return false;
        }else {
        nome.style.border = '2px solid blue'
                  
    }

    if(email.value =="" || email.value.indexOf('@')==-1 ||email.value.indexOf('.')==-1){

        email.style.border = "2px solid red"
        email.focus();
        return false;
    }else{

    email.style.border = "2px solid blue";
         
}
    if(telefone.value == "") {
      telefone.style.border = "2px solid red"
      telefone.focus();
     return false;
    }else{
        telefone.style.border = "2px solid blue"
    }

    if(mensagem.value == ""){
    mensagem.style.border = "2px solid red"
    mensagem.focus();
    return false;
    }else{
        mensagem.style.border = "2px solid blue"
    }


    if (mensagem.value.length < 20 ){
        mensagem.style.border = "2px solid red"
        mensagem.focus();
        return false;
    }else{
        mensagem.style.border = "2px solid blue"
    }

    if (contErro > ""){
        evt.preventDefault();
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




function validaCertidao(){

    const nome = document.getElementById('Nome')
    const email = document.getElementById('email')
    const telefone = document.getElementById('telefone')
    const cidade = document.getElementById('cidade')
    const estado = document.getElementById('estado')
    

    if(nome.value == ""){
       $('nome').css('border:', 'red');
              
        nome.focus()
        return false;
    }
    if(email.value == ""){
        'border:', 'red';
        
        email.focus()
        return false;
    }
    if(telefone.value == ""){
        'background-color:', 'red';
        
        telefone.focus()
        return false;
     }
     if(cidade.value == ""){
        'background-color:', 'red';
        
        cidade.focus()
        return false;
    }

}

$(document).ready(function(){
    $('.imagem-home').focus(function(){
        $(this).css('border', '2px solid red');
    })
})