import React, {Key} from 'react';
import { Cell, Column, Flex, Item, ListBox, Row, TableBody, TableHeader, TableView} from '@adobe/react-spectrum';
import { DogBreedsListItem } from './';
import { DogBreedsListType } from '../models';

// {id: 1, name: 'Games', date: '6/7/2020', type: 'File folder'},
type row = {
  [key: string]: string | number | boolean;
  id: number;
  name: string;
  date: string;
  type: string;
};

type column = {
  id?: string;
  name: string;
  uid: string;
};

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

  // const handleSelectListBox = (keys: Set<string>) => {
  const handleSelectListBox = (keys: 'all' | Set<Key>) => {
    console.log(`handleSelectListBox`);
    const arr = Array.from(keys);
    if (arr.length) {
      const firstKey = arr[0];
      const id = parseInt(firstKey.toString());
      // console.log(`handleSelectListBox ${id}`);
      onSelect(id);
    }
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

  let columns: Array<column> = [
    {name: 'Name', uid: 'name'},
    {name: 'Type', uid: 'type'},
    {name: 'Date Modified', uid: 'date'}
  ];

  let rows: Array<row> = [
    {id: 1, name: 'Games', date: '6/7/2020', type: 'File folder'},
    {id: 2, name: 'Program Files', date: '4/7/2021', type: 'File folder'},
    {id: 3, name: 'bootmgr', date: '11/20/2010', type: 'System file'},
    {id: 4, name: 'log.txt', date: '1/18/2016', type: 'Text Document'}
  ];

  // TODO: remove inline style
  return (
    // <Flex height="size-5000" width="100%" direction="column" gap="size-150">
    // <TableView aria-label="Example table with static contents">
    //   <TableHeader>
    //     <Column isRowHeader>First Name</Column>
    //     <Column isRowHeader>Last Name</Column>
    //     <Column align="end">Age</Column>
    //   </TableHeader>
    //   <TableBody>
    //     <Row>
    //       <Cell>John</Cell>
    //       <Cell>Doe</Cell>
    //       <Cell>45</Cell>
    //     </Row>
    //     <Row>
    //       <Cell>Jane</Cell>
    //       <Cell>Doe</Cell>
    //       <Cell>37</Cell>
    //     </Row>
    //     <Row>
    //       <Cell>Joe</Cell>
    //       <Cell>Schmoe</Cell>
    //       <Cell>67</Cell>
    //     </Row>
    //     <Row>
    //       <Cell>John</Cell>
    //       <Cell>Doe</Cell>
    //       <Cell>45</Cell>
    //     </Row>
    //     <Row>
    //       <Cell>Jane</Cell>
    //       <Cell>Doe</Cell>
    //       <Cell>37</Cell>
    //     </Row>
    //     <Row>
    //       <Cell>Joe</Cell>
    //       <Cell>Schmoe</Cell>
    //       <Cell>67</Cell>
    //     </Row>
    //     <Row>
    //       <Cell>John</Cell>
    //       <Cell>Doe</Cell>
    //       <Cell>45</Cell>
    //     </Row>
    //     <Row>
    //       <Cell>Jane</Cell>
    //       <Cell>Doe</Cell>
    //       <Cell>37</Cell>
    //     </Row>
    //     <Row>
    //       <Cell>Joe</Cell>
    //       <Cell>Schmoe</Cell>
    //       <Cell>67</Cell>
    //     </Row>
    //   </TableBody>
    // </TableView>
    // </Flex>
    // <Flex height="size-5000" width="100%" direction="column" gap="size-150">
    //   <TableView flex aria-label="Example table with dynamic content">
    //     <TableHeader columns={columns}>
    //       {(column) => <Column key={column.id}>{column.name}</Column>}
    //     </TableHeader>
    //     <TableBody items={rows}>
    //       {(item) => <Row>{(columnKey) => <Cell>{item[columnKey]}</Cell>}</Row>}
    //     </TableBody>
    //   </TableView>
    // </Flex>
    // );
    // <Flex height="size-5000" width="100%" direction="column" gap="size-150">
    <ListBox items={data} selectionMode="single" key={'ccc'} onSelectionChange={(selected) => handleSelectListBox(selected)}>
      {(item) => <Item key={item.id}>{item.name}</Item>}
    </ListBox>
  );
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
      {/*{renderRows()}*/}
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
  {/*</div>*/}
  // </Flex>
  // );
};
