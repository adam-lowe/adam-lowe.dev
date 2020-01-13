import React from 'react';
import { Container } from 'components/common';
import duck from 'assets/images/duck.jpg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      <h1>Contact me!</h1>
      <h2>
        Email: <strong>lowedavidadam@gmail.com</strong>
      </h2>
    </Details>
    <Thumbnail>
      <img src={duck} alt="It's my Coding Buddy Linus" />
    </Thumbnail>
  </Wrapper>
);
