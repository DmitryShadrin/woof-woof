import React from 'react';

interface DogBreedsListProps {
  data: string;
}

export const DogBreedsList = ({ data }: DogBreedsListProps) => {
  return <div>I am a list. {data}</div>
};
