import { DogBreedTypes } from './';

export interface DogBreedsListType {
  data: DogBreedTypes;
  onSelect(id: number): void;
}
