import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import collage from 'assets/images/collage.png';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

const skillArr = ['HTML5, CSS3 and JavaScript', 'jQuery and Bootstrap', 'REACT', 'Node.js', 'MongoDB and MySQL'];

const skillRet = skillArr.map(function(skill) {
  return (
    <li>
      <p>{skill}</p>
    </li>
  );
});

export const Skills = () => (
  <Wrapper id="about">
    &nbsp;
    <SkillsWrapper as={Container}>
      <Thumbnail>
        <img src={collage} alt="A Collage of some of the skills I learned" />
      </Thumbnail>
      <Details>
        <h1>How I Started my coding journey</h1>
        <p>
          After a couple of years of taking free, self-guided lessons, I graduated from UNCC's intensive Full-Stack bootcamp. Through this I've
          become very familiar with-
        </p>
        <ul>{skillRet}</ul>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
