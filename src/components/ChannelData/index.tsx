import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

import daniele from '../../assets/daniele.png';
import discord from '../../assets/discord.png';
import joeyTribbiani from '../../assets/joey-tribbiani.png';
import yoda from '../../assets/yoda.png';
import monicaGeller from '../../assets/monica-geller.png';
import robinScherbatsky from '../../assets/robin-scherbatsky.png';
import tedMosby from '../../assets/ted-mosby.png';
import rachelGreen from '../../assets/rachel-green.png';
import darthVader from '../../assets/darth-vader.png';
import phoebeBuffay from '../../assets/phoebe-buffay.png';

const ChannelData: React.FC = () => {
  const messagesRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messagesRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight
    }
  }, [messagesRef]);

  return (
    <Container>
      <Messages ref={messagesRef}>
        <ChannelMessage
          author="Discord"
          date="18/06/2020"
          content={
            <>
              <Mention>@Daniele Santos</Mention>, welcome!
            </>
          }
          hasMention
          isBot
          img={discord}
        />
        <ChannelMessage
          author="Daniele Santos"
          date="19/06/2020"
          content="Hi guys!"
          img={daniele}
        />
        <ChannelMessage
          author="Joey Tribbiani"
          date="19/06/2020"
          content={
            <>
              <Mention>@Daniele Santos</Mention> hey, how you doing?
            </>
          }
          img={joeyTribbiani}
          hasMention
        />
        <ChannelMessage
          author="Yoda"
          date="19/06/2020"
          content="Bored in this quarantine I am"
          img={yoda}
        />
        <ChannelMessage
          author="Monica Geller"
          date="19/06/2020"
          content={
            <>
              <Mention>@Yoda</Mention> I KNOW!
            </>
          }
          img={monicaGeller}
        />
        <ChannelMessage
          author="Robin Scherbatsky"
          date="19/06/2020"
          content="Let's go to the mall today?"
          img={robinScherbatsky}
        />
        <ChannelMessage
          author="Ted Mosby"
          date="19/06/2020"
          content="I can't. I have a date. And guys, I think she's the one!!!"
          img={tedMosby}
        />
        <ChannelMessage
          author="Rachel Green"
          date="19/06/2020"
          content="I'm in! I have to go shopping anyway!"
          img={rachelGreen}
        />
        <ChannelMessage
          author="Darth Vader"
          date="19/06/2020"
          content="I can't go either. I'm gonna tell my son I'm his father today"
          img={darthVader}
        />
        <ChannelMessage
          author="Phoebe Buffay"
          date="19/06/2020"
          content="I wish I could but I don't want to"
          img={phoebeBuffay}
        />
      </Messages>
      <InputWrapper>
        <Input type="text" placeholder="Conversar em #chat-livre" />
        <InputIcon />
      </InputWrapper>
    </Container>
  )
};

export default ChannelData;