import React from 'react';
import { get } from 'lodash';
import { defaultTheme, Flex, Provider } from '@adobe/react-spectrum';
import { DogBreedType, DogBreedTypes } from '../models';
import { DogBreedDetail, DogBreedsList } from '.';

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
  const previouslySelectedBreed = get(selectedBreeds, 1);

  return (
    <Provider theme={defaultTheme}>
      <Flex direction="row" height="100vh" gap="size-100" width="100%">
        <Flex direction="column" gap="size-100" width="15%" minWidth="250px">
            <DogBreedsList data={data} onSelect={selectHandler} />
        </Flex>
        <Flex direction="row" gap="size-100" width="85%" wrap justifyContent="left">
          <Flex direction="column" width="49%" minWidth="400px">
            {selectedBreed && <DogBreedDetail {...selectedBreed} />}
          </Flex>
          <Flex direction="column" width="49%" minWidth="400px">
            {previouslySelectedBreed && <DogBreedDetail {...previouslySelectedBreed} />}
          </Flex>
        </Flex>
      </Flex>
    </Provider>
  );
};
