# Requisitos — Menuza

> Documento de requisitos funcionais e não funcionais do projeto Menuza.
> Última atualização: Outubro de 2026.

---

## Contexto

O Menuza é uma aplicação web de cardápio digital para pequenos restaurantes, cafés, lanchonetes e bares.

O sistema possui duas áreas principais:

- **Cardápio público:** acessado pelos clientes do restaurante via QR Code.
- **Área administrativa:** utilizada pelo responsável do restaurante para gerenciar o cardápio.

---

## Requisitos Funcionais

### RF-01 — Visualizar Cardápio

**Descrição:** O sistema deve disponibilizar uma página pública com o cardápio completo do restaurante, acessível via URL com o slug do restaurante.

**Objetivo:** O sistema deve permitir que clientes acessem o cardápio público de um restaurante através de uma URL.

**Atores:** Cliente (visitante externo).

**Fluxo principal:**
1. O cliente acessa a URL do cardápio.
2. O sistema identifica o restaurante pelo slug na URL.
3. O sistema exibe as informações do restaurante.
4. O sistema exibe as categorias com seus respectivos produtos.
5. Produtos indisponíveis são exibidos com identificação visual de indisponibilidade.

**Fluxos alternativos:**
- **FA-01A:** Restaurante não encontrado → página de erro 404 amigável.
- **FA-01B:** Restaurante sem categorias ou produtos → mensagem informando que o cardápio ainda não foi configurado.

**Issues relacionadas:** `RF-01 — Cardápio Público`

---

### RF-02 — Visualizar informações do restaurante

**Descrição:** A página do cardápio deve exibir as informações básicas do restaurante.

**Campos exibidos:**
- Nome do restaurante
- Descrição (quando disponível)
- Imagem de capa ou logotipo (quando disponível)

**Dependência:** RF-01

---

### RF-03 — Visualizar categorias

**Descrição:** O cardápio público deve exibir todas as categorias do restaurante.

**Regras:**
- Categorias sem produtos associados não devem ser exibidas.
- A ordem de exibição deve ser consistente.

**Dependência:** RF-01

---

### RF-04 — Navegar entre categorias

**Descrição:** O cardápio público deve permitir que o cliente navegue entre as categorias de forma rápida.

**Comportamento esperado:**
- Exibição de âncoras ou menu de navegação por categoria.
- Ao clicar em uma categoria, a tela deve rolar até os produtos daquela categoria.

**Dependência:** RF-03

---

### RF-05 — Visualizar produtos

**Descrição:** O cardápio público deve exibir os produtos de cada categoria.

**Campos exibidos por produto:**
- Nome
- Descrição (quando disponível)
- Preço
- Imagem (quando disponível)
- Status de disponibilidade

**Dependência:** RF-03

---

### RF-06 — Visualizar informações do produto

**Descrição:** Cada produto exibido no cardápio deve apresentar suas informações detalhadas.

**Dependência:** RF-05

---

### RF-07 — Identificar produto indisponível

**Descrição:** Produtos marcados como indisponíveis devem ser exibidos no cardápio com identificação visual clara.

**Regras:**
- Produtos indisponíveis permanecem visíveis, mas sinalizados.
- Não devem ser ocultados do cardápio.

**Dependência:** RF-05

---

### RF-08 — Ocultar produtos sem categoria

**Descrição:** Produtos sem categoria válida associada não devem ser exibidos no cardápio público.

**Dependência:** RF-05

---

### RF-09 — Listar categorias (Admin)

**Descrição:** A área administrativa deve exibir todas as categorias do restaurante.

**Atores:** Administrador do restaurante.

**Campos exibidos:**
- Nome da categoria
- Quantidade de produtos associados

**Issues relacionadas:** `RF-02 — Categorias`

---

### RF-10 — Cadastrar categoria

**Descrição:** O administrador deve poder criar novas categorias para o restaurante.

**Campos:**
- Nome da categoria (obrigatório)

**Validações:**
- O nome é obrigatório.
- Não é permitido cadastrar categorias com o mesmo nome (case-insensitive).

**Dependência:** RF-09

---

### RF-11 — Editar categoria

**Descrição:** O administrador deve poder editar o nome de uma categoria existente.

**Validações:**
- O novo nome não pode ser igual ao de outra categoria existente.
- O nome não pode ficar em branco.

**Dependência:** RF-09

---

### RF-12 — Excluir categoria

**Descrição:** O administrador deve poder excluir uma categoria do restaurante.

**Regras:**
- Uma categoria com produtos associados não pode ser excluída diretamente.
- O sistema deve informar o administrador e indicar como proceder.

**Dependência:** RF-09

---

### RF-13 — Impedir exclusão de categoria com produtos

**Descrição:** O sistema deve bloquear a exclusão de uma categoria que ainda possua produtos vinculados.

**Mensagem esperada:** Mensagem clara informando os produtos associados e como proceder.

**Dependência:** RF-12

---

### RF-14 — Impedir categorias duplicadas

**Descrição:** O sistema deve impedir o cadastro ou edição de uma categoria cujo nome já exista no mesmo restaurante.

**Dependência:** RF-10, RF-11

---

### RF-15 — Listar produtos (Admin)

**Descrição:** A área administrativa deve exibir todos os produtos do restaurante.

**Campos exibidos:**
- Nome do produto
- Categoria associada
- Preço
- Status de disponibilidade
- Imagem em miniatura (quando disponível)

**Issues relacionadas:** `RF-03 — Produtos`

---

### RF-16 — Cadastrar produto

**Descrição:** O administrador deve poder criar novos produtos no restaurante.

**Campos:**
- Nome (obrigatório)
- Descrição (opcional)
- Preço (obrigatório)
- Categoria (obrigatório)
- Imagem (opcional)
- Disponibilidade (padrão: disponível)

**Dependência:** RF-15, RF-09

---

### RF-17 — Editar produto

**Descrição:** O administrador deve poder editar as informações de um produto existente.

**Dependência:** RF-15

---

### RF-18 — Excluir produto

**Descrição:** O administrador deve poder excluir um produto do restaurante.

**Comportamento:**
- A exclusão é permanente.
- O sistema deve solicitar confirmação antes de excluir.

**Dependência:** RF-15

---

### RF-19 — Alterar disponibilidade

**Descrição:** O administrador deve poder marcar um produto como disponível ou indisponível sem editar todas as informações do produto.

**Comportamento esperado:**
- Toggle rápido diretamente na listagem de produtos.
- A alteração deve refletir imediatamente no cardápio público.

**Dependência:** RF-15

---

### RF-20 — Associar produto a categoria

**Descrição:** Todo produto deve ser obrigatoriamente vinculado a uma categoria no momento do cadastro ou edição.

**Dependência:** RF-16, RF-17

---

### RF-21 — Validar preço do produto

**Descrição:** O sistema deve garantir que o preço seja um valor numérico maior ou igual a zero.

**Regras:**
- Preço negativo não é permitido.
- Preço zero é permitido (produto gratuito ou sob consulta).

**Dependência:** RF-16, RF-17

---

### RF-22 — Validar nome do produto

**Descrição:** O sistema deve garantir que o nome do produto não esteja em branco.

**Dependência:** RF-16, RF-17

---

### RF-23 — Validar descrição do produto

**Descrição:** A descrição é opcional. Quando informada, deve respeitar um limite máximo de 500 caracteres.

**Dependência:** RF-16, RF-17

---

### RF-24 — Atualizar cardápio após alteração

**Descrição:** Toda alteração realizada na área administrativa deve ser refletida imediatamente no cardápio público.

**Dependência:** RF-01, RF-15

---

### RF-ADMIN — Área Administrativa

**Descrição:** O sistema deve disponibilizar uma área administrativa para o gerenciamento do cardápio.

**Escopo do MVP:**
- Dashboard com resumo (número de categorias e produtos).
- Gerenciamento de categorias.
- Gerenciamento de produtos.
- Geração do QR Code.

> **Nota:** A autenticação está planejada para a Fase 4. No MVP Frontend (Fase 2), a área administrativa utiliza dados mock e não possui proteção de acesso.

**Issues relacionadas:** `RF-04 — Área Administrativa`

---

## Requisitos Não Funcionais

### RNF-01 — Responsividade

O cardápio público deve ser desenvolvido com abordagem **mobile-first**, sendo acessível em:
- Smartphones (prioridade máxima — acesso via QR Code)
- Tablets
- Desktops

### RNF-02 — Desempenho

A página do cardápio público deve carregar de forma rápida em redes móveis.

### RNF-03 — Usabilidade

- Interface do cardápio pública simples e intuitiva.
- Área administrativa com feedback claro para todas as ações (sucesso, erro, confirmação).

### RNF-04 — Segurança (Fase 4)

- A área administrativa deve ser protegida por autenticação.
- Apenas usuários autenticados devem gerenciar o cardápio.

### RNF-05 — Manutenibilidade

- Código organizado e legível seguindo princípios de Clean Code.
- Componentes reutilizáveis com responsabilidades bem definidas.

### RNF-06 — Testabilidade

- Regras de negócio implementadas de forma isolada e testável.
- Testes adicionados progressivamente (Fase 6).

---

## Cobertura dos requisitos por fase

| Fase | Requisitos cobertos |
| :--- | :--- |
| Fase 1 — Protótipo | Levantamento e documentação de todos os requisitos |
| Fase 2 — MVP Frontend | RF-01 ao RF-24, RF-ADMIN (com dados mock) |
| Fase 3 — Backend | RF-01 ao RF-24 (com API REST e banco de dados real) |
| Fase 4 — Autenticação | RNF-04, proteção da área administrativa |
| Fase 5 — Avançado | Novos requisitos (pedidos, mesas, WhatsApp, métricas) |
| Fase 6 — Infraestrutura | RNF-02, RNF-06, CI/CD, Deploy |
