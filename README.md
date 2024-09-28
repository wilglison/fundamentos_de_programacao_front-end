# Projeto E-commerce

Este é um projeto web de um sistema de e-commerce desenvolvido utilizando HTML e CSS puros. O projeto contém páginas de login, cadastro de usuário, listagem de produtos e pagamento.

## Iniciando o Projeto

Para iniciar o projeto, siga os passos abaixo:

1. **Instale a extensão Live Server no VS Code**:
   - Abra o Visual Studio Code.
   - No terminal rodar o comando "npm install"
   - Vá para a aba de extensões (ícone de quadrado no lado esquerdo).
   - Procure por "Live Server" e instale a extensão desenvolvida por Ritwick Dey.
   - Após a instalação, clique com o botão direito no arquivo `index.html` e selecione "Open with Live Server".

## Estrutura do Projeto

- `index.html`: Página inicial do projeto.
- `pages/login.html`: Página de login.
- `components/navbar.html`: Componente de barra de navegação.
- `styles.css`: Arquivo de estilos CSS.

## Requisitos do Projeto

### 1. Página de Login

- **Campos**: Usuário e Senha.
- **Botões**:
  - **Confirmar**: Direciona para a tela contendo os produtos para serem comprados.
  - **Cadastrar Novo Usuário**: Mostra um formulário com os seguintes campos para cadastro:
    - Nome
    - E-mail
    - Data de Nascimento
    - Endereço (Logradouro, Número, Quadra, Lote, Bairro, CEP, Cidade e Estado)
  - **Salvar**: Ao final do formulário, chama a tela de Login.

### 2. Página de Produtos

- **Componentes**:
  - Lista de produtos com as seguintes informações:
    - Foto do produto
    - Nome do produto
    - Valor do produto
    - Detalhamento do produto (Ex: modelo, marca, cor, etc)
    - Preço
    - Avaliação do produto
  - **Botão Finalizar a Compra**: Direciona para a tela de Pagamento.
  - Esta tela é chamada via botão "Confirmar" da tela de login.

### 3. Página de Pagamento

- **Campos**:
  - Bandeira do Cartão (Visa, Mastercard e American Express)
  - Número do Cartão
  - Data de Expiração
  - Código de Segurança
- **Botão Finalizar**: Apresenta uma tela com todos os dados da compra (produtos selecionados, quantidades, preços, forma de pagamento, valor total da compra e mensagem de sucesso).

### 4. Utilização de HTML e CSS

- Todas as páginas devem ser desenvolvidas em HTML.
- Todas as telas devem ter a aplicação de CSS, utilizando os atributos `class` e `id`.
- Recomenda-se a utilização dos seguintes sites de apoio:
  - Bootstrap
  - Bootsnipp
- Todas as páginas devem ser responsivas.

## Fluxo de Navegação

1. **Login**: Página inicial onde o usuário pode fazer login ou cadastrar um novo usuário.
2. **Cadastro de Usuário**: Formulário para cadastro de novos usuários.
3. **Produtos**: Lista de produtos disponíveis para compra.
4. **Pagamento**: Tela de pagamento com os detalhes da compra.

## Tecnologias Utilizadas

- HTML
- CSS
- Bootstrap

## Como Contribuir

1. Faça um fork deste repositório.
2. Crie uma branch com a sua feature: `git checkout -b minha-feature`.
3. Faça commit das suas alterações: `git commit -m 'Minha nova feature'`.
4. Faça push para a branch: `git push origin minha-feature`.
5. Envie um Pull Request.

