import './assets/css/App.css';
import ControlledCarousel from './components/ControlledCarousel';

// var name; Minha ideia, inicialmente é utilizar uma variável nome que vai receber o valor (nome do filme) e inserir na url da api. Por conta disso optei escrever para que eu não esqueça. Posteriormente, irei excluir este comentário e provavelmente o fetch abaixo. 
// fetch(`https://api.themoviedb.org/3/movie/${this.state.name}550?api_key=756bf41a452aae1cce2c46c74f2f9561`)

function App() {

  return (
    <>
      <nav>
        <h1>Filmes</h1>
        <hr className='hr'></hr>
        <h2>Seleção de filmes</h2>
        <p>
          Todas as informações dos filmes foram buscadas utillizando a API do The Movie Database (TMDB). 
        </p>
        <hr className='hr'></hr>
      </nav>
      <section>
        <h2>Ação</h2>
        <hr className='hr'></hr>
        <ControlledCarousel/>
      </section>
      <section>
        <h2>Ficção</h2>
        <hr className='hr'></hr>
        <ControlledCarousel/>
      </section>
      <section>
        <h2>Baseado em fatos reais</h2>
        <hr className='hr'></hr>
        <ControlledCarousel/>
      </section>
    </>
  )
}

import 'bootstrap/dist/css/bootstrap.min.css';

export default App
