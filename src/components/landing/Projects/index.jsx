import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Grid } from './styles';

export const Projects = () => (
  <Wrapper as={Container} id="projects">
    <h1>Projects</h1>
    <h3>
      <span style={{ color: 'red' }}>red</span> means it was a collabrative project
    </h3>
    <br />
    <Grid>
      <a href="https://github.com/adam-lowe/Password-Generator/" target="_blank" rel="noopener noreferrer">
        <div>
          <h3>Password Generator</h3>
          <h4 style={{ color: 'slategrey' }}>A simple application that generates a password based on some criteria</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Coding-Quiz-Challenge/" target="_blank" rel="noopener noreferrer">
        <div>
          <h3>Coding Quiz</h3>
          <h4 style={{ color: 'slategrey' }}>A quick quiz that tests basic coding knowledge</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Day-Planner/" target="_blank" rel="noopener noreferrer">
        <div>
          <h3>Day Planner</h3>
          <h4 style={{ color: 'slategrey' }}>
            Application that lets you plan out you're day (renders differently depending on time of day)
          </h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
        <div>
          <h3>Weather Dashboard</h3>
          <h4 style={{ color: 'slategrey' }}>App that allows you to search a city and get it's weather report</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Bored" target="_blank" rel="noopener noreferrer">
        <div>
          <h3 style={{ color: 'red' }}>!Bored</h3>
          <h4 style={{ color: 'slategrey' }}>Helps the user find events happening in their area</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Developer-Profile-Generator" target="_blank" rel="noopener noreferrer">
        <div>
          <h3>Developer Profile Generator</h3>
          <h4 style={{ color: 'slategrey' }}>Uses inquirer to generate README version of github profile</h4>
        </div>
      </a>
      <a href="https://stormy-plateau-23344.herokuapp.com/" target="_blank" rel="noopener noreferrer">
        <div>
          <h3>Note Taker</h3>
          <h4 style={{ color: 'slategrey' }}>Uses database to remember notes recorded</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Employee-Tracker" target="_blank" rel="noopener noreferrer">
        <div>
          <h3>Employee Tracker</h3>
          <h4 style={{ color: 'slategrey' }}>Command line program that uses mongodb to display an employee table</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/ProjectTwoTheGame" target="_blank" rel="noopener noreferrer">
        <div>
          <h3 style={{ color: 'red' }}>Kul-da-sack Kombat</h3>
          <h4 style={{ color: 'slategrey' }}>Short turn-based game reminicent of old-school RPGs</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Eat-Da-Burger" target="_blank" rel="noopener noreferrer">
        <div>
          <h3>Eat-Da-Burger</h3>
          <h4 style={{ color: 'slategrey' }}>Uses MySQL to remember what burgers you've made and/or eaten</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Fitness-Tracker" target="_blank" rel="noopener noreferrer">
        <div>
          <h3>Fitness Tracker</h3>
          <h4 style={{ color: 'slategrey' }}>Allows you to add and modify workout plans using mongoose</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Off-On-Line-Budget-Tracker" target="_blank" rel="noopener noreferrer">
        <div>
          <h3>Budget Tracker</h3>
          <h4 style={{ color: 'slategrey' }}>Simple budget app that uses service workers to be available offline</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/User-Directory" target="_blank" rel="noopener noreferrer">
        <div>
          <h3>User Directory</h3>
          <h4 style={{ color: 'slategrey' }}>Just a demo of a sortable table in REACT</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Habbit" target="_blank" rel="noopener noreferrer">
        <div>
          <h3 style={{ color: 'red' }}>Habbit</h3>
          <h4 style={{ color: 'slategrey' }}>Uses virtual pets to motivate its users into being productive</h4>
        </div>
      </a>
    </Grid>
  </Wrapper>
);
