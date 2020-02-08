import React from 'react';
import './PageHeader.scss';

function PageHeader({children}) {
  return (
    <header className="page-header">
      {children}
    </header>
  )
}

export default PageHeader;
