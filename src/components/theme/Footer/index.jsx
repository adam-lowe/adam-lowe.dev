import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Adam Lowe</h2>
        <span>© All rights are reserved | {new Date().getFullYear()}</span>
      </Details>
      <Links>
        {social.map(({ id, name, link, icon }) => (
          <a
            key={id}
            href={link}
            target="_blank"
            margin="20%"
            rel="noopener noreferrer"
            aria-label={`follow me on ${name}`}
          >
            <img width="40" style={{ margin: 10 }} src={icon} alt={name} />
          </a>
        ))}
      </Links>
    </Flex>
  </Wrapper>
);
