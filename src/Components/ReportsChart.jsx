import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const ReportsChart = () => {
  const data = {
    labels: ['Lost', 'Found', 'Pending', 'Rejected', 'Deleted'],
    datasets: [
      {
        label: 'Posts Overview',
        data: [125, 97, 8, 5, 12],
        backgroundColor: [
          '#f87171', // red
          '#4ade80', // green
          '#facc15', // yellow
          '#94a3b8', // gray
          '#f43f5e', // rose
        ],
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  return (
    <div className="bg-white p-6 rounded shadow-md mt-10">
      <h3 className="text-lg font-semibold mb-4 text-blue-600">Posts Overview (Graph)</h3>
      <Bar data={data} options={options} />
    </div>
  );
};

export default ReportsChart;
