# Loja Simples em React

## Descrição

Este projeto é uma loja simples desenvolvida em **React** utilizando **TypeScript**. O aplicativo possui um catálogo de produtos e um carrinho de compras. O usuário pode adicionar e remover produtos do carrinho de compras e ajustar a quantidade de cada item.

## Funcionalidades

### Tela de Produtos 🎁

- Exibe uma lista de todos os produtos disponíveis.
- A comunicação com o backend é realizada para obter informações sobre os produtos.
- Utiliza a [Fake Store API](https://fakestoreapi.com/docs#products) para buscar os dados dos produtos.

### Tela do Carrinho de Compras 🛒

- Armazena os itens e quantidades adicionadas pelo usuário.
- Permite aumentar ou diminuir a quantidade de um produto no carrinho.
- Permite remover produtos do carrinho.
- Utiliza o estado da aplicação para gerenciar o carrinho de compras, sem necessidade de comunicação com a Fake Store API para esta funcionalidade.

## Instalação e Execução

Para rodar o projeto localmente, siga os seguintes passos:

1. **Clone o repositório:**

    ```bash
    git clone https://github.com/BrenoJoseCoelho/frontEndLiven.git
    ```

2. **Navegue até o diretório do projeto:**

    ```bash
    cd frontendliven
    ```

3. **Instale as dependências:**

    ```bash
    npm install
    ```

4. **Inicie o servidor de desenvolvimento:**

    ```bash
    npm start
    ```

    O aplicativo estará disponível em [http://localhost:3000](http://localhost:3000).

## Tecnologias Utilizadas

- **React** - Biblioteca para construção de interfaces de usuário
- **TypeScript** - Superset do JavaScript que adiciona tipagem estática
- **Fake Store API** - API para obter dados dos produtos