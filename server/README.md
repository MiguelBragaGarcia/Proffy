# Proffy Back-end

Essa aplicação faz parte do projeto Proffy

# Recursos da aplicação

| Rotas                      | HTTP | API_URL                           |
| -------------------------- | ---- | --------------------------------- |
| Listar total de conexões   | GET  | http://localhost:3333/connections |
| Criar conexão              | POST | http://localhost:3333/connections |
| Lista de aulas disponíveis | GET  | http://localhost:3333/classes     |
| Criar uma aula             | POST | http://localhost:3333/classes     |

# Como executar a aplciação

- Instale todas as dependências

<pre>yarn install</pre>

- Execute as migrações

<pre>knex:migrate</pre>

- Inicie o servidor

<pre>yarn start</pre>

# Como testar a aplicação (Manualmente)

Instale o [insomnia](https://insomnia.rest/) e importe as configurações que estão na pasta Insomnia
