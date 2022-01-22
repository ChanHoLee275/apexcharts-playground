import { ApexOptions } from 'apexcharts';
import React from 'react';
import LineAndColumnChartProps from '@interface/chart/LineAndColumnChartProps';
import Chart from './Chart';

const LineAndColumnChart = ({
    figureNumber,
    data,
    categories,
    lineNames,
    columnNames,
    isStacked,
    width,
    height,
}: LineAndColumnChartProps) => {
    isValidInput(figureNumber, categories, data, lineNames, columnNames);
    const series = convertDataToSeries(data, lineNames, columnNames);
    const xaxis =
        typeof categories[0] === 'object'
            ? categories.map((el) => el.toLocaleString())
            : categories;
    const chartOption: ApexOptions = {
        series: series,
        chart: {
            type: 'line',
            height: height ?? 350,
            width: width ?? 800,
            stacked: isStacked,
        },
        xaxis: {
            categories: xaxis,
        },
    };
    return <Chart options={chartOption} />;
};

export default LineAndColumnChart;

const isValidInput = (
    figureNumber: number,
    categories: string[] | number[] | Date[],
    data: { [key: string]: number[] },
    lineNames: string[],
    columnNames: string[]
) => {
    if (figureNumber !== lineNames.length + columnNames.length)
        throw new Error('Invalid Input');
    if (figureNumber !== Object.keys(data).length)
        throw new Error('Invalid Input');
    if (
        [...Object.keys(data)].sort().toString() !==
        [...columnNames, ...lineNames].sort().toString()
    )
        throw new Error('Invalid Input');
    for (const value of Object.values(data)) {
        if (value.length !== categories.length)
            throw new Error('Invalid Input');
    }
};

const convertDataToSeries = (
    data: { [key: string]: number[] },
    lineNames: string[],
    columnNames: string[]
) => {
    const series: ApexAxisChartSeries = [];
    lineNames.forEach((el) => {
        series.push({ name: el, type: 'line', data: data[el] });
    });
    columnNames.forEach((el) => {
        series.push({ name: el, type: 'column', data: data[el] });
    });
    return series;
};
