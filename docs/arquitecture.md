# Arquitetura — Menuza

> Documento de arquitetura do projeto Menuza.
> Última atualização: Outubro de 2026.

---

## Visão geral

O Menuza é uma aplicação web que permite restaurantes criarem e gerenciarem cardápios digitais, disponibilizando-os aos clientes via QR Code.

A arquitetura foi planejada de forma **incremental e progressiva**, partindo de uma versão simples (apenas frontend) e evoluindo gradualmente para uma arquitetura full-stack com backend dedicado, banco de dados, autenticação e infraestrutura containerizada.

Esta decisão segue o princípio:

> Primeiro, fazer funcionar. Depois, organizar. Depois, testar. Depois, escalar.

---

## Fase atual — Fase 2 (MVP Frontend)

### Descrição

O MVP Frontend é construído inteiramente em **Next.js**, utilizando dados mock locais para simular a API. O objetivo desta fase é desenvolver e validar toda a interface do usuário antes de integrar o backend.

### Stack

| Tecnologia | Versão | Função |
| :--- | :--- | :--- |
| Next.js | 16.x | Framework React com App Router |
| React | 19.x | Biblioteca de interface |
| TypeScript | 5.x | Tipagem estática |
| Tailwind CSS | 4.x | Estilização utility-first |
| ESLint | 9.x | Linting e qualidade de código |
| Prettier | — | Formatação de código |
| Husky | — | Git hooks |
| Commitlint | — | Validação de mensagens de commit |

### Diagrama

```
Usuário (Browser)
       │
       ▼
   Next.js App
  (App Router)
       │
       ├─── /cardapio/[slug]       → Cardápio público
       │         └── dados mock
       │
       └─── /admin                 → Área administrativa
                 ├── /categorias
                 ├── /produtos
                 └── /qrcode
                      └── dados mock
```

### Estrutura de pastas (frontend)

```
frontend/
├── app/
│   ├── layout.tsx               ← Layout raiz da aplicação
│   ├── page.tsx                 ← Página inicial (redirecionamento)
│   ├── cardapio/
│   │   └── [slug]/
│   │       └── page.tsx         ← Cardápio público
│   └── admin/
│       ├── page.tsx             ← Dashboard administrativo
│       ├── categorias/
│       │   └── page.tsx         ← Gerenciamento de categorias
│       └── produtos/
│           └── page.tsx         ← Gerenciamento de produtos
│
├── components/
│   ├── menu/                    ← Componentes do cardápio público
│   ├── admin/                   ← Componentes da área administrativa
│   └── ui/                      ← Componentes de interface genéricos
│
├── data/
│   └── mock.ts                  ← Dados simulados (substitui a API)
│
├── types/
│   ├── restaurant.ts            ← Tipo Restaurant
│   ├── category.ts              ← Tipo Category
│   └── product.ts               ← Tipo Product
│
└── styles/                      ← Estilos globais (quando necessário)
```

### Decisões desta fase

- **Dados mock:** toda a lógica de dados está em `src/data/mock.ts`. Isso permite focar no desenvolvimento da interface sem depender de backend.
- **App Router:** utilizado por ser o padrão atual do Next.js, preparando para o uso de Server Components na integração futura com a API.
- **Tailwind CSS:** utilizado para estilização, com componentes criados do zero para fins de aprendizado.
- **Componentes 100% manuais:** sem uso de bibliotecas de componentes prontos (Shadcn, Radix), para praticar a construção de interfaces.

---

## Fase 3 — Backend (planejada)

### Descrição

Introdução de uma API REST com NestJS e banco de dados PostgreSQL. O frontend passará a consumir a API real em substituição aos dados mock.

### Stack adicional

| Tecnologia | Função |
| :--- | :--- |
| NestJS | Framework Node.js para a API REST |
| Node.js | Runtime JavaScript no servidor |
| PostgreSQL | Banco de dados relacional |
| TypeORM ou Prisma | ORM para acesso ao banco |

### Diagrama

```
Usuário (Browser)
       │
       ▼
   Next.js Frontend
       │
       │  HTTP (REST)
       ▼
   NestJS API
       │
       ▼
   PostgreSQL
```

### Decisões pendentes (Fase 3)

- [ ] Escolha entre TypeORM e Prisma (ADR a ser criado)
- [ ] Definição da estratégia de validação de entrada (class-validator vs. Zod)
- [ ] Estratégia de tratamento de erros na API
- [ ] Definição dos contratos de API (ver docs/api.md)

---

## Fase 4 — Autenticação (planejada)

### Descrição

Proteção da área administrativa com sistema de autenticação e autorização.

### Estratégia planejada

- Autenticação baseada em JWT (JSON Web Token).
- Login com e-mail e senha.
- Rotas protegidas no Next.js (middleware de autenticação).
- Endpoints protegidos no NestJS (Guards).

### Decisões pendentes (Fase 4)

- [ ] Estratégia de armazenamento do token (cookie httpOnly vs. localStorage)
- [ ] Estratégia de refresh token
- [ ] Associação de usuários a restaurantes (um usuário = um restaurante no MVP)

---

## Fase 5 — Recursos avançados (planejada)

### Funcionalidades previstas

- Upload de imagens de produtos (armazenamento externo: S3 ou similar)
- Sistema de pedidos
- Controle de mesas
- Integração com WhatsApp
- Dashboard com métricas

### Decisões pendentes (Fase 5)

- [ ] Serviço de armazenamento de imagens (ADR a ser criado)
- [ ] Estratégia de pedidos (real-time com WebSocket ou polling)

---

## Fase 6 — Infraestrutura (planejada)

### Descrição

Containerização do ambiente de desenvolvimento e produção com Docker, configuração de CI/CD e deploy.

### Stack adicional

| Tecnologia | Função |
| :--- | :--- |
| Docker | Containerização da aplicação |
| Docker Compose | Orquestração local dos containers |
| GitHub Actions | CI/CD pipeline |
| Redis | Cache (opcional, conforme necessidade) |

### Diagrama da arquitetura futura

```
                    ┌──────────────┐
                    │   Frontend   │
                    │   Next.js    │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   REST API   │
                    │   NestJS     │
                    └──────┬───────┘
                           │
             ┌─────────────┼─────────────┐
             ▼             ▼             ▼
        PostgreSQL        Redis        Storage
        (dados)          (cache)      (imagens)
```

### Decisões pendentes (Fase 6)

- [ ] Estratégia de deploy (Vercel + Railway? VPS? AWS?)
- [ ] Necessidade de Redis (avaliar volume de acessos)
- [ ] Configuração do pipeline CI/CD (lint, testes, build, deploy)
- [ ] Estratégia de monitoramento e observabilidade

---

## Modelo de dados

### Fase 2 (Mock)

```typescript
type Restaurant = {
  id: string
  name: string
  slug: string
  description?: string
  image?: string
}

type Category = {
  id: string
  restaurantId: string
  name: string
}

type Product = {
  id: string
  categoryId: string
  name: string
  description?: string
  price: number
  imageUrl?: string
  available: boolean
}
```

### Relacionamentos

```
Restaurant
    │
    └── N Categories
              │
              └── N Products
```

### Fase 3+ (PostgreSQL — schema definitivo a ser definido)

O modelo será expandido para suportar:
- Usuários e autenticação
- Associação usuário ↔ restaurante
- Pedidos e mesas (Fase 5)
- Timestamps de criação e atualização em todas as entidades

---

## Decisões arquiteturais registradas

| ADR | Decisão | Status |
| :--- | :--- | :--- |
| ADR-001 | Next.js como framework frontend | Decidido |
| ADR-002 | NestJS como framework backend | Decidido |
| ADR-003 | PostgreSQL como banco de dados | Decidido |
| ADR-004 | Dados mock na Fase 2 | Decidido |
| ADR-005 | Componentes Tailwind 100% manuais | Decidido |
| ADR-006 | ORM: TypeORM vs. Prisma | Pendente (Fase 3) |
| ADR-007 | Estratégia de autenticação | Pendente (Fase 4) |
| ADR-008 | Armazenamento de imagens | Pendente (Fase 5) |
| ADR-009 | Estratégia de deploy | Pendente (Fase 6) |

> Os ADRs detalhados serão criados em `docs/adr/` conforme as decisões forem tomadas.

---

## Princípios arquiteturais

1. **Simplicidade primeiro:** não introduzir complexidade sem justificativa.
2. **Evolução incremental:** cada fase entrega valor antes de aumentar a complexidade.
3. **Separação de responsabilidades:** frontend consome API, não acessa banco diretamente.
4. **Clean Code:** código legível, coeso e com responsabilidades bem definidas.
5. **Testabilidade:** regras de negócio isoladas e testáveis desde a Fase 2.
