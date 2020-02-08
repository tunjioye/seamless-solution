import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import PageFooter from '../components/PageFooter';
import './Home.scss';

function Home() {
  return (
    <div className="Home">
      <PageHeader />
      <PageContent>
        <img alt="Google" height="92" id="hplogo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" srcset="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png 1x, https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png 2x" style={{paddingTop: '109px'}} width="272"></img>
        <Link to="/result">Go to Result page</Link>
      </PageContent>
      <PageFooter />
    </div>
  )
}

export default Home;
