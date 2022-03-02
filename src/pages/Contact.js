import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import EmailLink from '../components/Contact/EmailLink';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Michele Castellaneta via email @ mcastellaneta@protonmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/contact">Contact</Link></h2>
        </div>
      </header>
      <div className="email-at">
        <p>Let&apos;s get in touch. Email me at: </p>
        <EmailLink />
      </div>
      <p>or follow me on these socials:</p>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
