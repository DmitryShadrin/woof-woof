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
    // console.log(`inside Content Wrapper, id=${selectedId}`);
    const selectedBreed = data.filter(({ id }) => id === selectedId);
    if (!selectedBreeds.some((breed) => breed.id === selectedId)) {
      setSelectedBreeds([...selectedBreed, ...selectedBreeds]);
    }
  };

  const selectedBreed: DogBreedType | null = selectedBreeds.length ? selectedBreeds[0] : null;

  return (
    <Provider theme={defaultTheme}>
      <Flex direction="column" gap={'size-25'}>
        {/*<View backgroundColor="celery-600" height="size-800" />*/}
        <Flex direction="row" height="100%" gap="size-25">
          <View width="size-2000" height="100%">
            <DogBreedsList data={data} onSelect={selectHandler} />
          </View>
          <View flex>
            {/*{selectedBreed && <DogBreedDetails {...selectedBreed} />}*/}
            {/*{selectedBreed && <DogBreedDetails data={selectedBreeds} />}*/}
            {selectedBreed && <DogBreedDetail {...selectedBreed} />}
          </View>
        </Flex>
        {/*<View backgroundColor="magenta-600" height="size-800" />*/}
      </Flex>
    </Provider>
  );
};
