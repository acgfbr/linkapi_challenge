<hr>

Olá pessoal, é um prazer fazer este desafio! 

Gostaria de agradecer a oportunidade.

Desafio: [link pro desafio!](challenge.md)
<hr>

Setup (mac/linux):
-   1 - cp .env.example .env - Configure as credenciais no environment
-   2 - dê permissão no setup.sh com chmod +x setup.sh - Este script vai fazer todo o setup necessário e vai deixar os containers rodando em background.

<hr>

## Tecnologias:

-   NodeJS 12
-   Docker
-   MongoDB

## Libs:
-   Winston para logging em memória
-   Bull para queue
-   Mongoose para persistência do mongo

O readme está em português mas o projeto é 100% feito em inglês.

REQUISITOS

- [x] Criar contas testes nas plataformas Pipedrive e Bling.
- [ ] Criar uma integração entre as plataformas Pipedrive e Bling. (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).

- [x] Criar banco de dados mongo, existem serviços como MongoDB Atlas para criar de graça

- [x] Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.

Proof: 

![image info](./groupby.png)

- [ ] Criar endpoint para trazer os dados consolidados da collection do MongoDB.

<hr>

-   Pattern utilizado: Hexagonal Architecture (clean code, onion, mesmos nomes pra mesma coisa)

-   Desafio iniciado em: 31/08/2020 22:30
-   Desafio finalizado em: ainda não finalizado