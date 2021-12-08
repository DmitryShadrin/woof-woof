import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ContentWrapper } from '../components';
import { getDogBreedsList } from './storiesData';

export default {
  title: 'Woof-woof/ContentWrapper',
  component: ContentWrapper,
} as ComponentMeta<typeof ContentWrapper>;

const Template: ComponentStory<typeof ContentWrapper> = (args) => <ContentWrapper {...args} />;

export const Empty = Template.bind({});
Empty.args = {
  data: [],
};
export const WithData = Template.bind({});
WithData.args = {
  data: getDogBreedsList(),
};
