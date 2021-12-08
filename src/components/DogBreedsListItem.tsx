import React from 'react';
import { Cell, Row } from '@adobe/react-spectrum';
import { DogBreedsListItemType } from '../models';

export const DogBreedsListItem = (props: DogBreedsListItemType) => {
  const { id, name, onSelect } = props;

  const handleSelect = (id: number) => {
    onSelect(id);
  }

  return (
    <div onClick={() => handleSelect(id)}>{id}-{name}</div>
    // <Row>
    //   <Cell>{id}</Cell>
    //   <Cell>{name}</Cell>
    // </Row>
  );
};
