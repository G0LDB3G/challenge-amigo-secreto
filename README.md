# Amigo Secreto - Sorteio Digital 🎉

Este projeto implementa um sorteio de amigo secreto, permitindo que o usuário insira os nomes de seus amigos, visualize uma lista e sorteie aleatoriamente um nome para o "amigo secreto". O aplicativo foi desenvolvido utilizando HTML, CSS e JavaScript.

## Tecnologias Usadas 🧑‍💻

<div>
    <img src="https://img.shields.io/badge/HTML-E34F26?style=for-the-badge&logo=html5&logoColor=white">
    <img src="https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
</div>

## Funcionalidades 💻

1. **Adicionar amigos**: O usuário pode digitar o nome de seus amigos e adicioná-los à lista.
2. **Validação de entrada**: Se o campo de nome estiver vazio, será exibido um alerta informando o erro.
3. **Visualizar a lista de amigos**: Todos os nomes adicionados serão exibidos em uma lista visível.
4. **Sortear amigo secreto**: Ao clicar no botão "Sortear amigo", um nome será escolhido aleatoriamente da lista e exibido como o amigo secreto.

## Estrutura do Projeto 🗂️

- `index.html`: Contém a estrutura da página, incluindo o campo de entrada, a lista de amigos e o botão para sortear.
- `style.css`: Estiliza a página, incluindo a disposição do conteúdo e os botões.
- `app.js`: Contém o código JavaScript que gerencia a lógica do sorteio e atualização da lista.

## Como Usar 📝

1. Abra o arquivo `index.html` no seu navegador.
2. Digite o nome de um amigo no campo de entrada.
3. Clique no botão "Adicionar" para adicionar o nome à lista.
4. Repita o processo para adicionar mais amigos.
5. Quando terminar de adicionar os amigos, clique no botão "Sortear amigo" para ver quem é o amigo secreto.

## Detalhes Técnicos 🛠️

### 1. **Adicionar amigos**:
- O nome do amigo foi capturado pelo JavaScript com o método `document.getElementById()`.
- A entrada é validada para garantir que não fique vazio.
- O nome válido é adicionado ao array `amigos` usando o método `.push()`.

### 2. **Visualização da lista**:
- A função `atualizarListaAmigos` percorre o array `amigos` e adiciona cada nome à lista HTML usando `document.createElement('li')` e `appendChild()`.

### 3. **Sortear amigo secreto**:
- O sorteio é feito gerando um índice aleatório através de `Math.random()` e `Math.floor()`.
- O nome sorteado é exibido dinamicamente na página dentro de um item da lista.

## Como Executar 🚀

1. Faça o download ou clone o repositório.
2. Abra o arquivo `index.html` em seu navegador.
3. Comece a adicionar nomes e realizar o sorteio.


