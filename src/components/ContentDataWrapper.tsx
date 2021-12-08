import React from 'react';
import { DogBreedTypes } from '../models';
import { getBreeds } from '../api';
import { ContentWrapper } from '.';

export const ContentDataWrapper = () => {
  const [dogBreedsListData, setDogBreedsListData] = React.useState<DogBreedTypes>([]);

  React.useEffect(() => {
    const breeds = getBreeds();
    breeds.then((res) => {
      setDogBreedsListData(res);
    });
  }, []);

  return <ContentWrapper data={dogBreedsListData} />;
};
