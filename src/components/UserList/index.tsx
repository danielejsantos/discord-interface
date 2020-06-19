import React from 'react';

import { Container, Role, User, Avatar } from './styles';

import daniele from '../../assets/daniele.png';
import discord from '../../assets/discord.png';
import bb8 from '../../assets/bb8.png';
import chandlerBing from '../../assets/chandler-bing.png';
import darthVader from '../../assets/darth-vader.png';
import hanSolo from '../../assets/han-solo.png';
import joeyTribbiani from '../../assets/joey-tribbiani.png';
import lukeSkywalker from '../../assets/luke-skywalker.png';
import michaelScofield from '../../assets/michael-scofield.png';
import monicaGeller from '../../assets/monica-geller.png';
import normanBates from '../../assets/norman-bates.png';
import obiWan from '../../assets/obi-wan.png';
import phoebeBuffay from '../../assets/phoebe-buffay.png';
import princessLeia from '../../assets/princess-leia.png';
import r2d2 from '../../assets/r2d2.png';
import rachelGreen from '../../assets/rachel-green.png';
import robinScherbatsky from '../../assets/robin-scherbatsky.png';
import rossGeller from '../../assets/ross-geller.png';
import tedMosby from '../../assets/ted-mosby.png';
import yoda from '../../assets/yoda.png';

interface UserProps {
  nickname: string;
  isBot?: boolean;
  img?: string;
}

// img
const UserRow: React.FC<UserProps> = ({ nickname, isBot, img }) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} src={img} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname="Daniele Santos" img={daniele} />

      <Role>Offline - 19</Role>
      <UserRow nickname="Discord" isBot img={discord} />
      <UserRow nickname="BB-8" isBot img={bb8} />
      <UserRow nickname="R2-D2" isBot img={r2d2} />
      <UserRow nickname="Chandler Bing" img={chandlerBing} />
      <UserRow nickname="Darth Vader" img={darthVader} />
      <UserRow nickname="Han Solo" img={hanSolo} />
      <UserRow nickname="Joey Tribbiani" img={joeyTribbiani} />
      <UserRow nickname="Luke Skywalker" img={lukeSkywalker} />
      <UserRow nickname="Michael Scotfield" img={michaelScofield} />
      <UserRow nickname="Monica Geller" img={monicaGeller} />
      <UserRow nickname="Norman Bates" img={normanBates} />
      <UserRow nickname="Obi-Wan" img={obiWan} />
      <UserRow nickname="Phoebe Buffay" img={phoebeBuffay} />
      <UserRow nickname="Princess Leia" img={princessLeia} />
      <UserRow nickname="Rachel Green" img={rachelGreen} />
      <UserRow nickname="Robin Scherbatsky" img={robinScherbatsky} />
      <UserRow nickname="Ross Geller" img={rossGeller} />
      <UserRow nickname="Ted Mosby" img={tedMosby} />
      <UserRow nickname="Yoda" img={yoda} />
    </Container>
  )
};

export default UserList;