class ServicoDePagamento {
  constructor() {
    this.pagamentos = [];
  }

  pagar(codigoBarras, empresa, valor) {
    const pagamento = {
      codigoBarras,
      empresa,
      valor,
      categoria: valor > 100.00 ? 'cara' : 'padrão'
    };

    this.pagamentos.push(pagamento);

    return pagamento;
  }

  consultarUltimoPagamento() {
    return this.pagamentos[this.pagamentos.length - 1];
  }
}

module.exports = ServicoDePagamento;
