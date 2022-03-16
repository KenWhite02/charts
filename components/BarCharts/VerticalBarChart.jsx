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
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Vertical Bar Chart',
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      display: false,
      grid: {
        display: false,
      },
    },
  },
};

const labels = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

const data = {
  labels,
  datasets: [
    {
      label: 'Input',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          return null;
        }
        return getInputGradient(ctx, chartArea);
      },
    },
    {
      label: 'Output',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: (context) => {
        const chart = context.chart;
        const { ctx, chartArea } = chart;

        if (!chartArea) {
          return null;
        }
        return getOutputGradient(ctx, chartArea);
      },
    },
  ],
};

// Create Input Gradient
const getInputGradient = (ctx, chartArea) => {
  const gradientBg = ctx.createLinearGradient(
    0,
    chartArea.top,
    0,
    chartArea.bottom
  );
  gradientBg.addColorStop(0.3, '#60efff');
  gradientBg.addColorStop(1, '#0061ff');

  return gradientBg;
};

// Create Output Gradient
const getOutputGradient = (ctx, chartArea) => {
  const gradientBg = ctx.createLinearGradient(
    0,
    chartArea.top,
    0,
    chartArea.bottom
  );
  gradientBg.addColorStop(0.3, '#0061ff');
  gradientBg.addColorStop(1, '#60efff');

  return gradientBg;
};

const VerticalBarChart = () => {
  return (
    <div>
      <Bar options={options} data={data} height={400} width={600} />
    </div>
  );
};

export default VerticalBarChart;
