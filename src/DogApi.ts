import axios from 'axios';

const apiKey = 'a955d4d7-011b-4731-82ef-03b5df3f125f';
const baseUrl = 'https://api.thedogapi.com/v1';
axios.defaults.baseURL = baseUrl;
axios.defaults.headers.common = {
  'x-api-key': apiKey,
};

export async function getBreeds() {
  const result = await axios.get(`${baseUrl}/breeds`);
  console.log(result);
}
