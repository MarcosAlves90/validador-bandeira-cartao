# Validador de Bandeira de Cartão

Projeto desenvolvido para identificar e validar a bandeira de cartões de crédito a partir do número informado pelo usuário. Utiliza Nuxt 3, TypeScript e segue boas práticas de performance e organização de código.

## Funcionalidades

- Identificação automática da bandeira do cartão (Visa, MasterCard, etc.)
- Validação do número do cartão
- Interface web responsiva
- Código modular e fácil de manter

## Estrutura do Projeto

```plaintext
├── app.vue
├── nuxt.config.ts
├── package.json
├── tsconfig.json
├── vitest.config.ts
├── composables/
│   └── validarBandeira.ts
├── pages/
│   └── index.vue
├── assets/
│   └── css/
│       ├── main.css
│       └── tailwind.css
├── public/
│   └── favicon.ico
├── tests/
│   └── validarBandeira.spec.ts
└── ...
```

- **composables/validarBandeira.ts**: Função principal para validação e identificação da bandeira.
- **pages/index.vue**: Página principal com o formulário de entrada do cartão.
- **assets/css/**: Estilos customizados.
- **tests/**: Testes automatizados.

## Instalação

1. Clone o repositório:

   ```sh
   git clone https://github.com/MarcosAlves90/validador-bandeira-cartao-dio.git
   cd validador_bandeira_cartao_dio
   ```

2. Instale as dependências:

   ```sh
   pnpm install
   ```

## Uso

Para rodar o projeto em modo desenvolvimento:

```sh
pnpm dev
```

Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Testes

Execute os testes automatizados com:

```sh
pnpm test
```

## Como funciona

O usuário informa o número do cartão na interface. O sistema utiliza a função [`validarBandeira`](composables/validarBandeira.ts) para identificar a bandeira e validar o número, exibindo o resultado na tela.

## Tecnologias Utilizadas

- [Nuxt 3](https://nuxt.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vitest](https://vitest.dev/) para testes
- [pnpm](https://pnpm.io/) para gerenciamento de pacotes

## Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b minha-feature`)
3. Commit suas alterações (`git commit -m 'feat: minha nova feature'`)
4. Faça push para a branch (`git push origin minha-feature`)
5. Abra um Pull Request

## Licença

Este projeto está licenciado sob a licença MIT.

---

> Projeto para fins educacionais, desenvolvido para o bootcamp da DIO.
