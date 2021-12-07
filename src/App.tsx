import React from 'react';
import {Provider, defaultTheme, Button} from '@adobe/react-spectrum';
import { getBreeds } from './DogApi';
import './App.css';
import { DogBreedsList } from "./DogBreedsList";

function App() {
  const buttonClickHandler = async () => {
    await getBreeds();
  }

  return (
    <Provider theme={defaultTheme}>
      <div className="App">
        <DogBreedsList data="I am a list. Who are you?" />
        <header className="App-header">
          <h1>Woof woof</h1>
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Button variant="cta" onPress={buttonClickHandler}>Click me...</Button>
        </header>
      </div>
    </Provider>
  );
}

export default App;
