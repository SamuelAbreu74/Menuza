# 🍽️ Menuza

> Cardápio digital para pequenos restaurantes, cafés, lanchonetes e bares.

O **Menuza** é uma aplicação web que permite a restaurantes criarem e gerenciarem seus próprios cardápios digitais e disponibilizá-los aos clientes por meio de uma página pública acessível via QR Code.

O projeto está sendo desenvolvido como um projeto prático de **Engenharia de Software e Desenvolvimento Web**, com foco em transformar requisitos de negócio em uma aplicação real, desde a prototipação e modelagem até implementação, testes e deploy.

---

## 📋 Sobre o projeto

Restaurantes que utilizam cardápios físicos precisam atualizar e reimprimir materiais sempre que alteram preços, produtos ou disponibilidade.

O Menuza busca resolver esse problema permitindo que o estabelecimento mantenha seu cardápio digital atualizado e disponibilize seu acesso através de um QR Code.

### Fluxo principal

```text
Restaurante
    ↓
Cadastra categorias
    ↓
Cadastra produtos
    ↓
Configura disponibilidade
    ↓
Gera QR Code
    ↓
Cliente escaneia
    ↓
Acessa o cardápio digital
```

---

## 🎯 Objetivos

O projeto possui dois objetivos principais:

### Produto

Criar uma solução simples para pequenos estabelecimentos administrarem e disponibilizarem seus cardápios digitais.

### Aprendizado

Utilizar o projeto para praticar:

- Desenvolvimento Frontend
- TypeScript
- React
- Next.js
- APIs REST
- Node.js / NestJS
- PostgreSQL
- Modelagem de dados
- Autenticação e autorização
- Testes
- Docker
- Git e GitHub
- Deploy
- Organização e documentação de software

---

## 🚧 Status

**Em desenvolvimento — MVP**

O projeto será desenvolvido de forma incremental, começando por uma versão simples e evoluindo posteriormente para uma aplicação full-stack.

---

## ✨ Funcionalidades do MVP

### Cardápio público

- [ ] Visualização do restaurante
- [ ] Visualização das categorias
- [ ] Visualização dos produtos
- [ ] Preço e descrição dos produtos
- [ ] Imagens dos pratos
- [ ] Indicação de produtos indisponíveis
- [ ] Navegação por categorias
- [ ] Layout responsivo e mobile-first

### Área administrativa

- [ ] Dashboard
- [ ] Listagem de categorias
- [ ] Cadastro de categorias
- [ ] Edição de categorias
- [ ] Exclusão de categorias
- [ ] Listagem de produtos
- [ ] Cadastro de produtos
- [ ] Edição de produtos
- [ ] Exclusão de produtos
- [ ] Alteração de disponibilidade
- [ ] Geração de QR Code

---

## 🧠 Regras de negócio

Algumas regras definidas para o MVP:

- Todo produto deve pertencer a uma categoria.
- O nome do produto é obrigatório.
- O nome da categoria é obrigatório.
- O preço não pode ser negativo.
- Não devem existir categorias duplicadas.
- Uma categoria que possui produtos não pode ser excluída diretamente.
- Produtos indisponíveis continuam cadastrados, mas devem ser identificados no cardápio público.
- O cardápio público deve apresentar os produtos agrupados por categoria.

---

## 🛠️ Tecnologias

### MVP inicial

```text
Next.js
React
TypeScript
Tailwind
Git
GitHub
```

### Evolução planejada

```text
Next.js
TypeScript
NestJS
PostgreSQL
Docker
Redis
```

Dependendo da evolução do projeto, também poderão ser utilizados serviços externos para armazenamento de imagens, envio de notificações e outras integrações.

---

## 🏗️ Arquitetura planejada

A primeira versão será construída de forma simples, evoluindo gradualmente para uma arquitetura full-stack.

### Fase inicial

```text
Frontend
   │
   └── Next.js + React + TypeScript
```

### Evolução

```text
               Frontend
             Next.js / React
                    │
                    ▼
                REST API
                    │
                    ▼
              NestJS / Node.js
                    │
                    ▼
                PostgreSQL
```

### Arquitetura futura

```text
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
```

---

## 🗂️ Estrutura inicial

```text
menuza/
├── public/
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── page.tsx
│   │   │
│   │   ├── cardapio/
│   │   │   └── [slug]/
│   │   │       └── page.tsx
│   │   │
│   │   └── admin/
│   │       ├── page.tsx
│   │       ├── categorias/
│   │       │   └── page.tsx
│   │       └── produtos/
│   │           └── page.tsx
│   │
│   ├── components/
│   │   ├── menu/
│   │   ├── admin/
│   │   └── ui/
│   │
│   ├── data/
│   │   └── mock.ts
│   │
│   ├── types/
│   │   ├── category.ts
│   │   └── product.ts
│   │
│   └── styles/
│
├── package.json
└── README.md
```

---

## 🗄️ Modelo de dados inicial

### Restaurant

```text
id
name
slug
description
image
```

### Category

```text
id
restaurant_id
name
```

### Product

```text
id
category_id
name
description
price
image_url
available
```

Relacionamento:

```text
Restaurant
    │
    └── N Categories
              │
              └── N Products
```

A modelagem será evoluída conforme novas funcionalidades forem adicionadas.

---

## 🎨 Protótipo

O protótipo inicial da interface foi desenvolvido utilizando **Figma Make**.

O projeto possui duas experiências principais:

### Área pública

Voltada para os clientes do restaurante.

```text
Restaurante
    ↓
Categorias
    ↓
Produtos
```

### Área administrativa

Voltada para o gerenciamento do cardápio.

```text
Dashboard
    ├── Categorias
    ├── Produtos
    └── QR Code
```

---

## 📱 Responsividade

O cardápio público será desenvolvido seguindo uma abordagem **mobile-first**, considerando que o acesso principal acontecerá através de smartphones após a leitura do QR Code.

O sistema deverá funcionar adequadamente em:

- Smartphones
- Tablets
- Desktops

---

## 🧪 Testes

A estratégia de testes será adicionada conforme o projeto evoluir.

A intenção é testar principalmente:

- Regras de negócio
- Validação de dados
- APIs
- Componentes
- Fluxos críticos

---

## 🐳 Docker

Nas versões futuras, o ambiente de desenvolvimento deverá ser containerizado para facilitar a execução da aplicação.

A arquitetura planejada poderá incluir:

```text
Frontend
Backend
PostgreSQL
Redis
```

cada um executado em containers independentes.

---

## 🚀 Roadmap

### Fase 1 — Protótipo

- [x] Definição inicial do produto
- [x] Levantamento inicial de requisitos
- [x] Protótipo da interface
- [ ] Refinamento do design

### Fase 2 — MVP Frontend

- [ ] Configuração do projeto Next.js
- [ ] Estrutura de páginas
- [ ] Cardápio público
- [ ] Dashboard
- [ ] Categorias
- [ ] Produtos
- [ ] Estados de interface
- [ ] Responsividade
- [ ] QR Code

### Fase 3 — Backend

- [ ] API REST
- [ ] NestJS
- [ ] PostgreSQL
- [ ] Modelagem definitiva
- [ ] Validação
- [ ] Tratamento de erros

### Fase 4 — Autenticação

- [ ] Cadastro
- [ ] Login
- [ ] Proteção de rotas
- [ ] Autorização
- [ ] Associação de usuários aos restaurantes

### Fase 5 — Recursos avançados

- [ ] Upload de imagens
- [ ] Pedidos
- [ ] Mesas
- [ ] Integração com WhatsApp
- [ ] Notificações
- [ ] Dashboard com métricas

### Fase 6 — Infraestrutura

- [ ] Docker
- [ ] Testes automatizados
- [ ] CI/CD
- [ ] Deploy
- [ ] Monitoramento

---

## 📚 Documentação

Documentações complementares poderão ser organizadas em:

```text
docs/
├── requirements.md
├── business-rules.md
├── architecture.md
├── database.md
└── api.md
```

---

## 📖 Aprendizados

Este projeto busca praticar não apenas programação, mas também o processo completo de desenvolvimento de software:

```text
Problema
   ↓
Requisitos
   ↓
Prototipação
   ↓
Modelagem
   ↓
Implementação
   ↓
Testes
   ↓
Deploy
   ↓
Evolução
```

O objetivo é construir o projeto de forma incremental, documentando as decisões e aprendizados ao longo do desenvolvimento.

---

## 👨‍💻 Autor

Desenvolvido por Samuel de Abreu Moisés como projeto de estudo e portfólio em **Desenvolvimento Web e Engenharia de Software**.

---

## 📄 Licença

Este projeto está sendo desenvolvido para fins de estudo e portfólio.
