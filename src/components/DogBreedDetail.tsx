import React from 'react';
import { get } from 'lodash';
import { Cell, Column, Flex, Header, Image, Row, TableBody, TableHeader, TableView } from '@adobe/react-spectrum';
import { DogBreedType } from '../models';

export const DogBreedDetail = (props: DogBreedType) => {
  const { name, image } = props;

  const getRow = (propName: string, propPath: string, suffix: string = '') => (
    <Row key={`row-${propPath}`}>
      <Cell key={`param-${propPath}`}>{propName}</Cell>
      <Cell key={`value-${propPath}`}>
        {get(props, propPath)} {suffix}
      </Cell>
    </Row>
  );

  return (
    <>
      <Header>Breed: {name}</Header>
      <TableView key={name} aria-label={`${name} dog info`} overflowMode="wrap">
        <TableHeader>
          <Column maxWidth="30%">Parameter</Column>
          <Column>Value</Column>
        </TableHeader>
        <TableBody>
          {getRow('Breed', 'name')}
          {getRow('Breed group', 'breed_group')}
          {getRow('Bred for', 'bred_for')}
          {getRow('Weight (imperial)', 'weight.imperial', 'lb')}
          {getRow('Weight (metric)', 'weight.metric', 'kg')}
          {getRow('Life span', 'life_span')}
          {getRow('Temperament', 'temperament')}
          {getRow('Origin', 'origin')}
        </TableBody>
      </TableView>
      <Flex width="100%" justifyContent="center" alignItems={"start"}>
        <Image src={image.url} alt={name} objectFit="scale-down" key={image.url} marginTop="5px" height="400px" />
      </Flex>
    </>
  );
};
