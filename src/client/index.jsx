import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import Loadable from 'react-loadable';
import configureStore from '../shared/components/App/configureStore';
import App from '../shared/components/App';

// eslint-disable-next-line no-underscore-dangle
const store = configureStore(window.__INITIAL_STATE__);
store.runSagas();

class Main extends React.PureComponent {
  render() {
    return (
      <Router>
        <App {...this.props} />
      </Router>
    );
  }
}

Loadable.preloadReady().then(() => {
  render(<Main store={store} />, document.getElementById('root'));
});
