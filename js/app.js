function comprar() {
  let ingresso = document.getElementById("tipo-ingresso").value;
  let qtd = document.getElementById("qtd").value;

  if (ingresso === "inferior") {
    let qtdInferior = document.getElementById("qtd-inferior");
    let novaQtdInferior = parseInt(qtdInferior.innerText) - qtd;
    if (novaQtdInferior < 0) {
      alert("Quantidade de ingressos de cadeira inferior esgotada.");
      return;
    }
    qtdInferior.innerText = novaQtdInferior;
  } else if (ingresso === "superior") {
    let qtdSuperior = document.getElementById("qtd-superior");
    let novaQtdSuperior = parseInt(qtdSuperior.innerText) - qtd;
    if (novaQtdSuperior < 0) {
      alert("Quantidade de ingressos de cadeira superior esgotada.");
      return;
    }
    qtdSuperior.innerText = novaQtdSuperior;
  } else {
    let qtdPista = document.getElementById("qtd-pista");
    let novaQtdPista = parseInt(qtdPista.innerText) - qtd;
    if (novaQtdPista < 0) {
      alert("Quantidade de ingressos de pista esgotada.");
      return;
    }
    qtdPista.innerText = novaQtdPista;
  }

  alert("Compra Efetuada com sucesso.");

  document.getElementById("qtd").value = "";
}
