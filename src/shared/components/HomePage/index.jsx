import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { getRepositories } from '../App/selectors';
import { searchRepositories } from './actions';

import './style.scss';

class HomePage extends React.Component {
  componentWillMount() {
    const { dispatch } = this.props;
    dispatch(searchRepositories());
  }

  render() {
    const { repos } = this.props;
    return (
      <div className="page HomePage">
        <Helmet>
          <meta charSet="utf-8" />
          <title>React Bootstrap - Home Page</title>
        </Helmet>

        <section className="content">
          <h1>Home Page</h1>
          <ul className="repos">
            {repos.items.map(repo => (
              <li key={repo.id} className="repo">
                <a href={repo.html_url} target="_blank noopener">
                  {repo.full_name}
                </a>
              </li>
            ))}
          </ul>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  repos: getRepositories(state)
});

export default connect(mapStateToProps)(HomePage);
