import ChartProps from './ChartProps';

export default interface StackedBarChartProps extends ChartProps {
    data: { [key: string]: number[] };
    names: string[];
    horizontal: boolean;
    categories: string[] | number[] | Date[];
}
