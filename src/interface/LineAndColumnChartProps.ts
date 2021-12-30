import ChartProps from './ChartProps';

export default interface LineAndColumnChartProps extends ChartProps {
    data: { [key: string]: number[] };
    lineCategories: string[] | number[] | Date[];
    columnCategories: string[] | number[] | Date[];
    barBorderRadius?: number;
}
