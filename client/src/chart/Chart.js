import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { useQuery } from '@tanstack/react-query';
import fetchData from '../utils/fetchData';
// import { set } from 'mongoose';


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const formatYmd = date => date.slice(0, 10);
// formatYmd(new Date()); 

function filterfunc(data, param) {
  const newData = data.map(obj => {
    // const {Date, Close} = obj
    const newObj = [ formatYmd(obj['Date']),  obj[param]]
    return newObj
  })
  return newData
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const data = {
  labels: [],
  datasets: [
    {
      label: 'High',
      data: [],
      borderColor: 'rgb(255, 99, 132)',
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Low',
      data: [],
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const Chart = (props) =>{
  const stockData = useQuery(["stocks", props.searchId], fetchData)
  if (stockData.isError) {
    return <h2>API Data Error</h2>;
  }

  if (stockData.isLoading) {
    return (
      <div>
        <h2>...</h2>
      </div>
    );
  }

  let apiDdata = filterfunc(stockData.data, 'Low')
  data.datasets[1].data = apiDdata
  apiDdata = filterfunc(stockData.data, 'High')
  data.datasets[0].data = apiDdata
  data.labels = apiDdata.map(obj => obj[0])
  return (
    <>
      <h2 id='chart-heading'>{props.searchName}</h2>
      <div className="chart">
      <Line options={options} data={data} />
      </div>
    </>
    );
}

export default Chart