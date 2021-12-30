import { ApexOptions } from 'apexcharts';
import React from 'react';
import BarChartProps from '../interface/BarChartProps';
import Chart from './Chart';

const BarChart = ({
    horizontal,
    names,
    data,
    categories,
    figureNumber,
    barBorderRadius,
    width,
    height,
}: BarChartProps) => {
    isValidInput(data, categories, figureNumber, names);

    const series: ApexAxisChartSeries = convertDataToSeries(data, names);
    const xaxis =
        typeof categories[0] === 'object'
            ? categories.map((el) => el.toLocaleString())
            : categories;
    const chartOption: ApexOptions = {
        series: series,
        chart: {
            type: 'bar',
            height: height ?? 430,
            width: width ?? 600,
        },
        plotOptions: {
            bar: {
                borderRadius: barBorderRadius ?? 4,
                horizontal: horizontal,
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: xaxis,
        },
    };
    return <Chart options={chartOption} />;
};

export default BarChart;

const isValidInput = (
    data:
        | number[]
        | {
              [key: string]: number[];
          },
    categories: number[] | string[] | Date[],
    figureNumber: number,
    names: string[]
) => {
    if (names.length !== figureNumber) throw new Error('Invalid Input');
    if (
        Array.isArray(data) &&
        (data.length !== categories.length || figureNumber !== 1)
    )
        throw new Error('Invalid Input');
    else if (!Array.isArray(data)) {
        if (Object.keys(data).length !== figureNumber)
            throw new Error('Invalid Input');
        for (const value of Object.values(
            data as { [key: string]: number[] }
        )) {
            if (value.length !== categories.length)
                throw new Error('Invalid Input');
        }
    }
};

const convertDataToSeries = (
    data: number[] | { [key: string]: number[] },
    names: string[]
) => {
    if (Array.isArray(data)) {
        return [
            {
                data: data,
                name: names[0],
            },
        ] as ApexAxisChartSeries;
    } else {
        const answer: ApexAxisChartSeries = [];
        Object.values(data).forEach((el, idx) =>
            answer.push({ data: el, name: names[idx] })
        );
        return answer;
    }
};
