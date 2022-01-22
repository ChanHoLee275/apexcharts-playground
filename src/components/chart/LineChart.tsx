import React from 'react';
import { ApexOptions } from 'apexcharts';
import LineChartProps from '@interface/chart/LineChartProps';
import Chart from './Chart';

const convertDateToString = (el: Date) => el.toLocaleDateString();

const LineChart = ({
    figureNumber,
    names,
    data,
    categories,
    width,
    height,
}: LineChartProps) => {
    // check params validation
    if (
        figureNumber !== Object.keys(data).length ||
        figureNumber !== names.length
    )
        throw new Error(
            'Invalid Input: 데이터의 종류가 지표의 개수와 일치하지 않습니다.'
        );
    for (const values of Object.values(data)) {
        if (values.length !== categories.length)
            throw new Error(
                'Invalid Input: 데이터의 개수가 카테고리의 개수와 일치하지 않습니다.'
            );
    }

    const series = new Array(figureNumber).fill(0).map((_, idx) => {
        return {
            name: names[idx],
            data: data[names[idx]],
        };
    });

    const xaxis =
        typeof categories[0] === 'object'
            ? (categories as Date[]).map(convertDateToString)
            : categories;

    const chartOption: ApexOptions = {
        chart: {
            type: 'line',
            width: width ?? '1200',
            height: height ?? '800',
        },
        series: series,
        xaxis: {
            categories: xaxis,
        },
    };

    return <Chart options={chartOption} />;
};

export default LineChart;
