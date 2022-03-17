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
      align: 'end',
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
  gradientBg.addColorStop(0.4, '#ff1b6b');
  gradientBg.addColorStop(1, '#45caff');

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
  gradientBg.addColorStop(0.4, '#45caff');
  gradientBg.addColorStop(1, '#ff1b6b');

  return gradientBg;
};

const VerticalBarChart = () => {
  return (
    <div className="shadow-lg rounded-md border-2 p-5">
      <Bar options={options} data={data} height={510} width={600} />
    </div>
  );
};

export default VerticalBarChart;
