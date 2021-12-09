import React from 'react';
import { defaultTheme, Flex, Provider, View } from '@adobe/react-spectrum';
import { DogBreedsList } from './DogBreedsList';
import { DogBreedType, DogBreedTypes } from '../models';
import { DogBreedDetail } from '.';

type DogBreedsListProps = {
  data: DogBreedTypes;
};

export const ContentWrapper = ({ data }: DogBreedsListProps) => {
  const [selectedBreeds, setSelectedBreeds] = React.useState<DogBreedTypes>([]);

  const selectHandler = (selectedId: number) => {
    const selectedBreed = data.filter(({ id }) => id === selectedId);
    setSelectedBreeds([...selectedBreed, selectedBreeds[0]]);
  };

  const selectedBreed: DogBreedType | null = selectedBreeds.length ? selectedBreeds[0] : null;

  return (
    <Provider theme={defaultTheme}>
      <Flex direction="row" height="100vh" gap="size-100" width="100%">
        <Flex direction="column" gap="size-100" width="30%">
          {/*<View backgroundColor="gray-100">*/}
            <DogBreedsList data={data} onSelect={selectHandler} />
          {/*</View>*/}
        </Flex>
        <Flex direction="column" gap="size-100" width="70%">
          <View backgroundColor="gray-300" width="100%">
            {selectedBreed && <DogBreedDetail {...selectedBreed} />}
          </View>
        </Flex>
      </Flex>
      {/*<Flex direction="column" gap={'size-25'}>*/}
      {/*  /!*<View backgroundColor="celery-600" height="size-800" />*!/*/}
      {/*  <Flex direction="row" height="100%" gap="size-25">*/}
      {/*    <View height="100%">*/}
      {/*    </View>*/}
      {/*    <View flex>*/}
      {/*      /!*{selectedBreed && <DogBreedDetails {...selectedBreed} />}*!/*/}
      {/*      /!*{selectedBreed && <DogBreedDetails data={selectedBreeds} />}*!/*/}
      {/*    </View>*/}
      {/*  </Flex>*/}
      {/*  /!*<View backgroundColor="magenta-600" height="size-800" />*!/*/}
      {/*</Flex>*/}
    </Provider>
  );
};
