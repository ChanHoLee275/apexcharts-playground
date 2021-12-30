import { ApexOptions } from 'apexcharts';
import React from 'react';
import RadarChartProps from '../interface/RadarChartProps';
import Chart from './Chart';

const RadarChart = ({
    name,
    data,
    categories,
    height,
    width,
}: RadarChartProps) => {
    if (data.length !== categories.length) throw new Error();
    const xaxis =
        typeof categories[0] === 'object'
            ? categories.map((el) => el.toLocaleString())
            : categories;
    const chartOptions: ApexOptions = {
        series: [{ name: name, data: data }],
        chart: {
            height: height ?? 500,
            width: width ?? 500,
            type: 'radar',
        },
        xaxis: {
            categories: xaxis,
        },
    };
    return <Chart options={chartOptions} />;
};

export default RadarChart;
