let saldo = 3000;

const elementoSaldo = document.querySelector(".saldo-valor .valor");

elementoSaldo.innerText = `R$ ${saldo}`;

const elementoFormulario = document.querySelector(".block-nova-transacao form");
elementoFormulario.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!elementoFormulario.checkValidity()) {
    alert("Formulário válido!");
    return;
  }
  const elementoTipoTransacao = document.querySelector("#tipoTransacao");
  const elementoValor = document.querySelector("#valor");
  const elementoData = document.querySelector("#data");

  let tipoTransacao = elementoTipoTransacao.value;
  let valor = elementoValor.value;
  let data = elementoData.value;

  if (tipoTransacao === "Depósito") {
    saldo += parseFloat(valor);
  } else if (
    tipoTransacao === "Transferência" ||
    tipoTransacao === "Pagamento de Boleto"
  ) {
    saldo -= parseFloat(valor);
  }

  elementoSaldo.innerText = `R$ ${saldo}`;

  const novaTransacao = {
    tipoTransacao: tipoTransacao,
    valor: valor,
    data: data,
  };

  console.log(novaTransacao);
  elementoFormulario.reset();
});
