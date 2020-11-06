import React from 'react';
import ReactDOM from 'react-dom';
import { bootstrap } from '@common/bootstrap';
import AppProviders from '@context';
import App from './App';

bootstrap();

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root')
);
