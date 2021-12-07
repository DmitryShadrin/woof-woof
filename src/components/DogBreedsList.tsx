import React from 'react';
import {Button} from "@adobe/react-spectrum";
import {DogBreed} from "./DogBreed";
// import {DogBreedType} from "./DogBreedType";
import {DogBreedTypes} from "../models";

// interface DogBreedsListProps {
//   data: Array<Object>;
// }

// export const DogBreedsList: React.FC<{data: [DogBreedType] | []}> = ({ data}) => {
export const DogBreedsList: React.FC<{data: DogBreedTypes}> = ({ data}) => {
  return <>
    <h1>I am a list</h1>
    {data.map((breed) => {
      return <DogBreed key={breed.id} {...breed} />;
    })}
    <Button variant="cta">Button here!</Button>
  </>
};
