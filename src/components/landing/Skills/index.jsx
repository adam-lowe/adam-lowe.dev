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
        <img src={collage} alt="I'm Adam, and I'm a Full-Stack Web Developer!" />
      </Thumbnail>
      <Details>
        <h1>A little about me...</h1>
        <p>
          I am very passionate about coding, and graduated from UNCC's intensive Full-Stack bootcamp. Through this I've
          become very familiar with-
        </p>
        <ul>{skillRet}</ul>
      </Details>
    </SkillsWrapper>
  </Wrapper>
);
