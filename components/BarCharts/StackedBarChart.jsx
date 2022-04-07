import faker from '@faker-js/faker';
import { Bar } from 'react-chartjs-2';
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  plugins: {
    title: {
      display: true,
      text: 'Stacked Bar Chart',
    },
  },
  responsive: true,
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: '#ff1b6b',
    },
    {
      label: 'Dataset 2',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: '#FF8A5B',
    },
    {
      label: 'Dataset 3',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: '#45caff',
    },
  ],
};

const StackedBarChart = () => {
  return (
    <div className="shadow-lg rounded-md border-2 p-5">
      <Bar options={options} data={data} width={600} height={510} />
    </div>
  );
};

export default StackedBarChart;
