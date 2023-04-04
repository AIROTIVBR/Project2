function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);
    var valorEmIene = valorEmReal * 26.22;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor da conversão é ¥" + valorEmIene.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  
