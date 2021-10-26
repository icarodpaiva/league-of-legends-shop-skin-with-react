# Avalição I

Nesta primeira avaliação, vocês precisaram fazer uma Lista de Desejos (Wishlist), onde o usuário poderá ver uma lista de sugestões de produtos e vizualizar os produtos adicionados em sua lista.

## Data da entrega:
- **02/11/2021**

## Comportamento da aplicação:
- Ao clicar em um botão de "Adicionar à Wishlist" em um produto, o produto dever ser adicionado e exibido na Lista.
- Ao clicar no botão de "Remover da Wishlist" em um produto, o produto dever ser removido da lista.
- Não poderá ser permitido duplicação de produtos na lista.

## Orientações:
- Popule o arquivo `src\products.json` com os produtos de sua aplicação.
- Substitua a chamada da importação do arquivo `products.json` pelo método `getProducts` no arquivo `src\App.js`. Fique a vontade para renomear os arquivos e componentes.
- Use o método `getProducts` para simular uma requisição HTTP para buscar os produtos do arquivo `products.json`, exemplo:
- `getProducts` é uma [Promise](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Promise), por isso fique atento à sua utilização.
- NÃO ALTERE O ARQUIVO `src\utils\product.js`.
- Utilize todos, ou pelo menos a maioria dos conteúdos vistos até agora.

## Exemplo da utilização da função `getProducts`:
```js
getProduct.then(products => console.log(products));
```

## Dicas:
- Procure refatorar o código usando a **Composição**.
- Se você quiser criar um carrocel de produtos, você pode usar a bibliteca [React Slick](https://www.npmjs.com/package/react-slick).
- Use [Window.localStorage](https://developer.mozilla.org/pt-BR/docs/Web/API/Window/localStorage) para armazenar uma "cache" da lista de desejos em conjunto com algum estado. O `localStorage` pode ser utilizado para o usuário não perder os produtos em um reload da página.

## Para se Destacar:
- Crie uma aplicação **responsiva**.
- Utilize os conceitos do **PWA**.

## Inicialização:
- De um Fork neste repositório;
- Clonar o repositório localmente, há um botão azul "Clone" no seu repositório do GitLab, clique nele e use a URL com HTTPS, ou SSH se você já configurou uma [chave SSH](https://docs.gitlab.com/ee/ssh/).
- Agora localmente abra uma pasta e use o botão direito do Mouse para abrir o "Git Bash", com esse atalho você chegará na pasta que quer mais rapidamente pelo terminal.
- Use o comando git clone `url-copiada-do-gitlab` para que a estrutura de pastas do repositório seja clonada na sua pasta.
- Crie uma branch `seu-nome/avaliacao-1`.
- Instale as dependências do `package.json` com `yarn` ou `npm install`, via linha de comando.
- Inicialize a aplicação com `yarn start` ou `npm start`.

## Entrega:
- Assim que terminar dê `git push -u origin nome-da-sua-branch` para o primeiro `push`. Demais `pushs` basta utilizar apenas `git push`.
- Acesse o menu "Merge Requests", configure o "Target Branch" para o repositório original para que seu App seja avaliado e revisado e para que possamos te dar um feedback.
- O nome do Merge Request deve ser o seu nome completo.
- Crie o Merge Request.
