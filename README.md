# Testes de API GraphQL com PactumJS

Projeto desenvolvido como atividade do módulo de Automação de API da EBAC.

## Tecnologias

* Node.js
* JavaScript
* Jest
* PactumJS
* GraphQL
* Pactum Matchers
* Jest HTML Reporters

## API testada

Endpoint:

http://lojaebac.ebaconline.art.br/graphql

## Serviços testados

### Categorias

* addCategory
* editCategory
* deleteCategory

### Produtos

* addProduct
* editProduct
* deleteProduct

## Testes de contrato

Foram implementados testes de contrato para:

* Listagem de categorias
* Listagem de produtos

Os contratos validam a estrutura das respostas GraphQL utilizando PactumJS e Pactum Matchers.

## Relatórios

O projeto utiliza `jest-html-reporters` para geração de relatório HTML.

Após executar os testes, o relatório é gerado em:

`reports/test-report.html`

## Como executar

Instalar as dependências:

```bash
npm install
```

Executar todos os testes:

```bash
npm test
```

## Resultado dos testes

Última execução:

* 10 suítes aprovadas
* 10 testes aprovados
* 0 testes reprovados

## Estrutura do projeto

```text
pactum-graphql-atividade/
├── test/
│   └── graphql/
│       ├── category/
│       │   ├── addCategory.test.js
│       │   ├── editCategory.test.js
│       │   └── deleteCategory.test.js
│       ├── product/
│       │   ├── addProduct.test.js
│       │   ├── editProduct.test.js
│       │   └── deleteProduct.test.js
│       ├── contract/
│       │   ├── category.contract.test.js
│       │   └── product.contract.test.js
│       ├── login.test.js
│       └── user.test.js
├── reports/
├── jest.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

## Observação

A API utilizada na atividade apresenta algumas limitações no ambiente de testes, incluindo respostas com campos `null` e limitações na exposição e consulta de identificadores de categorias e produtos.

Por esse motivo, os testes foram estruturados de acordo com o comportamento efetivamente disponibilizado pela API.
