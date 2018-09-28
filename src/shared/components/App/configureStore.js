import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer from './rootReducer';
import rootSagas from './rootSagas';

export default function configureStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();

  /* eslint-disable no-underscore-dangle */
  let composedMiddlewares;
  if (typeof window !== 'undefined') {
    composedMiddlewares = compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    );
  } else {
    composedMiddlewares = compose(applyMiddleware(sagaMiddleware));
  }

  const store = createStore(rootReducer, initialState, composedMiddlewares);

  /* eslint-enable */
  store.runSagas = () => sagaMiddleware.run(rootSagas);

  store.close = () => {
    store.dispatch(END);
  };
  return store;
}
