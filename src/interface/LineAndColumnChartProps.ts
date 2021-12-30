import ChartProps from './ChartProps';

export default interface LineAndColumnChartProps extends ChartProps {
    data: { [key: string]: number[] };
    lineNames: string[];
    columnNames: string[];
    categories: string[] | number[] | Date[];
    barBorderRadius?: number;
}
