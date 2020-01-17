import React from 'react';
import { Container } from 'components/common';
import duck from 'assets/images/duck.jpg';
import { Wrapper, Details, Thumbnail } from './styles';
import ContactForm from './ContactForm';

export const Contact = () => (
  <Wrapper as={Container} id="contact">
    <Details>
      &nbsp;
      <h1>Contact me!</h1>
      <h2>
        Email: <strong>lowedavidadam@gmail.com</strong>
      </h2>
      <h3>
        Oh, and if you like resumes,{' '}
        <a
          href="https://drive.google.com/file/d/1ljBml8pDiQSrxGmy3WXDWacd1us-S7-d/view?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
        >
          here's mine!
        </a>
      </h3>
    </Details>
    <Thumbnail>
      <img src={duck} alt="It's my Coding Buddy Linus" />
    </Thumbnail>
  </Wrapper>
);
