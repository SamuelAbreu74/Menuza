/** @type {import('@commitlint/types').UserConfig} */
const config = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    // Define os escopos válidos para o projeto Menuza
    'scope-enum': [
      2,
      'always',
      [
        'cardapio', // Funcionalidades da área pública do cardápio
        'admin', // Área administrativa
        'produto', // Relacionado a produtos
        'categoria', // Relacionado a categorias
        'restaurante', // Relacionado ao restaurante
        'auth', // Autenticação e autorização
        'ui', // Componentes de interface genéricos
        'config', // Configuração do projeto
        'docs', // Documentação
        'testes', // Testes automatizados
        'ci', // CI/CD e GitHub Actions
        'docker', // Docker e infraestrutura
        'deps', // Dependências
      ],
    ],
  },
}

module.exports = config
