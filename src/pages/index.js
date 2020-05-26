import React from 'react';
import { Layout, SEO } from 'components/common';
import { Intro, Skills, Skill2, Contact, Projects } from 'components/landing';

export default () => (
  <Layout>
    <SEO />
    <Intro />
    <Skills />
    <Skill2 />
    <Projects />
    <Contact />
  </Layout>
);
