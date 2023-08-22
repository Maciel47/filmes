# 🎬 Filmes
![bagde status](https://img.shields.io/badge/status-conclu%C3%ADdo-green)

Projeto que busca filmes utilizando a API [The Movie Database](https://www.themoviedb.org/).

Vídeo do do projeto: 

https://github.com/Maciel47/filmes/assets/66790565/d51ab56a-3b91-4912-8066-ad96db80683a

## 📝 Instruções
Caso deseje testar o projeto em sua máquina, basta seguir estes passos: 

* Crie um arquivo chamando connKey.js na seguinte pasta: src > services;
* No arquivo, basta colocar a sua chave da API. Desta forma:
```
const API_KEY = 'substitua este texto por sua chave';

export default API_KEY;
``` 

Feito isso, basta instalar as dependências e bibliotecas que o projeto estará pronto para uso. 

## 🔎 Observações
- Os botões abaixo dos filmes não funcionam. Tratam-se de uma ideia da qual não tenho conhecimento para implementar ainda. A ideia consiste em o usuário ser enviado a página do respectivo filme na TMDB (The Movie Database), porém, como está sendo buscado da API, cada link teria de ser personalizado, e para isso, seria necessário realizar uma nova busca de forma eficiente para buscar o filme de acordo com o id dele. Como trata-se de um processo complexo para mim no momento, fica na ideia a implementação futura, ou até mesmo a realização deste processo em outro projeto futuramente.
- O projeto foi desenvolvido em inglês pois ao buscar o filme, ele retorna a informação em inglês. É possível que na API tenha um outro campo em que busque os filmes já com a tradução e neste caso, seria uma questão de estudar a fundo a API. No outro caso, só há a possibilidade de buscar em inglês e portanto eu, até o momento, não sei como fazer a tradução de um site através do desenvolvimento. 

## 🛠 Tecnologias
* [npm](https://www.npmjs.com/) - Gerenciador de pacotes
* [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem
* [Vite](https://vitejs.dev/) - Buid tool
* [React](https://react.dev/) - Framework

## 🤝 Contribuições

Segue o perfil no Github: [Davi Torelli](https://github.com/DaviTorelli).
Auxiliou com a busca das informações na API e a manipulação dos dados recebidos. 
