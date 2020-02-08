import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <h1>Home page</h1>
      <Link to="/result">Go to Result page</Link>
    </div>
  )
}

export default Home;
