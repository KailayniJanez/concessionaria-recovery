# Instruções de execução

## Requisitos

- Node.js instalado
- Navegador para acesso ao SQLite Online

## Execução

1. Abra o projeto.

2. Execute:

```bash
node index.js
```

3. Serão gerados os arquivos:

- marcas_corrigidas.json
- veiculos_corrigidos.json

4. Importe ambos os arquivos no SQLite Online.

5. Execute as consultas SQL fornecidas na documentação.

6. Crie a tabela final do relatório utilizando:

```sql
CREATE TABLE relatorio_vendas AS
SELECT
    v.c1 AS data,
    m.c1 AS id_marca,
    m.c2 AS marca,
    v.c5 AS veiculo,
    v.c3 AS vendas,
    v.c4 AS valor_do_veiculo,
    v.c3 * v.c4 AS receita
FROM veiculos_corrigidos AS v
INNER JOIN marcas_corrigidas AS m
    ON v.c2 = m.c1;
```

7. Exporte a tabela `relatorio_vendas` em formato CSV.

## Observações

Todos os dados utilizados no relatório foram obtidos a partir dos arquivos JSON recuperados pelo código JavaScript.
