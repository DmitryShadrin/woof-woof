import React from 'react';
import {Header, Provider, defaultTheme, Button, Flex, View, Content} from '@adobe/react-spectrum';
import { getBreeds, getBreeds2 } from './api';
import './App.css';
import {ContentDataWrapper, DogBreedsList} from './components';
import { DogBreedType, DogBreedTypes } from './models';
import {getDogBreedsList} from "./stories/storiesData";

function App() {
  // const [dogBreedsListData, setDogBreedsListData] = React.useState<[DogBreedType]|[]>([]);
  const [dogBreedsListData, setDogBreedsListData] = React.useState<DogBreedTypes>([]);

  // const tempData = getDogBreedsList();
  // const tempData = dogBreedsListData;
  // const tempDataSlice = tempData.slice(0,500);
  // {/*<Header>Woof woof catalog</Header>*/}
  // {/*<Flex direction="column" width="size-2000" gap="size-100">*/}
  //   {/*    <DogBreedsList data={dogBreedsListData} />*/}
  //   {/*    <DogBreedsList data={getDogBreedsList()} />*/}
  //   {/*<Content>*/}
  //     {/*<DogBreedsList data={tempDataSlice} />*/}
  //         {/*</Content>*/}
  //       {/*<View backgroundColor="blue-600" height="size-800"></View>*/}
  //       {/*<View backgroundColor="magenta-600" height="size-800" />*/}
  return (
/*    <Provider theme={defaultTheme}>
      <Flex direction="column" gap="size-100">
        <View backgroundColor="celery-600" height="size-800" />
        <Flex direction="row" height="size-3000" gap="size-100">
          <View backgroundColor="indigo-600" width="size-2000">
            <DogBreedsList data={dogBreedsListData} />
          </View>
          <View backgroundColor="seafoam-600" flex />
        </Flex>
        <View backgroundColor="magenta-600" height="size-800" />
      </Flex>
      {/!*<Flex direction="row" width="size-2000">*!/}
      {/!*  <View backgroundColor="static-gray-50" borderColor="blue-600" height="size-800">*!/}
      {/!*    List here*!/}
      {/!*    /!*start of the list*!/!*!/}
      {/!*    /!*  <DogBreedsList data={dogBreedsListData} />*!/!*!/}
      {/!*    /!*end of the list*!/!*!/}
      {/!*  </View>*!/}
      {/!*  <View backgroundColor="green-500">Details here</View>*!/}
      {/!*</Flex>*!/}
    </Provider>*/
    <ContentDataWrapper />
  );
}

export default App;
