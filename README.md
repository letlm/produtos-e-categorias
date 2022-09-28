# produtos-e-categorias
Serviço de back-end responsável por gerenciar produtos e suas categorias.


### Endpoints da aplicação:
| Método | Endpoint | Descrição | Autorização Token |
|---|---|---|---|
| `POST` | `/categories` |Criação de categorias | `Sim` |
| `GET` | `/categories` |Lista todas as categorias | `Sim` |
| `GET` | `/categories/<id>` |Retorna os dados de uma categoria | `Sim` |
| `PATCH` | `/categories/<id>` |Atualiza os dados de uma categoria | `Sim` |
| `DELETE` | `/categories/<id>` |Deleta categorias do banco | `Sim` |
| `POST` | `/products` |Criação de produtos | `Sim` |
| `GET` | `/products` |Lista todos os produtos | `Sim` |
| `GET` | `/products/<id>` |Retorna os dados de um produto | `Sim` |
| `PATCH` | `/products/<id>` |Atualiza os dados de um produto | `Sim` |
| `DELETE` | `/products/<id>` |Deleta produtos do banco | `Sim` |
| `GET` | `/products/category/<category_id>` |Retorna os dados dos produtos pertencentes a categoria do id respectivo | `Sim` |
