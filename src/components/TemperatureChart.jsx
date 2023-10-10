import React from 'react';
import { Bar } from 'react-chartjs-2';

function TemperatureChart() {
  const data = {
    labels: ['1 AM', '2 AM', '3 AM', '4 AM', '5 AM'],
    datasets: [
      {
        label: 'Humidity',
        yAxisID: 'A',
        data: [100, 96, 84, 76, 69],
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        borderColor: 'rgba(75, 192, 192, 1)',
      },
      {
        label: 'Temperature',
        yAxisID: 'B',
        data: [1, 1, 1, 1, 0],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
    },
    scales: {
      x: {
        type: 'category',
        title: {
          display: true,
          text: 'Hour',
        },
      },
      y: [
        {
          id: 'A',
          type: 'linear',
          position: 'left',
          title: {
            display: true,
            text: 'Humidity',
          },
        },
        {
          id: 'B',
          type: 'linear',
          position: 'right',
          title: {
            display: true,
            text: 'Temperature',
          },
          max: 1,
          min: 0,
        },
      ],
    },
    responsive: true,
  };

  return (
    <div style={{ width: '75%', margin: '0 auto' }}>
      <Bar data={data} options={options} />
    </div>
  );
}

export default TemperatureChart;

