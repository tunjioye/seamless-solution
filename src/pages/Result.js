import React from 'react';
import { Link } from 'react-router-dom';

function Result() {
  return (
    <div className="Result">
      <h1>Result page</h1>
      <Link to="/">Go to Home page</Link>
    </div>
  )
}

export default Result;
