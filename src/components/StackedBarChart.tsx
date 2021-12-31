import { ApexOptions } from 'apexcharts';
import React from 'react';
import StackedBarChartProps from '../interface/StackedBarChartProps';
import Chart from './Chart';

const StackedBarChart = ({
    figureNumber,
    data,
    names,
    horizontal,
    categories,
    width,
    height,
}: StackedBarChartProps) => {
    if (figureNumber !== names.length) throw new Error();
    if (Object.keys(data).length !== figureNumber) throw new Error();
    for (const value of Object.values(data)) {
        if (value.length !== categories.length) throw new Error();
    }
    const series = convertDataToSeries(data, names);
    const xaxis =
        typeof categories[0] === 'object'
            ? (categories as Date[]).map((el) => el.toLocaleDateString())
            : categories;
    const chartOption: ApexOptions = {
        series: series,
        chart: {
            width: width ?? 600,
            height: height ?? 350,
            stacked: true,
            type: 'bar',
        },
        plotOptions: {
            bar: {
                horizontal: horizontal,
            },
        },
        xaxis: {
            categories: xaxis,
        },
    };
    return <Chart options={chartOption} />;
};

export default StackedBarChart;

const convertDataToSeries = (
    data: { [key: string]: number[] },
    names: string[]
) => {
    const answer: ApexAxisChartSeries = [];
    names.forEach((el) => {
        answer.push({
            name: el,
            data: data[el],
        });
    });
    return answer;
};
