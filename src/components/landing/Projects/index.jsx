import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Grid } from './styles';

export const Projects = () => (
  <Wrapper as={Container} id="projects">
    <h1>Projects</h1>
    <h2>(Some links lead to a deployed version while others lead to repo)</h2>
    <br />
    <Grid>
      <a href="https://adam-lowe.github.io/Password-Generator/" target="_blank" rel="noopener noreferrer">
        <div className="portpic portpic1">
          <h3>Password Generator</h3>
        </div>
      </a>
      <a href="https://adam-lowe.github.io/Coding-Quiz-Challenge/" target="_blank" rel="noopener noreferrer">
        <div className="portpic portpic2">
          <h3>Coding Quiz</h3>
        </div>
      </a>
      <a href="https://adam-lowe.github.io/Day-Planner/" target="_blank" rel="noopener noreferrer">
        <div className="portpic portpic3">
          <h3>Day Planner</h3>
        </div>
      </a>
      <a href="https://adam-lowe.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
        <div className="portpic portpic4">
          <h3>Weather Dashboard</h3>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Bored" target="_blank" rel="noopener noreferrer">
        <div className="portpic portpic5">
          <h3>!Bored</h3>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Developer-Profile-Generator" target="_blank" rel="noopener noreferrer">
        <div className="portpic portpic6">
          <h3>Developer Profile Generator</h3>
        </div>
      </a>
      <a href="https://stormy-plateau-23344.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        <div className="portpic portpic7">
          <h3>Note Taker</h3>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Employee-Tracker" target="_blank" rel="noopener noreferrer">
        <div className="portpic portpic8">
          <h3>Employee Tracker</h3>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/ProjectTwoTheGame" target="_blank" rel="noopener noreferrer">
        <div className="portpic portpic9">
          <h3>Kul-de-sack Kombat</h3>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Eat-Da-Burger" target="_blank" rel="noopener noreferrer">
        <div className="portpic portpic10">
          <h3>Eat-Da-Burger</h3>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Fitness-Tracker" target="_blank" rel="noopener noreferrer">
        <div className="portpic portpic11">
          <h3>Fitness Tracker</h3>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Off-On-Line-Budget-Tracker" target="_blank" rel="noopener noreferrer">
        <div className="portpic portpic12">
          <h3>Budget Tracker</h3>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/User-Directory" target="_blank" rel="noopener noreferrer">
        <div className="portpic portpic13">
          <h3>User Directory</h3>
        </div>
      </a>
    </Grid>
  </Wrapper>
);
