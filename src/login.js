const usuarios = [
  {
    id: 1,
    nome: 'Ana Silva',
    email: 'ana@email.com',
    senha: 'senhaCerta123',
    expirado: false
  },
  {
    id: 2,
    nome: 'Bruno Souza',
    email: 'bruno@email.com',
    senha: 'senhaSegura456',
    expirado: true
  },
  {
    id: 3,
    nome: 'Carla Lima',
    email: 'carla@email.com',
    senha: 'minhaSenha789',
    expirado: false
  }
];

function fazerLogin(email, senha) {
  const usuario = usuarios.find((usuarioAtual) => usuarioAtual.email === email);

  if (!usuario || usuario.senha !== senha) {
    return 'Credenciais incorretas';
  }

  if (usuario.expirado) {
    return 'Renove suas credenciais';
  }

  return 'Login realizado com sucesso';
}

module.exports = {
  usuarios,
  fazerLogin
};
