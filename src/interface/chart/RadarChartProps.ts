import ChartProps from './ChartProps';

export default interface RadarChartProps extends ChartProps {
    name: string;
    data: number[];
    categories: number[] | string[] | Date[];
}
