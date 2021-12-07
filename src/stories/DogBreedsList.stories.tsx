import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DogBreedsList } from '../DogBreedsList';

export default {
  title: 'Woof-woof/DogBreedsList',
  component: DogBreedsList,
  // argTypes: {
  //   data: { control: 'color' },
  // },
} as ComponentMeta<typeof DogBreedsList>;

const Template: ComponentStory<typeof DogBreedsList> = (args) => <DogBreedsList {...args} />;
// export const Primary: ComponentStory<typeof DogBreedsList> = () => <DogBreedsList data="Hello" />;

export const WithData = Template.bind({});
WithData.args = {
  data: 'Hi there',
}
