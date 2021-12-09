import React from 'react';
import { DogBreedsListItemType } from '../models';

export const DogBreedsListItem = (props: DogBreedsListItemType) => {
  const { id, name, onSelect } = props;

  const handleSelect = (id: number) => {
    onSelect(id);
  }

  return (
    <div style={{cursor: "pointer"}} onClick={() => handleSelect(id)}>{name}</div>
  );
};
