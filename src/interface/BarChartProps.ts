import ChartProps from './ChartProps';

export default interface BarChartProps extends ChartProps {
    horizontal: boolean;
    names: string[];
    data: number[] | { [key: string]: number[] };
    categories: string[] | number[] | Date[];
    barBorderRadius?: number;
}
