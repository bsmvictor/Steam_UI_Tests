# Projeto de Testes Automatizados com Cypress

 # Descrição
Este projeto visa automatizar testes para a loja virtual de jogos Steam, verificando a correta exibição e manipulação de elementos da interface. O Cypress permite que os testes sejam executados diretamente no navegador, fornecendo um ambiente confiável e visual para validar o comportamento da aplicação.

# Pré-requisitos
- Node.js (v12 ou superior)
- npm (gerenciador de pacotes do Node.js)
Verifique se você tem essas dependências instaladas executando:
```
node -v
npm -v
```

# Instalação
1. Clone o repositório do projeto:
```
git clone https://github.com/bsmvictor/Steam_UI_Tests
```
2. Acesse o diretório do projeto:
```
cd Steam_UI_Tests
```
3. Instale as dependências do Cypress:
```
npm install
```

# Como Executar os Testes
1. Executar os testes no modo interativo
Para abrir o Cypress no modo interativo, onde você pode acompanhar os testes rodando no navegador:
```
npx cypress open
```

Escolha o arquivo de teste desejado (por exemplo, `Steam_UI_Tests.cy.js`) na interface e observe os testes sendo executados.

2. Executar os testes no modo headless
Para executar os testes no modo headless (sem interface gráfica), execute:
```
npx cypress run
```
Os resultados dos testes serão exibidos diretamente no terminal.
