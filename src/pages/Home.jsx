import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section>
      <h1>Home Page</h1>
      <p>Click link below to go to the <Link to="/about"> about page </Link></p>
      <br />
      <a href="/about">about page</a>

      <p>Click link below to go to the <Link to="/login"> Login </Link></p>
    </section>
  );
}

export default Home;
