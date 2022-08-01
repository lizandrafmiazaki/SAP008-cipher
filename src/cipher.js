const cipher = {
  encode: function (shift, text) {
    if (typeof shift != "number") {
      throw TypeError();
    }
    if (typeof text != "string") {
      throw TypeError();
    }

    let converterTexto = "";
    for (let index = 0; index < text.length; index++) {
      let cifrar = ((text.charCodeAt(index) - 65 + shift) % 26) + 65;
      converterTexto = converterTexto + String.fromCharCode(cifrar);
    }
    return converterTexto;
  },

  decode: function (shift, text) {
    if (typeof shift != "number") {
      throw TypeError();
    }
    if (typeof text != "string") {
      throw TypeError();
    }

    let desconverterTexto = "";
    for (let index = 0; index < text.length; index++) {
      let decifrar = ((text.charCodeAt(index) - 90 - shift) % 26) + 90;
      desconverterTexto = desconverterTexto + String.fromCharCode(decifrar);
    }
    return desconverterTexto;
  },
};
export default cipher;
