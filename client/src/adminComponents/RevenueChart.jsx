import { useEffect, useRef } from "react";

export const RevenueChart = () => {
  const chartRef = useRef();

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Visitor',
            data: [10, 15, 15, 90, 90, 45, 45, 45, 70, 70, 45, 45],
            borderColor: '#F2C94C',
            borderWidth: 5,
            pointRadius: 0,
            tension: 0.5,
            fill: false,
          },
          {
            label: 'Sells',
            data: [20, 86, 79, 30, 60, 45, 70, 50, 70, 30, 44, 50],
            borderColor: '#09AD95',
            borderWidth: 5,
            pointRadius: 0,
            tension: 0.5,
            fill: false,
          },
          {
            label: 'Profit',
            data: [20, 20, 79, 80, 60, 45, 70, 30, 20, 90, 44, 50],
            borderColor: '#6176FE',
            borderWidth: 5,
            pointRadius: 0,
            tension: 0.5,
            fill: false,
          }
        ]
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
