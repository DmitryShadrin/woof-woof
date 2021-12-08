import React from 'react';
import {Cell, Column, Header, Image, Row, TableBody, TableHeader, TableView} from '@adobe/react-spectrum'
import {DogBreedType} from '../models';

export const DogBreedDetail = (props: DogBreedType) => {
  const { id, name, image, bred_for } = props;

  return <>
    <Header>Breed: {name}</Header>
    <TableView>
      <TableHeader>
        <Column>Parameter</Column>
        <Column>Value</Column>
      </TableHeader>
      <TableBody>
        <Row>
          <Cell>Id</Cell>
          <Cell>{id}</Cell>
        </Row>
        <Row>
          <Cell>Name</Cell>
          <Cell>{name}</Cell>
        </Row>
        <Row>
          <Cell>Bred for</Cell>
          <Cell>{bred_for}</Cell>
        </Row>
      </TableBody>
    </TableView>
    <div>{JSON.stringify(props)}</div>
    <Image src={image.url} alt={name} maxWidth={400} />
  </>
};
