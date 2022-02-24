import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="Michele Castellaneta profile" />
      </Link>
      <header>
        <h2>Michele Castellaneta</h2>
        <p><a href="mailto:mcastellaneta@protonmail.com">mcastellaneta@protonmail.com</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m Michele. I like making the world a better place.
        I am a <a href="https://www.unisa.it/">UNISA</a> graduate, where I&apos;m studying for my Master&apos;s degree in Data Science and Machine Learning.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Michele Castellaneta <Link to="/">mcastellaneta</Link>.</p>
    </section>
  </section>
);

export default SideBar;
