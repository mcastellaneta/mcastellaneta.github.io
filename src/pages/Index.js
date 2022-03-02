import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Michele Castellaneta's personal website. Data Science & Machine Learning student, graduated with honours at University of Salerno."}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About this site</Link></h2>
          <p>
            An open port to my world
          </p>
        </div>
      </header>
      <p> Hey, thanks for joining me, it&apos;s a pleasure to meet you.</p>
      <p>
        On this site you can find out <Link to="/about">who I am</Link> and <Link to="/resume">what I do</Link>.
      </p>
      <p>
        You want to know me even better?
        Check out some of the {' '}
        <Link to="/projects">projects</Link> I worked on or {' '}
        view some <Link to="/stats">statistics</Link> about me.{' '}
      </p>
      <p>
        Is there anything I can help you with? <Link to="/contact">Contact me</Link> .
      </p>
      <p> Source available <a href="https://github.com/mcastellaneta/mcastellaneta.github.io">here</a>.</p>
    </article>
  </Main>
);

export default Index;
