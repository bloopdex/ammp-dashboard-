import {
   CategoryScale,
   Chart as ChartJS,
   Legend,
   LinearScale,
   LineElement,
   Title,
   Tooltip,
} from 'chart.js';
import { useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
   CategoryScale,
   LinearScale,
   LineElement,
   Title,
   Tooltip,
   Legend,
);

function LineChart() {
   const [chartData, setChartData] = useState({
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
         {
            label: 'My First dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            borderColor: 'rgba(75,192,192,1)',
            fill: false,
         },
      ],
   });
   const [chartOptions, setChartOptions] = useState({});
   useEffect(() => {
      setChartData({
         labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
         ],
         datasets: [
            {
               label: 'My First dataset',
               data: [65, 59, 80, 81, 56, 55, 40],
               borderColor: 'rgba(75,192,192,1)',
               fill: false,
            },
         ],
      });
      setChartOptions({
         plugins: {
            legend: {
               position: 'top',
            },
            title: {
               display: true,
               text: 'Daily Revenue',
            },
         },
         maintainAspectRatio: false,
         responsive: true,
      });
   }, []);
   return <Line data={chartData} options={chartOptions} />;
}

export default LineChart;
