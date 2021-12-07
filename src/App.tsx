import React from 'react';
import { Provider, defaultTheme, Button } from '@adobe/react-spectrum';
import { getBreeds, getBreeds2 } from './api';
import './App.css';
import { DogBreedsList } from "./components";
import {DogBreedType, DogBreedTypes} from "./models";

function App() {
  // const [dogBreedsListData, setDogBreedsListData] = React.useState<[DogBreedType]|[]>([]);
  const [dogBreedsListData, setDogBreedsListData] = React.useState<DogBreedTypes>([]);
  const getBreedsResult = React.useCallback(async () => {
    const data = await getBreeds();
    return data;
  }, []);

  React.useEffect(() => {
    async function doWork() {
      // const data = await getBreeds();
      // const data2 = await getBreeds2();
      // setDogBreedsListData(data);
      // setDogBreedsListData(data2);
    }
    // doWork();
    const breeds = getBreeds2();
    breeds.then((res) => {
      setDogBreedsListData(res);
      console.log(res);
    });
    // console.log(breeds);
    // getBreeds().then((result) => setDogBreedsListData(result));
    // setDogBreedsListData(getBreedsResult());
  }, []);

  const buttonClickHandler = async () => {

  }

  return (
    <Provider theme={defaultTheme}>
      <div className="App">
        <DogBreedsList data={dogBreedsListData} />
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
