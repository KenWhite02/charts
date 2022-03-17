import faker from '@faker-js/faker';
import { Bar } from 'react-chartjs-2';
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

const options = {
  responsive: true,
  indexAxis: 'y',

  plugins: {
    legend: {
      align: 'end',
    },
    title: {
      display: true,
      text: 'Horizontal Bar Chart',
    },
  },
  scales: {
    x: {
      display: false,
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];

const data = {
  labels,
  datasets: [
    {
      label: 'A',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: '#ff1b6b',
    },
    {
      label: 'B',
      data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      backgroundColor: '#45caff',
    },
  ],
};

const HorizontalBarChart = () => {
  return (
    <div className="shadow-lg rounded-md border-2 p-5">
      <Bar options={options} data={data} height={510} width={600} />
    </div>
  );
};

export default HorizontalBarChart;
