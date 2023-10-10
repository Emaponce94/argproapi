import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherForecast from './components/WeatherForecast.jsx';

function App() {
  const [isNightMode, setIsNightMode] = useState(false);

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    }
  }, [isNightMode]);

  return (
    <div className={`App ${isNightMode ? 'night-mode' : ''}`}>
      <button className="night-mode-toggle" onClick={toggleNightMode}>
        Toggle Night Mode
      </button>
      <div className="header">
      </div>
      <div className="content">
        <WeatherForecast />
      </div>
    </div>
  );
}

export default App;
