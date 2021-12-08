import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DogBreedsListItem } from '../components';
import { getDogBreed } from './storiesData';

export default {
  title: 'Woof-woof/DogBreedsListItem',
  component: DogBreedsListItem,
} as ComponentMeta<typeof DogBreedsListItem>;

const Template: ComponentStory<typeof DogBreedsListItem> = (args) => <DogBreedsListItem {...args} />;

export const WithData = Template.bind({});
WithData.args = getDogBreed();
