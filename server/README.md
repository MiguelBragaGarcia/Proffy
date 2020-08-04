# Backend

Esse repositório faz parte da aplicação Proffy, desenvolvida na segunda semana da Next Level Week.

# Recursos da aplicação

| Rotas                      | HTTP | API_URL                           |
| -------------------------- | ---- | --------------------------------- |
| Listar total de conexões   | GET  | http://localhost:3333/connections |
| Criar conexão              | POST | http://localhost:3333/connections |
| Lista de aulas disponíveis | GET  | http://localhost:3333/classes     |
| Criar uma aula             | POST | http://localhost:3333/classes     |

# Como executar a aplciação

- Instale o [Nodejs](https://nodejs.org/en/) na versão LTS

- Instale o [Yarn](https://classic.yarnpkg.com/pt-BR/docs/install/)

- Clone esse projeto

<pre>git clone https://github.com/MiguelBragaGarcia/Proffy.git</pre>

- Instale todas as dependências

<pre>yarn install</pre>

- Execute as migrações

<pre>knex:migrate</pre>

- Inicie o servidor

<pre>yarn start</pre>

# Como testar a aplicação (Manualmente)

Instale o [insomnia](https://insomnia.rest/) e importe as configurações que estão na pasta Insomnia
