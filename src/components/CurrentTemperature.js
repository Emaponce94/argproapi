import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { faSun, faCloud, faCloudRain, faBolt, faCloudSun } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faSun, faCloud, faCloudRain, faBolt, faCloudSun); // Agrega los íconos que necesitas

function CurrentTemperature({ temperature, humidity, weatherType }) {
  const weatherIcons = {
    Soleado: 'sun',
    Nublado: 'cloud',
    Lluvioso: 'cloud-rain',
    Tormenta: 'bolt',
    ParcialmenteNublado: 'cloud-sun',
  };

  // Función para obtener el nombre en español del clima y su ícono
  const getWeatherTranslation = (weather) => {
    return weatherIcons[weather];
  };

  return (
    <div className="current-temperature-container">
      <div className="current-temperature">
        <h3>Temperatura Actual</h3>
        <div>
          <strong>Temperatura:</strong> {temperature}
        </div>
        <div>
          <strong>Clima:</strong> {weatherType}
          <FontAwesomeIcon icon={getWeatherTranslation(weatherType)} />
        </div>
        <div>
          <strong>Humedad:</strong> {humidity}
        </div>
      </div>
    </div>
  );
}


export default CurrentTemperature;
