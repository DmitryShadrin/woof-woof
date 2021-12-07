import React from 'react';
import {DogBreedType} from '../models';

export const DogBreed = (props: DogBreedType) => {
  const { id, name, ...rest } = props;
  return <div>
    <h1>Breed:</h1>
    <div>id: {id}</div>
    <div>name: {name}</div>
    <div>{JSON.stringify(rest)}</div>
    <hr />
  </div>
};
