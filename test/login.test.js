const test = require('node:test');
const assert = require('node:assert/strict');

const { fazerLogin } = require('../src/login');

test('realiza login com sucesso quando email e senha existem', () => {
  const resultado = fazerLogin('ana@email.com', 'senhaCerta123');

  assert.equal(resultado, 'Login realizado com sucesso');
});

test('informa quando a credencial esta expirada', () => {
  const resultado = fazerLogin('bruno@email.com', 'senhaSegura456');

  assert.equal(resultado, 'Renove suas credenciais');
});

test('informa credenciais incorretas quando o usuario nao existe', () => {
  const resultado = fazerLogin('usuario.inexistente@email.com', 'senhaQualquer');

  assert.equal(resultado, 'Credenciais incorretas');
});

test('informa credenciais incorretas quando a senha esta incorreta', () => {
  const resultado = fazerLogin('carla@email.com', 'senhaErrada');

  assert.equal(resultado, 'Credenciais incorretas');
});
