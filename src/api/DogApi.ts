import axios, { AxiosResponse } from 'axios';
import { DogBreedTypes } from '../models';

// TODO: move to config file
const apiKey = 'a955d4d7-011b-4731-82ef-03b5df3f125f';
const baseUrl = 'https://api.thedogapi.com/v1';

axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common = {
  'x-api-key': apiKey,
};

const responseBody = (response: AxiosResponse) => response.data;

export const getBreeds = async (): Promise<DogBreedTypes> =>
  await axios.get(`${baseUrl}/breeds`).then(responseBody);
