import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import './style.css';
// import { useGetProductsQuery } from '../../../../api/ProductsApi';
import { useGetCategoryQuery } from '../../../../api/CategoryApi';
import { useGetProductsQuery } from '../../../../api/ProductsApi';

function MultiChartPage() {
  const polarChartRef = useRef(null);
  const barChartRef = useRef(null);
  const lineChartRef = useRef(null);

  const { data } = useGetCategoryQuery();
  console.log(data);

  const {data: dataProduct} = useGetProductsQuery();
  console.log(dataProduct)

  useEffect(() => {
    const polarCtx = polarChartRef.current.getContext('2d');

    const predefinedColors = [
      'rgba(218, 212, 215, 0.5)',
      'rgba(113, 46, 54, 0.5)',
      'rgba(236, 10, 127, 0.5)',
      'rgba(49, 255, 31, 0.5)',
      'rgba(75, 192, 192, 0.5)',
      "RGBA(138, 43, 226, 0.4)",
      "RGBA(173, 255, 47, 0.5)",
      "RGBA(173, 216, 230, 0.5)",
    ];

    const backgroundColors = data?.map((_, index) => {
      return predefinedColors[index % predefinedColors.length];
    });

    const myPolarAreaChart = new Chart(polarCtx, {
      type: 'polarArea',
      data: {
        labels: data?.map(item => item.category),
        datasets: [
          {
            label: 'Product Sales Distribution',
            data: data?.map(item => item.id),
            backgroundColor: backgroundColors,
          },
        ],
      },
      options: {
        responsive: true,
        scales: {
          r: {
            ticks: {
              beginAtZero: true,
            },
          },
        },
      },
    });

    
    const lineCtx = lineChartRef.current.getContext('2d');
    const myLineChart = new Chart(lineCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
          {
            label: 'Wine Sales',
            data: [30, 50, 70, 90, 120, 150],
            backgroundColor: backgroundColors,
            fill: true,
          },
          {
            label: 'Cognac Sales',
            data: [20, 30, 50, 60, 70, 80],
            backgroundColor: backgroundColors,
            fill: true,
          },
          {
            label: 'Vodka Sales',
            data: [15, 25, 40, 50, 60, 70],
            backgroundColor: backgroundColors,
            fill: true,
          },
          {
            label: 'Rum Sales',
            data: [10, 20, 30, 40, 50, 60],
            backgroundColor: backgroundColors,
            fill: true,
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

    const barCtx = barChartRef.current.getContext('2d');
    const myBarChart = new Chart(barCtx, {
      type: 'bar',
      data: {
        labels: dataProduct?.map(item => item.name) || [],
        
        datasets: [
          {
            label: 'Sales',
            data: dataProduct?.map(item => item.id),
            backgroundColor: backgroundColors,

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
      myPolarAreaChart.destroy();
      myLineChart.destroy();
      myBarChart.destroy();
    };
  }, [data]); 

  return (
    <div>
      <div className="chart-container">
        <h3>Product Sales Distribution</h3>
        <canvas ref={polarChartRef}></canvas>
      </div>

      <div className="chart-container chart-container_line">
        <h3>Product Sales Data</h3>
        <canvas ref={lineChartRef}></canvas>
      </div>

      <div className="chart-container">
        <h3>Product Sales by Brand</h3>
        <canvas ref={barChartRef}></canvas>
      </div>
    </div>
  );
}

export default MultiChartPage;
