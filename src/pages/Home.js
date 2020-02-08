import React from 'react';
// import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import PageContent from '../components/PageContent';
import PageFooter from '../components/PageFooter';
import './Home.scss';

function Home() {
  return (
    <div className="Home">
      <PageHeader />
      <PageContent>
        <div className="flex-column-centered">
          <img alt="Google" height="92" id="hplogo" src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" srcset="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png 1x, https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png 2x" style={{paddingTop: '32px', marginBottom: '8px'}} width="272"></img>
          <br/>
          <form action="/result" method="get">
            <div className="input-wrapper">
              <div className="search-icon">
                <svg fill="#9AA0A6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path></svg>
              </div>
              <input className="input" type="text" name="q" autocomplete="off" tabindex="-1" aria-hidden="true" autofocus />
              <div className="microphone-icon"></div>
            </div>
            <br/>
            <div>
              <center>
                <input className="input-button" type="submit" name="search" value="Google Search" aria-label="Google Search" />
                <input className="input-button" type="submit" name="feeling_lucky" value="I'm Feeling Lucky" aria-label="I'm Feeling Lucky" />
              </center>
            </div>
          </form>
          <br/>
          <div className="additional-languages">
            Google offered in:
            <a href="/#">Hausa</a>
            <a href="/#">Igbo</a>
            <a href="/#">Èdè Yorùbá</a>
            <a href="/#">Nigerian Pidgin</a>
          </div>
        </div>
      </PageContent>
      <PageFooter />
    </div>
  )
}

export default Home;
