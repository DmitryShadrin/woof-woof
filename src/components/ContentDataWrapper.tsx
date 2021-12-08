import React from 'react';
import { DogBreedTypes } from '../models';
import {getBreeds, getBreeds2} from "../api";
import { ContentWrapper } from '.';

export const ContentDataWrapper = () => {
  const [dogBreedsListData, setDogBreedsListData] = React.useState<DogBreedTypes>([]);

  // const getBreedsResult = React.useCallback(async () => {
  //   const data = await getBreeds();
  //   return data;
  // }, []);

  React.useEffect(() => {
    // async function doWork() {
    // const data = await getBreeds();
    // const data2 = await getBreeds2();
    // setDogBreedsListData(data);
    // setDogBreedsListData(data2);
    // }
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

  return <ContentWrapper data={dogBreedsListData} />;
};
