import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import Loadable from 'react-loadable';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { getBundles } from 'react-loadable/webpack'

import App from '../shared/components/App';
import render from './render';
import stats from '../../build/react-loadable.json';
import configureStore from '../shared/components/App/configureStore';

const app = express();

app.use('/', express.static('./build/assets'));
app.use('/assets/', express.static('./build/assets'));

app.get('*', async (req, res) => {
  let modules = [];
  const context = {};

  const store = configureStore();

  const appWithRouter = (
    <Loadable.Capture report={(moduleName) => modules.push(moduleName)}>
      <StaticRouter location={req.url} context={context}>
        <App store={store} />
      </StaticRouter>
    </Loadable.Capture>
  );

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  // listener para quando as sagas usadas na rota terminarem
  store.runSagas().done.then(() => {
    const html = ReactDOMServer.renderToString(appWithRouter);
    const helmet = Helmet.renderStatic();

    // pacotes usados na rota
    let bundles = getBundles(stats, modules);
    let styles = bundles.filter(bundle => bundle.file.endsWith('.css'));
    let scripts = bundles.filter(bundle => bundle.file.endsWith('.js'));
    // state inicial para render
    const initialState = JSON.stringify(store.getState());
    res.status(200).send(render(html, styles, scripts, helmet, initialState));
  })
  // render inicial para começar o carregamento das sagas usadas na rota
  ReactDOMServer.renderToString(appWithRouter);
  store.close();
});

Loadable.preloadAll().then(() => {
  app.listen(3000, () => {
    console.log('Running on http://localhost:3000/');
  })
});