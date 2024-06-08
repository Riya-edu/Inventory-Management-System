import React from 'react';
import Card from './card/card';
import Latest from './latest/latest';
import Chart from './chart/chart';

const Dashboard = () => {
  return (
    <div className="flex flex-col p-4 md:p-6 lg:p-10">
      <div className="flex-auto flex flex-col">
        <div className="flex flex-col md:flex-row justify-evenly mb-4 md:mb-8 space-y-4 md:space-y-0">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="mb-4 md:mb-8">
          <Latest />
        </div>
        <Chart />
      </div>
    </div>
  );
}

export default Dashboard;
