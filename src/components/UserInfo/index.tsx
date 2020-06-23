import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';

import daniele from '../../assets/daniele.png';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar src={daniele} />
        <UserData>
          <strong>Daniele Santos</strong>
          <span>#1763</span>
        </UserData>
      </Profile>
      <Icons>
        <MicIcon />
        <HeadphoneIcon />
        <SettingsIcon />
      </Icons>
    </Container>
  )
};

export default UserInfo;