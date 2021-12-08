import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DogBreedsList } from '../components';
import { getDogBreedsList } from './storiesData';

export default {
  title: 'Woof-woof/DogBreedsList',
  component: DogBreedsList,
} as ComponentMeta<typeof DogBreedsList>;

const Template: ComponentStory<typeof DogBreedsList> = (args) => <DogBreedsList {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  data: [],
};
export const WithData = Template.bind({});
WithData.args = {
  data: getDogBreedsList(),
};
