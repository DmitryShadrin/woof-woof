import React from 'react';
// import {Button, Cell, Column, Item, ListBox, Row, TableBody, TableHeader, TableView} from '@adobe/react-spectrum';
import { DogBreedsListItem } from './';
import { DogBreedsListType } from '../models';

export const DogBreedsList = ({ data, onSelect }: DogBreedsListType) => {
  // const columns = [{ name: 'Name', uid: 'name' }];
  //
  // const rows = data.map((breed) => ({
  //   id: breed.id,
  //   name: breed.name,
  // }));
  const handleSelect = (id: number) => {
    // console.log(`selected ${id}`)
    onSelect(id);
  };

  const renderRows = () => {
    return data.map((breed) => {
      return <DogBreedsListItem key={breed.id} {...breed} onSelect={handleSelect} />;
    });
  };

  // function getElement1(item: any) {
  //   return (columnKey: any) => {
  //     return <Cell key={item.id}>{item.name}</Cell>;
  //   };
  // }

  // function getElement() {
  //   return (item: any) => {
  //     return <Row key={item.id}>{getElement1(item)}</Row>;
  //   };
  // }

  // TODO: remove inline style
  return (
    <div style={{ height: '100vh', overflowY: 'scroll' }}>
      {/*<ListBox items={rows}>*/}
      {/*  {(item) => <Item>{item.name}</Item>}*/}
      {/*</ListBox>*/}
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
      {/*<select multiple={true}>*/}
      {renderRows()}
      {/*</select>*/}
      {/*<TableView>*/}
      {/*  <TableHeader>*/}
      {/*    <Column>Id</Column>*/}
      {/*    <Column>Name</Column>*/}
      {/*  </TableHeader>*/}
      {/*  <TableBody items={rows}>*/}
      {/*  <TableBody>*/}
      {/*    <Row>*/}
      {/*      <Cell key={1}>123</Cell>*/}
      {/*    </Row>*/}
      {/*    <Row>*/}
      {/*      <Cell key={2}>456</Cell>*/}
      {/*    </Row>*/}
      {/*{rows.map((row) =>*/}
      {/*  <Row key={row.id}>*/}
      {/*    <Cell key={`cell-${row.id}`}>hey</Cell>*/}
      {/*  </Row>)}*/}
      {/*{getElement()}*/}
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
    </div>
  );
};
