import React from 'react';
import { Helmet } from 'react-helmet';

import './style.scss';

class AboutPage extends React.Component {
  render() {
    return (
      <div className="page Home">
        <Helmet>
          <meta charSet="utf-8" />
          <title>React Bootstrap - About Page</title>
        </Helmet>

        <section className="content">About Page</section>
      </div>
    );
  }
}

export default AboutPage;
