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
          <DogBreedsList data={data} onSelect={selectHandler} />
        </Flex>
        <Flex direction="column" gap="size-100" width="70%">
          <View backgroundColor="gray-300" width="100%">
            {selectedBreed && <DogBreedDetail {...selectedBreed} />}
          </View>
        </Flex>
      </Flex>
    </Provider>
  );
};
