import React from 'react';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import { AppContainer } from '@components';

export default function App() {

  return (
    <Router>
      <AppContainer path="/" />
      <Redirect to={{ pathname: '/' }} />
    </Router>
  );
}
