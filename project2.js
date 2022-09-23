function Converter() {
    var valorElemento = document.getElementById("valor");
    var valor = valorElemento.value;
    var valorEmReal = parseFloat(valor);
    var valorEmYuan = valorEmReal * 1.39;
    var elementoValorConvertido = document.getElementById("valorConvertido");
    var valorConvertido = "O valor da conversão é ¥" + valorEmYuan.toFixed(2);
    elementoValorConvertido.innerHTML = valorConvertido;
  }
  