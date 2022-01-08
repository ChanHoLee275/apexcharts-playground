import React from 'react';
import ApexCharts, { ApexOptions } from 'apexcharts';

// Wrapper for Chart
const Chart = ({ options }: { options: ApexOptions }) => {
    const chartRef = React.useRef<HTMLDivElement>(null);
    React.useEffect(() => {
        const chart = new ApexCharts(chartRef.current, options);
        chart.render();
    }, []);
    return <div ref={chartRef}></div>;
};

export default Chart;
