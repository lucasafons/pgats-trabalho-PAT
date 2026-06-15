# Trabalho Final - Pipeline CI/CD com GitHub Actions

Este repositorio contem uma aplicacao Node.js simples, desenvolvida para exercitar testes automatizados com Mocha. A solucao foi preparada para o trabalho final de pipeline CI/CD, com uma esteira de integracao continua no GitHub Actions.

## Projeto

O projeto possui regras de negocio simples para login e pagamento:

- `src/login.js`: valida cenarios de login.
- `src/ServicoDePagamento.js`: registra pagamentos e classifica valores.
- `test/login.test.js`: testes automatizados da funcionalidade de login.
- `test/servicoDePagamento.test.js`: testes automatizados do servico de pagamento.

## Tecnologias utilizadas

- Node.js
- npm
- Mocha
- GitHub Actions

## Como executar localmente

Instale as dependencias:

```bash
npm ci
```

Execute os testes automatizados:

```bash
npm test
```

## Pipeline CI/CD

A pipeline esta definida em `.github/workflows/ci.yml` e executa uma rotina de integracao continua para validar o projeto sempre que houver alteracoes ou quando for acionada manualmente.

### Gatilhos configurados

A pipeline pode ser executada de tres formas:

- `push`: executa automaticamente quando houver envio de codigo para as branches `main` ou `master`.
- `workflow_dispatch`: permite execucao manual pela aba Actions do GitHub.
- `schedule`: executa de forma agendada toda segunda-feira as 09:00 UTC.

### Etapas da pipeline

1. Baixa o codigo do repositorio com `actions/checkout`.
2. Configura o ambiente Node.js com `actions/setup-node`.
3. Instala as dependencias com `npm ci`.
4. Executa os testes automatizados com `npm test`.
5. Gera um relatorio JSON dos testes em `reports/test-results.json`.
6. Publica o relatorio como artifact da execucao usando `actions/upload-artifact`.

## Relatorio de testes

O relatorio da execucao dos testes e gerado no formato JSON pelo Mocha.

Na execucao da pipeline, o arquivo fica disponivel como artifact com o nome:

```text
relatorio-testes
```

Para acessar:

1. Abra o repositorio no GitHub.
2. Acesse a aba `Actions`.
3. Selecione uma execucao bem-sucedida do workflow `CI - Testes Automatizados`.
4. Baixe o artifact `relatorio-testes`.

## Conceitos aplicados

- Integracao continua: validacao automatica do codigo a cada push.
- Execucao manual: possibilidade de rodar a pipeline sob demanda.
- Execucao agendada: validacao periodica mesmo sem alteracoes recentes.
- Testes automatizados: uso do Mocha para verificar regras de negocio.
- Artifact: armazenamento do relatorio de testes dentro da propria execucao da pipeline.
- Reprodutibilidade: uso de `npm ci` para instalar as dependencias com base no `package-lock.json`.

## Evidencia de execucao

Para a entrega, envie a URL deste repositorio GitHub e anexe a evidencia de uma execucao bem-sucedida da pipeline na aba `Actions`, incluindo o artifact `relatorio-testes`.
