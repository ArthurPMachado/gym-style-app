# APP

GymPass style app.
App criado utilizando Node, Typescript, Prisma, Docker, validação de dados com Zod
e testes, sendo unitários, de integração e E2E com Vitest.

A ideia do projeto é se aprofundar em conceitos do SOLID e outros Design Patterns
importantes, como: Repository e Factory

<!-- O que o usuário poderá fazer na plataforma -->
## RFs (Requisitos funcionais)

- [ ] Deve ser possível se cadastrar;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o número de check-ins realizados pelo usuário logado;
- [ ] Deve ser possível o usuário obter seu histórico de check-ins;
- [ ] Deve ser possível o usuário buscar academias próximas;
- [ ] Deve ser possível o usuário buscar academias pelo nome;
- [ ] Deve ser possível o usuário realizar check-in em uma academia;
- [ ] Deve ser possível validar o check-in de um usuário;
- [ ] Deve ser possível cadastrar uma academia;

<!-- Condições para que o usuário possa utilizar a funcionalidade do RF
Não pode ter uma RN nao associada a uma RF -->
## RNs (Regras de Negócio)

- [ ] O usuário não deve poder se cadastrar com um e-mail duplicado;
- [ ] O usuário não pode fazer 2 check-ins no mesmo dia;
- [ ] O usuário não pode fazer check-in se não estiver perto (100m) da academia;
- [ ] O check-in só pode ser validado até 20 minutos após criado;
- [ ] O check-in só pode ser validado por administradores;
- [ ] A academia só pode ser cadastrada por administradores;

## RNFs (Requisitos não funcionais)

- [ ] A senha do usuário precisa estar criptografada;
- [ ] Os dados da aplicação precisar estar persistidos em um banco PostgreSQL;
- [ ] Todas listas de dados precisar estar paginados com 20 itens por página;
- [ ] O usuário deve ser identificado por um JWT (JSON Web Token);
