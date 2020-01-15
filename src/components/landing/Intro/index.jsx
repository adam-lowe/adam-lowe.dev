import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import me from 'assets/images/me.jpg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <h1>Hi There!</h1>
        <h4>My name is Adam Lowe, and I'm a Full-Stack Web Developer!</h4>
      </Details>
      <Thumbnail>
        <img src={me} width="5%" height="5%" alt="I'm Adam, and I'm a Full-Stack Web Developer!" />
      </Thumbnail>
    </IntroWrapper>
  </Wrapper>
);
