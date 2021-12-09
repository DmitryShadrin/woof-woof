import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DogBreedDetail } from '../components';
import { getDogBreed } from './storiesData';

export default {
  title: 'Woof-woof/DogBreedDetail',
  component: DogBreedDetail,
} as ComponentMeta<typeof DogBreedDetail>;

const Template: ComponentStory<typeof DogBreedDetail> = (args) => <DogBreedDetail {...args} />;

export const WithData = Template.bind({});
WithData.args = {
  ...getDogBreed(),
};
