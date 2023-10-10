import React from 'react';

function WeatherAdditional({ data }) {
  const { windSpeed, humidity } = data;

  return (
    <div className="additional-info">
      <div className="weather-card">
        <h3>Viento</h3>
        <p>Velocidad: {windSpeed}</p>
      </div>
      <div className="weather-card">
        <h3>Humedad</h3>
        <p>{humidity}</p>
      </div>
    </div>
  );
}

export default WeatherAdditional;
