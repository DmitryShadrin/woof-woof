import React, {Key} from 'react';
import { Item, ListBox} from '@adobe/react-spectrum';
import { DogBreedsListType } from '../models';

export const DogBreedsList = ({ data, onSelect }: DogBreedsListType) => {
  const handleSelectListBox = (keys: 'all' | Set<Key>) => {
    console.log(`handleSelectListBox`);
    const arr = Array.from(keys);
    if (arr.length) {
      const firstKey = arr[0];
      const id = parseInt(firstKey.toString());
      onSelect(id);
    }
  };

  return (
    <ListBox items={data} selectionMode="single" onSelectionChange={(selected) => handleSelectListBox(selected)}>
      {(item) => <Item key={item.id}>{item.name}</Item>}
    </ListBox>
  );
};
