const assert = require('node:assert/strict');

const ServicoDePagamento = require('../src/ServicoDePagamento');

describe('ServicoDePagamento', () => {
  it('realiza pagamento com categoria cara quando valor e maior que 100.00', () => {
    const servicoDePagamento = new ServicoDePagamento();

    const pagamento = servicoDePagamento.pagar('0987-7656-3475', 'Samar', 156.87);

    assert.deepEqual(pagamento, {
      codigoBarras: '0987-7656-3475',
      empresa: 'Samar',
      valor: 156.87,
      categoria: 'cara'
    });
  });

  it('realiza pagamento com categoria padrao quando valor e menor ou igual a 100.00', () => {
    const servicoDePagamento = new ServicoDePagamento();

    const pagamento = servicoDePagamento.pagar('1234-5678-9012', 'Copasa', 100.00);

    assert.deepEqual(pagamento, {
      codigoBarras: '1234-5678-9012',
      empresa: 'Copasa',
      valor: 100.00,
      categoria: 'padrão'
    });
  });

  it('consulta apenas o ultimo pagamento realizado', () => {
    const servicoDePagamento = new ServicoDePagamento();

    servicoDePagamento.pagar('1111-2222-3333', 'Empresa A', 75.50);
    servicoDePagamento.pagar('4444-5555-6666', 'Empresa B', 210.90);

    assert.deepEqual(servicoDePagamento.consultarUltimoPagamento(), {
      codigoBarras: '4444-5555-6666',
      empresa: 'Empresa B',
      valor: 210.90,
      categoria: 'cara'
    });
  });
});
