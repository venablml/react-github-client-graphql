import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import RepoDetails from './components/RepoDetails';
import RepoPullRequests from './components/RepoPullRequests';
import RepoVulnerabilities from './components/RepoVulnerabilities';
import RepoPage from './pages/RepoPage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/repos/:id/pullrequests">
          <RepoPullRequests />
        </Route>
        <Route path="/repos/:id/vulnerabilities">
          <RepoVulnerabilities />
        </Route>
        <Route path="/repos/:id">
          <RepoDetails />
        </Route>
        <Route path="/repos">
          <RepoPage />
        </Route>
        <Route path="/">
          <RepoPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
