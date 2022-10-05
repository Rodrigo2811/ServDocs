const formCertidao = document.querySelector('#furmulario-certidao')

if (formCertidao.addEventListener) {
  formCertidao.addEventListener("submit", validaCertidao)
} else if (formCertidao.attachEvent) {
  formCertidao.attachEvent("onsubmit", validaCertidao);
}

function validaCertidao(event) {

  const select = document.getElementById('my-select')
  const input = document.getElementsByClassName('form-control')
  const nome = document.getElementById('Nome')
  const email = document.getElementById('email')
  const tel = document.getElementById('telefone')
  const estado = document.getElementById('estado')
  const cidade = document.getElementById('cidade')
  const cartorio = document.getElementById('cartorio')
  const livro = document.getElementById('livro')
  const folha = document.getElementById('folha')
  const termo = document.getElementById('termo')




  if (select.value == "Selecione a Certidão") {
    select.style.background = "#ffa840"
    select.focus()
    return false
  } else if (select.value != "Selecione a Certidão") {
    select.style.border = "2px solid blue",
      select.style.background = "white"
  } if (nome.value == "") {
    nome.style.background = "#ffa840"
    nome.focus()
    return false;
  } else if (nome.value != "") {
    nome.style.border = "2px solid blue",
      nome.style.background = "white"
  } if (email.value == "" || email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
    email.style.background = "#ffa840"
    email.focus();
    return false;
  } else if (email.value != "" || email.value.indexOf('@') != -1 || email.value.indexOf('.') != -1) {
    email.style.border = "2px solid blue",
      email.style.background = "white"
  } if (tel.value == "") {
    tel.style.background = "#ffa840"
    tel.focus()
    return false;
  } else if (tel.value != "") {
    tel.style.border = '2px solid blue',
      tel.style.background = "white"
  } if (estado.value == "") {
    estado.style.background = "#ffa840"
    estado.focus()
    return false;
  } else if (estado.value != "") {
    estado.style.border = "2px solid blue",
      estado.style.background = "white"
  } if (cidade.value == "") {
    cidade.style.background = "#ffa840"
    cidade.focus()
    return false;
  } else if (cidade.value != "") {
    cidade.style.border = "2px solid blue",
      cidade.style.background = "white"
  } if (cartorio.value == "") {
    cartorio.style.background = "#ffa840"
    cartorio.focus()
    return false;
  } else if (cartorio.value != "") {
    cartorio.style.border = "2px solid blue",
      cartorio.style.background = "white"
  } if (livro == "") {
    livro.style.background = "#ffa840"
    livro.focus()
    return false;
  } else if (livro != "") {
    livro.style.border = "2px solid blue",
      livro.style.background = 'white'
  } if (folha == "") {
    folha.style.background = "#ffa840"
    folha.focus()
    return false;
  } else if (folha != "") {
    folha.style.border = "2px solid blue",
      folha.style.background = 'white'
  } if (termo == "") {
    termo.style.background = "#ffa840"
    termo.focus()
    return false;
  } else {
    termo.style.border = "2px solid blue",
      termo.style.background = 'white'
  }
}