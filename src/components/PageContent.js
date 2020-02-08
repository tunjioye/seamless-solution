import React from 'react';
import './PageContent.scss';

function PageContent({children}) {
  return (
    <main className="page-content">
      {children}
    </main>
  )
}

export default PageContent;
