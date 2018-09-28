import React from 'react';
import Loadable from 'react-loadable';

const Loading = (props) => {
  if (props.error) {
    console.log('error', props.error);
    throw props.error;
    return <div>Error! <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.timedOut) {
    return <div>Taking a long time... <button onClick={ props.retry }>Retry</button></div>;
  } else if (props.pastDelay) {
    return <div>Loading...</div>;
  } else {
    return null;
  }
};

export const HomePage = Loadable({
  loader: () => import(/* webpackChunkName: "home" */ '../HomePage'),
  loading: Loading,
});

export const AboutPage = Loadable({
  loader: () => import(/* webpackChunkName: "about" */ '../AboutPage'),
  loading: Loading,
});
