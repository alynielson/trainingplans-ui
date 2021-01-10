import React from 'react';
import CalendarView from './components/calendarView/calendarView';
import './App.scss';

function App() {
  return (
    <div>
      <div className="header">
        <div className="container-test">
          Test
        </div>
      </div>
      <CalendarView />
    </div>
  );
}

export default App;
