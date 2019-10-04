# TESTE-CRUD-API
Teste CRUD (NodeJS)

## CRUD de Clientes
### 1. Escopo
Crie uma mini api, em NodeJS, que faça conexão com uma base **MONGODB** para gerenciamento de clientes genéricos.

O mesmo deverá conter os seguintes metodos: 

Metodo          | Tipo    | Parametros                                | Observação
--------------- | ------- | ----------------------------------------- | --------------------------------------------
Cadastrar       | POST    | JSON com campos do cliente                | Insere um cliente e retorna seu ID
Listar          | GET     |                                           | Retorna todos os clientes da base
Buscar          | GET     | ID do cliente                             | Retorna o cliente detentor do ID
Excluir         | POST    | ID do cliente                             | Remove o cliente da base
Editar          | POST    | JSON com campos editados do cliente e ID  | Altera as informações cadastradas na base
    
### 2. Estrutura de dados CLIENTE
Campo        | Tipo    | Observação
------------ | ------- | ----------
ID           | String  | Gerado pelo mongo
Nome         | String  |
Biografia    | String  |
Nascimento   | Date    |
CPF          | Int     | CPF sem formatação
Especial     | Boolean | TRUE ou FALSE

### 3. Tarefas
* Siga o padrão implementado no esqueleto do projeto
* Crie uma branch com seu nome a partir de **master** para fazer suas modificações
  * Exemplo: **fulano/crud-api**
* Use a conexão com a base no **MONGODB** (informações de conexão serão passadas internamente)
