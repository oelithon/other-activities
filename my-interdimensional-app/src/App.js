import { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };
  }

  fetchCharacter = () => {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => {
        this.setState({ characters: data.results });
      })
  }

  componentDidMount() {
    this.fetchCharacter();
  }

  render() {
    const { characters } = this.state;
    return (
      <div className="App">
        <h1>Rick and Morty Characters:</h1>
        <div className="body">
          {characters.map(({ name, image, id }) => {
            return (
              <div className="container" key={id}>
                <h3>{name}</h3>
                <img src={image} alt={`imagem do personagem ${name}`} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

export default App;
