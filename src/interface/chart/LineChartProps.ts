import ChartProps from './ChartProps';

export default interface LineChartProps extends ChartProps {
    names: string[];
    data: { [key: string]: number[] };
    categories: string[] | number[] | Date[];
}
