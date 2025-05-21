import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const MyChartComponent = () => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const gradientBg = ctx.createLinearGradient(0, 0, 0, 190);
    gradientBg.addColorStop(0, 'rgba(97, 118, 254, 0.43)');
    gradientBg.addColorStop(1, 'rgba(97, 118, 254, 0)');

    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar'],
        datasets: [{
          label: 'Visitor',
          data: [20, 35, 60],
          backgroundColor: gradientBg,
          borderColor: '#6176FE',
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });

    return () => myChart.destroy(); // Cleanup
  }, []);

  return <canvas ref={chartRef} />;
};

export default MyChartComponent;
