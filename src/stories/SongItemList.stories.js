import React from 'react';

import SongItemList from '../components/SongItemList';

export default {
  title: 'Component/Song-Item',
  component: SongItemList,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = 
(args) => <SongItemList
            order="01"
            title="Để mãi có nhau"
            singer={["Bùi Anh Tuấn"]}
            viewCount="3200"
          />;
export const Song = Template.bind({});
Song.args = {};