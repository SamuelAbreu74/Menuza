# Regras de Negócio — Menuza

> Documento de regras de negócio do projeto Menuza.
> Última atualização: Outubro de 2026.

---

## Contexto

As regras de negócio definem as restrições e comportamentos que o sistema deve respeitar para garantir a integridade dos dados e a consistência da experiência do usuário.

Estas regras devem ser implementadas na camada de domínio/serviço da aplicação, e não somente na interface ou no banco de dados.

---

## RN-01 — Todo produto deve pertencer a uma categoria

**Descrição:** Um produto não pode existir no sistema sem estar associado a uma categoria.

**Impacto:**
- No cadastro, a seleção de categoria é obrigatória.
- Na edição, a categoria não pode ser removida sem ser substituída por outra.

**Requisitos relacionados:** RF-16, RF-20

---

## RN-02 — O nome do produto é obrigatório

**Descrição:** Um produto não pode ser criado ou atualizado com o campo de nome vazio ou em branco.

**Validação:** O campo deve conter ao menos um caractere não-espaço.

**Requisitos relacionados:** RF-22

---

## RN-03 — O nome da categoria é obrigatório

**Descrição:** Uma categoria não pode ser criada ou atualizada com o campo de nome vazio ou em branco.

**Validação:** O campo deve conter ao menos um caractere não-espaço.

**Requisitos relacionados:** RF-10, RF-11

---

## RN-04 — O preço não pode ser negativo

**Descrição:** O preço de um produto deve ser um valor numérico maior ou igual a zero.

**Regras:**
- Preço negativo é inválido e deve ser rejeitado.
- Preço igual a zero é permitido (ex: produto incluso, brinde ou sob consulta).

**Requisitos relacionados:** RF-21

---

## RN-05 — Não devem existir categorias duplicadas

**Descrição:** Dentro de um mesmo restaurante, não podem existir duas categorias com o mesmo nome.

**Comportamento:**
- A verificação deve ser case-insensitive (ex: "Entradas" e "entradas" são consideradas iguais).
- A restrição se aplica tanto no cadastro quanto na edição.

**Requisitos relacionados:** RF-14

---

## RN-06 — Uma categoria com produtos não pode ser excluída diretamente

**Descrição:** Antes de excluir uma categoria, todos os produtos a ela associados devem ser removidos ou realocados para outra categoria.

**Comportamento esperado:**
- O sistema deve bloquear a exclusão e exibir uma mensagem informativa.
- A mensagem deve indicar quantos produtos estão associados à categoria.

**Exceção permitida:** Nenhuma. A regra é absoluta no MVP.

**Requisitos relacionados:** RF-12, RF-13

---

## RN-07 — Produtos indisponíveis continuam visíveis no cardápio

**Descrição:** Marcar um produto como indisponível não o remove do cardápio público.

**Comportamento esperado:**
- O produto é exibido normalmente, porém com sinalização visual de indisponibilidade.
- A sinalização deve ser clara e diferenciada dos produtos disponíveis.

**Motivação:** Permite que o cliente saiba que o produto existe mas está temporariamente fora de estoque, evitando perguntas desnecessárias ao atendente.

**Requisitos relacionados:** RF-07, RF-19

---

## RN-08 — O cardápio público exibe produtos agrupados por categoria

**Descrição:** Na página pública do cardápio, os produtos devem ser apresentados organizados dentro de suas respectivas categorias.

**Comportamento esperado:**
- Cada seção da página corresponde a uma categoria.
- Os produtos são exibidos dentro da seção de sua categoria.
- Categorias sem produtos não são exibidas.

**Requisitos relacionados:** RF-03, RF-05, RF-08

---

## RN-09 — A descrição do produto tem limite de caracteres

**Descrição:** Quando informada, a descrição de um produto deve ter no máximo 500 caracteres.

**Motivação:** Garantir que a interface do cardápio público não seja poluída por descrições excessivamente longas, especialmente em dispositivos móveis.

**Requisitos relacionados:** RF-23

---

## RN-10 — Alterações no cardápio refletem imediatamente na página pública

**Descrição:** Toda criação, edição, exclusão ou alteração de disponibilidade de categorias e produtos deve estar visível no cardápio público imediatamente após ser salva.

**Motivação:** O cardápio digital é a fonte de verdade para os clientes. Atualizações devem ser instantâneas para que o restaurante possa, por exemplo, marcar um produto como indisponível em tempo real durante o serviço.

**Observação:** Esta regra assume que o cardápio público não utiliza cache agressivo no MVP. A estratégia de cache será avaliada na Fase 6.

**Requisitos relacionados:** RF-24

---

## Resumo das regras

| Código | Regra | Requisitos |
| :--- | :--- | :--- |
| RN-01 | Todo produto deve ter uma categoria | RF-16, RF-20 |
| RN-02 | Nome do produto é obrigatório | RF-22 |
| RN-03 | Nome da categoria é obrigatório | RF-10, RF-11 |
| RN-04 | Preço não pode ser negativo | RF-21 |
| RN-05 | Categorias sem duplicatas (case-insensitive) | RF-14 |
| RN-06 | Categoria com produtos não pode ser excluída | RF-12, RF-13 |
| RN-07 | Produto indisponível permanece visível no cardápio | RF-07, RF-19 |
| RN-08 | Cardápio público agrupa produtos por categoria | RF-03, RF-05, RF-08 |
| RN-09 | Descrição do produto: máximo de 500 caracteres | RF-23 |
| RN-10 | Alterações refletem imediatamente na página pública | RF-24 |