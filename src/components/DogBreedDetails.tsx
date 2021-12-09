import React from 'react';
import { Cell, Column, Row, TableBody, TableHeader, TableView } from '@adobe/react-spectrum';
import { DogBreedTypes } from '../models';

type DogBreedsListProps = {
  data: DogBreedTypes;
};

export const DogBreedDetails = (props: DogBreedsListProps) => {
  const { data } = props;
  const columnNames = data.map(({ id, name }) => ({ id, name }));
  const columns = [{ id: 'parameter', name: 'parameter' }, ...columnNames];

  const generateRow = (parameterName: string, friendlyName: string) => {
    const row: any = {
      parameterName,
    };
    data.forEach((breed) => {
      // @ts-ignore
      row[breed.name] = breed[parameterName];
      row.friendlyName = friendlyName;
    });
    return row;
  };

  const rows: any = [];

  const generateItemRows = () => {
    const rowWithIds = generateRow('id', 'Id');
    rows.push(rowWithIds);
    const rowWithNames = generateRow('name', 'Name');
    rows.push(rowWithNames);
    const rowWithBredFor = generateRow('bred_for', 'Bred for');
    rows.push(rowWithBredFor);
    const rowWithImage = generateRow('image', 'Image');
    rows.push(rowWithImage);
  };

  generateItemRows();

  return (
    <>
      <h1>Breed:</h1>
      <TableView>
        {/*<TableHeader>*/}
        <TableHeader columns={columns}>
          {(column) => <Column key={column.id}>{column.name}</Column>}
          {/*<Column>Parameter</Column>*/}
          {/*<Column>{name}</Column>*/}
          {/*{props.map((prop) => {return <Column>prop.name</Column>})}*/}
          {/*{renderColumnHeaders()}*/}
        </TableHeader>
        {/*<TableBody items={rows}>*/}
        {/*  {getRow}*/}
        {/*</TableBody>*/}
        <TableBody>
          {rows.map((row: any) => {
            const propertyName = row.parameterName;
            const friendlyName = row.friendlyName;
            // const firstDog = data[0];
            // @ts-ignore
            return (
              <Row key={propertyName}>
                <Cell>{friendlyName}</Cell>
                {/*{data.map(createRow)}*/}
              </Row>
            );
          })}
          {/*{getRow}*/}
        </TableBody>
      </TableView>
      <div>{JSON.stringify(props)}</div>
    </>
  );
};
