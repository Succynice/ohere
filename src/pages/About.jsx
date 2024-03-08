import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section>
      <h1>About Page</h1>
      <p>Click link below to go to the <Link to="/"> Home page </Link></p>
      <br />
    </section>
  );
}

export default About;
