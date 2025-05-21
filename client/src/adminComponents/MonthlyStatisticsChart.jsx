import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MonthlyStatisticsChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const chartInstance = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Monthly Sales',
            data: [12000, 15000, 8000, 18000, 20000, 16000],
            backgroundColor: '#09AD95',
            borderRadius: 5,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      chartInstance.destroy();
    };
  }, []);

  return <canvas ref={chartRef} />;
};

export default MonthlyStatisticsChart;
