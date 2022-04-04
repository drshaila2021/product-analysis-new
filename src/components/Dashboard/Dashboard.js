import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

//dashboard component
const Dashboard = () => {
  const [chart, setChart] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setChart(data));
  }, []);
  return (
    <div className="dashboard">
      <div className="dashboard-chart">
        <h3>Line Chart : Sell over months</h3>
        <LineChart
          width={700}
          height={250}
          data={chart}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="sell" stroke="#000080" />
        </LineChart>
      </div>
      <div className="dashboard-chart">
        <h3>Bar Chart : Investment vs Revenue</h3>
        <BarChart width={700} height={250} data={chart}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="investment" fill="#000080" />
          <Bar dataKey="revenue" fill="#82ca9d" />
        </BarChart>
      </div>
    </div>
  );
};

export default Dashboard;
