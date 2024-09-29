// Definindo o saldo inicial
var saldo = 3000; // Saldo inicial
// Função para atualizar o saldo
function atualizarSaldo(valor) {
    saldo += valor; // Atualiza o saldo com o valor do depósito ou transferência
    exibirSaldo(); // Atualiza a exibição do saldo
}
// Função para exibir o saldo na tela
function exibirSaldo() {
    var elementoSaldo = document.querySelector(".saldo-valor .valor");
    if (elementoSaldo) {
        elementoSaldo.textContent = "Saldo: R$ ".concat(saldo.toFixed(2)); // Formata o saldo para duas casas decimais
    }
}
// Função para realizar a transação
function realizarTransacao(tipoTransacao) {
    var elementoValor = document.querySelector("#valor");
    var valor = parseFloat(elementoValor.value); // Converte o valor do input para número
    // Verifica se o valor é válido
    if (isNaN(valor) || valor <= 0) {
        console.error("Valor inválido para depósito ou transferência.");
        return; // Sai da função se o valor for inválido
    }
    // Atualiza o saldo com base no tipo de transação
    if (tipoTransacao === "Depósito") {
        atualizarSaldo(valor); // Chama a função para atualizar o saldo
    }
    else if (tipoTransacao === "Transferência") {
        atualizarSaldo(-valor); // Para transferência, subtrai o valor
    }
}
// Adicionando eventos aos botões
var botaoDeposito = document.querySelector("#botao-deposito");
var botaoTransferencia = document.querySelector("#botao-transferencia");
if (botaoDeposito) {
    botaoDeposito.addEventListener("click", function () { return realizarTransacao("Depósito"); });
}
if (botaoTransferencia) {
    botaoTransferencia.addEventListener("click", function () {
        return realizarTransacao("Transferência");
    });
}
// Exibir saldo inicial ao carregar a página
exibirSaldo();
