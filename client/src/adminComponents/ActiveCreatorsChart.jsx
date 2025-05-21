import { useEffect, useRef } from "react";

export const ActiveCreatorsChart = () => {
   const chartRef = useRef(null);
  const circleRef = useRef(null);
  const chartInstanceRef = useRef(null); // to track the Chart.js instance
  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5'],
        datasets: [{
          label: 'Total Clients',
          data: [0, 10, 15, 10, 20],
          borderColor: "#F9C200",
          borderWidth: 7,
          pointRadius: 0,
          tension: 0.5,
          fill: false,
        }]
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
          x: {
            display: false,
            grid: { display: false }
          },
          y: {
            display: false,
            grid: { display: false }
          }
        }
      }
    });

  
    // === Circle Progress ===
    new CircleProgress(".circle__one", {
      max: 100,
      value: 60,
    });
 



   
  return () => chart.destroy();
   
  }, []);
  
 


 return <canvas ref={chartRef} />;

 
};
