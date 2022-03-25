import React from 'react'
import ChartBar from './ChartBar';

import "./Chart.css";

const Chart = (props) => {
    //to get dataPoint value
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    //get all values of only one month, which is expense
    const totalMax = Math.max(...dataPointValues);


    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => (
                <ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMax}
                    label={dataPoint.label}                
                />
            ))}
        </div>
    )
}

export default Chart;