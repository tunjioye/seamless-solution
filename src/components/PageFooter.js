import React from 'react';
import './PageFooter.scss';

function PageFooter({children}) {
  return (
    <footer className="page-footer">
      {children}
    </footer>
  )
}

export default PageFooter;
