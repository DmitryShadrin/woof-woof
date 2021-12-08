import React from 'react';
import {Button, Cell, Column, Item, ListBox, Row, TableBody, TableHeader, TableView} from '@adobe/react-spectrum';
import {DogBreedDetails, DogBreedsListItem} from './';
import {DogBreedsListType, DogBreedTypes} from '../models';

// interface DogBreedsListProps {
//   data: Array<Object>;
// }

// type DogBreedsListProps = {
//   data: DogBreedTypes,
// }

export const DogBreedsList = ({ data, onSelect }: DogBreedsListType) => {
  const handleSelect = (id: number) => {
    console.log(`selected ${id}`)
    onSelect(id);
  }

  const renderRows = () => {
    return data.map((breed) => {
      return <DogBreedsListItem key={breed.id} {...breed} onSelect={handleSelect} />;
    });
  };

  return (
    <>
      {/*<TableView>*/}
      {/*  <TableHeader>*/}
      {/*    <Column>Id</Column>*/}
      {/*    <Column>Name</Column>*/}
      {/*  </TableHeader>*/}
      {/*  <TableBody>*/}
      {/*    {data.map((breed) => {*/}
      {/*      // return <DogBreedDetails key={breed.id} {...breed} />;*/}
      {/*      return <DogBreedsListItem key={breed.id} {...breed} />;*/}
      {/*    })}*/}
      {/*  </TableBody>*/}
      {/*</TableView>*/}
      {renderRows()}
      {/*<TableView>*/}
      {/*  <TableHeader>*/}
      {/*    <Column>Id</Column>*/}
      {/*    <Column>Name</Column>*/}
      {/*  </TableHeader>*/}
      {/*  <TableBody>*/}
          {/*{data.map((breed) => {*/}
          {/*  return (*/}
          {/*    <Row key={breed.id}>*/}
          {/*      <Cell>{breed.id}</Cell>*/}
          {/*      <Cell>{breed.name}</Cell>*/}
          {/*    </Row>*/}
          {/*  );*/}
          {/*})}*/}
          {/*<ListBox>*/}
          {/*    {renderRows()}*/}
          {/*    <Row>*/}
          {/*      <Cell>123</Cell>*/}
          {/*      <Cell>some name</Cell>*/}
          {/*    </Row>*/}
          {/*    <Row>*/}
          {/*      <Cell>456</Cell>*/}
          {/*      <Cell>some other name</Cell>*/}
          {/*    </Row>*/}
          {/*{data.map((breed) => {*/}
          {/*  // return <DogBreedDetails key={breed.id} {...breed} />;*/}
          {/*  // return <DogBreedsListItem key={breed.id} {...breed} />;*/}
          {/*  return <Row>*/}
          {/*    <Cell>{breed.id}</Cell>*/}
          {/*    <Cell>{breed.name}</Cell>*/}
          {/*  </Row>;*/}
          {/*})}*/}
          {/*</ListBox>*/}
      {/*  </TableBody>*/}
      {/*</TableView>*/}
    </>
  );
};
