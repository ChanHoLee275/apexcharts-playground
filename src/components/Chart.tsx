import React from 'react';
import ApexCharts, { ApexOptions } from 'apexcharts';

// Wrapper for Chart
const Chart = ({ options }: { options: ApexOptions }) => {
    const chartRef = React.useRef<HTMLDivElement>(null);
    const [chartObject, setChartObject] = React.useState<ApexCharts | null>(
        null
    );
    React.useEffect(() => {
        const chart = new ApexCharts(chartRef.current, options);
        setChartObject(chart);
        chart.render();
    }, []);

    if (chartObject !== null) chartObject.updateOptions(options);

    return <div ref={chartRef}></div>;
};

export default Chart;
