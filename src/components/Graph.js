import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const Graph = () => {
  // Sample data for the line chart
  const graphData = [
    { x: 'Jan', y: 10 },
    { x: 'Feb', y: 15 },
    { x: 'Mar', y: 8 },
    { x: 'Apr', y: 12 },
    { x: 'May', y: 18 },
  ];



  return (
    <div className='bg-white p-4 rounded-lg flex items-center justify-center mt-5 shadow-2xl'>
     
      <LineChart width={500} height={300} data={graphData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="x" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="y" stroke={'#9ecde7'} strokeWidth={3} dot={{ fill: '#9ecde7' }} />
      </LineChart>
    </div>
  );
};

export default Graph;
