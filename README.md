
# Serverest - Automação de Cadastro de Usuário

## Descrição

Suíte de testes automatizados desenvolvida para validar o módulo de cadastro de usuários do e-commerce Serverest.

## Stack Utilizada

- Playwright
- TypeScript
- Faker (geração de massa dinâmica)
- Padrão Page Object Model (POM)

## Estrutura do Projeto

pages/ -> Page Objects  
tests/ -> Casos de teste  
utils/ -> Geração de dados dinâmicos  

## Requisitos Técnicos Atendidos

- Uso de Page Object Model
- Código limpo e organizado
- Independência entre testes
- Geração de massa dinâmica
- Execução paralela habilitada

## Instalação

1. Instalar dependências:

npm install

2. Instalar navegadores do Playwright:

npx playwright install

## Execução

Rodar os testes:

npm run test

Visualizar relatório:

npm run report

## Observações

Os testes utilizam geração dinâmica de dados para evitar conflitos de unicidade, permitindo múltiplas execuções sem falhas por duplicidade.
