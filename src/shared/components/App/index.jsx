import React from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../Header';
import { HomePage, AboutPage } from './routes';

import './style.scss';

class App extends React.Component {
  render() {
    const { store } = this.props;

    return (
      <Provider store={store}>
        <div className="app">
          <Helmet>
            <meta charSet="utf-8" />
            <title>React SSR Bootstrap</title>
            <link rel="canonical" href="http://www.outletpdg.com.br" />
          </Helmet>

          <Header />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/about" component={AboutPage} />
            <Route component={() => <div>404</div>} />
          </Switch>
        </div>
      </Provider>
    );
  }
}

export default App;
