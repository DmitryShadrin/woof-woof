import React from 'react';
// import { Cell, Row } from '@adobe/react-spectrum';
import { DogBreedsListItemType } from '../models';

export const DogBreedsListItem = (props: DogBreedsListItemType) => {
  const { id, name, onSelect } = props;

  const handleSelect = (id: number) => {
    onSelect(id);
  }

  return (
    <div style={{cursor: "pointer"}} onClick={() => handleSelect(id)}>{name}</div>
    // <option onClick={() => handleSelect(id)}>{id}-{name}</option>
    // <Row>
    //   <Cell>{id}</Cell>
    //   <Cell>{name}</Cell>
    // </Row>
  );
};
