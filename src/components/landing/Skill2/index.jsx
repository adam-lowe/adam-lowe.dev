import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import collage from 'assets/images/collage2.png';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

const skillArr = [
  'Java and Typescript',
  'Spring Boot and Microservices',
  'Angular',
  'Docker',
  'Junit TestNG and Selenium',
];

const skillRet = skillArr.map(function(skill) {
  return (
    <li>
      <p>{skill}</p>
    </li>
  );
});

export const Skill2 = () => (
  <Wrapper id="about">
    &nbsp;
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={collage} alt="A Collage of some of the skills I learned" />
      </Thumbnail>
      <Details>
        <h1>Tech Talent South</h1>
        <p>
          Almost immediately after, I heard about another program by Tech Talent South that was being sponsored by
          Cognizant. Through this program I became very familiar with-
        </p>
        <ul>{skillRet}</ul>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
