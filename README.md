<hr>

Olá pessoal, é um prazer fazer este desafio! 

Gostaria de agradecer a oportunidade.

Desafio: [link pro desafio!](challenge.md)
<hr>
Setup (mac/linux):

-   1 - dê permissão no setup.sh com chmod +x setup.sh - Este script vai fazer todo o setup necessário e vai deixar os containers rodando em background.
-   2 - crie um host no /etc/hosts de linkapi.local para 127.0.0.1
-   3 - acesse linkapi.local no seu browser, o app estará pronto para uso.

<hr>

Foram utilizados neste desafio as seguintes tecnologias:

-   NodeJS 12
-   Docker
-   MongoDB

O readme está em português mas o projeto é 100% feito em inglês.

Vídeos do funcionamento:

REQUISITOS

- [ ] Criar contas testes nas plataformas Pipedrive e Bling.
- [ ] Criar uma integração entre as plataformas Pipedrive e Bling. (A integração deve buscar as oportunidades com status igual a ganho no Pipedrive, depois inseri-las como pedido no Bling).

- [ ] Criar banco de dados mongo, existem serviços como MongoDB Atlas para criar de graça

- [ ] Criar uma collection no banco de dados MongoDB agregando as oportunidades inseridas no Bling por dia e valor total.

- [ ] Criar endpoint para trazer os dados consolidados da collection do MongoDB.

