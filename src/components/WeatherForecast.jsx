import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faCloudSun, faCloudRain, faCloud, faBolt } from '@fortawesome/free-solid-svg-icons';

function WeatherForecast() {
  const [forecastData, setForecastData] = useState(null);

  useEffect(() => {
    const fakeData = [
      { day: 'Monday', maxTemperature: '30°C', minTemperature: '20°C', weather: 'Sunny' },
      { day: 'Tuesday', maxTemperature: '32°C', minTemperature: '21°C', weather: 'Partly Cloudy' },
      { day: 'Wednesday', maxTemperature: '28°C', minTemperature: '19°C', weather: 'Rainy' },
      { day: 'Thursday', maxTemperature: '27°C', minTemperature: '18°C', weather: 'Cloudy' },
      { day: 'Friday', maxTemperature: '29°C', minTemperature: '20°C', weather: 'Thunderstorm' },
    ];

    setForecastData(fakeData);
  }, []);

  const weatherTranslations = {
    'Sunny': { translation: 'Soleado', icon: faSun },
    'Partly Cloudy': { translation: 'Parcialmente Nublado', icon: faCloudSun },
    'Rainy': { translation: 'Lluvioso', icon: faCloudRain },
    'Cloudy': { translation: 'Nublado', icon: faCloud },
    'Thunderstorm': { translation: 'Tormenta', icon: faBolt },
  };

  const dayTranslations = {
    'Monday': 'Lunes',
    'Tuesday': 'Martes',
    'Wednesday': 'Miércoles',
    'Thursday': 'Jueves',
    'Friday': 'Viernes',
  };

  const getWeatherTranslation = (weather) => {
    const translationInfo = weatherTranslations[weather];
    if (translationInfo) {
      const { translation, icon } = translationInfo;
      return (
        <span>
          {translation} <FontAwesomeIcon icon={icon} />
        </span>
      );
    }
    return weather;
  };

  return (
    
    <div className="weather-forecast" >
      <div className="forecast-title">
        <h2>Pronóstico del Clima</h2>
      </div>
      {forecastData ? (
        <div className="forecast-table">
          <table>
            <thead>
              <tr>
                <th>Día</th>
                <th>Temperatura Máxima</th>
                <th>Temperatura Mínima</th>
                <th>Clima</th>
              </tr>
            </thead>
            <tbody>
              {forecastData.map((dayData) => (
                <tr key={dayData.day}>
                  <td>{dayTranslations[dayData.day] || dayData.day}</td>
                  <td>{dayData.maxTemperature}</td>
                  <td>{dayData.minTemperature}</td>
                  <td>{getWeatherTranslation(dayData.weather)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>Cargando datos del clima...</p>
      )}
    </div>
  );
}

export default WeatherForecast;
