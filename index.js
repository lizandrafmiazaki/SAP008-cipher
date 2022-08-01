import cipher from "./cipher.js";

const cifrar = document.getElementById("cifrar");
cifrar.addEventListener("click", clickCifrar);

function clickCifrar() {
  let mensagem = document.getElementById("mensagem").value;
  let numDesloc = parseInt(document.getElementById("offset").value);

  if (!mensagem) {
    window.alert("Por favor, digite sua mensagem!");
  } else {
    let crip = cipher.encode(numDesloc, mensagem);
    let converterTexto = document.getElementById("convertexto");
    converterTexto.innerHTML = crip;
  }
}

const decifrar = document.getElementById("decifrar");
decifrar.addEventListener("click", clickDecifrar);

function clickDecifrar() {
  let mensagem = document.getElementById("mensagem").value;
  let numDesloc = parseInt(document.getElementById("offset").value);

  if (!mensagem) {
    window.alert("Por favor, digite sua mensagem!");
  } else {
    let descrip = cipher.decode(numDesloc, mensagem);
    let desconverterTexto = document.getElementById("convertexto");
    desconverterTexto.innerHTML = descrip;
  }
}
