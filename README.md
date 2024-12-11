# 🛋️ Furniro E-Commerce Application

Este é um projeto de aplicação web para uma loja de móveis, desenvolvido com foco em funcionalidade, responsividade e integração com APIs externas. A aplicação oferece páginas para navegação, seleção e compra de produtos, além de recursos como autenticação e gerenciamento de estado com **Redux**.

---

## 🌟 Funcionalidades

### Página Inicial (Home)
- **Carrossel de Inspirações**:
  - Exibição de imagens de ambientes decorados, com setas de navegação personalizadas e pontos de paginação.
  - Implementado com **SwiperJS**, ajustando-se dinamicamente para diferentes tamanhos de tela.
- **Seção de Produtos**:
  - Exibição de produtos organizados em grid.

### Header
- **Autenticação**:
  - Botão para login usando **Clerk**.
- **Overlay do Carrinho**:
  - Exibe os produtos adicionados ao carrinho, subtotal, total, e botões para acessar a página do Carrinho ou do Checkout.

### Página de Produtos (Shop)
- **Cards de Produtos**:
  - Mostra os produtos disponíveis, cada um com uma imagem, nome, e botão "Add to Cart".
  - Ao passar o mouse no botão, ele é destacado.
- **Paginação**:
  - Implementada para dividir os produtos em múltiplas páginas.
- **Gerenciamento de Carrinho**:
  - Ao clicar em "Add to Cart", o produto é adicionado ao estado global gerenciado pelo **Redux**.

### Página do Carrinho
- **Resumo do Carrinho**:
  - Lista de produtos adicionados, com subtotal e total calculados.
  - Botão "Go to Checkout" para avançar para o processo de pagamento.

### Página de Checkout (Rota Protegida)
- **Proteção por Autenticação**:
  - Somente usuários autenticados podem acessar.
- **Autopreenchimento do Endereço**:
  - Integração com a API **ViaCEP** para preenchimento automático de informações de endereço com base no CEP.
- **Finalização do Pedido**:
  - Ao clicar em "Place Order", o usuário é deslogado automaticamente e redirecionado para a página inicial.

---

## 🛠️ Tecnologias Utilizadas

- **React**: Biblioteca para construção de interfaces de usuário.
- **Redux**: Gerenciamento de estado global.
- **Redux Toolkit**: Simplificação do uso do Redux.
- **TailwindCSS**: Framework CSS para estilização responsiva.
- **SwiperJS**: Biblioteca para criação de carrosséis responsivos.
- **Clerk**: Serviço para autenticação de usuários.
- **Json Server**: Armazenamento do banco de dados dos produtos.
- **Vite**: Ferramenta de build e desenvolvimento rápido.
- **TypeScript**: Superconjunto do JavaScript com tipagem estática.

---

## Como Executar o Projeto
Clone o repositório:

```bash
git clone https://github.com/mariacarolarm/Furniro
cd desafio3
```

## Instale as dependências: Certifique-se de ter o Node.js instalado.

```bash
npm install
```

## Configuração de Ambiente: Crie um arquivo .env na raiz do projeto e configure as seguintes variáveis:

```bash
VITE_CLERK_FRONTEND_API=<sua-chave-do-clerk>
```

## Inicie a aplicação:

```bash
npm start
```

### Acesse no navegador: O projeto estará disponível em http://localhost:3000.

## 🎥 Demonstração

[Confira a demonstração do projeto Furniro no YouTube](https://youtu.be/C20JOw-mWEY)

## ⚙️ Configurações Extras
Autopreenchimento de endereço.
A aplicação usa a API ViaCEP para buscar informações com base no CEP.
Certifique-se de que as requisições à API estão funcionando no seu ambiente.

## Estilização Customizada
O projeto utiliza TailwindCSS. Ajustes podem ser feitos no arquivo tailwind.config.js:

```javascript
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

## 📦 Recursos Futuramente Adicionáveis
Método de Pagamento: Integração com um gateway de pagamento.
Histórico de Pedidos: Área para que o usuário visualize pedidos anteriores.

## ✨ Contribuições
Contribuições são bem-vindas! Abra uma issue ou envie um pull request para melhorias no projeto.

