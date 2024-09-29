// Definindo o saldo inicial
let saldo: number = 3000; // Saldo inicial

// Função para atualizar o saldo
function atualizarSaldo(valor: number): void {
  saldo += valor; // Atualiza o saldo com o valor do depósito ou transferência
  exibirSaldo(); // Atualiza a exibição do saldo
}

// Função para exibir o saldo na tela
function exibirSaldo(): void {
  const elementoSaldo: HTMLElement | null = document.querySelector(
    ".saldo-valor .valor"
  );
  if (elementoSaldo) {
    elementoSaldo.textContent = `Saldo: R$ ${saldo.toFixed(2)}`; // Formata o saldo para duas casas decimais
  }
}

// Função para realizar a transação
function realizarTransacao(tipoTransacao: string): void {
  const elementoValor: HTMLInputElement = document.querySelector(
    "#valor"
  ) as HTMLInputElement;
  let valor: number = parseFloat(elementoValor.value); // Converte o valor do input para número

  // Verifica se o valor é válido
  if (isNaN(valor) || valor <= 0) {
    console.error("Valor inválido para depósito ou transferência.");
    return; // Sai da função se o valor for inválido
  }

  // Atualiza o saldo com base no tipo de transação
  if (tipoTransacao === "Depósito") {
    atualizarSaldo(valor); // Chama a função para atualizar o saldo
  } else if (tipoTransacao === "Transferência") {
    atualizarSaldo(-valor); // Para transferência, subtrai o valor
  }
}

// Adicionando eventos aos botões
const botaoDeposito: HTMLElement | null =
  document.querySelector("#botao-deposito");
const botaoTransferencia: HTMLElement | null = document.querySelector(
  "#botao-transferencia"
);

if (botaoDeposito) {
  botaoDeposito.addEventListener("click", () => realizarTransacao("Depósito"));
}

if (botaoTransferencia) {
  botaoTransferencia.addEventListener("click", () =>
    realizarTransacao("Transferência")
  );
}

// Exibir saldo inicial ao carregar a página
exibirSaldo();
