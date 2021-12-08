import React from 'react';
import { Cell, Column, Image, Row, TableBody, TableHeader, TableView} from '@adobe/react-spectrum'
import {DogBreedType, DogBreedTypes} from '../models';

// type DogBreedsListProps = {
//   data: DogBreedTypes;
// };

export const DogBreedDetail = (props: DogBreedType) => {
  // const { data } = props;
  const { id, name, image, bred_for } = props;
  // const { id, name, image, bred_for } = props[0];
  // const renderColumnHeaders = () => {
  //   return props.map(({ name }) =>
  //       <Column>{name}</Column>
  //     );
  // };

  // const columns = [];
  // const columnNames = data.map(({ id, name }) => ({id, name}));
  // const columns = [{id: 'parameter', name: 'parameter'}, ...columnNames];
  //
  // const generateRow = (parameterName: string, friendlyName: string) => {
  //   const row: any = {
  //     parameterName
  //   };
  //   data.forEach((breed) => {
  //     // @ts-ignore
  //     const parameterValue: string = breed[parameterName];
  //     row[breed.name] = parameterValue;
  //     row.friendlyName = friendlyName;
  //   });
  //   return row;
  // };

  const rows: any = [];

  // const generateItemRows = () => {
  //   const rowWithIds = generateRow('id', 'Id');
  //   rows.push(rowWithIds);
  //   const rowWithNames = generateRow('name', 'Name');
  //   rows.push(rowWithNames);
  //   const rowWithBredFor = generateRow('bred_for', 'Bred for');
  //   rows.push(rowWithBredFor);
  //   const rowWithImage = generateRow('image', 'Image');
  //   rows.push(rowWithImage);
  // };

  // generateItemRows();

  // const renderRow = (propertyName: string) => {
  //   return data.map((breed) => {
  //     return renderCell(breed, propertyName);
  //   });
  // };
  //
  // const renderCell = (breed: any, propertyName: string) => {
  //   return <Cell>{breed[propertyName]}</Cell>
  // }

  // const renderCells = (propertyName: string, breed: DogBreedType) => {
  //   return
  //   // @ts-ignore
  //   data.map((breed) => <Cell key={`${propertyName}-${breed[propertyName]}`}>{breed[propertyName]}</Cell>)
  // }

  // function getCellValue(breed: DogBreedType, propertyName: string) {
  //   // @ts-ignore
  //   const propertyValue = breed[propertyName];
  //   // return <>{breed[propertyName]}</>;
  //   if (propertyName === "image") {
  //     return <Image src={propertyValue.url} alt={breed.name} />
  //   }
  //   return <>{propertyValue}</>;
  // }

  return <>
    <h1>Breed:</h1>
    <TableView>
      <TableHeader>
      {/*<TableHeader columns={columns}>*/}
      {/*  {(column) => (*/}
      {/*    <Column key={column.id}>{column.name}</Column>*/}
      {/*  )}*/}
        <Column>Parameter</Column>
        <Column>Value</Column>
        {/*{props.map((prop) => {return <Column>prop.name</Column>})}*/}
        {/*{renderColumnHeaders()}*/}
      </TableHeader>
      {/*<TableBody items={rows}>*/}
      {/*  {getRow}*/}
      {/*</TableBody>*/}
      {/*<TableBody>*/}
      {/*  {rows.map((row: any) => {*/}
      {/*    const propertyName = row.parameterName;*/}
      {/*    const friendlyName = row.friendlyName;*/}
      {/*    // const firstDog = data[0];*/}
      {/*    // @ts-ignore*/}
      {/*    return (*/}
      {/*      <Row key={propertyName}>*/}
      {/*        <Cell>{friendlyName}</Cell>*/}
      {/*        {data.map(createRow)}*/}
      {/*      </Row>*/}
      {/*    );*/}

      {/*    function renderAllRows(breed: DogBreedType) {*/}
      {/*      return data.map(createRow);*/}
      {/*    }*/}

      {/*    function createRow(breed: DogBreedType) {*/}
      {/*      // @ts-ignore*/}
      {/*      return <Cell key={`${propertyName}-${breed[propertyName]}`}>{getCellValue(breed, propertyName)}</Cell>;*/}
      {/*    }*/}
      {/*  })}*/}
      {/*  /!*{getRow}*!/*/}
      {/*</TableBody>*/}
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
    <Image src={image.url} alt={name} />
  </>

/*  {/!*{data.map((breed) => <Cell key={123}>value</Cell>}*!/}
  {/!*<Cell>value</Cell>*!/}
  {/!*{renderCell(firstDog, propertyName)}*!/}
  {/!*{renderRow(propertyName)};*!/}
  {/!*<Cell>{firstDog[propertyName]}</Cell>*!/}*/

  // function getRow(item: any) {
  //   return <Row>{getCell}</Row>;
  //
  //   function getCell(columnKey: any) {
  //     return <Cell>{columnKey ? item[columnKey] : 'oops'}</Cell>;
  //   }
  // }
};
