import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="devs" />
      <ChannelButton channelName="star-wars" />
      <ChannelButton channelName="friends" />
      <ChannelButton channelName="himym" />
    </Container>
  )
};

export default ChannelList;