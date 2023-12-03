# APP

GymPass style app.
App criado utilizando Node, Typescript, Prisma, Docker, validação de dados com Zod,
testes, sendo unitários, de integração e E2E com Vitest e autenticação com JWT.

A ideia do projeto é se aprofundar em conceitos do SOLID e outros Design Patterns
importantes, como: Repository, Factory e In Memory Database

<!-- O que o usuário poderá fazer na plataforma -->
## RFs (Requisitos funcionais)

- [X] Deve ser possível se cadastrar;
- [X] Deve ser possível se autenticar;
- [X] Deve ser possível obter o perfil de um usuário logado;
- [X] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [X] Deve ser possível o usuário obter seu histórico de check-ins;
- [X] Deve ser possível o usuário buscar academias próximas (até 10km);
- [X] Deve ser possível o usuário buscar academias pelo nome;
- [X] Deve ser possível o usuário realizar check-in em uma academia;
- [X] Deve ser possível validar o check-in de um usuário;
- [X] Deve ser possível cadastrar uma academia;

<!-- Condições para que o usuário possa utilizar a funcionalidade do RF
Não pode ter uma RN nao associada a uma RF -->
## RNs (Regras de Negócio)

- [X] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [X] O usuário não pode fazer 2 check-ins no mesmo dia;
- [X] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [X] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não funcionais)

- [X] A senha do usuário precisa estar criptografada;
- [X] Os dados da aplicação precisar estar persistidos em um banco PostgreSQL;
- [X] Todas listas de dados precisar estar paginados com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
