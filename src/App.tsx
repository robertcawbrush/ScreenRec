import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.global.css';
import MainControls from './components/mainControls';
import VideoPreview from './components/videoPreview';

const Main: React.VoidFunctionComponent = () => {
  return (
    <div className="main">
      <VideoPreview />
      <MainControls />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}
