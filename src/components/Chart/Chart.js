import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
  return (
    <>
      <div className="chart">
        {props.dataPoints.map((dataPoint) => (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            label={dataPoint.label}
            MaxValue={null}
          />
        ))}
      </div>
    </>
  );
};

export default Chart;
