import React from 'react';

function WeatherCard({ day, humidity, windSpeed }) {
  return (
    <div className="weather-card">
      <h3>{day}</h3>
      <p>Humedad: {humidity}</p>
      <p>Viento: {windSpeed}</p>
    </div>
  );
}

export default WeatherCard;
