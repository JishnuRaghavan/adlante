import { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export const TotalSalesChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const gradientBg = ctx.createLinearGradient(0, 0, 0, 190);
    gradientBg.addColorStop(0, 'rgba(97, 118, 254, 0.43)');
    gradientBg.addColorStop(1, 'rgba(97, 118, 254, 0)');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Visitor',
          data: [20, 15, 35, 45, 60, 45, 70, 50, 70, 70, 44, 50],
          backgroundColor: gradientBg,
          borderColor: '#6176FE',
          pointRadius: 0,
          tension: 0.5,
          borderWidth: 6,
          fill: true,
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            grid: { display: true, color: '#c5c5c573' }
          },
          y: {
            grid: { display: true, color: '#c5c5c573', borderDash: [10, 10] }
          }
        }
      }
    });

    return () => chart.destroy();
  }, []);

  return <canvas ref={chartRef} />;
};
