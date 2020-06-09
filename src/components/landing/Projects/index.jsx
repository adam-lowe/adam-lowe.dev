import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Grid } from './styles';
import pass from '../../../assets/images/pass.png';
import codequiz from '../../../assets/images/codequiz.png';
import dayplan from '../../../assets/images/dayplan.png';
import weather from '../../../assets/images/weather.png';
import bored from '../../../assets/images/bored.png';
import profileGen from '../../../assets/images/action.gif';
import note from '../../../assets/images/note.png';
import empTrack from '../../../assets/images/tracker.gif';
import colorTheme from '../../../assets/images/colortheme.png';
import hangman from '../../../assets/images/hangman.gif';
import fitTrack from '../../../assets/images/fit.gif';
import budget from '../../../assets/images/budget.png';
import userDirect from '../../../assets/images/direct.gif';
import habbit from '../../../assets/images/habbit.png';

export const Projects = () => (
  <Wrapper as={Container} id="projects">
    <h1>Projects</h1>
    <h3>
      <span style={{ color: 'green' }}>Green</span> means it was a collabrative project
    </h3>
    <br />
    <Grid>
      <a href="https://github.com/adam-lowe/ruby-hangman" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={hangman} alt="Ruby Hangman15" />
          <h3>Ruby Hangman</h3>
          <h4 style={{ color: 'slategrey' }}>
            Simple command line game that I built with Ruby
          </h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Habbit" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={habbit} alt="Habbit14" />
          <h3 style={{ color: 'green' }}>Habbit</h3>
          <h4 style={{ color: 'slategrey' }}>Uses virtual pets to motivate its users into being productive</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/User-Directory" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={userDirect} alt="User Directory13" />
          <h3>User Directory</h3>
          <h4 style={{ color: 'slategrey' }}>Just a demo of a sortable table in REACT</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Off-On-Line-Budget-Tracker" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={budget} alt="Budget Tracker12" />
          <h3>Budget Tracker</h3>
          <h4 style={{ color: 'slategrey' }}>Simple budget app that uses service workers to be available offline</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Fitness-Tracker" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={fitTrack} alt="Fitness Tracker11" />
          <h3>Fitness Tracker</h3>
          <h4 style={{ color: 'slategrey' }}>Allows you to add and modify workout plans using mongoose</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/ProjectTwoTheGame" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={colorTheme} alt="Kul-da-sack Kombat9" />
          <h3 style={{ color: 'green' }}>Kul-da-sack Kombat</h3>
          <h4 style={{ color: 'slategrey' }}>Short turn-based game reminicent of old-school RPGs</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Employee-Tracker" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={empTrack} alt="Employee Tracker8" />
          <h3>Employee Tracker</h3>
          <h4 style={{ color: 'slategrey' }}>Command line program that uses MySQL to display an employee table</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Note-Taker" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={note} alt="Note Taker7" />
          <h3>Note Taker</h3>
          <h4 style={{ color: 'slategrey' }}>Uses database to remember notes recorded</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Developer-Profile-Generator" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={profileGen} alt="Profile Generator6" />
          <h3>Developer Profile Generator</h3>
          <h4 style={{ color: 'slategrey' }}>Uses inquirer to generate README version of github profile</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Bored" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={bored} alt="!Bored5" />
          <h3 style={{ color: 'green' }}>!Bored</h3>
          <h4 style={{ color: 'slategrey' }}>Helps the user find events happening in their area</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Weather-Dashboard/" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={weather} alt="Weather Dashboard4" />
          <h3>Weather Dashboard</h3>
          <h4 style={{ color: 'slategrey' }}>App that allows you to search a city and get it's weather report</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Day-Planner/" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={dayplan} alt="Day Planner3" />
          <h3>Day Planner</h3>
          <h4 style={{ color: 'slategrey' }}>
            Application that lets you plan out you're day (renders differently depending on time of day)
          </h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Coding-Quiz-Challenge/" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={codequiz} alt="Coding Quiz2" />
          <h3>Coding Quiz</h3>
          <h4 style={{ color: 'slategrey' }}>A quick quiz that tests basic coding knowledge</h4>
        </div>
      </a>
      <a href="https://github.com/adam-lowe/Password-Generator/" target="_blank" rel="noopener noreferrer">
        <div>
          <img src={pass} alt="Password Generator1" />
          <h3>Password Generator</h3>
          <h4 style={{ color: 'slategrey' }}>A simple application that generates a password based on some criteria</h4>
        </div>
      </a>
    </Grid>
  </Wrapper>
);
