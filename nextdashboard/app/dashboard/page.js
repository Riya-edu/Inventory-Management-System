import React from 'react'
import Card from './card/card'
import Latest from './latest/latest'
import Chart from './chart/chart'


const Dashboard = () => {
  return (
    <div className="flex p-10"> 
      <div className="flex-auto flex-col">
        <div className="flex justify-evenly mb-8"> 
          <Card />
          <Card />
          <Card />
        </div>
        <div className="mb-8">
        <Latest />
        </div>
        <Chart />
      </div>
      
    </div>
  )
}

export default Dashboard
