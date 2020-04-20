import React from 'react';
import './App.scss';
import './initialize.scss';
import RoutineContainer from './containers/RoutineContainer';

function App() {
  return (
    <div className="App">
      <div className="MWR-wrapper">
        <RoutineContainer />
      </div>
    </div>
  );
}

export default App;
