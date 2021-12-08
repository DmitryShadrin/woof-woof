import { DogBreedType } from './';

export interface DogBreedsListItemType extends DogBreedType {
  onSelect(id: number): void,
}
