const cipher = { encode:

function encode (text, shift) {
  let converterTexto = "";
  for (let index = 0; index < text.length; index++) {
    console.log(text.charCodeAt(index) - 65 + shift);

    let cifrar = ((text.charCodeAt(index) - 65 + shift) % 26) + 65;
    console.log(cifrar);
    converterTexto = converterTexto + String.fromCharCode(cifrar);
  }
  console.log(converterTexto);
  return converterTexto;
},
decode: 
function decode (text, shift) {
  let desconverterTexto = "";
  for (let index = 0; index < text.length; index++) {
    let decifrar = (((((text.charCodeAt(index) - 65) - shift) + 26) % 26) + 65);
    console.log(decifrar);
    desconverterTexto = desconverterTexto + String.fromCharCode(decifrar);
  }
  console.log(desconverterTexto);
  return desconverterTexto;
}
}
export default cipher;
