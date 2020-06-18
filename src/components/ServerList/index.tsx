import React from 'react';

import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton hasNotifications mentions={3} />
      <ServerButton />
      <ServerButton hasNotifications mentions={2} />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton hasNotifications mentions={5} />
      <ServerButton />
    </Container>
  );
};

export default ServerList;