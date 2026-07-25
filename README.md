# Projeto Classificatório - Processo Seletivo - Tech

## Descrição

Este projeto tem como objetivo recuperar dois bancos de dados JSON corrompidos e gerar um relatório de vendas utilizando JavaScript e SQL.

Durante a recuperação dos dados foram realizadas as seguintes correções:

- Substituição de todos os caracteres "æ" por "a";
- Substituição de todos os caracteres "ø" por "o";
- Conversão do campo "vendas" de string para number;
- Exportação dos arquivos corrigidos.

Após a recuperação dos arquivos, os dados foram importados para o SQLite Online para realização das consultas SQL e construção do relatório de vendas.

## Tecnologias utilizadas

- JavaScript (Node.js)
- SQLite Online
- SQL

## Estrutura do projeto

```
/
├── broken_database_1.json
├── broken_database_2.json
├── marcas_corrigidas.json
├── veiculos_corrigidos.json
├── index.js
├── README.md
└── instruções.md
```

## Como executar

1. Instale o Node.js.
2. Clone este repositório.
3. Execute:

```bash
node index.js
```

Os arquivos JSON corrigidos serão gerados automaticamente.

## Consultas SQL

Após a correção dos arquivos JSON, os dados foram importados para o SQLite Online, onde foram realizadas consultas SQL para responder às questões propostas no desafio.

As consultas incluem análises como:

- Marca com maior volume de vendas;
- Veículos com maior e menor receita;
- Faixa de preço com maior quantidade de vendas;
- Receita das três marcas com menor ticket médio;
- Relação entre os veículos mais vendidos.

## Author
Kailayni Rodrigues Janez
