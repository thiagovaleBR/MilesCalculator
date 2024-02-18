function calcular() {
    const valorComVantagem = parseFloat(document.getElementById('valorComVantagem').value);
    const valorSemVantagem = parseFloat(document.getElementById('valorSemVantagem').value);
    const tipoPrograma = document.getElementById('tipoPrograma').value;
    const milhasPorReal = parseFloat(document.getElementById('milhasPorReal').value || "1");

    let fatorConversao;
    switch (tipoPrograma) {
        case 'livelo':
            fatorConversao = 0.06;
            break;
        case 'esfera':
            fatorConversao = 0.05;
            break;
        case 'smiles':
            fatorConversao = 0.03;
            break;
        case 'latam':
            fatorConversao = 0.02;
            break;
        default:
            fatorConversao = 0.03; // Valor padrão se nada for selecionado
    }

    var valorMilhasRecebidas = (valorComVantagem * milhasPorReal) * fatorConversao;

    var totalMilhasRecebidas = valorComVantagem * milhasPorReal;

    var valorEconomizado = valorComVantagem - valorSemVantagem;

  var mensagemResultado = valorMilhasRecebidas > valorEconomizado ? 
  'Vale a pena comprar a compra bonificada pois terá ' + valorMilhasRecebidas + ' reais em milhas e receberá: ' + totalMilhasRecebidas + ' milhas'  
  : 'Não vale a pena comprar a compra bonificada receberá ' + valorMilhasRecebidas + ' reais em milhas e receberá: ' + totalMilhasRecebidas + ' milhas';

  var modal = document.getElementById("resultadoModal");
  var textoResultado = document.getElementById("resultadoTexto");
  textoResultado.innerHTML = mensagemResultado;
  modal.style.display = "block";

  var span = document.getElementsByClassName("close")[0];
  span.onclick = function() {
    modal.style.display = "none";
  }

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

